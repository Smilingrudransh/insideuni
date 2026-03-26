"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // CURSOR
    const cur = document.getElementById("cur");
    const curR = document.getElementById("cur-r");
    
    if (!cur || !curR) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
    };

    let reqId: number;
    function animR() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (curR) {
        curR.style.left = rx + "px";
        curR.style.top = ry + "px";
      }
      reqId = requestAnimationFrame(animR);
    }
    reqId = requestAnimationFrame(animR);

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("button,a,.fc,.ucard,.tcard,.bcard,.hstep,.mstep,.mbcard,.auth-tab,.role-opt,.filter-btn,.upill")) {
        cur.style.width = "18px";
        cur.style.height = "18px";
        cur.style.background = "#f56040";
        curR.style.width = "46px";
        curR.style.height = "46px";
        curR.style.borderColor = "rgba(245,96,64,.4)";
      } else {
        cur.style.width = "10px";
        cur.style.height = "10px";
        cur.style.background = "#2047d4";
        curR.style.width = "34px";
        curR.style.height = "34px";
        curR.style.borderColor = "rgba(32,71,212,.3)";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(reqId);
    };
  }, []);

  // SCROLL REVEAL
  useEffect(() => {
    const obs = new IntersectionObserver(
      (en) =>
        en.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
          }
        }),
      { threshold: 0.1 }
    );

    const timer1 = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.vis)").forEach((el) => obs.observe(el));
    }, 80);

    const timer2 = setTimeout(() => {
      document
        .querySelectorAll(".hstep,.mstep,.tcard,.bcard,.mbcard,.ucard")
        .forEach((el, i) => {
          if (!el.classList.contains("reveal")) {
            el.classList.add("reveal");
            (el as HTMLElement).style.transitionDelay = (i % 4) * 0.08 + "s";
          }
          obs.observe(el);
        });
    }, 80);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      obs.disconnect();
    };
  }, [pathname]);

  return null;
}
