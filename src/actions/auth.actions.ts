'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createId } from '@paralleldrive/cuid2';
import { requireAuth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { Role } from '@prisma/client';

// ============================================================
// STUDENT REGISTRATION
// ============================================================

export interface RegisterStudentInput {
  firstName: string;
  lastName: string;
  targetUniversity?: string;
  targetCountry?: string;
  skills: string[];
  interests: string[];
  bio?: string;
}

export async function registerStudent(input: RegisterStudentInput): Promise<void> {
  const user = await requireAuth();

  if (!user.dbUser) {
    throw new Error('User not found in database');
  }

  // Check if seeker profile already exists
  const existingProfile = await prisma.seekerProfile.findUnique({
    where: { userId: user.dbUser.id },
  });

  if (existingProfile) {
    throw new Error('Student profile already exists');
  }

  await prisma.$transaction(async (tx) => {
    // Update user role to SEEKER
    await tx.user.update({
      where: { id: user.dbUser!.id },
      data: {
        role: Role.SEEKER,
        name: `${input.firstName} ${input.lastName}`.trim(),
      },
    });

    // Create seeker profile
    await tx.seekerProfile.create({
      data: {
        id: createId(),
        userId: user.dbUser!.id,
        targetUniversity: input.targetUniversity || null,
        targetCountry: input.targetCountry || null,
        savedMentors: [],
      },
    });
  });

  revalidatePath('/dashboard/seeker');
  redirect('/dashboard/seeker');
}

// ============================================================
// MENTOR REGISTRATION
// ============================================================

export interface RegisterMentorInput {
  firstName: string;
  lastName: string;
  university: string;
  course: string;
  yearOfStudy: number;
  expertise: string[];
  languages: string[];
  bio?: string;
  uniEmail?: string;
}

export async function registerMentor(input: RegisterMentorInput): Promise<void> {
  const user = await requireAuth();

  if (!user.dbUser) {
    throw new Error('User not found in database');
  }

  // Check if mentor profile already exists
  const existingProfile = await prisma.mentorProfile.findUnique({
    where: { userId: user.dbUser.id },
  });

  if (existingProfile) {
    throw new Error('Mentor profile already exists');
  }

  await prisma.$transaction(async (tx) => {
    // Update user role to MENTOR
    await tx.user.update({
      where: { id: user.dbUser!.id },
      data: {
        role: Role.MENTOR,
        name: `${input.firstName} ${input.lastName}`.trim(),
      },
    });

    // Create mentor profile
    await tx.mentorProfile.create({
      data: {
        id: createId(),
        userId: user.dbUser!.id,
        university: input.university,
        universitySlug: input.university.toLowerCase().replace(/\s+/g, '-'),
        course: input.course,
        yearOfStudy: input.yearOfStudy,
        bio: input.bio || null,
        uniEmail: input.uniEmail || null,
        expertiseTags: input.expertise || [],
        languages: input.languages || [],
        isVerified: false,
        rating: 0,
        totalSessions: 0,
        earnings: 0,
      },
    });
  });

  revalidatePath('/dashboard/mentor');
  redirect('/dashboard/mentor');
}

// ============================================================
// GET UNIVERSITIES (returns unique universities from mentor profiles)
// ============================================================

export interface UniversityOption {
  name: string;
  slug: string;
  count: number;
}

export async function getUniversities(): Promise<UniversityOption[]> {
  const mentors = await prisma.mentorProfile.findMany({
    where: { isVerified: true },
    select: {
      university: true,
      universitySlug: true,
    },
  });

  // Aggregate unique universities
  const universityMap = new Map<string, { name: string; count: number }>();

  for (const mentor of mentors) {
    const existing = universityMap.get(mentor.universitySlug);
    if (existing) {
      existing.count++;
    } else {
      universityMap.set(mentor.universitySlug, {
        name: mentor.university,
        count: 1,
      });
    }
  }

  return Array.from(universityMap.entries())
    .map(([slug, data]) => ({
      name: data.name,
      slug,
      count: data.count,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
