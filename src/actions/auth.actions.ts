'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { requireAuth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { Role, EntityType } from '@prisma/client';

// ============================================================
// STUDENT REGISTRATION
// ============================================================

export interface RegisterStudentInput {
  firstName: string;
  lastName: string;
  universityId?: string;
  enrollmentYear?: number;
  skills: string[];
  interests: string[];
  bio?: string;
  timezone?: string;
}

export async function registerStudent(input: RegisterStudentInput): Promise<void> {
  const user = await requireAuth();

  if (!user.dbUser) {
    throw new Error('User not found in database');
  }

  const existingProfile = await prisma.studentProfile.findUnique({
    where: { userId: user.dbUser.id },
  });

  if (existingProfile) {
    throw new Error('Student profile already exists');
  }

  await prisma.$transaction(async (tx) => {
    // Update user role to STUDENT
    await tx.user.update({
      where: { id: user.dbUser!.id },
      data: {
        role: Role.STUDENT,
        name: `${input.firstName} ${input.lastName}`.trim(),
      },
    });

    // Create student profile
    await tx.studentProfile.create({
      data: {
        userId: user.dbUser!.id,
        universityId: input.universityId || null,
        graduationYear: input.enrollmentYear || null,
        skills: input.skills || [],
        interests: input.interests || [],
        bio: input.bio || null,
      },
    });

    // Log activity
    await tx.activityLog.create({
      data: {
        actorId: user.dbUser!.id,
        action: 'STUDENT_REGISTERED',
        entityType: EntityType.STUDENT_PROFILE,
        entityId: user.dbUser!.id,
        metadata: {
          universityId: input.universityId,
          enrollmentYear: input.enrollmentYear,
        },
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
  currentTitle: string;
  company: string;
  yearsOfExperience: number;
  expertise: string[];
  industries: string[];
  bio?: string;
  hourlyRate?: number;
  maxStudents?: number;
  linkedinUrl?: string;
}

export async function registerMentor(input: RegisterMentorInput): Promise<void> {
  const user = await requireAuth();

  if (!user.dbUser) {
    throw new Error('User not found in database');
  }

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
        userId: user.dbUser!.id,
        headline: `${input.currentTitle} at ${input.company}`,
        bio: input.bio || null,
        expertise: input.expertise || [],
        industries: input.industries || [],
        hourlyRate: input.hourlyRate || null,
        maxStudents: input.maxStudents || 5,
        linkedinUrl: input.linkedinUrl || null,
        isVerified: false,
        isAccepting: true,
      },
    });

    // Log activity
    await tx.activityLog.create({
      data: {
        actorId: user.dbUser!.id,
        action: 'MENTOR_REGISTERED',
        entityType: EntityType.MENTOR_PROFILE,
        entityId: user.dbUser!.id,
        metadata: {
          currentTitle: input.currentTitle,
          company: input.company,
          yearsOfExperience: input.yearsOfExperience,
        },
      },
    });
  });

  revalidatePath('/dashboard/mentor');
  redirect('/dashboard/mentor');
}

// ============================================================
// GET UNIVERSITIES
// ============================================================

export interface UniversityOption {
  id: string;
  name: string;
  country: string;
  city: string;
}

export async function getUniversities(): Promise<UniversityOption[]> {
  const universities = await prisma.university.findMany({
    where: { isActive: true },
    select: {
      id: true,
      name: true,
      country: true,
      city: true,
    },
    orderBy: { name: 'asc' },
  });

  return universities;
}
