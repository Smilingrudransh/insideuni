import React from 'react';
import Link from 'next/link';
import { CalendarDays, Search, Compass, CheckCircle2, ChevronRight, Video } from 'lucide-react';

export default function SeekerOverview() {
  const upcomingSessions = [
    { id: 's1', mentorName: 'Priya Sharma', uni: 'MIT', topic: 'SOP Review Strategy', type: 'Deep Dive', time: 'Today, 6:00 PM', duration: 30, initials: 'PS', color: 'av-amber' },
  ];

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: 4 }}>Hello, Rahul!</h1>
        <p style={{ color: 'var(--text2)', fontSize: 13.5 }}>Ready to take the next step towards your dream university?</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: 32 }}>
        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          
          {/* Hero Action */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, boxShadow: '0 4px 22px rgba(0,0,0,.05)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: 200, height: 200, background: 'rgba(32,71,212,.03)', borderRadius: '50%' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600, color: 'var(--text)', marginBottom: 8, letterSpacing: '-0.4px' }}>Find Your Perfect Mentor</h2>
              <p style={{ color: 'var(--text2)', fontSize: 13.5, lineHeight: 1.6, maxWidth: 360, marginBottom: 24 }}>Connect with verified students from Top 50 global universities who've been in your exact shoes.</p>
              <Link href="/explore" className="btn-primary" style={{ padding: '10px 20px', fontSize: 13.5, textDecoration: 'none' }}>
                <Search size={16} /> Start Browsing
              </Link>
            </div>
            <div style={{ width: 100, height: 100, background: 'var(--li-accent)', border: '1px solid rgba(32,71,212,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }} className="hidden sm:flex">
              <Compass size={40} color="var(--accent)" />
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <CalendarDays size={18} color="var(--accent)" /> Upcoming Sessions
              </h2>
              <Link href="/dashboard/seeker/sessions" style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>View all</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {upcomingSessions.map(session => (
                <div key={session.id} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div className={`av ${session.color}`} style={{ width: 48, height: 48, fontSize: 15, flexShrink: 0 }}>
                      {session.initials}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 11, fontWeight: 600, background: 'var(--li-accent)', color: 'var(--accent)', padding: '2px 8px', borderRadius: 100, border: '1px solid rgba(32,71,212,.12)' }}>{session.type}</span>
                        <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>{session.time}</span>
                      </div>
                      <h4 style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)', marginBottom: 2 }}>{session.mentorName} <span style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 400 }}>• {session.uni}</span></h4>
                      <p style={{ fontSize: 12.5, color: 'var(--text2)' }}>Topic: {session.topic}</p>
                    </div>
                  </div>
                  <div>
                    <Link href={`/session/${session.id}`} className="btn-primary" style={{ padding: '9px 18px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
                      <Video size={16} /> Join Call
                    </Link>
                  </div>
                </div>
              ))}
              
              {upcomingSessions.length === 0 && (
                <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 32, textAlign: 'center', color: 'var(--text2)', fontSize: 13.5 }}>
                  No upcoming sessions. Book a mentor to get started!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Progress */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 16 }}>Application Progress</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'University Shortlisting', done: true },
                { label: 'Standardized Tests (GRE/TOEFL)', done: true },
                { label: 'SOP & Essays', done: false },
                { label: 'Letters of Recommendation', done: false },
                { label: 'Application Submission', done: false },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: step.done ? 'var(--sage)' : 'var(--bg)', color: step.done ? 'white' : 'transparent', border: step.done ? 'none' : '1px solid var(--border2)' }}>
                    {step.done && <CheckCircle2 size={14} />}
                  </div>
                  <span style={{ fontSize: 13, color: step.done ? 'var(--muted)' : 'var(--text)', textDecoration: step.done ? 'line-through' : 'none' }}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Saved */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 16 }}>Saved Mentors</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[ 
                { name: 'Daniel Chen', uni: 'Stanford University', color: 'av-blue', init: 'DC' },
                { name: 'Sarah Wilson', uni: 'Cambridge University', color: 'av-pink', init: 'SW' }
              ].map((mentor, i) => (
                <Link key={i} href={`/mentor/m${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className={`av ${mentor.color}`} style={{ width: 36, height: 36, fontSize: 12 }}>
                      {mentor.init}
                    </div>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text)' }}>{mentor.name}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{mentor.uni}</div>
                    </div>
                  </div>
                  <ChevronRight size={16} color="var(--border2)" />
                </Link>
              ))}
              <Link href="/dashboard/seeker/saved" style={{ display: 'block', textAlign: 'center', fontSize: 12.5, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                View all saved mentors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
