"use client";

import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, ShieldAlert, CheckCircle2, XCircle, FileText, ExternalLink } from 'lucide-react';

export default function VerificationsPage() {
  const [tab, setTab] = useState<'pending' | 'approved' | 'rejected'>('pending');

  const pendingRequests = [
    { id: 'v1', name: 'Priya Sharma', uni: 'MIT', email: 'psharma@mit.edu', date: ' Oct 24, 2026', status: 'pending', docs: 2 },
    { id: 'v2', name: 'Rahul Patel', uni: 'Stanford', email: 'rahulp@stanford.edu', date: 'Oct 23, 2026', status: 'pending', docs: 1 },
    { id: 'v3', name: 'Sarah Wilson', uni: 'Oxford', email: 'sarah.w@merton.ox.ac.uk', date: 'Oct 22, 2026', status: 'pending', docs: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Mentor Verifications</h1>
          <p className="text-text-secondary mt-1">Review and approve new mentor applications.</p>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        {/* Controls */}
        <div className="p-4 sm:p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex bg-background rounded-lg p-1 border border-border w-fit shrink-0">
            <button
              onClick={() => setTab('pending')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'pending' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Pending ({pendingRequests.length})
            </button>
            <button
              onClick={() => setTab('approved')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'approved' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Approved
            </button>
            <button
              onClick={() => setTab('rejected')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'rejected' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Rejected
            </button>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input type="text" placeholder="Search by name, email, uni..." className="bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent w-full" />
            </div>
            <button className="p-2 border border-border rounded-lg bg-background text-text-secondary hover:text-white transition-colors shrink-0">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/50 border-b border-border text-xs uppercase tracking-wider text-text-secondary">
                <th className="px-6 py-4 font-medium">Applicant</th>
                <th className="px-6 py-4 font-medium">University Email</th>
                <th className="px-6 py-4 font-medium">Documents</th>
                <th className="px-6 py-4 font-medium">Submitted</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tab === 'pending' && pendingRequests.map(req => (
                <tr key={req.id} className="hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent-2/20 text-accent font-display font-medium flex items-center justify-center">
                        {req.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{req.name}</div>
                        <div className="text-xs text-text-secondary">{req.uni}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white flex items-center gap-2">
                      {req.email}
                      <ShieldAlert className="w-3.5 h-3.5 text-warning" />
                    </div>
                    <div className="text-xs text-text-secondary">OTP Verified</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors border border-border bg-background px-3 py-1.5 rounded-lg">
                      <FileText className="w-4 h-4" /> {req.docs} Files
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                    {req.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-success hover:bg-success/10 rounded-lg transition-colors border border-transparent hover:border-success/20" title="Approve">
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors border border-transparent hover:border-error/20" title="Reject">
                        <XCircle className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-text-secondary hover:text-white hover:bg-background rounded-lg border border-transparent hover:border-border transition-colors" title="View Profile">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {tab === 'pending' && pendingRequests.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-text-secondary">
                    <ShieldCheck className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    No pending verification requests.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
