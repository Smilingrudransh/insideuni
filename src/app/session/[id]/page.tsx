"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mic, MicOff, Video, VideoOff, MonitorUp, PhoneOff, MessageSquare, MoreVertical, Settings } from 'lucide-react';

export default function SessionRoomPage({ params }: { params: { id: string } }) {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="h-16 px-6 bg-surface/50 border-b border-border/50 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <div className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wide">
            Live
          </div>
          <div>
            <h1 className="font-medium text-white text-sm">SOP Review Strategy • Deep Dive</h1>
            <p className="text-xs text-text-secondary">00:14:23 elapsed</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-text-primary hover:text-white transition-colors bg-surface border border-border px-4 py-1.5 rounded-lg">
            Details
          </button>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 flex relative p-4 gap-4">
        
        {/* Videos Container */}
        <div className={`flex-1 flex flex-col md:flex-row gap-4 transition-all duration-300 ${chatOpen ? 'mr-80 md:mr-0' : ''}`}>
          
          {/* Peer Video (Large) */}
          <div className="flex-1 rounded-2xl overflow-hidden bg-surface relative border border-border/50 group">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Peer" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-sm drop-shadow-md">Priya Sharma (Mentor)</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success"></span>
                  <span className="text-xs text-white/80">Network: Good</span>
                </div>
              </div>
            </div>
          </div>

          {/* Self Video (Small/PiP on mobile, Side on desktop) */}
          <div className="w-32 md:w-1/4 xl:w-1/5 aspect-video md:aspect-auto rounded-2xl overflow-hidden bg-surface relative border border-border/50 shrink-0 absolute bottom-8 right-8 md:static shadow-2xl md:shadow-none z-20">
            {cameraOn ? (
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80" alt="Self" className="w-full h-full object-cover transform -scale-x-100" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-text-secondary font-display font-medium text-xl">
                  R
                </div>
              </div>
            )}
            <div className="absolute bottom-3 left-3">
              <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white font-medium">You</span>
            </div>
          </div>
        </div>

        {/* Chat Sidebar Overlay/Slide-in */}
        {chatOpen && (
          <div className="w-80 bg-surface border-l border-border/50 absolute right-0 top-0 bottom-0 z-30 flex flex-col shadow-2xl animate-fade-in-right">
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <h3 className="font-medium text-white">In-Call Messages</h3>
              <button onClick={() => setChatOpen(false)} className="text-text-secondary hover:text-white">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="text-center text-xs text-text-secondary bg-background rounded-lg py-2">
                Chat history is visible only during the call.
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-accent">Priya Sharma</span>
                <div className="bg-background rounded-lg p-3 text-sm text-text-primary">
                  Here's the link to that MIT CS curriculum page we discussed: https://mit.edu/cs...
                </div>
              </div>
            </div>
            <div className="p-4 bg-background/50 border-t border-border/50">
              <div className="flex items-center gap-2 bg-surface rounded-lg px-3 py-2 border border-border/50">
                <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-sm text-white focus:outline-none" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls Bar */}
      <div className="h-20 bg-surface/50 border-t border-border/50 flex items-center justify-center gap-3 sm:gap-6 px-4 z-20 pb-safe">
        <button 
          onClick={() => setMicOn(!micOn)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            micOn ? 'bg-background hover:bg-white/10 text-white' : 'bg-accent text-white'
          }`}
        >
          {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </button>
        
        <button 
          onClick={() => setCameraOn(!cameraOn)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            cameraOn ? 'bg-background hover:bg-white/10 text-white' : 'bg-accent text-white'
          }`}
        >
          {cameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
        </button>

        <button className="w-12 h-12 rounded-full bg-background hover:bg-white/10 text-white flex items-center justify-center transition-all">
          <MonitorUp className="w-5 h-5" />
        </button>

        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all relative ${
            chatOpen ? 'bg-white/20 text-white' : 'bg-background hover:bg-white/10 text-white'
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          {!chatOpen && <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full border-2 border-surface"></span>}
        </button>

        <button className="w-12 h-12 rounded-full bg-background hover:bg-white/10 text-white flex items-center justify-center transition-all hidden sm:flex">
          <Settings className="w-5 h-5" />
        </button>

        <div className="w-px h-8 bg-border/50 mx-2"></div>

        <Link 
          href={`/session/${params.id}/review`}
          className="w-16 h-12 rounded-xl bg-accent hover:bg-accent/90 text-white flex flex-col items-center justify-center transition-all hover:scale-105 shadow-lg shadow-accent/20"
        >
          <PhoneOff className="w-5 h-5" />
        </Link>
      </div>

    </div>
  );
}
