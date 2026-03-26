import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InsideUni — Real Students. Real Guidance.",
  description: "Talk to real students at your dream university. Get honest answers about admissions, scholarships, student life — no consultancy bias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,300;1,9..144,500;1,9..144,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Custom cursor */}
        <div id="cur" />
        <div id="cur-r" />
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          // CURSOR
          const cur=document.getElementById('cur'),curR=document.getElementById('cur-r');
          let mx=0,my=0,rx=0,ry=0;
          document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
          (function animR(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(animR)})();
          document.addEventListener('mouseover',e=>{
            if(e.target.closest('button,a,.fc,.ucard,.tcard,.bcard,.hstep,.mstep,.mbcard,.auth-tab,.role-opt,.filter-btn,.upill')){
              cur.style.width='18px';cur.style.height='18px';cur.style.background='#f56040';
              curR.style.width='46px';curR.style.height='46px';curR.style.borderColor='rgba(245,96,64,.4)';
            } else {
              cur.style.width='10px';cur.style.height='10px';cur.style.background='#2047d4';
              curR.style.width='34px';curR.style.height='34px';curR.style.borderColor='rgba(32,71,212,.3)';
            }
          });
          // SCROLL REVEAL
          function initReveal(){
            setTimeout(()=>{
              const obs=new IntersectionObserver(en=>en.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')}),{threshold:.1});
              document.querySelectorAll('.reveal:not(.vis)').forEach(el=>obs.observe(el));
              document.querySelectorAll('.hstep,.mstep,.tcard,.bcard,.mbcard,.ucard').forEach((el,i)=>{
                if(!el.classList.contains('reveal')){el.classList.add('reveal');el.style.transitionDelay=(i%4)*.08+'s'}
                obs.observe(el);
              });
            },80);
          }
          initReveal();
        `}} />
      </body>
    </html>
  );
}
