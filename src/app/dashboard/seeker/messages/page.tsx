"use client";

import React from 'react';
import { Search, Send, File, Image as ImageIcon } from 'lucide-react';

export default function SeekerMessagesPage() {
  const contacts = [
    { id: 1, name: 'Priya Sharma', lastMsg: 'I\'ll review it beforehand so we can jump straight into the feedback.', time: '10:35 AM', unread: 1, uni: 'MIT', initials: 'PS', color: 'av-amber' },
    { id: 2, name: 'Aman Gupta', lastMsg: 'Sounds good, see you then.', time: 'Oct 20', unread: 0, uni: 'Oxford', initials: 'AG', color: 'av-blue' },
  ];

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 120px)', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 4px 22px rgba(0,0,0,.05)', margin: '-10px -10px 0 -10px' }}>
      
      {/* Sidebar */}
      <div style={{ width: 320, borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
        <div style={{ padding: 16, borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input 
              type="text" 
              placeholder="Search mentors..." 
              style={{ width: '100%', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 100, padding: '8px 12px 8px 34px', fontSize: 13, color: 'var(--text)', outline: 'none' }}
            />
          </div>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {contacts.map((c, i) => (
            <div key={c.id} style={{ padding: 16, borderBottom: '1px solid var(--border)', background: i === 0 ? 'var(--white)' : 'transparent', borderLeft: i === 0 ? '3px solid var(--accent)' : '3px solid transparent', cursor: 'pointer', display: 'flex', gap: 12 }}>
              <div className={`av ${c.color}`} style={{ width: 44, height: 44, fontSize: 14, flexShrink: 0 }}>{c.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <h4 style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</h4>
                  <span style={{ fontSize: 11, color: c.unread ? 'var(--accent)' : 'var(--muted)', fontWeight: c.unread ? 600 : 400 }}>{c.time}</span>
                </div>
                <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{c.uni}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <p style={{ fontSize: 12.5, color: c.unread ? 'var(--text)' : 'var(--text2)', fontWeight: c.unread ? 600 : 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>{c.lastMsg}</p>
                  {c.unread > 0 && (
                    <span style={{ background: 'var(--coral)', color: 'white', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 100 }}>{c.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--white)' }}>
        <div style={{ height: 72, padding: '0 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div className="av av-amber" style={{ width: 40, height: 40, fontSize: 13 }}>PS</div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>Priya Sharma</h3>
              <p style={{ fontSize: 12, color: 'var(--text2)' }}>Mentor @ MIT</p>
            </div>
          </div>
          <button className="btn-outline" style={{ padding: '7px 14px', fontSize: 12 }}>View Profile</button>
        </div>

        {/* Messages List (Mock) */}
        <div style={{ flex: 1, padding: 24, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', background: 'var(--bg)', padding: '4px 12px', borderRadius: 100, border: '1px solid var(--border)' }}>Today</span>
          </div>

          <div style={{ display: 'flex', gap: 12, maxWidth: '80%', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
            <div className="av" style={{ background: 'var(--border2)', color: 'white', width: 32, height: 32, fontSize: 11 }}>Me</div>
            <div>
              <div style={{ background: 'var(--accent)', color: 'white', padding: '12px 16px', borderRadius: '18px 18px 4px 18px', fontSize: 13.5, lineHeight: 1.5, boxShadow: '0 2px 10px rgba(32,71,212,.15)' }}>
                Hi Priya! I just booked a Deep Dive session for next week. I've uploaded my draft SOP. Looking forward to your feedback!
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'right', marginTop: 4 }}>10:30 AM</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, maxWidth: '80%', alignSelf: 'flex-start' }}>
            <div className="av av-amber" style={{ width: 32, height: 32, fontSize: 11 }}>PS</div>
            <div>
              <div style={{ background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', padding: '12px 16px', borderRadius: '18px 18px 18px 4px', fontSize: 13.5, lineHeight: 1.5 }}>
                Hi Rahul! Great, I received the booking and the draft. I'll review it beforehand so we can jump straight into the feedback during our session.
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>10:35 AM</div>
            </div>
          </div>
        </div>

        {/* Input */}
        <div style={{ padding: 20, borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', padding: 8 }}>
            <button style={{ background: 'none', border: 'none', padding: 8, color: 'var(--muted)', cursor: 'pointer', transition: 'color .2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent)'} onMouseOut={e=>e.currentTarget.style.color='var(--muted)'}>
              <ImageIcon size={20} />
            </button>
            <button style={{ background: 'none', border: 'none', padding: 8, color: 'var(--muted)', cursor: 'pointer', transition: 'color .2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent)'} onMouseOut={e=>e.currentTarget.style.color='var(--muted)'}>
              <File size={20} />
            </button>
            <textarea 
              rows={1}
              placeholder="Type your message..."
              style={{ flex: 1, background: 'transparent', border: 'none', resize: 'none', outline: 'none', padding: '10px 0', fontSize: 14, color: 'var(--text)', fontFamily: 'inherit' }}
            />
            <button className="btn-primary" style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)' }}>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
