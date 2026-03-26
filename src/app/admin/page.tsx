import React from 'react';
import Link from 'next/link';
import { Users, Banknote, ShieldCheck, CalendarDays, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { name: 'Total Revenue (5% Fee)', value: '₹145,200', change: '+12%', isPositive: true, icon: Banknote },
    { name: 'Active Mentors', value: '542', change: '+8%', isPositive: true, icon: Users },
    { name: 'Pending Verifications', value: '24', change: '-2%', isPositive: false, icon: ShieldCheck },
    { name: 'Sessions (This Week)', value: '892', change: '+15%', isPositive: true, icon: CalendarDays },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">System Overview</h1>
          <p className="text-text-secondary mt-1">Monitor InsideUni platform metrics and operations.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-surface border border-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-accent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Month</option>
            <option>All Time</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border">
                <stat.icon className="w-5 h-5 text-accent" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.isPositive ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-text-secondary mb-1">{stat.name}</h3>
              <div className="text-3xl font-semibold text-white truncate">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-medium text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" /> Platform Activity
            </h2>
          </div>
          <div className="divide-y divide-border">
            {[
              { text: "New mentor verification request from Priya (MIT)", time: "2 mins ago", type: "verify" },
              { text: "Rahul D. booked a ₹399 session with Aman (Oxford)", time: "15 mins ago", type: "booking" },
              { text: "Platform payout of ₹12,450 sent to Shreya (Harvard)", time: "1 hour ago", type: "payout" },
              { text: "New question posted in Forum by User99", time: "2 hours ago", type: "forum" },
              { text: "Failed auto-payout for Mentor ID #482", time: "3 hours ago", type: "alert" },
            ].map((activity, i) => (
              <div key={i} className="p-4 sm:p-6 hover:bg-background/30 transition-colors flex items-start gap-4">
                <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                  activity.type === 'verify' ? 'bg-info' :
                  activity.type === 'booking' ? 'bg-success' :
                  activity.type === 'payout' ? 'bg-accent' :
                  activity.type === 'alert' ? 'bg-warning' : 'bg-text-secondary'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-white">{activity.text}</p>
                  <p className="text-xs text-text-secondary mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links / Tasks */}
        <div className="space-y-6">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h3 className="font-display font-medium text-white mb-4">Urgent Tasks</h3>
            <div className="space-y-3">
              <Link href="/admin/verifications" className="flex items-center justify-between p-3 rounded-xl bg-warning/10 border border-warning/20 group hover:bg-warning/20 transition-colors">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-warning" />
                  <span className="text-sm font-medium text-white">Pending Verifications</span>
                </div>
                <span className="w-6 h-6 rounded-full bg-warning flex items-center justify-center text-xs font-bold text-background">24</span>
              </Link>
              <Link href="/admin/payouts" className="flex items-center justify-between p-3 rounded-xl bg-accent/10 border border-accent/20 group hover:bg-accent/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Banknote className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-white">Failed Payouts</span>
                </div>
                <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-background">3</span>
              </Link>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6">
            <h3 className="font-display font-medium text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Session Success Rate</span>
                  <span className="text-white font-medium">98.5%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '98.5%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-secondary">Mentor Verification Rate</span>
                  <span className="text-white font-medium">76%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-info h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
