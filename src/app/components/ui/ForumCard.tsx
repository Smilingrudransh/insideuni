import React from 'react';
import Link from 'next/link';
import { MessageSquare, ThumbsUp, Clock } from 'lucide-react';
import VerificationBadge from './VerificationBadge';

interface ForumCardProps {
  id: string;
  title: string;
  tags: string[];
  answerCount: number;
  upvotes: number;
  timeAgo: string;
  authorName: string;
  isAuthorVerified?: boolean;
}

export default function ForumCard({
  id,
  title,
  tags,
  answerCount,
  upvotes,
  timeAgo,
  authorName,
  isAuthorVerified = false,
}: ForumCardProps) {
  return (
    <Link href={`/forum/${id}`} className="block group">
      <div className="bg-surface rounded-xl border border-border p-5 hover:border-text-secondary transition-colors">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-display font-medium text-text-primary group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-col items-center justify-center bg-background rounded-lg p-2 min-w-16 shrink-0 border border-border">
            <ThumbsUp className="w-4 h-4 text-text-secondary mb-1" />
            <span className="font-medium text-text-primary text-sm">{upvotes}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-accent-2/30 text-accent text-xs rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-text-secondary border-t border-border pt-4 mt-auto">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              {authorName}
              {isAuthorVerified && <VerificationBadge />}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {timeAgo}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            <span>{answerCount} ans</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
