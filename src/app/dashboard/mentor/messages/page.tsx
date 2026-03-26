import React from 'react';
import { Search, Send, File, Image as ImageIcon } from 'lucide-react';

export default function MessagesPage() {
  const contacts = [
    { id: 1, name: 'Rahul D.', lastMsg: 'Thanks for the SOP review!', time: '10:42 AM', unread: 0 },
    { id: 2, name: 'Shruti Patel', lastMsg: 'Can we reschedule our session?', time: 'Yesterday', unread: 2 },
    { id: 3, name: 'Aman Gupta', lastMsg: 'Sounds good, see you then.', time: 'Oct 20', unread: 0 },
  ];

  return (
    <div className="h-[calc(100vh-120px)] flex bg-surface border border-border rounded-2xl overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-1/3 min-w-[280px] border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full bg-background border border-border rounded-lg py-2 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-accent"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact, i) => (
            <div key={contact.id} className={`p-4 border-b border-border cursor-pointer transition-colors ${i === 0 ? 'bg-background/80 border-l-2 border-l-accent' : 'hover:bg-background/50 border-l-2 border-l-transparent'}`}>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium text-white text-sm">{contact.name}</h4>
                <span className="text-xs text-text-secondary shrink-0">{contact.time}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className={`text-xs truncate ${contact.unread ? 'text-white font-medium' : 'text-text-secondary'}`}>
                  {contact.lastMsg}
                </p>
                {contact.unread > 0 && (
                  <span className="bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center shrink-0">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-background relative">
        {/* Chat Header */}
        <div className="h-16 px-6 border-b border-border flex items-center justify-between bg-surface/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent-2 flex items-center justify-center text-white font-display font-medium">
              R
            </div>
            <div>
              <h3 className="font-medium text-white text-sm">Rahul D.</h3>
              <p className="text-xs text-text-secondary">Prospective Student • Fall 2026</p>
            </div>
          </div>
          <button className="text-xs font-medium px-3 py-1.5 bg-background border border-border rounded-lg text-text-primary hover:text-white transition-colors">
            View Booking
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-center">
            <span className="text-xs text-text-secondary bg-surface px-2 py-1 rounded border border-border">Today</span>
          </div>
          
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-accent-2 flex items-center justify-center text-white text-sm shrink-0">R</div>
            <div>
              <div className="bg-surface border border-border rounded-2xl p-3 text-sm text-text-primary">
                Hi Priya! I just booked a Deep Dive session for next week. I've uploaded my draft SOP. Looking forward to your feedback!
              </div>
              <div className="text-xs text-text-secondary mt-1 ml-1">10:30 AM</div>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm shrink-0">P</div>
            <div>
              <div className="bg-accent text-white rounded-2xl p-3 text-sm">
                Hi Rahul! Great, I received the booking and the draft. I'll review it beforehand so we can jump straight into the feedback during our session.
              </div>
              <div className="text-xs text-text-secondary mt-1 mr-1 text-right">10:35 AM</div>
            </div>
          </div>
          
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-accent-2 flex items-center justify-center text-white text-sm shrink-0">R</div>
            <div>
              <div className="bg-surface border border-border rounded-2xl p-3 text-sm text-text-primary">
                Thanks for the SOP review! Quick question - do you think I need to submit GRE scores for MIT?
              </div>
              <div className="text-xs text-text-secondary mt-1 ml-1">10:42 AM</div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-surface/50 border-t border-border">
          <div className="flex items-end gap-2 bg-background border border-border rounded-xl p-2 focus-within:border-accent transition-colors">
            <button className="p-2 text-text-secondary hover:text-white transition-colors">
              <ImageIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-text-secondary hover:text-white transition-colors">
              <File className="w-5 h-5" />
            </button>
            <textarea 
              rows={1}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-sm text-white px-2 py-2.5 focus:outline-none resize-none max-h-32"
            />
            <button className="p-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-opacity">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
