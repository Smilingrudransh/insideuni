import { NextRequest, NextResponse } from "next/server";
import { createId } from "@paralleldrive/cuid2";
import { getFirebaseAdminAuth } from "@/lib/auth";
import prisma from "@/lib/prisma";

const SESSION_COOKIE_NAME = "firebase-session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 5; // 5 days in seconds

/**
 * POST /api/auth/[...firebaseAuth]
 * Verify ID token, upsert user, create session cookie
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { idToken } = body;

    if (!idToken || typeof idToken !== "string") {
      return NextResponse.json(
        { success: false, error: "ID token is required" },
        { status: 400 }
      );
    }

    // 1. Verify the ID token with Firebase Admin
    const decodedToken = await getFirebaseAdminAuth().verifyIdToken(idToken);
    const { uid, email, name: firebaseName, picture } = decodedToken;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    // 2. Upsert the user in Prisma (match on email)
    const dbUser = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        id: createId(),
        email,
        name: firebaseName || email.split("@")[0],
        password: null,
      },
    });

    // 3. Create a session cookie via createSessionCookie()
    const expiresIn = SESSION_MAX_AGE * 1000; // convert to milliseconds
    const sessionCookie = await getFirebaseAdminAuth().createSessionCookie(idToken, {
      expiresIn,
    });

    // 4. Set it as httpOnly cookie
    const isSecure = process.env.NODE_ENV === "production";
    const cookieValue = `${SESSION_COOKIE_NAME}=${sessionCookie}; HttpOnly; Max-Age=${SESSION_MAX_AGE}; Path=/; SameSite=Lax${isSecure ? "; Secure" : ""}`;

    // Split name into firstName and lastName for response
    let firstName = "";
    let lastName = "";
    if (dbUser.name) {
      const nameParts = dbUser.name.split(" ");
      firstName = nameParts[0] || "";
      lastName = nameParts.slice(1).join(" ") || "";
    }

    // 5. Return success with user data
    const response = NextResponse.json({
      success: true,
      user: {
        id: dbUser.id,
        role: dbUser.role,
        firstName: dbUser.name.split(' ')[0] || '',
        lastName: dbUser.name.split(' ').slice(1).join(' ') || '',
      },
    });

    response.headers.set("Set-Cookie", cookieValue);

    return response;
  } catch (error) {
    console.error("Auth POST error:", error);
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 401 }
    );
  }
}

/**
 * DELETE /api/auth/[...firebaseAuth]
 * Clear the firebase-session cookie
 */
export async function DELETE() {
  try {
    const isSecure = process.env.NODE_ENV === "production";
    const cookieValue = `${SESSION_COOKIE_NAME}=; HttpOnly; Max-Age=0; Path=/; SameSite=Lax${isSecure ? "; Secure" : ""}`;

    const response = NextResponse.json({ success: true });
    response.headers.set("Set-Cookie", cookieValue);

    return response;
  } catch (error) {
    console.error("Auth DELETE error:", error);
    return NextResponse.json(
      { success: false, error: "Logout failed" },
      { status: 500 }
    );
  }
}
