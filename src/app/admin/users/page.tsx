import React from 'react';
import { Search, Filter, MoreVertical, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function UsersPage() {
  const users = [
    { id: 'u1', name: 'Priya Sharma', email: 'psharma@mit.edu', role: 'Mentor', status: 'Active', verified: true, joined: 'Sep 12, 2026' },
    { id: 'u2', name: 'Rahul Desai', email: 'rahul.d@gmail.com', role: 'Seeker', status: 'Active', verified: false, joined: 'Oct 05, 2026' },
    { id: 'u3', name: 'Aman Gupta', email: 'amang@oxford.ac.uk', role: 'Mentor', status: 'Active', verified: true, joined: 'Aug 22, 2026' },
    { id: 'u4', name: 'Sneha Reddy', email: 'sneha.r@yahoo.com', role: 'Seeker', status: 'Inactive', verified: false, joined: 'Jul 15, 2026' },
    { id: 'u5', name: 'Daniel Chen', email: 'dchen@stanford.edu', role: 'Mentor', status: 'Suspended', verified: true, joined: 'Sep 30, 2026' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Users</h1>
          <p className="text-text-secondary mt-1">Manage all seekers and mentors on the platform.</p>
        </div>
        <button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm shrink-0">
          Export CSV
        </button>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        {/* Controls */}
        <div className="p-4 sm:p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-background/50">
          <div className="flex items-center gap-3 w-full md:w-96">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input type="text" placeholder="Search users by name or email..." className="bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent w-full" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent appearance-none pr-8">
              <option>All Roles</option>
              <option>Mentors</option>
              <option>Seekers</option>
              <option>Admins</option>
            </select>
            <select className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent appearance-none pr-8">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
            <button className="p-2 border border-border rounded-lg bg-background text-text-secondary hover:text-white transition-colors shrink-0">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/20 border-b border-border text-xs uppercase tracking-wider text-text-secondary">
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Joined Date</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-medium text-white ${user.role === 'Mentor' ? 'bg-accent' : 'bg-background border border-border'}`}>
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-1.5">
                          {user.name}
                          {user.verified && <ShieldCheck className="w-4 h-4 text-accent" />}
                        </div>
                        <div className="text-xs text-text-secondary">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${user.role === 'Mentor' ? 'bg-accent/10 text-accent border-accent/20' : 'bg-surface text-text-secondary border-border'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-xs font-medium flex items-center gap-1.5 ${
                      user.status === 'Active' ? 'text-success' : 
                      user.status === 'Suspended' ? 'text-error' : 'text-text-secondary'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        user.status === 'Active' ? 'bg-success' : 
                        user.status === 'Suspended' ? 'bg-error' : 'bg-text-secondary'
                      }`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="p-2 text-text-secondary hover:text-white hover:bg-background rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="px-6 py-4 border-t border-border bg-background/20 flex items-center justify-between text-sm text-text-secondary">
          <div>Showing 1 to 5 of 1,245 users</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-border rounded-lg hover:bg-background hover:text-white transition-colors" disabled>Previous</button>
            <button className="px-3 py-1.5 border border-border rounded-lg bg-surface hover:bg-background hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
