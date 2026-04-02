'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

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
            <h2>Join the InsideUni<br />Community</h2>
            <p>Connect with mentors, get personalized guidance, and take the next step in your academic journey.</p>
            <div className="auth-benefits">
              <div className="auth-benefit"><div className="auth-benefit-icon">🎓</div><span>Access 500+ verified mentors at top universities worldwide</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">💬</div><span>1-on-1 video sessions starting at just ₹199</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">🛡️</div><span>100% unbiased. No university pays us to recommend them</span></div>
              <div className="auth-benefit"><div className="auth-benefit-icon">⚡</div><span>Book in under 2 minutes, get answers in hours</span></div>
            </div>
          </div>
          <div className="auth-left-footer">
            <div className="auth-testimonial" style={{ marginTop: '32px' }}>
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
            <div className="auth-title">Create your account</div>
            <div className="auth-subtitle">Choose how you&apos;d like to join InsideUni</div>

            <div className="role-cards">
              <button
                className="role-card"
                onClick={() => router.push('/register/student')}
              >
                <div className="role-card-icon">🎓</div>
                <h3>I&apos;m a Student</h3>
                <p>Looking for mentorship and guidance on university admissions, applications, and career advice.</p>
                <span className="role-card-cta">Get Started →</span>
              </button>

              <button
                className="role-card"
                onClick={() => router.push('/register/mentor')}
              >
                <div className="role-card-icon">🏫</div>
                <h3>I&apos;m an Insider</h3>
                <p>Currently enrolled or graduated from a top university. Want to help students achieve their dreams.</p>
                <span className="role-card-cta">Apply as Mentor →</span>
              </button>
            </div>

            <p className="form-agree" style={{ marginTop: '24px', textAlign: 'center' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .role-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .role-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 24px;
          background: #fff;
          border: 1.5px solid #e8e8e8;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .role-card:hover {
          border-color: var(--accent, #0066ff);
          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.1);
          transform: translateY(-2px);
        }

        .role-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 16px;
        }

        .role-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--text, #0f172a);
          margin: 0 0 8px 0;
        }

        .role-card p {
          font-size: 14px;
          color: var(--text-sec, #64748b);
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .role-card-cta {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent, #0066ff);
        }
      `}</style>
    </>
  );
}
