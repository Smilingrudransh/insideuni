import React from 'react';
import Link from 'next/link';
import { Star, MapPin, GraduationCap, Clock, MessageCircle, CalendarDays, ThumbsUp } from 'lucide-react';
import VerificationBadge from '../../components/ui/VerificationBadge';

export default function MentorProfilePage({ params }: { params: { id: string } }) {
  // Mock data for the mentor profile
  const mentor = {
    id: params.id,
    name: "Priya Sharma",
    university: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, USA",
    course: "MSc Computer Science",
    year: "1st Year Masters",
    rating: 4.9,
    sessionsCount: 34,
    languages: ["English", "Hindi"],
    isVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Hi! I'm Priya. I recently graduated from IIT Delhi and made my way to MIT for my Masters in CS. I specialize in Artificial Intelligence and Systems. I remember how overwhelming the application process was - from writing the perfect SOP to preparing for interviews. I'm here to help you navigate everything from application strategies to what life is actually like here in Cambridge!",
    tags: ["Admissions Strategy", "SOP Review", "F1 Visa", "Housing", "Research Opportunities"],
    sessionTypes: [
      { id: "s1", title: "Quick Chat", duration: 15, price: 199, desc: "Perfect for quick questions about life at MIT or specific application doubts." },
      { id: "s2", title: "Deep Dive", duration: 30, price: 399, desc: "Detailed review of one application component (e.g. SOP, Resume) or interview prep." },
      { id: "s3", title: "Full Guidance", duration: 60, price: 699, desc: "Comprehensive strategy session covering university selection, timelines, and profile building." }
    ],
    reviews: [
      { id: 1, name: "Rahul D.", rating: 5, date: "2 weeks ago", comment: "Priya's insights on the MIT CS program were incredibly helpful. Her feedback on my SOP completely transformed my narrative." },
      { id: 2, name: "Sneha Reddy", rating: 5, date: "1 month ago", comment: "Super friendly and approachable. Cleared all my doubts regarding funding and RA/TA ships." }
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-accent-2/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
              <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden bg-surface shrink-0">
                <img src={mentor.imageUrl} alt={mentor.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-display font-semibold text-white">{mentor.name}</h1>
                  {mentor.isVerified && <VerificationBadge />}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-text-secondary text-sm">
                  <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> {mentor.university}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {mentor.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6 py-4 border-y border-border">
              <div>
                <div className="flex items-center gap-1 text-warning mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold text-white text-lg">{mentor.rating}</span>
                </div>
                <div className="text-xs text-text-secondary">({mentor.sessionsCount} sessions)</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="font-semibold text-white text-lg mb-1">{mentor.course}</div>
                <div className="text-xs text-text-secondary">{mentor.year}</div>
              </div>
            </div>

            {/* Bio & Tags */}
            <section>
              <h2 className="text-xl font-display font-medium text-white mb-4">About Me</h2>
              <p className="text-text-secondary leading-relaxed mb-6">{mentor.bio}</p>
              
              <div className="flex flex-wrap gap-2">
                {mentor.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-surface border border-border text-sm text-text-primary rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Session Types (Mobile Only - moved to sticky sidebar on desktop) */}
            <section className="lg:hidden space-y-4 pt-6 border-t border-border">
              <h2 className="text-xl font-display font-medium text-white mb-4">Available Sessions</h2>
              {mentor.sessionTypes.map(session => (
                <div key={session.id} className="bg-surface border border-border p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-white">{session.title}</h3>
                    <span className="font-display font-semibold text-accent">₹{session.price}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{session.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-text-secondary bg-background w-fit px-2 py-1 rounded">
                    <Clock className="w-3 h-3" /> {session.duration} mins
                  </div>
                  <Link href={`/book/${mentor.id}?type=${session.id}`} className="w-full mt-2 py-2 bg-accent text-white rounded-lg font-medium text-sm text-center hover:bg-opacity-90">
                    Book Session
                  </Link>
                </div>
              ))}
            </section>

            {/* Reviews */}
            <section className="pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-medium text-white">Student Reviews</h2>
                <div className="flex items-center gap-1 text-sm bg-surface px-3 py-1.5 rounded-lg border border-border">
                  <ThumbsUp className="w-4 h-4 text-warning" />
                  <span className="text-text-primary text-sm font-medium">98% recommend</span>
                </div>
              </div>

              <div className="space-y-4">
                {mentor.reviews.map(review => (
                  <div key={review.id} className="bg-surface border border-border p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-white">{review.name}</div>
                        <div className="text-xs text-text-secondary">{review.date}</div>
                      </div>
                      <div className="flex text-warning">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 border border-border rounded-xl text-sm font-medium text-text-primary hover:bg-surface transition-colors">
                View all {mentor.sessionsCount} reviews
              </button>
            </section>
          </div>

          {/* Sticky Sidebar (Desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Message CTA */}
              <div className="bg-surface border border-border p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white mb-1">Have a quick question?</h3>
                  <p className="text-xs text-text-secondary">Average response time: 2 hours</p>
                </div>
                <Link href={`/dashboard/seeker/messages?userId=${mentor.id}`} className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-text-primary hover:bg-accent hover:border-accent hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>

              {/* Sessions */}
              <div className="bg-surface border border-border rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-border bg-background/50">
                  <h3 className="font-display font-medium text-white flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-text-secondary" />
                    Book a 1-on-1 Session
                  </h3>
                </div>
                <div className="p-2 space-y-2">
                  {mentor.sessionTypes.map(session => (
                    <div key={session.id} className="p-4 rounded-xl hover:bg-background transition-colors border border-transparent hover:border-border group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-white">{session.title}</h4>
                        <span className="font-display font-semibold text-accent">₹{session.price}</span>
                      </div>
                      <p className="text-xs text-text-secondary mb-3 line-clamp-2">{session.desc}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-text-secondary">
                          <Clock className="w-3 h-3" /> {session.duration} mins
                        </div>
                        <Link href={`/book/${mentor.id}?type=${session.id}`} className="px-4 py-1.5 bg-accent text-white rounded-lg text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                          Select
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-surface border border-border p-5 rounded-2xl">
                <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-3">Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.languages.map(lang => (
                    <span key={lang} className="px-2 py-1 bg-background rounded text-sm text-text-primary">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
