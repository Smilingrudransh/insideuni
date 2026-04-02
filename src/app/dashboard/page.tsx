import { redirect } from 'next/navigation';
import { getServerUser } from '@/lib/auth';

export default async function DashboardPage() {
  const user = await getServerUser();

  if (!user?.dbUser) {
    redirect('/login');
  }

  // Redirect based on role
  if (user.dbUser.role === 'MENTOR') {
    redirect('/dashboard/mentor/overview');
  } else {
    // STUDENT, ADMIN, or any other role goes to seeker dashboard
    redirect('/dashboard/seeker/overview');
  }
}
