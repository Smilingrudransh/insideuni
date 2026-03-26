'use client';
import Link from 'next/link';
import { useState } from 'react';

const UNIS = [
  { slug: 'mit', name: 'MIT', country: '🇺🇸 USA', flag: '🇺🇸', banner: '#dbeafe', emoji: '🏛️', mentors: 28, tags: ['CS', 'Engineering', 'Physics', 'MBA'], price: 399, rating: 4.9, sessions: 1240 },
  { slug: 'stanford', name: 'Stanford University', country: '🇺🇸 USA', flag: '🇺🇸', banner: '#fce7f3', emoji: '🌲', mentors: 24, tags: ['CS', 'Business', 'Medicine', 'Engineering'], price: 349, rating: 4.9, sessions: 980 },
  { slug: 'harvard', name: 'Harvard University', country: '🇺🇸 USA', flag: '🇺🇸', banner: '#fee2e2', emoji: '🎓', mentors: 19, tags: ['Law', 'Business', 'Medicine', 'Public Policy'], price: 499, rating: 4.8, sessions: 760 },
  { slug: 'oxford', name: 'University of Oxford', country: '🇬🇧 UK', flag: '🇬🇧', banner: '#f3e8ff', emoji: '🏰', mentors: 22, tags: ['PPE', 'Law', 'MBA', 'Sciences'], price: 329, rating: 4.9, sessions: 890 },
  { slug: 'cambridge', name: 'University of Cambridge', country: '🇬🇧 UK', flag: '🇬🇧', banner: '#d1fae5', emoji: '🎓', mentors: 18, tags: ['Mathematics', 'Natural Sciences', 'Engineering', 'Law'], price: 299, rating: 4.8, sessions: 720 },
  { slug: 'eth-zurich', name: 'ETH Zurich', country: '🇨🇭 Switzerland', flag: '🇨🇭', banner: '#fef3c7', emoji: '⚡', mentors: 16, tags: ['Engineering', 'CS', 'Physics', 'Architecture'], price: 279, rating: 4.9, sessions: 610 },
  { slug: 'tu-munich', name: 'TU Munich', country: '🇩🇪 Germany', flag: '🇩🇪', banner: '#ecfdf5', emoji: '🔧', mentors: 21, tags: ['Engineering', 'CS', 'Robotics', 'MBA'], price: 249, rating: 4.8, sessions: 830 },
  { slug: 'nus', name: 'NUS Singapore', country: '🇸🇬 Singapore', flag: '🇸🇬', banner: '#eff6ff', emoji: '🦁', mentors: 17, tags: ['Business', 'CS', 'Engineering', 'Law'], price: 269, rating: 4.9, sessions: 680 },
  { slug: 'carnegie-mellon', name: 'Carnegie Mellon University', country: '🇺🇸 USA', flag: '🇺🇸', banner: '#fde8d8', emoji: '🤖', mentors: 15, tags: ['CS', 'AI', 'Robotics', 'Drama'], price: 399, rating: 4.8, sessions: 590 },
  { slug: 'imperial', name: 'Imperial College London', country: '🇬🇧 UK', flag: '🇬🇧', banner: '#e0e7ff', emoji: '🔬', mentors: 14, tags: ['Engineering', 'Medicine', 'Business', 'CS'], price: 299, rating: 4.8, sessions: 540 },
  { slug: 'toronto', name: 'University of Toronto', country: '🇨🇦 Canada', flag: '🇨🇦', banner: '#fef9c3', emoji: '🍁', mentors: 13, tags: ['CS', 'Medicine', 'Engineering', 'Law'], price: 249, rating: 4.7, sessions: 480 },
  { slug: 'melbourne', name: 'University of Melbourne', country: '🇦🇺 Australia', flag: '🇦🇺', banner: '#d1fae5', emoji: '🦘', mentors: 12, tags: ['Medicine', 'Law', 'Business', 'Engineering'], price: 229, rating: 4.7, sessions: 410 },
  { slug: 'tu-delft', name: 'TU Delft', country: '🇳🇱 Netherlands', flag: '🇳🇱', banner: '#ede9fe', emoji: '🌷', mentors: 10, tags: ['Architecture', 'Civil Engineering', 'CS', 'Aerospace'], price: 219, rating: 4.8, sessions: 350 },
  { slug: 'hec-paris', name: 'HEC Paris', country: '🇫🇷 France', flag: '🇫🇷', banner: '#fce7f3', emoji: '🗼', mentors: 8, tags: ['MBA', 'Finance', 'Strategy', 'Luxury'], price: 349, rating: 4.8, sessions: 290 },
  { slug: 'kaist', name: 'KAIST', country: '🇰🇷 South Korea', flag: '🇰🇷', banner: '#fef3c7', emoji: '🚀', mentors: 7, tags: ['Engineering', 'CS', 'Physics', 'Biotech'], price: 199, rating: 4.7, sessions: 240 },
  { slug: 'yale', name: 'Yale University', country: '🇺🇸 USA', flag: '🇺🇸', banner: '#d1fae5', emoji: '🦌', mentors: 11, tags: ['Law', 'Medicine', 'Art', 'Social Sciences'], price: 399, rating: 4.8, sessions: 380 },
  { slug: 'ubc', name: 'University of British Columbia', country: '🇨🇦 Canada', flag: '🇨🇦', banner: '#dbeafe', emoji: '🌊', mentors: 9, tags: ['Forestry', 'Medicine', 'CS', 'Business'], price: 229, rating: 4.7, sessions: 310 },
  { slug: 'epfl', name: 'EPFL', country: '🇨🇭 Switzerland', flag: '🇨🇭', banner: '#fee2e2', emoji: '⚗️', mentors: 8, tags: ['CS', 'Life Sciences', 'Engineering', 'Architecture'], price: 269, rating: 4.8, sessions: 270 },
  { slug: 'lse', name: 'LSE', country: '🇬🇧 UK', flag: '🇬🇧', banner: '#fef9c3', emoji: '📊', mentors: 13, tags: ['Economics', 'Finance', 'Law', 'Political Science'], price: 329, rating: 4.8, sessions: 490 },
  { slug: 'unsw', name: 'UNSW Sydney', country: '🇦🇺 Australia', flag: '🇦🇺', banner: '#f0fdf4', emoji: '🌏', mentors: 10, tags: ['Engineering', 'Law', 'Medicine', 'Business'], price: 219, rating: 4.7, sessions: 360 },
  { slug: 'princeton', name: 'Princeton University', country: '🇺🇸 USA', flag: '🇺🇸', banner: '#f3e8ff', emoji: '🐯', mentors: 10, tags: ['Mathematics', 'Physics', 'Policy', 'Humanities'], price: 449, rating: 4.9, sessions: 340 },
  { slug: 'ntu', name: 'Nanyang Tech University', country: '🇸🇬 Singapore', flag: '🇸🇬', banner: '#ecfdf5', emoji: '🏙️', mentors: 9, tags: ['Business', 'Engineering', 'CS', 'Medicine'], price: 249, rating: 4.7, sessions: 300 },
  { slug: 'mcgill', name: 'McGill University', country: '🇨🇦 Canada', flag: '🇨🇦', banner: '#fde8d8', emoji: '❄️', mentors: 8, tags: ['Medicine', 'Law', 'Engineering', 'Business'], price: 219, rating: 4.7, sessions: 260 },
  { slug: 'ku-leuven', name: 'KU Leuven', country: '🇧🇪 Belgium', flag: '🇧🇪', banner: '#dbeafe', emoji: '🍺', mentors: 6, tags: ['Engineering', 'Medicine', 'Law', 'Theology'], price: 199, rating: 4.7, sessions: 180 },
];

const FILTERS = ['All Countries', '🇺🇸 USA', '🇬🇧 UK', '🇩🇪 Germany', '🇨🇦 Canada', '🇸🇬 Singapore', '🇦🇺 Australia', '🇨🇭 Switzerland', '🇳🇱 Netherlands'];

export default function UniversityPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All Countries');

  const filtered = UNIS.filter(u => {
    const matchFilter = filter === 'All Countries' || u.country.includes(filter.split(' ').slice(1).join(' ')) || u.country.startsWith(filter.split(' ')[0]);
    const q = search.toLowerCase();
    const matchSearch = !q || u.name.toLowerCase().includes(q) || u.country.toLowerCase().includes(q) || u.tags.some(t => t.toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });

  return (
    <>
      <nav>
        <Link href="/" className="logo">Inside<span>Uni</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/university" className="active">Universities</Link>
          <Link href="/register?role=mentor">Become a Mentor</Link>
          <Link href="/explore">Explore Mentors</Link>
        </div>
        <div className="nav-r">
          <Link href="/register" className="btn-nav">Access The Network →</Link>
        </div>
      </nav>

      <div className="uni-hero">
        <div className="section-label"><span />Explore<span /></div>
        <h1>Browse universities &amp; find <em>your mentor</em></h1>
        <p className="sub" style={{ maxWidth: 500, marginTop: 12 }}>200+ universities across 30+ countries. Every university shows verified mentors, their courses, and average session price.</p>
        <div className="uni-search-bar">
          <span style={{ fontSize: 16, color: 'var(--muted)' }}>🔍</span>
          <input
            type="text"
            placeholder="Search university, country, or course..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
        <div className="uni-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="uni-stats-bar">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 40, width: '100%' }}>
          <div className="ust"><div className="ust-num">224</div><div className="ust-lbl">Universities</div></div>
          <div className="ust"><div className="ust-num">513</div><div className="ust-lbl">Verified Mentors</div></div>
          <div className="ust"><div className="ust-num">30+</div><div className="ust-lbl">Countries</div></div>
          <div className="ust"><div className="ust-num">4.9★</div><div className="ust-lbl">Avg Rating</div></div>
          <div className="ust"><div className="ust-num">₹199</div><div className="ust-lbl">Min Price</div></div>
        </div>
      </div>

      <div className="uni-grid-wrap">
        {filtered.length === 0 ? (
          <div className="no-results">No universities found. Try a different search.</div>
        ) : (
          <div className="uni-grid">
            {filtered.map(u => (
              <Link key={u.slug} href={`/university/${u.slug}`} className="ucard" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ucard-banner" style={{ background: u.banner }}>
                  <span style={{ fontSize: 40 }}>{u.emoji}</span>
                </div>
                <div className="ucard-body">
                  <div className="ucard-top">
                    <div>
                      <div className="ucard-name">{u.name}</div>
                      <div className="ucard-country">{u.country}</div>
                    </div>
                    <div className="ucard-mentors">{u.mentors} mentors</div>
                  </div>
                  <div className="ucard-chips">
                    {u.tags.slice(0, 3).map(t => <span key={t} className="chip chip-blue" style={{ fontSize: 10, padding: '3px 8px' }}>{t}</span>)}
                    {u.tags.length > 3 && <span className="chip chip-gray" style={{ fontSize: 10, padding: '3px 8px' }}>+{u.tags.length - 3}</span>}
                  </div>
                  <div className="ucard-foot">
                    <div className="ucard-price">From <span>₹{u.price}</span></div>
                    <div className="ucard-rating"><span className="star">★</span>{u.rating} · {u.sessions} sessions</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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
