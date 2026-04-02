import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import type { Role } from '@prisma/client';

// ============================================================
// FIREBASE ADMIN INITIALIZATION
// ============================================================

let adminAuth: Auth;

export function getFirebaseAdminAuth(): Auth {
  if (adminAuth) {
    return adminAuth;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Firebase Admin environment variables are not set');
  }

  const firebaseAdminConfig = {
    projectId,
    clientEmail,
    privateKey,
  };

  let app: App;
  if (!getApps().length) {
    app = initializeApp({
      credential: cert(firebaseAdminConfig),
    });
  } else {
    app = getApps()[0]!;
  }

  adminAuth = getAuth(app);
  return adminAuth;
}

// ============================================================
// TYPES
// ============================================================

export interface ServerUser {
  uid: string;
  email: string | undefined;
  emailVerified: boolean;
  dbUser: {
    id: string;
    role: Role;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
  } | null;
}

// ============================================================
// AUTH FUNCTIONS
// ============================================================

/**
 * Get the current user from the firebase-session cookie.
 * Verifies the session cookie and looks up the user in Prisma.
 * Returns null if anything fails.
 */
export async function getServerUser(): Promise<ServerUser | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('firebase-session')?.value;

    if (!sessionCookie) {
      return null;
    }

    // Verify the session cookie
    const decodedClaims = await getFirebaseAdminAuth().verifySessionCookie(sessionCookie, true);

    if (!decodedClaims.uid) {
      return null;
    }

    // Look up the user in Prisma by email
    const dbUser = await prisma.user.findUnique({
      where: { email: decodedClaims.email },
      select: {
        id: true,
        role: true,
        name: true,
        profilePhoto: true,
      },
    });

    // Split name into firstName and lastName
    let firstName = '';
    let lastName = '';
    if (dbUser?.name) {
      const nameParts = dbUser.name.split(' ');
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
    }

    return {
      uid: decodedClaims.uid,
      email: decodedClaims.email,
      emailVerified: decodedClaims.email_verified ?? false,
      dbUser: dbUser
        ? {
            id: dbUser.id,
            role: dbUser.role,
            firstName,
            lastName,
            avatarUrl: dbUser.profilePhoto,
          }
        : null,
    };
  } catch (error) {
    // Return null on any error (invalid cookie, verification failed, etc.)
    return null;
  }
}

/**
 * Require authentication. Throws 'UNAUTHORIZED' if no user is found.
 */
export async function requireAuth(): Promise<ServerUser> {
  const user = await getServerUser();

  if (!user) {
    throw new Error('UNAUTHORIZED');
  }

  return user;
}

/**
 * Require specific role(s). Throws 'FORBIDDEN' if user doesn't have the required role.
 */
export async function requireRole(...roles: Role[]): Promise<ServerUser> {
  const user = await requireAuth();

  if (!user.dbUser) {
    throw new Error('FORBIDDEN');
  }

  if (!roles.includes(user.dbUser.role)) {
    throw new Error('FORBIDDEN');
  }

  return user;
}

/**
 * Create a session cookie from an ID token.
 * The cookie expires in 5 days.
 */
export async function createSessionCookie(idToken: string): Promise<string> {
  // Set session expiration to 5 days
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days in milliseconds

  const sessionCookie = await getFirebaseAdminAuth().createSessionCookie(idToken, { expiresIn });

  return sessionCookie;
}
