"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Video, CalendarDays, Clock, Search, Star, MessageCircle } from 'lucide-react';

export default function SeekerSessionsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingSessions = [
    { id: 's1', mentorName: 'Priya Sharma', uni: 'MIT', topic: 'SOP Review Strategy', type: 'Deep Dive', date: 'Oct 24, 2026', time: '6:00 PM - 6:30 PM', status: 'confirmed', initials: 'PS', color: 'av-amber' },
  ];

  const pastSessions = [
    { id: 's3', mentorName: 'Aman Gupta', uni: 'Oxford', topic: 'GRE vs GMAT', type: 'Quick Chat', date: 'Oct 20, 2026', time: '5:00 PM - 5:15 PM', status: 'completed', hasReviewed: true, initials: 'AG', color: 'av-blue' },
    { id: 's4', mentorName: 'Neha Verma', uni: 'Stanford', topic: 'F1 Visa Interview Prep', type: 'Full Guidance', date: 'Oct 18, 2026', time: '7:00 PM - 8:00 PM', status: 'completed', hasReviewed: false, initials: 'NV', color: 'av-green' },
  ];

  const sessions = tab === 'upcoming' ? upcomingSessions : pastSessions;

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: 4 }}>My Sessions</h1>
          <p style={{ color: 'var(--text2)', fontSize: 13.5 }}>Manage your mentorship bookings and join video calls.</p>
        </div>
        <Link href="/explore" className="btn-primary" style={{ padding: '10px 20px', fontSize: 13.5, textDecoration: 'none' }}>
          Book New Session
        </Link>
      </div>

      <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
        
        {/* Controls */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', background: 'var(--bg)', borderRadius: 100, padding: 4, border: '1px solid var(--border)' }}>
            <button
              onClick={() => setTab('upcoming')}
              style={{
                padding: '8px 20px', fontSize: 13, fontWeight: 600, border: 'none', borderRadius: 100, cursor: 'pointer', transition: 'all .2s',
                background: tab === 'upcoming' ? 'var(--white)' : 'transparent',
                color: tab === 'upcoming' ? 'var(--text)' : 'var(--muted)',
                boxShadow: tab === 'upcoming' ? '0 1px 4px rgba(0,0,0,.05)' : 'none'
              }}
            >
              Upcoming ({upcomingSessions.length})
            </button>
            <button
              onClick={() => setTab('past')}
              style={{
                padding: '8px 20px', fontSize: 13, fontWeight: 600, border: 'none', borderRadius: 100, cursor: 'pointer', transition: 'all .2s',
                background: tab === 'past' ? 'var(--white)' : 'transparent',
                color: tab === 'past' ? 'var(--text)' : 'var(--muted)',
                boxShadow: tab === 'past' ? '0 1px 4px rgba(0,0,0,.05)' : 'none'
              }}
            >
              Completed
            </button>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: 280 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input type="text" placeholder="Search sessions..." style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 100, padding: '9px 16px 9px 38px', fontSize: 13, color: 'var(--text)', outline: 'none' }} />
          </div>
        </div>

        {/* List */}
        <div>
          {sessions.map((session, i) => (
            <div key={session.id} style={{ padding: '24px', borderBottom: i !== sessions.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div className={`av ${session.color}`} style={{ width: 54, height: 54, fontSize: 16, border: '2px solid var(--white)', boxShadow: '0 2px 8px rgba(0,0,0,.06)' }}>
                  {session.initials}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>{session.mentorName}</h3>
                    <span style={{ fontSize: 11, fontWeight: 600, background: 'var(--li-accent)', color: 'var(--accent)', padding: '3px 8px', borderRadius: 100, border: '1px solid rgba(32,71,212,.12)' }}>{session.type}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 8 }}>{session.uni} • {session.topic}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, color: 'var(--muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CalendarDays size={14} /> {session.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={14} /> {session.time}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 70 }}>
                {tab === 'upcoming' ? (
                  <>
                    <button className="btn-outline" style={{ padding: '9px 16px', fontSize: 12.5 }}>Reschedule</button>
                    <Link href={`/dashboard/seeker/messages`} style={{ textDecoration: 'none', color: 'var(--text)', border: '1.5px solid var(--border2)', borderRadius: 100, padding: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Message Mentor" className="btn-outline">
                      <MessageCircle size={16} />
                    </Link>
                    <Link href={`/session/${session.id}`} className="btn-primary" style={{ padding: '9px 20px', fontSize: 12.5, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Video size={15} /> Join Call
                    </Link>
                  </>
                ) : (
                  <>
                    <button className="btn-outline" style={{ padding: '9px 16px', fontSize: 12.5 }}>Book Again</button>
                    {!('hasReviewed' in session === false || session.hasReviewed) ? (
                      <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--gold)', color: 'white', border: 'none', borderRadius: 100, padding: '9px 16px', fontSize: 12.5, fontWeight: 600, cursor: 'pointer' }}>
                        <Star size={14} /> Leave Review
                      </button>
                    ) : (
                      <span style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Star size={14} fill="#d97706" color="#d97706" /> Reviewed</span>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          {sessions.length === 0 && (
            <div style={{ padding: 60, textAlign: 'center' }}>
              <CalendarDays size={48} color="var(--border2)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>No {tab} sessions</h3>
              <p style={{ color: 'var(--text2)', fontSize: 13, marginBottom: 16 }}>You haven't booked any sessions yet.</p>
              <Link href="/explore" style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Find a mentor →</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
