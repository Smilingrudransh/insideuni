import React from 'react';
import Link from 'next/link';
import { MessageSquare, ThumbsUp, Clock, Share2, CornerDownRight } from 'lucide-react';
import VerificationBadge from '../../components/ui/VerificationBadge';

export default function SingleQuestionPage({ params }: { params: { id: string } }) {
  const question = {
    id: params.id,
    title: "How to justify a low GPA in SOP for MS CS in Top 20 US Universities?",
    body: "Hi everyone,\n\nI have a relatively low undergraduate GPA (7.2/10) from a Tier 2 college in India, but I have 2 years of solid work experience at a top tech company and a strong GRE score (325). \n\nI am aiming for Top 20 universities in the US for my Masters in Computer Science. Should I explicitly address my low GPA in my Statement of Purpose? If so, what's the best way to frame it without sounding like I'm making excuses?\n\nAny examples or advice from mentors who successfully navigated this would be highly appreciated!",
    tags: ["Admissions", "SOP", "USA", "Computer Science"],
    upvotes: 45,
    timeAgo: "2 hours ago",
    authorName: "Seeker123",
    isAuthorVerified: false
  };

  const answers = [
    {
      id: "a1",
      authorName: "Priya Sharma",
      isMentor: true,
      authorUni: "MIT",
      timeAgo: "1 hour ago",
      upvotes: 32,
      content: "Hi! I actually had a very similar profile (7.4 GPA, 2.5y work ex). \n\nYes, you should briefly address it, but don't dwell on it. The strategy is to 'sandwhich' it. Start with your strengths (work ex, GRE), briefly mention the GPA with a legitimate context (e.g., tough grading curve, a personal situation, or focusing heavily on practical projects), and immediately pivot to how you've demonstrated academic/professional excellence since then.\n\nFor example: 'While my early undergraduate grades reflect an adjustment period to rigorous engineering coursework, my subsequent upward trajectory and 2 years at [Company] leading [Project] demonstrate my readiness for graduate-level work.'\n\nHope this helps! Feel free to book a quick session if you want me to review your draft."
    },
    {
      id: "a2",
      authorName: "FutureGrad24",
      isMentor: false,
      authorUni: null,
      timeAgo: "30 mins ago",
      upvotes: 5,
      content: "Following! I'm in the exact same boat but aiming for Fall 2025."
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-4 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/forum" className="text-sm font-medium text-text-secondary hover:text-white transition-colors mb-6 inline-block">
          &larr; Back to Forum
        </Link>

        {/* Question */}
        <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-accent-2/30 text-accent text-xs rounded-md font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6 leading-snug">
            {question.title}
          </h1>
          
          <div className="prose prose-invert max-w-none text-text-secondary whitespace-pre-line mb-8">
            {question.body}
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center font-display font-medium text-white">
                {question.authorName.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-white flex items-center gap-1">
                  {question.authorName} {question.isAuthorVerified && <VerificationBadge />}
                </div>
                <div className="text-xs text-text-secondary flex items-center gap-1 text-opacity-80">
                  <Clock className="w-3 h-3" /> {question.timeAgo}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-lg text-text-primary hover:text-white hover:border-text-secondary transition-all">
                <ThumbsUp className="w-4 h-4" /> <span>{question.upvotes}</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-lg text-text-primary hover:text-white hover:border-text-secondary transition-all">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Answers Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-medium text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent" /> {answers.length} Answers
            </h2>
          </div>

          <div className="space-y-6">
            {answers.map(ans => (
              <div key={ans.id} className={`bg-surface rounded-2xl border ${ans.isMentor ? 'border-accent/40 shadow-[0_0_15px_rgba(233,69,96,0.05)]' : 'border-border'} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-medium text-white ${ans.isMentor ? 'bg-accent' : 'bg-background'}`}>
                      {ans.authorName.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white flex items-center gap-2">
                        {ans.authorName} 
                        {ans.isMentor && (
                          <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full border border-accent/20">
                            <VerificationBadge /> Mentor @ {ans.authorUni}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-text-secondary flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" /> {ans.timeAgo}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-text-secondary whitespace-pre-line text-sm md:text-base">
                  {ans.content}
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <button className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors">
                    <ThumbsUp className="w-4 h-4" /> {ans.upvotes}
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors">
                    <CornerDownRight className="w-4 h-4" /> Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-surface border border-border rounded-xl p-4">
            <h3 className="text-white font-medium mb-3">Your Answer</h3>
            <textarea 
              rows={4} 
              placeholder="Write your answer..." 
              className="w-full bg-background border border-border rounded-lg p-3 text-white focus:outline-none focus:border-accent resize-none mb-3"
            />
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
                Post Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
