'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { getAuthInstance } from '@/lib/firebase-client';
import { registerStudent } from '@/actions/auth.actions';

export default function StudentRegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPw, setShowPw] = useState(false);

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetUniversity, setTargetUniversity] = useState('');
  const [targetCountry, setTargetCountry] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [interestInput, setInterestInput] = useState('');
  const [bio, setBio] = useState('');

  const addSkill = useCallback(() => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput('');
    }
  }, [skillInput, skills]);

  const removeSkill = useCallback((skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  }, [skills]);

  const addInterest = useCallback(() => {
    const trimmed = interestInput.trim();
    if (trimmed && !interests.includes(trimmed)) {
      setInterests([...interests, trimmed]);
      setInterestInput('');
    }
  }, [interestInput, interests]);

  const removeInterest = useCallback((interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  }, [interests]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, type: 'skill' | 'interest') => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (type === 'skill') addSkill();
      else addInterest();
    }
  }, [addSkill, addInterest]);

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

      // 3. Register student profile
      await registerStudent({
        firstName,
        lastName,
        targetUniversity: targetUniversity || undefined,
        targetCountry: targetCountry || undefined,
        skills,
        interests,
        bio: bio || undefined,
      });
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

      // Register student profile
      const nameParts = userCredential.user.displayName?.split(' ') || ['', ''];
      await registerStudent({
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        targetUniversity: targetUniversity || undefined,
        targetCountry: targetCountry || undefined,
        skills,
        interests,
        bio: bio || undefined,
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Google sign-up failed';
      setError(errorMessage);
      setLoading(false);
    }
  };

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
            <h2>Start Your Journey<br />as a <em>Student</em></h2>
            <p>Get personalized mentorship from students and alumni who&apos;ve been where you want to go.</p>
            <div className="auth-benefits">
              <div className="auth-benefit"><div className="auth-benefit-icon">🎯</div><span>Find mentors at your dream universities</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">📚</div><span>Get help with applications, essays, and interviews</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">💡</div><span>Learn from real experiences, not brochures</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">🤝</div><span>Build lasting connections for your future</span></div>
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
            <div className="auth-title">Create Student Account</div>
            <div className="auth-subtitle">Tell us about yourself and get matched with mentors</div>

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
                    placeholder="Arjun"
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
                    placeholder="Kumar"
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div className="form-field auth-form">
                  <label>Target University</label>
                  <input
                    type="text"
                    placeholder="e.g., MIT, Stanford"
                    value={targetUniversity}
                    onChange={(e) => setTargetUniversity(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="form-field auth-form">
                  <label>Target Country</label>
                  <input
                    type="text"
                    placeholder="e.g., USA, UK"
                    value={targetCountry}
                    onChange={(e) => setTargetCountry(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field auth-form">
                <label>Skills (press Enter to add)</label>
                <div className="tag-input-wrap">
                  <div className="tags">
                    {skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                        <button type="button" onClick={() => removeSkill(skill)} disabled={loading}>×</button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="e.g., Programming, Research, Writing"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'skill')}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field auth-form">
                <label>Interests (press Enter to add)</label>
                <div className="tag-input-wrap">
                  <div className="tags">
                    {interests.map((interest) => (
                      <span key={interest} className="tag">
                        {interest}
                        <button type="button" onClick={() => removeInterest(interest)} disabled={loading}>×</button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="e.g., AI, Medicine, Business"
                    value={interestInput}
                    onChange={(e) => setInterestInput(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 'interest')}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field auth-form">
                <label>Bio (optional)</label>
                <textarea
                  placeholder="Tell us about yourself, your goals, and what you're looking for..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn-primary auth-submit"
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Creating Account...' : 'Create Account →'}
              </button>

              <p className="form-agree" style={{ marginTop: 12 }}>
                By signing up you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
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
