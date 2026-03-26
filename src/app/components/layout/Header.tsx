"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Universities', href: '/university' },
    { label: 'Become a Mentor', href: '/mentor' },
    { label: 'Explore Mentors', href: '/explore' },
  ];

  const isActive = (path: string) => path === '/' ? pathname === '/' : pathname?.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#ffffff]/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <Link href="/" className="flex items-center gap-3 relative z-10">
            <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-[#ffffff] font-['Inter',_'Helvetica',_sans-serif] font-bold text-xl shadow-md">I</div>
            <span className="font-['Inter',_'Helvetica',_sans-serif] font-bold text-2xl tracking-tight text-gray-900">InsideUni</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.href) ? 'text-[#1E3A8A]' : 'text-gray-600 hover:text-[#1E3A8A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5 relative z-10">
            <Link href="/register" className="text-sm font-semibold bg-[#1E3A8A] text-[#ffffff] px-5 py-2.5 rounded-lg shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:shadow-[0_6px_20px_rgba(30,58,138,0.23)] hover:-translate-y-0.5 transition-all duration-200">
              Access the network.
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-600 hover:text-[#1E3A8A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-gray-200 absolute w-full left-0 top-16 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-3 rounded-md text-base font-semibold ${
                  isActive(link.href) ? 'bg-[#F3F4F6] text-[#1E3A8A]' : 'text-gray-600 hover:bg-[#F3F4F6] hover:text-[#1E3A8A]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-2 flex flex-col gap-2">
              <Link href="/register" className="block text-center px-3 py-2 rounded-md text-base font-semibold bg-[#1E3A8A] text-[#ffffff] hover:bg-opacity-90" onClick={() => setIsMobileMenuOpen(false)}>Access the network.</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
