import React from 'react';
import Link from 'next/link';
import { Star, MessageCircle } from 'lucide-react';
import VerificationBadge from './VerificationBadge';

interface MentorCardProps {
  id: string;
  name: string;
  university: string;
  course: string;
  year: number;
  rating: number;
  sessionsCount: number;
  price: number;
  imageUrl?: string;
  isVerified: boolean;
  languages: string[];
}

export default function MentorCard({
  id,
  name,
  university,
  course,
  year,
  rating,
  sessionsCount,
  price,
  imageUrl,
  isVerified,
  languages,
}: MentorCardProps) {
  return (
    <div className="bg-surface rounded-2xl border border-border p-5 hover:border-accent/50 transition-all duration-300 flex flex-col h-full group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-accent-2 overflow-hidden flex-shrink-0 relative">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-text-primary text-xl font-display font-medium">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-display font-medium text-text-primary truncate">{name}</h3>
            {isVerified && <VerificationBadge />}
          </div>
          <p className="text-text-secondary text-sm truncate">{university}</p>
          <p className="text-text-secondary text-xs truncate">{course} • Year {year}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-1 text-sm bg-background px-2 py-1 rounded-md">
          <Star className="w-4 h-4 text-warning fill-current" />
          <span className="font-medium text-text-primary">{rating.toFixed(1)}</span>
          <span className="text-text-secondary">({sessionsCount})</span>
        </div>
        <div className="flex items-center gap-1 text-sm bg-background px-2 py-1 rounded-md text-text-secondary">
          {languages.join(', ')}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
        <div>
          <span className="text-sm text-text-secondary">Starting from</span>
          <p className="font-display font-medium text-text-primary">
            {price === 0 ? 'Free' : `₹${price}`}
            <span className="text-xs text-text-secondary font-body font-normal">/session</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Link 
            href={`/dashboard/seeker/messages?userId=${id}`}
            className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-text-primary hover:bg-surface hover:border-text-secondary transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link 
            href={`/mentor/${id}`}
            className="h-10 px-4 rounded-xl bg-accent text-white flex items-center justify-center font-medium font-display hover:bg-opacity-90 transition-opacity"
          >
            <span>Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
