"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  CalendarDays, 
  MessageSquare, 
  UserCircle, 
  Heart,
  LogOut,
  Menu,
  X,
  Search
} from 'lucide-react';

export default function SeekerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navigation = [
    { name: 'Overview', href: '/dashboard/seeker/overview', icon: BarChart3 },
    { name: 'My Sessions', href: '/dashboard/seeker/sessions', icon: CalendarDays },
    { name: 'Saved Mentors', href: '/dashboard/seeker/saved', icon: Heart },
    { name: 'Messages', href: '/dashboard/seeker/messages', icon: MessageSquare },
    { name: 'My Questions', href: '/dashboard/seeker/questions', icon: MessageSquare },
    { name: 'Profile Settings', href: '/dashboard/seeker/profile', icon: UserCircle },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 66px)', background: 'var(--bg)' }}>
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.5)' }}
          className="lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar component */}
      <aside className="lg:static lg:transform-none" style={{ 
        width: 260, 
        flexShrink: 0, 
        background: 'var(--white)', 
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        position: isSidebarOpen ? 'fixed' : 'static',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 50,
        transform: isSidebarOpen ? 'translateX(0)' : undefined,
        transition: 'transform 0.2s ease'
      }}>
        <style dangerouslySetInnerHTML={{__html:`
          @media (max-width: 1024px) {
            aside { position: fixed !important; transform: translateX(-100%); }
            aside.mobile-open { transform: translateX(0); }
            .mobile-header { display: flex !important; }
            .desktop-search { display: none !important; }
          }
          .mobile-header { display: none; }
          .nav-link:hover { color: var(--text) !important; background: var(--bg) !important; }
          .nav-link.active:hover { color: var(--accent) !important; background: var(--li-accent) !important; }
        `}} />
        
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 20, paddingBottom: 16, overflowY: 'auto' }} className={isSidebarOpen ? 'mobile-open' : ''}>
          <div className="mobile-header" style={{ alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', marginBottom: 24 }}>
            <span style={{ fontFamily: 'Fraunces, serif', fontStyle:'italic', fontWeight: 600, fontSize: 18, color: 'var(--accent)' }}>Student Portal</span>
            <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>
          
          <div className="desktop-search" style={{ padding: '0 24px', marginBottom: 32, marginTop: 8 }}>
            <Link href="/explore" className="btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
              <Search size={16} /> Find a Mentor
            </Link>
          </div>
          
          <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`nav-link ${active ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    fontSize: 14,
                    fontWeight: 500,
                    borderRadius: 'var(--radius-xs)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: active ? 'var(--accent)' : 'var(--text2)',
                    background: active ? 'var(--li-accent)' : 'transparent',
                    border: active ? '1px solid rgba(32,71,212,0.15)' : '1px solid transparent'
                  }}
                >
                  <item.icon
                    size={20}
                    style={{ marginRight: 12, flexShrink: 0, color: active ? 'var(--accent)' : 'var(--muted)' }}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          <div style={{ padding: '0 16px', marginTop: 32, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
            <Link
              href="/"
              className="nav-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--text2)',
                borderRadius: 'var(--radius-xs)',
                textDecoration: 'none',
                transition: 'all 0.2s',
                border: '1px solid transparent'
              }}
            >
              <LogOut size={20} color="var(--muted)" style={{ marginRight: 12, flexShrink: 0 }} />
              Sign out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <main style={{ flex: 1, overflowY: 'auto', width: '100%', minWidth: 0 }}>
        {/* Mobile header */}
        <div className="mobile-header" style={{ position: 'sticky', top: 0, zIndex: 30, alignItems: 'center', justifyContent: 'space-between', background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '12px 16px' }}>
          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: 'var(--accent)' }}>Student Dashboard</span>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            style={{ background: 'none', border: 'none', color: 'var(--text2)' }}
          >
            <Menu size={24} />
          </button>
        </div>
        
        <div style={{ padding: '16px 24px', width: '100%', maxWidth: 1152, margin: '0 auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
