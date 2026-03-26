import React from 'react';
import { Check } from 'lucide-react';

export default function VerificationBadge() {
  return (
    <div className="relative group inline-flex items-center justify-center">
      <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center relative overflow-hidden shrink-0">
        <Check className="w-3 h-3 text-white z-10" strokeWidth={3} />
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-surface border border-border rounded text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        Verified via university email
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-border" />
      </div>
    </div>
  );
}
