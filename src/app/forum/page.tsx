import React from 'react';
import Link from 'next/link';
import { Search, PenLine, Flame, Sparkles, Clock } from 'lucide-react';
import ForumCard from '../components/ui/ForumCard';

export default function ForumPage() {
  const categories = [
    "All", "Admissions", "Scholarships", "Visa", "Student Life", "Housing", "Course Selection"
  ];

  const MOCK_QUESTIONS = [
    {
      id: "q1",
      title: "How to justify a low GPA in SOP for MS CS in Top 20 US Universities?",
      tags: ["Admissions", "SOP", "USA", "Computer Science"],
      answerCount: 8,
      upvotes: 45,
      timeAgo: "2 hours ago",
      authorName: "Seeker123"
    },
    {
      id: "q2",
      title: "Is it easy to get TA/RA roles at Oxford for Master's students in first term?",
      tags: ["Funding", "UK", "Oxford", "Student Life"],
      answerCount: 3,
      upvotes: 21,
      timeAgo: "5 hours ago",
      authorName: "Aditi S.",
      isAuthorVerified: false
    },
    {
      id: "q3",
      title: "[Guide] Preparing for F1 Visa Interview - Common questions and pitfalls",
      tags: ["Visa", "USA", "Guide"],
      answerCount: 14,
      upvotes: 112,
      timeAgo: "1 day ago",
      authorName: "Priya Sharma",
      isAuthorVerified: true
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-4 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-white mb-2">Community Forum</h1>
            <p className="text-text-secondary">Ask questions, share experiences, and get advice from verified students.</p>
          </div>
          <Link href="/forum/ask" className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
            <PenLine className="w-4 h-4" />
            Ask Question
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Feed */}
          <div className="flex-1 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search discussions by keyword or university..." 
                className="w-full bg-surface border border-border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent"
              />
            </div>

            {/* Mobile Categories Overflow */}
            <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-none">
              {categories.map(cat => (
                <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${cat === 'All' ? 'bg-accent text-white' : 'bg-surface border border-border text-text-secondary'}`}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {MOCK_QUESTIONS.map(q => (
                <ForumCard key={q.id} {...q} />
              ))}
            </div>
            
            <button className="w-full py-3 border border-border rounded-xl text-text-secondary font-medium hover:bg-surface transition-colors">
              Load More Discussions
            </button>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-6">
            <div className="bg-surface border border-border rounded-xl p-5 hidden lg:block">
              <h3 className="font-display font-medium text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button key={cat} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${cat === 'All' ? 'bg-background text-accent' : 'text-text-secondary hover:text-white hover:bg-background'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5">
              <h3 className="font-display font-medium text-white flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-warning" /> Trending Unanswered
              </h3>
              <div className="space-y-4">
                {[
                  "Which is better for AI: CMU or Stanford?",
                  "Experience with DAAD scholarship process?",
                  "Off-campus housing near NUS recommendations?"
                ].map((q, i) => (
                  <Link href={`/forum/q${i}`} key={i} className="block group">
                    <h4 className="text-sm text-text-secondary group-hover:text-accent font-medium leading-snug line-clamp-2">{q}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
