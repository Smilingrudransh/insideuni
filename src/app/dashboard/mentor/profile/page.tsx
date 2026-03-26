"use client";

"use client";

import React from 'react';
import { Camera, Save, Plus, X } from 'lucide-react';

export default function MentorProfilePage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, letterSpacing: '-0.5px', color: 'var(--text)', marginBottom: 4 }}>Profile Details</h1>
          <p style={{ color: 'var(--text2)', fontSize: 13.5 }}>Manage your public persona and mentorship offerings.</p>
        </div>
        <button className="btn-primary" style={{ padding: '10px 20px', fontSize: 13 }}>
          <Save size={16} /> Save Profile
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        {/* Basic Info */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>Basic Information</h2>
          </div>
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', border: '2px dashed var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'var(--bg)', color: 'var(--muted)', transition: 'border-color .2s' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <div style={{ textAlign: 'center' }}>
                  <Camera size={24} style={{ margin: '0 auto 4px' }} />
                  <div style={{ fontSize: 11, fontWeight: 500 }}>Upload</div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 280, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>First Name</label>
                  <input type="text" defaultValue="Priya" style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '10px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Last Name</label>
                  <input type="text" defaultValue="Sharma" style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '10px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none' }} />
                </div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>About Me (Bio)</label>
              <textarea rows={4} defaultValue="Hi! I'm Priya. I recently graduated from IIT Delhi and made my way to Oxford for my MBA..." style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '10px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none', resize: 'vertical' }} />
              <div className="field-hint" style={{ marginTop: 6 }}>Try to keep this engaging and informative. Tell seekers why you can help them.</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>University</label>
                <input type="text" defaultValue="University of Oxford" disabled style={{ width: '100%', background: 'var(--border)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '10px 14px', fontSize: 13.5, color: 'var(--text2)', outline: 'none', cursor: 'not-allowed' }} />
                <div className="field-hint" style={{ marginTop: 6 }}>Contact support to change your verified university.</div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>Course/Major</label>
                <input type="text" defaultValue="MBA" style={{ width: '100%', background: 'var(--bg)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-xs)', padding: '10px 14px', fontSize: 13.5, color: 'var(--text)', outline: 'none' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise & Tags */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>Expertise & Tags</h2>
          </div>
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>Languages Spoken</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['English', 'Hindi'].map(lang => (
                  <span key={lang} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 100, padding: '6px 14px', fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500, color: 'var(--text)' }}>
                    {lang} <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', alignItems: 'center' }}><X size={14} /></button>
                  </span>
                ))}
                <input type="text" placeholder="+ Add language" style={{ background: 'transparent', border: '1px dashed var(--border2)', borderRadius: 100, padding: '6px 14px', fontSize: 12.5, outline: 'none', width: 140 }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>Mentorship Topics</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Student Life', 'Visa', 'Scholarships'].map(tag => (
                  <span key={tag} style={{ background: 'var(--li-accent)', border: '1px solid rgba(32,71,212,.15)', color: 'var(--accent)', borderRadius: 100, padding: '6px 14px', fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
                    {tag} <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', display: 'flex', alignItems: 'center' }}><X size={14} /></button>
                  </span>
                ))}
                <input type="text" placeholder="+ Add topic" style={{ background: 'transparent', border: '1px dashed var(--border2)', borderRadius: 100, padding: '6px 14px', fontSize: 12.5, outline: 'none', color: 'var(--text)', width: 140 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,.03)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>Session Offerings</h2>
            <button style={{ background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <Plus size={16} /> Add Session Type
            </button>
          </div>
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { title: "Quick Chat", duration: 15, price: 199, desc: "Perfect for quick questions about life at Oxford or specific application doubts." },
              { title: "Deep Dive", duration: 30, price: 399, desc: "Detailed review of one application component (e.g. SOP, Resume) or interview prep." },
            ].map((session, i) => (
              <div key={i} style={{ padding: 20, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', position: 'relative' }}>
                <button style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><X size={18} /></button>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) 1fr', gap: 16, marginBottom: 12, paddingRight: 30 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--text2)', marginBottom: 4 }}>Session Title</label>
                    <input type="text" defaultValue={session.title} style={{ width: '100%', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', fontSize: 13, outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--text2)', marginBottom: 4 }}>Format</label>
                    <select style={{ width: '100%', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', fontSize: 13, outline: 'none' }}>
                      <option>1-on-1 Video Call</option>
                      <option>Chat Only</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 12 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--text2)', marginBottom: 4 }}>Duration (minutes)</label>
                    <input type="number" defaultValue={session.duration} style={{ width: '100%', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', fontSize: 13, outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--text2)', marginBottom: 4 }}>Price (₹)</label>
                    <input type="number" defaultValue={session.price} style={{ width: '100%', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', fontSize: 13, outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--text2)', marginBottom: 4 }}>Description</label>
                  <textarea rows={2} defaultValue={session.desc} style={{ width: '100%', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', fontSize: 13, outline: 'none', resize: 'none' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
