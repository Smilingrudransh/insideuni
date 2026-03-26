import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-xl">I</div>
              <span className="font-display font-semibold text-xl tracking-tight text-white">InsideUni</span>
            </Link>
            <p className="text-text-secondary text-sm mb-4">
              Real students, real advice. Connect with peers at global universities.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display font-medium mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/explore" className="text-text-secondary hover:text-white text-sm transition-colors">Find a Mentor</Link></li>
              <li><Link href="/university" className="text-text-secondary hover:text-white text-sm transition-colors">Universities</Link></li>
              <li><Link href="/forum" className="text-text-secondary hover:text-white text-sm transition-colors">Community Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-medium mb-4">For Mentors</h4>
            <ul className="space-y-3">
              <li><Link href="/register?role=mentor" className="text-text-secondary hover:text-white text-sm transition-colors">Become a Mentor</Link></li>
              <li><Link href="/login" className="text-text-secondary hover:text-white text-sm transition-colors">Mentor Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-text-secondary hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-text-secondary hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} InsideUni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
