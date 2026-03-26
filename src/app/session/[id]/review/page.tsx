import React from 'react';
import Link from 'next/link';
import { Star, CheckCircle2 } from 'lucide-react';

export default function SessionReviewPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-surface border border-border rounded-3xl p-8 shadow-2xl text-center">
        
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        
        <h1 className="text-2xl font-display font-semibold text-white mb-2">Session Completed!</h1>
        <p className="text-text-secondary text-sm mb-8">
          Hope you had a great conversation with Priya. Your payment of ₹399 has been released to the mentor.
        </p>

        <div className="bg-background border border-border rounded-xl p-6 mb-8 text-left">
          <h2 className="text-white font-medium mb-4 text-center">How was your experience?</h2>
          
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} className="p-1 hover:scale-110 transition-transform group">
                <Star className="w-8 h-8 text-border group-hover:text-warning group-hover:fill-warning transition-colors" />
              </button>
            ))}
          </div>

          <label className="block text-sm font-medium text-text-secondary mb-2">Write a review (optional)</label>
          <textarea 
            rows={3} 
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-warning resize-none text-sm placeholder-text-secondary/50 mb-4"
            placeholder="Priya's insights were incredibly helpful..."
          />
          
          <button className="w-full py-3 bg-white text-background rounded-lg font-medium hover:bg-opacity-90 transition-all font-display">
            Submit Review
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <Link href="/dashboard/seeker/sessions" className="text-text-secondary hover:text-white transition-colors">
            Go to Dashboard
          </Link>
          <span className="text-border">•</span>
          <Link href="/explore" className="text-accent hover:text-white transition-colors">
            Book Another Session
          </Link>
        </div>

      </div>
    </div>
  );
}
