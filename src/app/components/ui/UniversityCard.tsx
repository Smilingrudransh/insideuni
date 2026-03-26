import React from 'react';
import Link from 'next/link';
import { GraduationCap, MapPin } from 'lucide-react';

interface UniversityCardProps {
  slug: string;
  name: string;
  location: string;
  mentorCount: number;
  studentCountStr: string;
  acceptanceRate: string;
  imageUrl?: string;
  logoUrl?: string;
  bgClasses?: string;
}

export default function UniversityCard({
  slug,
  name,
  location,
  mentorCount,
  studentCountStr,
  acceptanceRate,
  imageUrl,
  logoUrl,
  bgClasses = "bg-[#ffffff] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 rounded-3xl",
}: UniversityCardProps) {
  return (
    <Link href={`/university/${slug}`} className="group block h-full">
      <div className={`overflow-hidden h-full flex flex-col relative ${bgClasses}`}>
        {/* Premium Header Area */}
        <div className="h-36 bg-gradient-to-br from-accent via-accent/80 to-accent-2/60 relative overflow-hidden">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={`${name} campus`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 mix-blend-overlay"
            />
          )}
          {/* Subtle inner shadow/gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="px-6 pb-6 pt-0 flex-1 flex flex-col relative">
          {/* Premium Badge */}
          <div className="w-16 h-16 rounded-2xl bg-[#ffffff] shadow-[0_8px_30px_rgb(0,0,0,0.12)] -mt-8 mb-4 z-10 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
            {logoUrl ? (
              <img src={logoUrl} alt={`${name} logo`} className="w-full h-full object-contain" />
            ) : (
              <GraduationCap className="w-8 h-8 text-text-secondary" />
            )}
          </div>
          
          <h3 className="text-xl font-display font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">{name}</h3>
          <div className="flex items-center gap-1.5 text-text-secondary text-sm mb-5 font-medium">
            <MapPin className="w-4 h-4 text-accent/70" />
            <span>{location}</span>
          </div>
          
          <div className="mt-auto grid grid-cols-2 gap-3 text-sm border-t border-border/40 pt-5">
            <div className="flex flex-col">
              <span className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-1">Acceptance</span>
              <span className="font-bold text-text-primary text-base">{acceptanceRate}</span>
            </div>
            <div className="flex flex-col pl-4 border-l border-border/40">
              <span className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-1">Students</span>
              <span className="font-bold text-text-primary text-base">{studentCountStr}</span>
            </div>
          </div>
          
          <div className="mt-5 pt-5 border-t border-border/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-secondary font-medium">
                {mentorCount}+ Mentors
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
