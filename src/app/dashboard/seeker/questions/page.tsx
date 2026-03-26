"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MessageSquare, ThumbsUp, ChevronRight } from 'lucide-react';

const MY_QUESTIONS = [
  { 
    id: 'q1', 
    title: 'How hard is it to find housing near MIT as an international student?', 
    content: 'I got admitted to the MS CS program but I am hearing horrible things about Cambridge rent prices. Does MIT offer subsidized grad housing? Are there specific neighborhoods I should look at that are safe and affordable?',
    date: '2 days ago', 
    category: 'Housing', 
    answers: 3, 
    upvotes: 12,
    hasAcceptedAnswer: true
  },
  { 
    id: 'q2', 
    title: 'Does the prestige of my undergrad college matter for US universities?', 
    content: 'I am from a tier 3 college in India but have a 9.2 CGPA and 2 strong research papers. Do top 20 CS programs automatically filter out non-IIT/NIT students or do I stand a fair chance?',
    date: '1 week ago', 
    category: 'Admissions', 
    answers: 5, 
    upvotes: 24,
    hasAcceptedAnswer: false
  },
];

export default function SeekerQuestionsPage() {
  const [search, setSearch] = useState('');

  const filtered = MY_QUESTIONS.filter(q => {
    const s = search.toLowerCase();
    return !s || q.title.toLowerCase().includes(s) || q.content.toLowerCase().includes(s) || q.category.toLowerCase().includes(s);
  });

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: 4 }}>My Questions</h1>
          <p style={{ color: 'var(--text2)', fontSize: 13.5 }}>Manage your posts in the Community Forum.</p>
        </div>
        <Link href="/forum/ask" className="btn-primary" style={{ padding: '10px 20px', fontSize: 13.5, textDecoration: 'none' }}>
          Ask a Question
        </Link>
      </div>

      <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
        
        {/* Controls */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', background: 'var(--bg)', borderRadius: 100, padding: 4, border: '1px solid var(--border)' }}>
            <button style={{ padding: '8px 20px', fontSize: 13, fontWeight: 600, border: 'none', borderRadius: 100, cursor: 'pointer', background: 'var(--white)', color: 'var(--text)', boxShadow: '0 1px 4px rgba(0,0,0,.05)' }}>
              My Questions
            </button>
            <button style={{ padding: '8px 20px', fontSize: 13, fontWeight: 600, border: 'none', borderRadius: 100, cursor: 'pointer', background: 'transparent', color: 'var(--muted)' }}>
              Drafts
            </button>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: 280 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input 
              type="text" 
              placeholder="Search your posts..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 100, padding: '9px 16px 9px 38px', fontSize: 13, color: 'var(--text)', outline: 'none' }} 
            />
          </div>
        </div>

        {/* List */}
        <div>
          {filtered.length === 0 ? (
            <div style={{ padding: 60, textAlign: 'center' }}>
              <MessageSquare size={48} color="var(--border2)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>No questions found</h3>
              <p style={{ color: 'var(--text2)', fontSize: 13, marginBottom: 16 }}>
                {search ? "No posts match your search query." : "You haven't asked any questions yet."}
              </p>
              {!search && <Link href="/forum" style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Browse the forum →</Link>}
            </div>
          ) : (
            <div>
              {filtered.map((q, i) => (
                <div key={q.id} className="hstep" style={{ padding: '24px', borderBottom: i !== filtered.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', gap: 20, transition: 'background .2s', cursor: 'pointer' }}>
                  
                  {/* Stats column */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, minWidth: 64, flexShrink: 0 }}>
                    <div style={{ textAlign: 'center', color: 'var(--text2)' }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{q.upvotes}</div>
                      <div style={{ fontSize: 11 }}>votes</div>
                    </div>
                    <div style={{ textAlign: 'center', color: q.hasAcceptedAnswer ? 'var(--sage)' : 'var(--text2)', background: q.hasAcceptedAnswer ? 'var(--li-sage)' : 'transparent', border: q.hasAcceptedAnswer ? '1px solid rgba(61,139,110,.2)' : '1px solid transparent', borderRadius: 8, padding: '4px 8px' }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{q.answers}</div>
                      <div style={{ fontSize: 11 }}>answers</div>
                    </div>
                  </div>

                  {/* Content column */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
                      <span className="chip chip-blue">{q.category}</span>
                      <span style={{ fontSize: 11, color: 'var(--muted)' }}>Asked {q.date}</span>
                    </div>
                    
                    <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: 'var(--accent)', marginBottom: 8, lineHeight: 1.3 }}>
                      {q.title}
                    </h3>
                    
                    <p style={{ fontSize: 13.5, color: 'var(--text2)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {q.content}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--border2)' }}>
                    <ChevronRight size={24} />
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
