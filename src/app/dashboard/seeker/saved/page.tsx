"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Bookmark, BookmarkCheck } from 'lucide-react';

const MENTORS = [
  { id: 'm1', name: 'Arjun Kumar', initials: 'AK', color: 'av-blue', university: 'MIT', course: 'CS PhD Y2', flag: '🇺🇸', tags: ['Admissions', 'Research', 'SOP'], price: 399, rating: 4.9, sessions: 127, verified: true },
  { id: 'm2', name: 'Priya Sharma', initials: 'PS', color: 'av-amber', university: 'University of Oxford', course: 'MBA', flag: '🇬🇧', tags: ['Student Life', 'Visa', 'Scholarships'], price: 299, rating: 4.8, sessions: 84, verified: true },
  { id: 'm6', name: 'Sneha Jain', initials: 'SJ', color: 'av-pink', university: 'NUS Singapore', course: 'Data Science', flag: '🇸🇬', tags: ['CS', 'Business', 'Student Life'], price: 199, rating: 4.9, sessions: 41, verified: true },
];

export default function SavedMentorsPage() {
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState(new Set(MENTORS.map(m => m.id)));

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const newSaved = new Set(saved);
    if (newSaved.has(id)) newSaved.delete(id);
    else newSaved.add(id);
    setSaved(newSaved);
  };

  const filtered = MENTORS.filter(m => {
    const q = search.toLowerCase();
    return saved.has(m.id) && (!q || m.name.toLowerCase().includes(q) || m.university.toLowerCase().includes(q));
  });

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: 4 }}>Saved Mentors</h1>
          <p style={{ color: 'var(--text2)', fontSize: 13.5 }}>Keep track of mentors you want to book later.</p>
        </div>
        <Link href="/explore" className="btn-outline" style={{ padding: '9px 20px', fontSize: 13.5, textDecoration: 'none' }}>
          Explore More
        </Link>
      </div>

      <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
        
        {/* Controls */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
            {filtered.length} Saved {filtered.length === 1 ? 'Mentor' : 'Mentors'}
          </div>
          <div style={{ position: 'relative', width: '100%', maxWidth: 280 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input 
              type="text" 
              placeholder="Search saved..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 100, padding: '9px 16px 9px 38px', fontSize: 13, color: 'var(--text)', outline: 'none' }} 
            />
          </div>
        </div>

        {/* List */}
        <div style={{ padding: 24 }}>
          {filtered.length === 0 ? (
            <div style={{ padding: 60, textAlign: 'center' }}>
              <Bookmark size={48} color="var(--border2)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>No saved mentors found</h3>
              <p style={{ color: 'var(--text2)', fontSize: 13, marginBottom: 16 }}>
                {search ? "We couldn't find any saved mentors matching your search." : "You haven't saved any mentors yet."}
              </p>
              {!search && <Link href="/explore" style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Explore mentors →</Link>}
            </div>
          ) : (
            <div className="tgrid" style={{ marginTop: 0 }}>
              {filtered.map(m => (
                <div key={m.id} className="tcard" style={{ cursor: 'pointer', position: 'relative' }}>
                  <button 
                    onClick={(e) => toggleSave(m.id, e)}
                    style={{ position: 'absolute', top: 16, right: 16, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--accent)', zIndex: 10 }}
                  >
                    <BookmarkCheck size={16} fill="var(--li-accent)" />
                  </button>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16, paddingRight: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div className={`av ${m.color}`} style={{ width: 48, height: 48, fontSize: 15 }}>{m.initials}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 5 }}>
                          {m.name}
                          {m.verified && <div className="vbadge">✓</div>}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{m.flag} {m.university}</div>
                        <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{m.course}</div>
                      </div>
                    </div>
                  </div>
                  <div className="ctag-row">
                    {m.tags.map(t => <span key={t} className="chip chip-blue">{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--muted)' }}>
                      <span style={{ color: '#f59e0b' }}>★</span>{m.rating} · {m.sessions}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="cprice">{m.price === 0 ? 'Free' : `₹${m.price}`}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
