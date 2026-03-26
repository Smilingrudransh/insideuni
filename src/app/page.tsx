import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <Link href="/" className="logo">Inside<span>Uni</span></Link>
        <div className="nav-links">
          <Link href="/" className="active">Home</Link>
          <Link href="/university">Universities</Link>
          <Link href="/register?role=mentor">Become a Mentor</Link>
          <Link href="/explore">Explore Mentors</Link>
        </div>
        <div className="nav-r">
          <Link href="/register" className="btn-nav">Access The Network →</Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow" style={{ marginTop: '32px' }}><span className="eyebrow-badge">New</span> 500+ verified mentors <strong>·</strong> 200+ universities</div>
            <h1 className="hero-h">Guidance from<br /><em>students who&apos;ve</em><br />actually been there.</h1>
            <p className="hero-sub">Talk to real students at your dream university. Get honest answers about admissions, scholarships, student life without any <strong>consultancy bias</strong>.</p>
            <div className="hero-ctas">
              <Link href="/university" className="btn-primary">Find Your Mentor →</Link>
              <Link href="/register?role=mentor" className="btn-outline">Become a Mentor</Link>
            </div>
            <div className="proof-row">
              <div className="av-stack">
                <div className="av-sm av-blue">AK</div>
                <div className="av-sm av-amber">PS</div>
                <div className="av-sm av-green">RV</div>
                <div className="av-sm av-purple">NJ</div>
              </div>
              <div className="proof-txt"><strong>10,000+</strong> sessions completed</div>
              <div className="proof-div" />
              <div className="proof-stat"><div className="p-num">4.9★</div><div className="p-lbl">Avg rating</div></div>
              <div className="proof-div" />
              <div className="proof-stat"><div className="p-num">₹199</div><div className="p-lbl">Starts from</div></div>
            </div>
          </div>

          {/* Floating mentor cards */}
          <div className="float-wrap">
            <div className="fc fc1">
              <div className="ch">
                <div className="av av-blue">AK</div>
                <div>
                  <div className="cname">Arjun Kumar <div className="vbadge">✓</div></div>
                  <div className="cuni">🇺🇸 MIT · CS PhD Y2</div>
                </div>
              </div>
              <div className="ctag-row">
                <span className="chip chip-blue">Admissions</span>
                <span className="chip chip-green">Research</span>
                <span className="chip chip-coral">SOP</span>
              </div>
              <div className="cft">
                <div><div className="cprice">₹399</div><div className="cpunit">/ 30 min</div></div>
                <div style={{ textAlign: 'right' }}><div className="cstars">★★★★★</div><div className="csess">127 sessions</div></div>
              </div>
              <div className="cbtn" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zoom: 0.9 }}>
                <Link href="/register">Book Session →</Link>
              </div>
            </div>

            <div className="fc fc2">
              <div className="ch">
                <div className="av av-amber">PS</div>
                <div>
                  <div className="cname">Priya Sharma <div className="vbadge">✓</div></div>
                  <div className="cuni">🇬🇧 Oxford · MBA</div>
                </div>
              </div>
              <div className="ctag-row">
                <span className="chip chip-purple">Student Life</span>
                <span className="chip chip-green">Visa</span>
              </div>
              <div className="cft">
                <div><div className="cprice">₹299</div><div className="cpunit">/ 30 min</div></div>
                <div style={{ textAlign: 'right' }}><div className="cstars">★★★★★</div><div className="csess">84 sessions</div></div>
              </div>
            </div>

            <div className="fc fc3">
              <div className="ch">
                <div className="av av-purple">RV</div>
                <div>
                  <div className="cname">Rahul Verma <div className="vbadge">✓</div></div>
                  <div className="cuni">🇩🇪 TU Munich · MS</div>
                </div>
              </div>
              <div className="ctag-row">
                <span className="chip chip-blue">Housing</span>
                <span className="chip chip-amber">DAAD</span>
              </div>
              <div className="cft">
                <div><div className="cprice">₹249</div><div className="cpunit">/ 30 min</div></div>
                <div style={{ textAlign: 'right' }}><div className="cstars">★★★★☆</div><div className="csess">52 sessions</div></div>
              </div>
            </div>

            <div className="fc fc4">
              <div className="ch">
                <div className="av av-green" style={{ width: 36, height: 36, fontSize: 12 }}>SJ</div>
                <div>
                  <div className="cname" style={{ fontSize: '12.5px' }}>Sneha Jain <div className="vbadge">✓</div></div>
                  <div className="cuni" style={{ fontSize: 10 }}>🇸🇬 NUS · Data Science</div>
                </div>
              </div>
              <div className="cft" style={{ marginTop: 8, paddingTop: 8 }}>
                <div className="cprice" style={{ fontSize: 15 }}>₹199</div>
                <div className="cstars" style={{ fontSize: 10 }}>★★★★★</div>
              </div>
            </div>

            <div className="fbadge fb1"><span style={{ fontSize: 17 }}>🟢</span><div><div style={{ fontSize: 12, fontWeight: 600 }}>3 live sessions</div><div style={{ fontSize: 10, color: 'var(--muted)' }}>Happening right now</div></div></div>
            <div className="fbadge fb2"><span style={{ fontSize: 17 }}>🎓</span><div><div style={{ fontSize: 12, fontWeight: 600 }}>200+ Universities</div><div style={{ fontSize: 10, color: 'var(--muted)' }}>30 countries covered</div></div></div>
            <div className="fbadge fb3"><span style={{ fontSize: 17 }}>⭐</span><div><div style={{ fontSize: 12, fontWeight: 600 }}>4.9 / 5.0</div><div style={{ fontSize: 10, color: 'var(--muted)' }}>2,400+ reviews</div></div></div>
          </div>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {['🇺🇸 MIT', '🇺🇸 Stanford', '🇬🇧 Oxford', '🇬🇧 Cambridge', '🇺🇸 Harvard', '🇨🇭 ETH Zurich', '🇸🇬 NUS Singapore', '🇩🇪 TU Munich', '🇬🇧 Imperial College', '🇨🇦 Toronto', '🇦🇺 Melbourne', '🇺🇸 Carnegie Mellon', '🇺🇸 Yale', '🇫🇷 HEC Paris', '🇳🇱 TU Delft', '🇰🇷 KAIST',
            '🇺🇸 MIT', '🇺🇸 Stanford', '🇬🇧 Oxford', '🇬🇧 Cambridge', '🇺🇸 Harvard', '🇨🇭 ETH Zurich', '🇸🇬 NUS Singapore', '🇩🇪 TU Munich', '🇬🇧 Imperial College', '🇨🇦 Toronto', '🇦🇺 Melbourne', '🇺🇸 Carnegie Mellon', '🇺🇸 Yale', '🇫🇷 HEC Paris', '🇳🇱 TU Delft', '🇰🇷 KAIST',
          ].map((u, i) => (
            <Link key={i} href="/university" className="upill">{u}</Link>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="sw reveal">
        <div className="section-label"><span />{`How it works`}<span /></div>
        <h2 className="serif">Three steps to your <em>dream admission</em></h2>
        <p className="sub" style={{ maxWidth: 420 }}>No middlemen. No bias. Just real conversations with students who&apos;ve actually been there.</p>
        <div className="how-grid">
          <div className="hstep"><span className="hnum">01</span><span className="hemoji">🔍</span><h3>Search &amp; Filter</h3><p>Browse verified mentors by university, course, language, and budget. Every profile shows real session reviews.</p></div>
          <div className="hstep"><span className="hnum">02</span><span className="hemoji">📅</span><h3>Book a Session</h3><p>Pick a 15, 30, or 60-minute slot. Pay securely via UPI or card. Add your questions in advance.</p></div>
          <div className="hstep"><span className="hnum">03</span><span className="hemoji">💬</span><h3>Connect &amp; Learn</h3><p>Join your video session. Get honest, first-hand answers about admissions, scholarships, visa and student life.</p></div>
        </div>
      </div>

      {/* ── WHY INSIDEUNI (BENTO) ── */}
      <div className="sw-alt"><div className="sw reveal">
        <div className="section-label"><span />Why InsideUni<span /></div>
        <h2 className="serif">Everything consultancies <em>can&apos;t give you</em></h2>
        <div className="bento">
          <div className="bcard bwide">
            <div className="bicon bi-blue">🛡️</div>
            <h3>Zero consultancy bias</h3>
            <p>No university pays us to send you there. Our mentors give you the unfiltered truth — good and bad — about their campus, courses and admission experience.</p>
            <div className="btag-row"><span className="btag">Honest advice</span><span className="btag">No kickbacks</span><span className="btag">Student-first</span></div>
          </div>
          <div className="bcard">
            <div className="bicon bi-green">✓</div>
            <h3>Verified mentors</h3>
            <p>Every mentor verifies with their official university email. Real students only — no consultants.</p>
            <div className="bnum">500+</div>
          </div>
          <div className="bcard btall" style={{ background: 'var(--accent)', borderColor: 'var(--accent)' }}>
            <div className="bicon" style={{ background: 'rgba(255,255,255,.12)' }}>⚡</div>
            <h3 style={{ color: '#fff' }}>10× cheaper</h3>
            <p style={{ color: 'rgba(255,255,255,.72)' }}>Consultancies charge ₹50,000+. Sessions here start at ₹199. Get better, more authentic advice.</p>
            <div style={{ marginTop: 'auto', paddingTop: 24 }}>
              <div style={{ fontFamily: 'Fraunces,serif', fontSize: 50, fontWeight: 700, color: '#fff', letterSpacing: -3, lineHeight: 1 }}>₹199</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', marginTop: 5 }}>to start your journey</div>
            </div>
          </div>
          <div className="bcard">
            <div className="bicon bi-amber">🌐</div>
            <h3>200+ Universities</h3>
            <p>US, UK, Canada, Germany, Singapore, Australia. Every major course covered across 30+ countries.</p>
          </div>
          <div className="bcard">
            <div className="bicon bi-coral">🏆</div>
            <h3>Star-rated quality</h3>
            <p>Every mentor is rated after each session. Low-rated mentors are removed automatically.</p>
            <div className="bnum" style={{ fontSize: 40 }}>4.9★</div>
          </div>
        </div>
      </div></div>

      {/* ── TESTIMONIALS ── */}
      <div className="sw reveal">
        <div className="section-label"><span />Student Stories<span /></div>
        <h2 className="serif">They made it. <em>With a little help.</em></h2>
        <div className="tgrid">
          <div className="tcard">
            <div className="tstars">★★★★★</div>
            <p className="ttext">&ldquo;Spent 3 sessions with an MIT PhD student who helped me <strong>restructure my entire SOP</strong>. Got my admit 2 weeks later. Worth every rupee.&rdquo;</p>
            <div className="tauthor"><div className="tav av-blue">DM</div><div><div className="tname">Divya Mehta</div><div className="trole">Now at MIT EECS PhD, 2024</div></div></div>
          </div>
          <div className="tcard">
            <div className="tstars">★★★★★</div>
            <p className="ttext">&ldquo;Mentor told me <strong>exactly which professors to email at Stanford</strong> and how to write the message. Got 2 replies in one week.&rdquo;</p>
            <div className="tauthor"><div className="tav av-amber">KS</div><div><div className="tname">Karan Singh</div><div className="trole">Stanford MS CS, Batch 2025</div></div></div>
          </div>
          <div className="tcard">
            <div className="tstars">★★★★★</div>
            <p className="ttext">&ldquo;Confused about DAAD? One session with an Indian student at TU Munich <strong>cleared everything</strong>. Yeh platform literally gold hai.&rdquo;</p>
            <div className="tauthor"><div className="tav av-purple">NJ</div><div><div className="tname">Nisha Joshi</div><div className="trole">TU Munich · DAAD Scholar</div></div></div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="sw reveal">
        <div className="hcta">
          <div className="hcta-l">
            <div className="live-badge" style={{ marginBottom: 18 }}><span className="live-dot" />3 sessions happening right now</div>
            <h2>Your dream university is one <em>conversation away.</em></h2>
            <p className="hcta-sub">Join 10,000+ students who got real guidance from people who&apos;ve actually been there.</p>
            <div className="hcta-stats">
              <span className="hcta-stat">Starts at ₹199</span>
              <span className="hcta-stat">Verified mentors</span>
              <span className="hcta-stat">100% unbiased</span>
              <span className="hcta-stat">Secure payments</span>
            </div>
          </div>
          <div className="hcta-r">
            <Link href="/university" className="btn-white">Find Your Mentor →</Link>
            <Link href="/register?role=mentor" className="btn-ghost-w">Become a Mentor</Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-brand">
          <span className="logo">Inside<span>Uni</span></span>
          <p className="fdesc">Real students. Real advice. No consultancy bias. Made in India 🇮🇳</p>
        </div>
        <div className="fcol"><h4>Platform</h4><Link href="/university">Find a Mentor</Link><Link href="/register?role=mentor">Become a Mentor</Link><Link href="/university">Browse Universities</Link><Link href="/forum">Community Forum</Link></div>
        <div className="fcol"><h4>Company</h4><a href="#">About Us</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Press</a></div>
        <div className="fcol"><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Refund Policy</a><a href="#">Contact</a></div>
      </footer>
      <div className="fbot"><span className="fcopy">© 2025 InsideUni Technologies Pvt. Ltd.</span><span className="fcopy">Made with ❤️ in Jaipur, India</span></div>
    </>
  );
}
