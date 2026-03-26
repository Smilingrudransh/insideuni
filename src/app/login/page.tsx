'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [role, setRole] = useState<'seeker' | 'mentor'>('seeker');
  const [showPw, setShowPw] = useState(false);

  return (
    <>
      <nav>
        <Link href="/" className="logo">Inside<span>Uni</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/university">Universities</Link>
          <Link href="/register?role=mentor">Become a Mentor</Link>
          <Link href="/explore">Explore Mentors</Link>
        </div>
        <div className="nav-r">
          <Link href="/register" className="btn-nav">Access The Network →</Link>
        </div>
      </nav>

      <div className="auth-page">
        {/* Left panel */}
        <div className="auth-left">
          <div className="auth-left-content">
            <div className="logo" style={{ color: '#fff', WebkitTextFillColor: '#fff' }}>Inside<span style={{ color: 'rgba(255,255,255,.65)' }}>Uni</span></div>
            <h2>Your dream university<br />is one <em>conversation away.</em></h2>
            <p>Join 10,000+ students getting real guidance from people who&apos;ve actually been to their dream universities.</p>
            <div className="auth-benefits">
              <div className="auth-benefit"><div className="auth-benefit-icon">🎓</div><span>Access 500+ verified mentors at top universities worldwide</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">💬</div><span>1-on-1 video sessions starting at just ₹199</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">🛡️</div><span>100% unbiased. no university pays us to recommend them</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">⚡</div><span>Book in under 2 minutes, get answers in hours</span></div>
            </div>
          </div>
          <div className="auth-left-footer">
            <div className="auth-testimonial">
              <p>&ldquo;One session with an MIT student gave me more useful advice than 3 months with a consultancy. InsideUni is genuinely different.&rdquo;</p>
              <div className="auth-testimonial-author">
                <div className="auth-testimonial-av">DM</div>
                <span>Divya Mehta · Now at MIT EECS PhD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="auth-right">
          <div className="auth-form-wrap">
            <div className="auth-tabs">
              <button className={`auth-tab${activeTab === 'login' ? ' active' : ''}`} onClick={() => setActiveTab('login')}>Log in</button>
              <button className={`auth-tab${activeTab === 'signup' ? ' active' : ''}`} onClick={() => setActiveTab('signup')}>Sign up free</button>
            </div>

            {activeTab === 'login' && (
              <div>
                <div className="auth-title">Welcome back</div>
                <div className="auth-subtitle">Log in to your InsideUni account</div>
                <button className="social-btn"><div className="social-icon">🌐</div>Continue with Google</button>
                <div className="divider-line">or continue with email</div>
                <div className="form-field auth-form"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                <div className="form-field auth-form"><label>Password</label>
                  <div className="password-wrap">
                    <input type={showPw ? 'text' : 'password'} placeholder="••••••••" />
                    <button className="password-toggle" onClick={() => setShowPw(!showPw)}>{showPw ? '🙈' : '👁'}</button>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -8, marginBottom: 16 }}><a href="#" style={{ fontSize: '12.5px', color: 'var(--accent)', textDecoration: 'none' }}>Forgot password?</a></div>
                <button className="btn-primary auth-submit">Log in →</button>
                <div className="auth-switch">Don&apos;t have an account? <a onClick={() => setActiveTab('signup')} style={{ cursor: 'pointer' }}>Sign up free</a></div>
              </div>
            )}

            {activeTab === 'signup' && (
              <div>
                <div className="auth-title">Create your account</div>
                <div className="auth-subtitle">Join InsideUni — it&apos;s completely free</div>
                <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>I am a...</div>
                <div className="role-toggle">
                  <div className={`role-opt${role === 'seeker' ? ' selected' : ''}`} onClick={() => setRole('seeker')}>
                    <span className="role-icon">🎓</span>
                    <div className="role-name">Student / Seeker</div>
                    <div className="role-desc">Looking for guidance</div>
                  </div>
                  <div className={`role-opt${role === 'mentor' ? ' selected' : ''}`} onClick={() => setRole('mentor')}>
                    <span className="role-icon">🏫</span>
                    <div className="role-name">Mentor</div>
                    <div className="role-desc">Currently enrolled abroad</div>
                  </div>
                </div>
                <button className="social-btn"><div className="social-icon">🌐</div>Continue with Google</button>
                <div className="divider-line">or sign up with email</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 0 }}>
                  <div className="form-field auth-form"><label>First Name</label><input type="text" placeholder="Arjun" /></div>
                  <div className="form-field auth-form"><label>Last Name</label><input type="text" placeholder="Kumar" /></div>
                </div>
                <div className="form-field auth-form"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                <div className="form-field auth-form"><label>Password</label>
                  <div className="password-wrap">
                    <input type={showPw ? 'text' : 'password'} placeholder="Min. 8 characters" />
                    <button className="password-toggle" onClick={() => setShowPw(!showPw)}>{showPw ? '🙈' : '👁'}</button>
                  </div>
                </div>
                {/* {role === 'seeker' && (
                  <>
                    <div className="form-field auth-form"><label>Target University / Country</label><input type="text" placeholder="e.g. MIT, Stanford, or USA in general" /></div>
                    <div className="form-field auth-form"><label>Course you&apos;re applying for</label><input type="text" placeholder="e.g. MS Computer Science" /></div>
                  </>
                )}
                {role === 'mentor' && (
                  <>
                    <div className="form-field auth-form"><label>University Email <span style={{color:'var(--coral)'}}>*</span></label><input type="email" placeholder="you@mit.edu" /><div className="field-hint">Required for mentor verification</div></div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                      <div className="form-field auth-form"><label>Your University</label><input type="text" placeholder="MIT" /></div>
                      <div className="form-field auth-form"><label>Course</label><input type="text" placeholder="CS PhD" /></div>
                    </div>
                  </>
                )} */}
                <button className="btn-primary auth-submit">Create Account →</button>
                <p className="form-agree" style={{ marginTop: 12 }}>By signing up you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
                <div className="auth-switch">Already have an account? <a onClick={() => setActiveTab('login')} style={{ cursor: 'pointer' }}>Log in</a></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
