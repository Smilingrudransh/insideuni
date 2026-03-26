'use client';
import Link from 'next/link';
import { useState } from 'react';

const MENTORS = [
  { id: 'm1', name: 'Arjun Kumar', initials: 'AK', color: 'av-blue', university: 'MIT', course: 'CS PhD Y2', flag: '🇺🇸', tags: ['Admissions', 'Research', 'SOP'], price: 399, rating: 4.9, sessions: 127, verified: true },
  { id: 'm2', name: 'Priya Sharma', initials: 'PS', color: 'av-amber', university: 'University of Oxford', course: 'MBA', flag: '🇬🇧', tags: ['Student Life', 'Visa', 'Scholarships'], price: 299, rating: 4.8, sessions: 84, verified: true },
  { id: 'm3', name: 'Neha Verma', initials: 'NV', color: 'av-green', university: 'Stanford University', course: 'BSc Data Science', flag: '🇺🇸', tags: ['Research', 'Admissions', 'LOR'], price: 0, rating: 5.0, sessions: 89, verified: true },
  { id: 'm4', name: 'Karan Singh', initials: 'KS', color: 'av-purple', university: 'ETH Zurich', course: 'MSc Mechanical Eng', flag: '🇨🇭', tags: ['Engineering', 'Housing', 'Visa'], price: 300, rating: 4.7, sessions: 5, verified: false },
  { id: 'm5', name: 'Rahul Verma', initials: 'RV', color: 'av-coral', university: 'TU Munich', course: 'MS Robotics', flag: '🇩🇪', tags: ['DAAD', 'Housing', 'Engineering'], price: 249, rating: 4.8, sessions: 52, verified: true },
  { id: 'm6', name: 'Sneha Jain', initials: 'SJ', color: 'av-pink', university: 'NUS Singapore', course: 'Data Science', flag: '🇸🇬', tags: ['CS', 'Business', 'Student Life'], price: 199, rating: 4.9, sessions: 41, verified: true },
];

export default function ExplorePage() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Recommended');

  const filtered = MENTORS.filter(m => {
    const q = search.toLowerCase();
    return !q || m.name.toLowerCase().includes(q) || m.university.toLowerCase().includes(q) || m.course.toLowerCase().includes(q);
  });

  return (
    <>
      <nav>
        <Link href="/" className="logo">Inside<span>Uni</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/university">Universities</Link>
          <Link href="/register?role=mentor">Become a Mentor</Link>
          <Link href="/explore" className="active">Explore Mentors</Link>
        </div>
        <div className="nav-r">
          <Link href="/register" className="btn-nav">Access The Network →</Link>
        </div>
      </nav>

      <div style={{ paddingTop: 66 }}>
        <div className="sw">
          <div className="section-label"><span />Find a Mentor<span /></div>
          <h2 className="serif">Connect with <em>your perfect mentor</em></h2>
          <p className="sub" style={{ maxWidth: 480 }}>Browse 500+ verified students at top universities worldwide. Filter by university, course, language, and budget.</p>

          <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280, background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 100, padding: '8px 8px 8px 20px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 2px 14px rgba(0,0,0,.06)', maxWidth: 600 }}>
              <span style={{ color: 'var(--muted)', fontSize: 16 }}>🔍</span>
              <input
                type="text"
                placeholder="Search by university, course, or name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ flex: 1, border: 'none', background: 'transparent', fontFamily: 'inherit', fontSize: 14, color: 'var(--text)', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text2)' }}>
              <span>Sort by:</span>
              <select value={sort} onChange={e => setSort(e.target.value)}
                style={{ background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 100, padding: '8px 16px', fontSize: 13, color: 'var(--text)', fontFamily: 'inherit', cursor: 'pointer', outline: 'none' }}>
                <option>Recommended</option>
                <option>Rating (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>Showing {filtered.length} mentors</p>
            <div className="tgrid" style={{ marginTop: 0 }}>
              {filtered.map(m => (
                <div key={m.id} className="tcard" style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
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
                    <div style={{ textAlign: 'right' }}>
                      <div className="cprice">{m.price === 0 ? 'Free' : `₹${m.price}`}</div>
                      <div className="cpunit">/ 30 min</div>
                    </div>
                  </div>
                  <div className="ctag-row">
                    {m.tags.map(t => <span key={t} className="chip chip-blue">{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--muted)' }}>
                      <span style={{ color: '#f59e0b' }}>★</span>{m.rating} · {m.sessions} sessions
                    </div>
                    <Link href="/login" className="btn-primary" style={{ padding: '8px 18px', fontSize: 12, borderRadius: 100 }}>Book →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-brand">
          <span className="logo">Inside<span>Uni</span></span>
          <p className="fdesc">Real students. Real advice. No consultancy bias. Made in India 🇮🇳</p>
        </div>
        <div className="fcol"><h4>Platform</h4><Link href="/university">Find a Mentor</Link><Link href="/register?role=mentor">Become a Mentor</Link><Link href="/university">Browse Universities</Link><Link href="/forum">Community Forum</Link></div>
        <div className="fcol"><h4>Company</h4><a href="#">About Us</a><a href="#">Blog</a><a href="#">Careers</a></div>
        <div className="fcol"><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Contact</a></div>
      </footer>
      <div className="fbot"><span className="fcopy">© 2025 InsideUni Technologies Pvt. Ltd.</span><span className="fcopy">Made with ❤️ in Jaipur, India</span></div>
    </>
  );
}
