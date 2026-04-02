'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { getAuthInstance } from '@/lib/firebase-client';
import { registerMentor } from '@/actions/auth.actions';

export default function MentorRegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPw, setShowPw] = useState(false);
  const [showPendingMessage, setShowPendingMessage] = useState(false);

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [course, setCourse] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [expertise, setExpertise] = useState<string[]>([]);
  const [expertiseInput, setExpertiseInput] = useState('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [languageInput, setLanguageInput] = useState('');
  const [bio, setBio] = useState('');
  const [uniEmail, setUniEmail] = useState('');

  const addExpertise = useCallback(() => {
    const trimmed = expertiseInput.trim();
    if (trimmed && !expertise.includes(trimmed)) {
      setExpertise([...expertise, trimmed]);
      setExpertiseInput('');
    }
  }, [expertiseInput, expertise]);

  const removeExpertise = useCallback((item: string) => {
    setExpertise(expertise.filter(e => e !== item));
  }, [expertise]);

  const addLanguage = useCallback(() => {
    const trimmed = languageInput.trim();
    if (trimmed && !languages.includes(trimmed)) {
      setLanguages([...languages, trimmed]);
      setLanguageInput('');
    }
  }, [languageInput, languages]);

  const removeLanguage = useCallback((item: string) => {
    setLanguages(languages.filter(l => l !== item));
  }, [languages]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, type: 'expertise' | 'language') => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (type === 'expertise') addExpertise();
      else addLanguage();
    }
  }, [addExpertise, addLanguage]);

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(getAuthInstance(), email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
      const idToken = await userCredential.user.getIdToken();

      // 2. Create session
      const sessionRes = await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      if (!sessionRes.ok) {
        const data = await sessionRes.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to create session');
      }

      // 3. Register mentor profile
      await registerMentor({
        firstName,
        lastName,
        university,
        course,
        yearOfStudy: parseInt(yearOfStudy) || 1,
        expertise,
        languages,
        bio: bio || undefined,
        uniEmail: uniEmail || undefined,
      });

      // Show pending message before redirect
      setShowPendingMessage(true);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMessage);
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(getAuthInstance(), provider);
      const idToken = await userCredential.user.getIdToken();

      // Create session
      const sessionRes = await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      if (!sessionRes.ok) {
        const data = await sessionRes.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to create session');
      }

      // Register mentor profile
      const nameParts = userCredential.user.displayName?.split(' ') || ['', ''];
      await registerMentor({
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        university,
        course,
        yearOfStudy: parseInt(yearOfStudy) || 1,
        expertise,
        languages,
        bio: bio || undefined,
        uniEmail: uniEmail || undefined,
      });

      setShowPendingMessage(true);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Google sign-up failed';
      setError(errorMessage);
      setLoading(false);
    }
  };

  if (showPendingMessage) {
    return (
      <>
        <nav>
          <Link href="/" className="logo">Inside<span>Uni.</span></Link>
        </nav>
        <div className="auth-page">
          <div className="auth-left">
            <div className="auth-left-content">
              <div className="logo" style={{ color: '#fff', WebkitTextFillColor: '#fff' }}>Inside<span style={{ color: 'rgba(255,255,255,.65)' }}>Uni.</span></div>
              <h2>Application<br /><em>Received!</em></h2>
              <p>Thank you for applying to become a mentor on InsideUni.</p>
            </div>
          </div>
          <div className="auth-right">
            <div className="auth-form-wrap" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>⏳</div>
              <div className="auth-title">Pending Verification</div>
              <div className="auth-subtitle" style={{ maxWidth: '400px', margin: '0 auto 24px' }}>
                Your mentor application is under review. We&apos;ll notify you via email once your profile is verified.
              </div>
              <p style={{ color: 'var(--text-sec)', fontSize: '14px', marginBottom: '24px' }}>
                This usually takes 1-2 business days. In the meantime, you can explore the platform.
              </p>
              <Link href="/explore" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Explore Mentors →
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <nav>
        <Link href="/" className="logo">Inside<span>Uni.</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/university">Universities</Link>
          <Link href="/explore">Explore Mentors</Link>
        </div>
        <div className="nav-r">
          <Link href="/login" className="btn-nav">Log in</Link>
        </div>
      </nav>

      <div className="auth-page">
        {/* Left panel */}
        <div className="auth-left">
          <div className="auth-left-content">
            <div className="logo" style={{ color: '#fff', WebkitTextFillColor: '#fff' }}>Inside<span style={{ color: 'rgba(255,255,255,.65)' }}>Uni.</span></div>
            <h2>Become an<br /><em>Insider</em></h2>
            <p>Share your knowledge, help students achieve their dreams, and earn while making an impact.</p>
            <div className="auth-benefits">
              <div className="auth-benefit"><div className="auth-benefit-icon">💰</div><span>Set your own hourly rate and schedule</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">🌟</div><span>Build your personal brand and network</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">🎓</div><span>Help shape the next generation of students</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">🛡️</div><span>Verified platform with secure payments</span></div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="auth-right">
          <div className="auth-form-wrap">
            <div style={{ marginBottom: '8px' }}>
              <Link href="/register" style={{ fontSize: '13px', color: 'var(--text-sec)', textDecoration: 'none' }}>
                ← Back to role selection
              </Link>
            </div>
            <div className="auth-title">Apply as Mentor</div>
            <div className="auth-subtitle">Share your experience and help students succeed</div>

            {error && (
              <div style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                color: '#dc2626',
                fontSize: '14px',
                marginBottom: '16px',
              }}>
                {error}
              </div>
            )}

            <button
              type="button"
              className="social-btn"
              onClick={handleGoogleSignUp}
              disabled={loading}
              style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              <div className="social-icon">🌐</div>
              {loading ? 'Signing up...' : 'Continue with Google'}
            </button>

            <div className="divider-line">or sign up with email</div>

            <form onSubmit={handleEmailSignUp}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div className="form-field auth-form">
                  <label>First Name *</label>
                  <input
                    type="text"
                    placeholder="Priya"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-field auth-form">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field auth-form">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-field auth-form">
                <label>Password *</label>
                <div className="password-wrap">
                  <input
                    type={showPw ? 'text' : 'password'}
                    placeholder="Min. 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPw(!showPw)}
                    disabled={loading}
                  >
                    {showPw ? '🙈' : '👁'}
                  </button>
                </div>
              </div>

              <div className="form-field auth-form">
                <label>University *</label>
                <input
                  type="text"
                  placeholder="e.g., MIT, Stanford, IIT Bombay"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div className="form-field auth-form">
                  <label>Course/Degree *</label>
                  <input
                    type="text"
                    placeholder="e.g., Computer Science"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-field auth-form">
                  <label>Year of Study *</label>
                  <input
                    type="number"
                    placeholder="e.g., 2"
                    value={yearOfStudy}
                    onChange={(e) => setYearOfStudy(e.target.value)}
                    required
                    min={1}
                    max={10}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field auth-form">
                <label>Areas of Expertise * (press Enter to add)</label>
                <div className="tag-input-wrap">
                  <div className="tags">
                    {expertise.map((item) => (
                      <span key={item} className="tag">
                        {item}
                        <button type="button" onClick={() => removeExpertise(item)} disabled={loading}>×</button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="e.g., Admissions, Essays, GRE Prep"
                    value={expertiseInput}
                    onChange={(e) => setExpertiseInput(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'expertise')}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field auth-form">
                <label>Languages (press Enter to add)</label>
                <div className="tag-input-wrap">
                  <div className="tags">
                    {languages.map((item) => (
                      <span key={item} className="tag">
                        {item}
                        <button type="button" onClick={() => removeLanguage(item)} disabled={loading}>×</button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="e.g., English, Hindi, Spanish"
                    value={languageInput}
                    onChange={(e) => setLanguageInput(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'language')}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field auth-form">
                <label>Bio *</label>
                <textarea
                  placeholder="Tell us about your background, experience, and how you can help students..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-field auth-form">
                <label>University Email (for verification)</label>
                <input
                  type="email"
                  placeholder="you@university.edu"
                  value={uniEmail}
                  onChange={(e) => setUniEmail(e.target.value)}
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn-primary auth-submit"
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Submitting Application...' : 'Submit Application →'}
              </button>

              <p className="form-agree" style={{ marginTop: 12 }}>
                By applying you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>. Your profile will be reviewed before going live.
              </p>
            </form>

            <div className="auth-switch">
              Already have an account?{' '}
              <Link href="/login" style={{ cursor: 'pointer', color: 'var(--accent)' }}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="number"] {
          width: 100%;
          padding: 12px 14px;
          font-size: 14.5px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background: #fff;
          color: var(--text);
        }

        input[type="number"]:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        input[type="url"] {
          width: 100%;
          padding: 12px 14px;
          font-size: 14.5px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background: #fff;
          color: var(--text);
        }

        input[type="url"]:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        textarea {
          width: 100%;
          padding: 12px 14px;
          font-size: 14.5px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background: #fff;
          color: var(--text);
          resize: vertical;
          font-family: inherit;
        }

        textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        .tag-input-wrap {
          border: 1px solid #d1d5db;
          border-radius: 10px;
          padding: 8px 12px;
          background: #fff;
        }

        .tag-input-wrap:focus-within {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 8px;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%);
          border-radius: 16px;
          font-size: 13px;
          color: var(--accent);
          font-weight: 500;
        }

        .tag button {
          background: none;
          border: none;
          color: var(--accent);
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          padding: 0;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tag button:hover {
          background: rgba(0, 102, 255, 0.1);
          border-radius: 50%;
        }

        .tag-input-wrap input {
          border: none;
          padding: 4px 2px;
          font-size: 14px;
          width: 100%;
          background: transparent;
        }

        .tag-input-wrap input:focus {
          outline: none;
          box-shadow: none;
        }
      `}</style>
    </>
  );
}
