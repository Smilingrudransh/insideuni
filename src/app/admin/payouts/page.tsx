"use client";

import React, { useState } from 'react';
import { Search, Filter, Banknote, Download, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PayoutsPage() {
  const [tab, setTab] = useState<'pending' | 'completed' | 'failed'>('pending');

  const payouts = [
    { id: 'p1', mentor: 'Priya Sharma', amount: 12450.00, method: 'HDFC ****4582', date: 'Oct 25, 2026', status: 'pending', sessions: 12 },
    { id: 'p2', mentor: 'Daniel Chen', amount: 8900.50, method: 'ICICI ****9921', date: 'Oct 25, 2026', status: 'pending', sessions: 8 },
    { id: 'p3', mentor: 'Sneha Reddy', amount: 4200.00, method: 'SBI ****1104', date: 'Oct 24, 2026', status: 'pending', sessions: 5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Payout Management</h1>
          <p className="text-text-secondary mt-1">Review and process mentor earnings via RazorpayX.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-background border border-border text-white rounded-lg font-medium hover:bg-surface transition-all text-sm shrink-0">
            <Download className="w-4 h-4" /> Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm shrink-0">
            <Banknote className="w-4 h-4" /> Process Batch (3)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-border rounded-2xl p-6">
          <h3 className="text-sm font-medium text-text-secondary mb-1">Total Pending Clearance</h3>
          <div className="text-3xl font-semibold text-white mb-2">₹145,200</div>
          <div className="text-sm text-warning flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> 42 payouts queued
          </div>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-6">
          <h3 className="text-sm font-medium text-text-secondary mb-1">Processed This Month</h3>
          <div className="text-3xl font-semibold text-white mb-2">₹842,500</div>
          <div className="text-sm text-success flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> 214 successful transfers
          </div>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-6">
          <h3 className="text-sm font-medium text-text-secondary mb-1">Platform Revenue (5%)</h3>
          <div className="text-3xl font-semibold text-accent mb-2">₹42,125</div>
          <div className="text-sm text-text-secondary flex items-center gap-1">
            Retained from processed payouts
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden mt-8">
        {/* Controls */}
        <div className="p-4 sm:p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex bg-background rounded-lg p-1 border border-border w-fit shrink-0">
            <button
              onClick={() => setTab('pending')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'pending' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Pending Approval ({payouts.length})
            </button>
            <button
              onClick={() => setTab('completed')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'completed' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Processed
            </button>
            <button
              onClick={() => setTab('failed')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === 'failed' ? 'bg-surface text-white shadow-sm border border-border' : 'text-text-secondary hover:text-white hover:bg-surface/50'
              }`}
            >
              Failed (0)
            </button>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input type="text" placeholder="Search by mentor name..." className="bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent w-full" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/50 border-b border-border text-xs uppercase tracking-wider text-text-secondary">
                <th className="px-6 py-4 font-medium">
                  <input type="checkbox" className="rounded border-border bg-background" />
                </th>
                <th className="px-6 py-4 font-medium">Mentor</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Sessions</th>
                <th className="px-6 py-4 font-medium">Payout Method</th>
                <th className="px-6 py-4 font-medium">Date Initiated</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tab === 'pending' && payouts.map(payout => (
                <tr key={payout.id} className="hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-accent bg-background" checked />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">{payout.mentor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-accent">₹{payout.amount.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-text-secondary">{payout.sessions} completed</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{payout.method}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                    {payout.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-sm font-medium text-accent hover:text-white transition-colors bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-lg border border-accent/20">
                      Process
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
