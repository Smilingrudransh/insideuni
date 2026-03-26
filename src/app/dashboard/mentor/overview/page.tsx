import React from 'react';
import Link from 'next/link';
import { Wallet, CalendarDays, Star, TrendingUp, CheckCircle2, Clock } from 'lucide-react';

export default function MentorOverview() {
  const upcomingSessions = [
    { id: 's1', seekerName: 'Rahul D.', topic: 'SOP Review Strategy', type: 'Deep Dive', time: 'Today, 6:00 PM', duration: 30 },
    { id: 's2', seekerName: 'Shruti Patel', topic: 'MIT CS Program Details', type: 'Quick Chat', time: 'Tomorrow, 9:00 AM', duration: 15 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Welcome back, Priya!</h1>
        <p className="text-text-secondary mt-1">Here's what's happening with your mentorship profile.</p>
      </div>

      {/* Onboarding / Profile Completeness Alert */}
      <div className="bg-surface border border-accent/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-medium mb-1">Your profile is 80% complete</h3>
          <p className="text-sm text-text-secondary">Connect your bank account to start receiving payouts.</p>
        </div>
        <Link href="/dashboard/mentor/earnings" className="shrink-0 px-4 py-2 bg-background border border-border rounded-lg text-sm text-white font-medium hover:border-accent transition-colors">
          Connect Bank Account
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
              <Wallet className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-text-secondary">Earned this month</span>
          </div>
          <div className="text-2xl font-semibold text-white mb-1">₹12,450</div>
          <div className="text-xs text-success flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +15% from last month
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-text-secondary">Sessions this month</span>
          </div>
          <div className="text-2xl font-semibold text-white mb-1">24</div>
          <div className="text-xs text-text-secondary">3 upcoming this week</div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
              <Star className="w-5 h-5 text-warning" />
            </div>
            <span className="text-sm font-medium text-text-secondary">Average Rating</span>
          </div>
          <div className="text-2xl font-semibold text-white mb-1">4.9/5</div>
          <div className="text-xs text-text-secondary">Based on 32 reviews</div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-text-secondary">Profile Views</span>
          </div>
          <div className="text-2xl font-semibold text-white mb-1">1,204</div>
          <div className="text-xs text-success flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Trending in Top 10%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Sessions List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display font-medium text-white">Upcoming Sessions</h2>
            <Link href="/dashboard/mentor/sessions" className="text-sm text-accent hover:text-white transition-colors">View all</Link>
          </div>
          
          <div className="space-y-3">
            {upcomingSessions.map(session => (
              <div key={session.id} className="bg-surface border border-border rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium bg-accent-2/30 text-accent px-2 py-0.5 rounded">{session.type}</span>
                    <span className="text-sm font-medium text-white">{session.time}</span>
                  </div>
                  <h4 className="font-medium text-white text-lg">{session.seekerName}</h4>
                  <p className="text-text-secondary text-sm">Topic: {session.topic}</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-border rounded-lg text-sm text-text-primary hover:bg-background transition-colors">
                    Reschedule
                  </button>
                  <Link href={`/session/${session.id}`} className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-opacity">
                    Join Call
                  </Link>
                </div>
              </div>
            ))}
            
            {upcomingSessions.length === 0 && (
              <div className="bg-surface border border-border rounded-2xl p-8 text-center">
                <CalendarDays className="w-10 h-10 text-text-secondary mx-auto mb-3" />
                <h3 className="text-white font-medium mb-1">No upcoming sessions</h3>
                <p className="text-sm text-text-secondary mb-4">You have a clear schedule for now.</p>
                <Link href="/dashboard/mentor/availability" className="text-accent hover:underline text-sm font-medium">
                  Update Availability
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-4">
          <h2 className="text-lg font-display font-medium text-white">Quick Actions</h2>
          <div className="bg-surface border border-border rounded-2xl p-1">
            <Link href="/dashboard/mentor/profile" className="flex items-center gap-3 p-4 rounded-xl hover:bg-background transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center border border-border group-hover:border-text-secondary">
                <UserCircle className="w-4 h-4 text-text-secondary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white group-hover:text-accent">Edit Profile</div>
                <div className="text-xs text-text-secondary">Update bio and expertise</div>
              </div>
            </Link>
            <Link href="/dashboard/mentor/availability" className="flex items-center gap-3 p-4 rounded-xl hover:bg-background transition-colors group border-t border-border">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center border border-border group-hover:border-text-secondary">
                <CalendarDays className="w-4 h-4 text-text-secondary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white group-hover:text-accent">Manage Availability</div>
                <div className="text-xs text-text-secondary">Set your weekly slots</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
