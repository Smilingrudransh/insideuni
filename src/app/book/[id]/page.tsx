import React from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

export default function BookingPage({ params, searchParams }: { params: { id: string }, searchParams: { type?: string } }) {
  // Mock Data
  const mentor = {
    name: "Priya Sharma",
    university: "MIT",
    course: "MSc Computer Science",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    sessionType: searchParams.type === 's1' ? "Quick Chat" : "Deep Dive",
    duration: searchParams.type === 's1' ? 15 : 30,
    price: searchParams.type === 's1' ? 199 : 399,
  };

  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link href={`/mentor/${params.id}`} className="text-sm font-medium text-text-secondary hover:text-white transition-colors mb-4 inline-block">
            &larr; Back to Profile
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white">Book a Session</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Step 1: Schedule */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-display font-medium shrink-0">1</div>
                <h2 className="text-xl font-display font-medium text-white">Select Date & Time</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mock Calendar */}
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-3 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" /> October 2026
                  </h3>
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <div key={d} className="text-xs text-text-secondary py-1">{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty slots for spacing */}
                    <div className="aspect-square"></div>
                    <div className="aspect-square"></div>
                    <div className="aspect-square"></div>
                    
                    {Array.from({length: 31}, (_, i) => i + 1).map(day => {
                      const isActive = day === 24;
                      const isAvailable = [24, 25, 27, 28].includes(day);
                      return (
                        <button 
                          key={day} 
                          disabled={!isAvailable}
                          className={`
                            aspect-square rounded-full flex items-center justify-center text-sm transition-colors
                            ${isActive ? 'bg-accent text-white font-medium' : ''}
                            ${!isActive && isAvailable ? 'bg-background hover:bg-surface border border-border text-white' : ''}
                            ${!isAvailable && !isActive ? 'text-text-secondary/30 cursor-not-allowed' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mock Timeslots */}
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Available Slots (IST)
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['09:00 AM', '10:00 AM', '04:00 PM', '05:00 PM', '06:00 PM'].map((time, i) => (
                      <button 
                        key={time}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors border ${i === 4 ? 'bg-accent border-accent text-white' : 'bg-background border-border text-text-secondary hover:text-white hover:border-text-secondary'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Details */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-background border border-border text-text-secondary flex items-center justify-center font-display font-medium shrink-0">2</div>
                <h2 className="text-xl font-display font-medium text-white">Session Details</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">What do you want to discuss?</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent resize-none placeholder-text-secondary/50"
                    placeholder="E.g., I want you to review my SOP and give feedback on how I can strengthen my narrative around my low GPA..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Attach files (Optional)</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:bg-background/50 transition-colors cursor-pointer">
                    <p className="text-sm text-text-secondary">Upload resume, SOP drafts, or transcripts (PDF, DOCX)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Button */}
            <div className="flex justify-end">
              <button className="flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-display font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl group">
                Proceed to Payment
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Sticky Summary */}
          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6 sticky top-24">
              <h3 className="font-display font-medium text-white text-lg mb-6">Booking Summary</h3>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <img src={mentor.imageUrl} alt={mentor.name} className="w-14 h-14 rounded-full object-cover border-2 border-background" />
                <div>
                  <div className="font-medium text-white">{mentor.name}</div>
                  <div className="text-xs text-text-secondary">{mentor.university}</div>
                </div>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Session Type</span>
                  <span className="font-medium text-white">{mentor.sessionType}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Duration</span>
                  <span className="font-medium text-white">{mentor.duration} mins</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">Date & Time</span>
                  <span className="font-medium text-white text-right">Oct 24, 2026<br/>6:00 PM (IST)</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Session Fee</span>
                  <span className="text-white">₹{mentor.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Platform Fee (5%)</span>
                  <span className="text-white">₹{(mentor.price * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium pt-3 border-t border-border">
                  <span className="text-white">Total</span>
                  <span className="text-accent font-display font-semibold">₹{(mentor.price * 1.05).toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white mb-1">Secure Payment</div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    Payments are held securely and released to the mentor only after the session is successfully completed.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
