import Link from 'next/link';
import { notFound } from 'next/navigation';

const UNI_DATA: Record<string, {
  name: string; country: string; flag: string; banner: string; emoji: string;
  mentors: {initials:string;color:string;name:string;course:string;tags:string[];price:number;rating:number;sessions:number;verified:boolean}[];
  about: string; tags: string[]; rating: number; sessions: number; price: number;
}> = {
  mit: {
    name:'MIT', country:'🇺🇸 USA', flag:'🇺🇸', banner:'#dbeafe', emoji:'🏛️',
    about:'The Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. MIT has played a key role in the development of modern technology and science.',
    tags:['CS','Engineering','Physics','MBA'], rating:4.9, sessions:1240, price:399,
    mentors:[
      {initials:'AK',color:'av-blue',name:'Arjun Kumar',course:'CS PhD Y2',tags:['Admissions','Research','SOP'],price:399,rating:4.9,sessions:127,verified:true},
      {initials:'SM',color:'av-amber',name:'Siddharth Mehta',course:'MS EECS',tags:['Student Life','GRE','Funding'],price:299,rating:4.8,sessions:64,verified:true},
      {initials:'AP',color:'av-green',name:'Ananya Patel',course:'PhD Materials Science',tags:['Research','Scholarships','Housing'],price:349,rating:5.0,sessions:88,verified:true},
    ]
  },
  oxford: {
    name:'University of Oxford', country:'🇬🇧 UK', flag:'🇬🇧', banner:'#f3e8ff', emoji:'🏰',
    about:'The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world.',
    tags:['PPE','Law','MBA','Sciences'], rating:4.9, sessions:890, price:329,
    mentors:[
      {initials:'PS',color:'av-amber',name:'Priya Sharma',course:'MBA',tags:['Student Life','Visa','Scholarships'],price:299,rating:4.8,sessions:84,verified:true},
      {initials:'RK',color:'av-purple',name:'Rohan Kumar',course:'MSc Economics',tags:['Admissions','Funding','SOP'],price:329,rating:4.9,sessions:52,verified:true},
    ]
  },
  stanford: {
    name:'Stanford University', country:'🇺🇸 USA', flag:'🇺🇸', banner:'#fce7f3', emoji:'🌲',
    about:'Stanford University is a private research university in Stanford, California. Known for its academic strength, wealth, proximity to Silicon Valley, and ranking as one of the world\'s top universities.',
    tags:['CS','Business','Medicine','Engineering'], rating:4.9, sessions:980, price:349,
    mentors:[
      {initials:'NV',color:'av-green',name:'Neha Verma',course:'BSc Data Science',tags:['Research','Admissions','LOR'],price:0,rating:5.0,sessions:89,verified:true},
      {initials:'VP',color:'av-blue',name:'Vikram Patel',course:'MS CS',tags:['AI','Admissions','SOP'],price:399,rating:4.9,sessions:110,verified:true},
    ]
  },
  'eth-zurich': {
    name:'ETH Zurich', country:'🇨🇭 Switzerland', flag:'🇨🇭', banner:'#fef3c7', emoji:'⚡',
    about:'ETH Zurich is a public research university in Zürich, Switzerland, founded in 1854. It focuses on science, technology, engineering and mathematics, and is consistently ranked among the top universities globally.',
    tags:['Engineering','CS','Physics','Architecture'], rating:4.9, sessions:610, price:279,
    mentors:[
      {initials:'KS',color:'av-purple',name:'Karan Singh',course:'MSc Mechanical Eng',tags:['Engineering','Housing','Visa'],price:300,rating:4.7,sessions:5,verified:false},
      {initials:'DP',color:'av-coral',name:'Divya Pillai',course:'MSc CS',tags:['Admissions','Research','SOP'],price:279,rating:4.8,sessions:37,verified:true},
    ]
  },
};

// Default data for any slug not in our map
const DEFAULT = {
  name:'University', country:'🌍 International', flag:'🌍', banner:'#f3f4f6', emoji:'🎓',
  about:'A world-class institution offering top-tier education and research opportunities.',
  tags:['Various'], rating:4.8, sessions:200, price:299,
  mentors:[
    {initials:'M1',color:'av-blue',name:'Verified Mentor',course:'Graduate Student',tags:['Admissions','Student Life'],price:299,rating:4.8,sessions:30,verified:true},
  ]
};

export default async function UniversityDetailPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const uni = UNI_DATA[slug] ?? { ...DEFAULT, name: slug.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase()) };

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
          <Link href="/login" className="btn-ghost">Log in</Link>
          <Link href="/register" className="btn-nav">Sign up free →</Link>
        </div>
      </nav>

      {/* Banner */}
      <div style={{height:220,background:uni.banner,display:'flex',alignItems:'center',justifyContent:'center',fontSize:72,position:'relative',marginTop:66}}>
        {uni.emoji}
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:60,background:'linear-gradient(to top, var(--bg), transparent)'}} />
      </div>

      <div className="sw" style={{paddingTop:40}}>
        {/* Header */}
        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',flexWrap:'wrap',gap:20,marginBottom:48}}>
          <div>
            <div className="section-label"><span />{uni.country}<span /></div>
            <h1 style={{fontFamily:'Fraunces,serif',fontSize:'clamp(32px,4vw,54px)',letterSpacing:-2,lineHeight:1.06,color:'var(--text)',marginBottom:12}}>{uni.name}</h1>
            <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:16}}>
              {uni.tags.map(t=><span key={t} className="chip chip-blue">{t}</span>)}
            </div>
            <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
              <div className="proof-stat"><div className="p-num">{uni.rating}★</div><div className="p-lbl">Avg Rating</div></div>
              <div className="proof-div" />
              <div className="proof-stat"><div className="p-num">{uni.sessions}+</div><div className="p-lbl">Sessions Done</div></div>
              <div className="proof-div" />
              <div className="proof-stat"><div className="p-num">From ₹{uni.price}</div><div className="p-lbl">Per Session</div></div>
            </div>
          </div>
          <Link href="/login" className="btn-primary">Find a Mentor Here →</Link>
        </div>

        {/* About */}
        <div className="sw-alt" style={{borderRadius:22,marginBottom:32,padding:0}}>
          <div style={{padding:'32px 36px'}}>
            <div className="section-label"><span />About<span /></div>
            <p style={{color:'var(--text2)',fontSize:15,lineHeight:1.8,fontWeight:300,maxWidth:720}}>{uni.about}</p>
          </div>
        </div>

        {/* Mentors */}
        <div style={{marginTop:48}}>
          <div className="section-label"><span />Verified Mentors<span /></div>
          <h2 className="serif">Talk to students <em>already there</em></h2>
          <div className="tgrid" style={{marginTop:32}}>
            {uni.mentors.map((m, i) => (
              <div key={i} className="tcard">
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:16}}>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    <div className={`av ${m.color}`} style={{width:48,height:48,fontSize:15}}>{m.initials}</div>
                    <div>
                      <div style={{fontWeight:600,fontSize:14,color:'var(--text)',display:'flex',alignItems:'center',gap:5}}>
                        {m.name} {m.verified && <div className="vbadge">✓</div>}
                      </div>
                      <div style={{fontSize:12,color:'var(--muted)',marginTop:2}}>{uni.flag} {uni.name}</div>
                      <div style={{fontSize:11.5,color:'var(--muted)'}}>{m.course}</div>
                    </div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div className="cprice">{m.price===0?'Free':`₹${m.price}`}</div>
                    <div className="cpunit">/ 30 min</div>
                  </div>
                </div>
                <div className="ctag-row">{m.tags.map(t=><span key={t} className="chip chip-blue">{t}</span>)}</div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid var(--border)',paddingTop:12,marginTop:4}}>
                  <div style={{fontSize:12,color:'var(--muted)',display:'flex',alignItems:'center',gap:4}}><span style={{color:'#f59e0b'}}>★</span>{m.rating} · {m.sessions} sessions</div>
                  <Link href="/login" className="btn-primary" style={{padding:'8px 18px',fontSize:12,borderRadius:100}}>Book →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-brand"><span className="logo">Inside<span>Uni</span></span><p className="fdesc">Real students. Real advice. No consultancy bias. Made in India 🇮🇳</p></div>
        <div className="fcol"><h4>Platform</h4><Link href="/university">Find a Mentor</Link><Link href="/register?role=mentor">Become a Mentor</Link><Link href="/university">Browse Universities</Link></div>
        <div className="fcol"><h4>Company</h4><a href="#">About Us</a><a href="#">Blog</a><a href="#">Careers</a></div>
        <div className="fcol"><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Contact</a></div>
      </footer>
      <div className="fbot"><span className="fcopy">© 2025 InsideUni Technologies Pvt. Ltd.</span><span className="fcopy">Made with ❤️ in Jaipur, India</span></div>
    </>
  );
}
