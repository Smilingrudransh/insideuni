"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Video, CalendarDays, Clock, MoreVertical, Search, Filter } from 'lucide-react';

export default function SessionsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingSessions = [
    { id: 's1', seekerName: 'Rahul D.', topic: 'SOP Review Strategy', type: 'Deep Dive', date: 'Oct 24, 2026', time: '6:00 PM - 6:30 PM', status: 'confirmed' },
    { id: 's2', seekerName: 'Shruti Patel', topic: 'MIT CS Program Details', type: 'Quick Chat', date: 'Oct 25, 2026', time: '9:00 AM - 9:15 AM', status: 'confirmed' },
  ];

  const pastSessions = [
    { id: 's3', seekerName: 'Aman Gupta', topic: 'GRE vs GMAT', type: 'Quick Chat', date: 'Oct 20, 2026', time: '5:00 PM - 5:15 PM', status: 'completed' },
    { id: 's4', seekerName: 'Neha Verma', topic: 'F1 Visa Interview Prep', type: 'Full Guidance', date: 'Oct 18, 2026', time: '7:00 PM - 8:00 PM', status: 'completed' },
  ];

  const sessions = tab === 'upcoming' ? upcomingSessions : pastSessions;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Sessions</h1>
          <p className="text-text-secondary mt-1">Manage your upcoming and past bookings.</p>
        </div>
        <Link href="/dashboard/mentor/availability" className="flex items-center justify-center gap-2 px-6 py-2.5 bg-background border border-border text-white rounded-lg font-medium hover:bg-surface transition-all shrink-0">
          <CalendarDays className="w-4 h-4" />
          Update Schedule
        </Link>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        {/* Controls */}
        <div className="p-4 sm:p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex bg-background rounded-lg p-1 border border-border w-fit shrink-0">
            <button
              onClick={() => setTab('upcoming')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'upcoming' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Upcoming ({upcomingSessions.length})
            </button>
            <button
              onClick={() => setTab('past')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'past' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Past
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input type="text" placeholder="Search sessions..." className="bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent w-full md:w-64" />
            </div>
            <button className="p-2 border border-border rounded-lg bg-background text-text-secondary hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-border">
          {sessions.map(session => (
            <div key={session.id} className="p-4 sm:p-6 hover:bg-background/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-2 flex items-center justify-center text-white font-display font-medium shrink-0">
                  {session.seekerName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-white text-lg">{session.seekerName}</h3>
                    <span className="text-xs font-medium bg-surface border border-border text-text-secondary px-2 py-0.5 rounded">{session.type}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">Topic: {session.topic}</p>
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {session.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {session.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border pt-4 md:pt-0 md:border-0 pl-16 md:pl-0">
                {tab === 'upcoming' ? (
                  <>
                    <button className="px-4 py-2 text-sm font-medium text-text-primary hover:bg-background border border-border rounded-lg transition-colors">
                      Reschedule
                    </button>
                    <Link href={`/session/${session.id}`} className="flex items-center gap-2 px-5 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-opacity">
                      <Video className="w-4 h-4" /> Join Call
                    </Link>
                    <button className="p-2 text-text-secondary hover:text-white transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-sm text-success bg-success/10 px-3 py-1 rounded-full border border-success/20">Completed</span>
                    <button className="px-4 py-2 text-sm font-medium text-text-primary hover:bg-background border border-border rounded-lg transition-colors ml-2">
                      View Notes
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}

          {sessions.length === 0 && (
            <div className="p-12 text-center">
              <CalendarDays className="w-12 h-12 text-text-secondary mx-auto mb-4" />
              <h3 className="text-white font-medium text-lg mb-1">No {tab} sessions</h3>
              <p className="text-text-secondary">You don't have any {tab} sessions to show right now.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
