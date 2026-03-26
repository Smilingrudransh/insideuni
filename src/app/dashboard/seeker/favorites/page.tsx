import React from 'react';
import MentorCard from '../../../components/ui/MentorCard';

export default function SavedMentorsPage() {
  const savedMentors = [
    {
      id: 'm1',
      name: 'Priya Sharma',
      university: 'MIT',
      course: 'MSc Computer Science',
      year: 1,
      rating: 4.9,
      sessionsCount: 34,
      price: 500,
      isVerified: true,
      languages: ['English', 'Hindi'],
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    },
    {
      id: 'm3',
      name: 'Neha Verma',
      university: 'Stanford University',
      course: 'BSc Data Science',
      year: 3,
      rating: 5.0,
      sessionsCount: 89,
      price: 0,
      isVerified: true,
      languages: ['English', 'Telugu'],
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Saved Mentors</h1>
        <p className="text-text-secondary mt-1">Keep track of mentors you want to book later.</p>
      </div>

      {savedMentors.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-4xl gap-6">
          {savedMentors.map(mentor => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
        </div>
      ) : (
        <div className="bg-surface border border-border rounded-2xl p-12 text-center max-w-2xl">
          <h3 className="text-white font-medium text-lg mb-2">No saved mentors</h3>
          <p className="text-text-secondary mb-6">You haven't saved any mentors yet. Click the heart icon on a mentor's card to save them for later.</p>
        </div>
      )}
    </div>
  );
}
