"use client";

import React, { useState } from 'react';
import { CalendarDays, Save, Plus, Trash2, Clock } from 'lucide-react';

export default function AvailabilityPage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Mock state
  const [schedule, setSchedule] = useState<Record<string, { start: string, end: string }[]>>({
    'Monday': [{ start: '18:00', end: '21:00' }],
    'Tuesday': [{ start: '18:00', end: '20:00' }],
    'Wednesday': [],
    'Thursday': [{ start: '17:00', end: '22:00' }],
    'Friday': [],
    'Saturday': [{ start: '10:00', end: '14:00' }, { start: '16:00', end: '20:00' }],
    'Sunday': [{ start: '10:00', end: '16:00' }]
  });

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Availability</h1>
          <p className="text-text-secondary mt-1">Set your weekly recurring schedule for 1-on-1 sessions.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all shrink-0">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-border bg-background/50 flex items-center gap-3">
          <CalendarDays className="w-5 h-5 text-accent" />
          <h2 className="font-medium text-white text-lg">Weekly Hours</h2>
        </div>
        
        <div className="divide-y divide-border">
          {days.map(day => (
            <div key={day} className="p-6 flex flex-col md:flex-row md:items-start gap-4 hover:bg-background/30 transition-colors">
              <div className="w-40 flex items-center gap-3 shrink-0 pt-2">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={schedule[day].length > 0}
                    onChange={(e) => {
                      if (!e.target.checked) setSchedule({...schedule, [day]: []});
                      else setSchedule({...schedule, [day]: [{ start: '09:00', end: '17:00' }]});
                    }}
                  />
                  <div className="w-5 h-5 border-2 border-border rounded bg-background peer-checked:bg-accent peer-checked:border-accent transition-colors" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 14" fill="none">
                    <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                  </svg>
                </div>
                <span className={`font-medium ${schedule[day].length > 0 ? 'text-white' : 'text-text-secondary'} w-24`}>{day}</span>
              </div>
              
              <div className="flex-1 space-y-3">
                {schedule[day].length > 0 ? (
                  <>
                    {schedule[day].map((slot, idx) => (
                      <div key={idx} className="flex flex-wrap items-center gap-2 sm:gap-4">
                        <select className="bg-background border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent text-sm" value={slot.start}>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                          <option value="18:00">06:00 PM</option>
                        </select>
                        <span className="text-text-secondary">-</span>
                        <select className="bg-background border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent text-sm" value={slot.end}>
                          <option value="14:00">02:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="20:00">08:00 PM</option>
                          <option value="21:00">09:00 PM</option>
                          <option value="22:00">10:00 PM</option>
                        </select>
                        <button className="p-2 text-text-secondary hover:text-accent hover:bg-accent/10 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button className="flex items-center gap-2 text-sm text-accent hover:text-white font-medium transition-colors p-2 rounded-lg hover:bg-background w-fit">
                      <Plus className="w-4 h-4" /> Add timeslot
                    </button>
                  </>
                ) : (
                  <div className="text-text-secondary text-sm pt-2 italic">Unavailable</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-surface border border-border rounded-2xl p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1">Buffer Time</h3>
          <p className="text-sm text-text-secondary mb-4">Automatically add buffer time between your sessions to prevent back-to-back bookings.</p>
          <select className="bg-background border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent text-sm w-48">
            <option>No buffer</option>
            <option>15 minutes</option>
            <option selected>30 minutes</option>
            <option>60 minutes</option>
          </select>
        </div>
      </div>
    </div>
  );
}
