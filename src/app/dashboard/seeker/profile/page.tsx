"use client";

import React from 'react';
import { Camera, Save } from 'lucide-react';

export default function SeekerProfileSettings() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: 4 }}>Profile Settings</h1>
          <p style={{ color: 'var(--text2)', fontSize: 13.5 }}>Manage your account and preferences.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', fontSize: 13.5 }}>
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        
        {/* Personal Details Section */}
        <section>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px 36px', boxShadow: '0 4px 22px rgba(0,0,0,.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 40, height: 40, background: 'var(--li-accent)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                <UserCircle size={20} />
              </div>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', fontFamily: 'Fraunces, serif' }}>Personal Details</h2>
            </div>
            
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Avatar Upload */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: 'var(--bg)', border: '2px dashed var(--border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ fontSize: 32, fontWeight: 600, color: 'var(--text)', opacity: 0.2 }}>RD</div>
                  <button style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', opacity: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s', width: '100%' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0'}>
                    <Camera size={24} />
                  </button>
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 12.5, fontWeight: 600, cursor: 'pointer' }}>Change Photo</button>
              </div>

              {/* Form Fields */}
              <div style={{ flex: 1, minWidth: 300, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>Full Name</label>
                  <input type="text" defaultValue="Rahul D." style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '11px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>Email Address</label>
                  <input type="email" defaultValue="rahul.d@example.com" disabled style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '11px 14px', fontSize: 13.5, color: 'var(--muted)', outline: 'none', opacity: 0.7 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>Phone Number <span style={{color:'var(--muted)', fontWeight:400}}>(Optional)</span></label>
                  <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '11px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>Timezone</label>
                  <select style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '11px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%238c867e\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}>
                    <option>Asia/Kolkata (IST)</option>
                    <option>America/New_York (EST)</option>
                    <option>Europe/London (GMT)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship Goals */}
        <section>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px 36px', boxShadow: '0 4px 22px rgba(0,0,0,.03)' }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', fontFamily: 'Fraunces, serif', marginBottom: 24 }}>Application Goals</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>Target Intake Year</label>
                <select style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '11px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none', appearance: 'none' }}>
                  <option>Fall 2026</option>
                  <option>Spring 2026</option>
                  <option>Fall 2027</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>Target Country / Region</label>
                <input type="text" defaultValue="USA, UK" style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '11px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: '1 / -1' }}>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text)' }}>What are you looking for in a mentor?</label>
                <textarea rows={4} defaultValue="I am looking for someone who successfully got into Ivy League universities for a Computer Science Master's program and can completely review my Statement of Purpose and give me extremely harsh feedback." style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '11px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none', resize: 'vertical' }} />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// Ensure the icon used is correctly mapped locally to avoid import issues
const UserCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5"></circle>
    <path d="M20 21a8 8 0 0 0-16 0"></path>
  </svg>
);
