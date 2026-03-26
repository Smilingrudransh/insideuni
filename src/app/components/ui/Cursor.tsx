"use client";

import React, { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const curR = document.getElementById('cur-r');
    if (!cur || !curR) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };

    let animationFrameId: number;
    const animR = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      curR.style.left = rx + 'px';
      curR.style.top = ry + 'px';
      animationFrameId = requestAnimationFrame(animR);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .fc, .ucard, .tcard, .bcard, .hstep, .mstep, .mbcard, .auth-tab, .role-opt, .filter-btn, .upill')) {
        cur.style.width = '18px';
        cur.style.height = '18px';
        cur.style.background = '#f56040';
        curR.style.width = '46px';
        curR.style.height = '46px';
        curR.style.borderColor = 'rgba(245,96,64,.4)';
      } else {
        cur.style.width = '10px';
        cur.style.height = '10px';
        cur.style.background = 'var(--accent)';
        curR.style.width = '34px';
        curR.style.height = '34px';
        curR.style.borderColor = 'rgba(32,71,212,.3)';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    animR();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="cur" />
      <div id="cur-r" />
    </>
  );
}
