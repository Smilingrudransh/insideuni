"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Users, 
  CalendarDays, 
  Banknote,
  MessageSquare,
  LogOut,
  Menu,
  X 
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Verifications', href: '/admin/verifications', icon: ShieldCheck },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Sessions', href: '/admin/sessions', icon: CalendarDays },
    { name: 'Payouts', href: '/admin/payouts', icon: Banknote },
    { name: 'Forum Moderation', href: '/admin/forum', icon: MessageSquare },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') return pathname === '/admin';
    return pathname?.startsWith(path);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar component */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border transform transition-transform duration-200 ease-in-out lg:transform-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center justify-between px-6 mb-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-display font-medium text-lg">I</div>
              <span className="font-display font-semibold text-xl tracking-tight text-white hidden lg:block">InsideUni Admin</span>
            </Link>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-text-secondary hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mt-4 flex-1 px-4 space-y-2">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all ${
                    active 
                      ? 'bg-accent/10 border border-accent/20 text-accent' 
                      : 'text-text-secondary hover:bg-background hover:text-white border border-transparent'
                  }`}
                >
                  <item.icon
                    className={`mr-3 w-5 h-5 flex-shrink-0 transition-colors ${
                      active ? 'text-accent' : 'text-text-secondary group-hover:text-white'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          <div className="px-4 mt-8 border-t border-border pt-4">
            <button
              className="w-full group flex items-center px-3 py-3 text-sm font-medium text-text-secondary rounded-xl hover:bg-background hover:text-white transition-all border border-transparent cursor-pointer"
            >
              <LogOut className="mr-3 w-5 h-5 flex-shrink-0 text-text-secondary group-hover:text-white" />
              Sign out Admin
            </button>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between bg-surface border-b border-border px-4 py-3 shrink-0">
          <span className="font-display font-medium text-white">Admin Dashboard</span>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-text-secondary hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
