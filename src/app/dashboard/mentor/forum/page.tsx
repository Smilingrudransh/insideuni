import React from 'react';
import Link from 'next/link';
import { PenLine, ThumbsUp, MessageSquare, Flame } from 'lucide-react';

export default function MentorForumPage() {
  const unansweredQuestions = [
    {
      id: "q1",
      title: "How to justify a low GPA in SOP for MS CS in Top 20 US Universities?",
      tags: ["Admissions", "SOP", "USA", "Computer Science"],
      upvotes: 45,
      timeAgo: "2 hours ago"
    },
    {
      id: "q2",
      title: "Research assistant opportunities for Master's students in first term?",
      tags: ["Funding", "USA", "MIT"],
      upvotes: 21,
      timeAgo: "5 hours ago"
    }
  ];

  const myAnswers = [
    {
      id: "a1",
      questionTitle: "[Guide] Preparing for F1 Visa Interview - Common questions and pitfalls",
      content: "Great guide! Just to add to point #3 regarding funding proof: it's perfectly fine to show an education loan from HDFC Credila or Prodigy Finance as your primary source of funds...",
      upvotes: 32,
      timeAgo: "1 day ago"
    }
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Forum Contributions</h1>
        <p className="text-text-secondary mt-1">Answer questions to build your reputation and attract more seekers.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Unanswered Questions targeted at Mentor */}
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-display font-medium text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-warning" /> 
                Recommended for You
              </h2>
            </div>
            <div className="divide-y divide-border">
              {unansweredQuestions.map(q => (
                <div key={q.id} className="p-6 hover:bg-background/30 transition-colors">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {q.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 bg-accent-2/20 text-accent rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/forum/${q.id}`} className="block group mb-3">
                    <h3 className="text-lg font-medium text-white group-hover:text-accent transition-colors leading-snug">
                      {q.title}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-text-secondary">
                      <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> {q.upvotes}</span>
                      <span>{q.timeAgo}</span>
                    </div>
                    <Link href={`/forum/${q.id}`} className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-white bg-background border border-border px-4 py-1.5 rounded-lg transition-colors">
                      <PenLine className="w-4 h-4" /> Answer
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Answers */}
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="font-display font-medium text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent" /> 
                Your Answers
              </h2>
            </div>
            <div className="divide-y divide-border">
              {myAnswers.map(ans => (
                <div key={ans.id} className="p-6 hover:bg-background/30 transition-colors">
                  <Link href={`/forum/q_sample`} className="block text-sm font-medium text-text-secondary hover:text-white transition-colors mb-3 line-clamp-1">
                    Q: {ans.questionTitle}
                  </Link>
                  <p className="text-sm text-text-primary mb-4 line-clamp-3">
                    {ans.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-text-secondary">
                      <span className="flex items-center gap-1 text-success"><ThumbsUp className="w-3.5 h-3.5" /> {ans.upvotes} upvotes</span>
                      <span>{ans.timeAgo}</span>
                    </div>
                    <button className="text-xs font-medium text-text-secondary hover:text-white transition-colors">
                      Edit Answer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-accent-2/20 to-surface border border-accent/20 rounded-2xl p-6">
            <h3 className="font-display font-medium text-white mb-4">Forum Impact</h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">42</div>
                <div className="text-sm text-text-secondary">Total Answers</div>
              </div>
              <div className="h-px bg-border my-2" />
              <div>
                <div className="text-3xl font-bold text-white mb-1">856</div>
                <div className="text-sm text-text-secondary">Total Upvotes Received</div>
              </div>
              <div className="h-px bg-border my-2" />
              <div>
                <div className="text-3xl font-bold text-success mb-1">12</div>
                <div className="text-sm text-text-secondary">Bookings from Forum</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-text-secondary leading-relaxed">
              Mentors who actively answer questions on the forum get <strong className="text-white">3x more session bookings</strong> on average.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
