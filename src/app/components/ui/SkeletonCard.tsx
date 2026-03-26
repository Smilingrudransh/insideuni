import React from 'react';

export function SkeletonCard() {
  return (
    <div className="bg-surface rounded-2xl border border-border p-5 h-full flex flex-col animate-pulse">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-background flex-shrink-0" />
        <div className="flex-1 w-full space-y-2 mt-2">
          <div className="h-5 bg-background rounded w-3/4" />
          <div className="h-3 bg-background rounded w-1/2" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-background rounded w-16" />
        <div className="h-6 bg-background rounded w-20" />
      </div>
      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
        <div className="space-y-1 w-1/3">
          <div className="h-3 bg-background rounded w-full" />
        </div>
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-xl bg-background" />
          <div className="w-20 h-10 rounded-xl bg-background" />
        </div>
      </div>
    </div>
  );
}
