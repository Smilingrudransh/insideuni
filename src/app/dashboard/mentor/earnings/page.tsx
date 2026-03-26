import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, Download, Building2 } from 'lucide-react';

export default function EarningsPage() {
  const transactions = [
    { id: 'tx1', type: 'Session', desc: 'Deep Dive w/ Rahul D.', amount: 319.20, date: 'Oct 20, 2026', status: 'Completed' },
    { id: 'tx2', type: 'Session', desc: 'Quick Chat w/ Shruti P.', amount: 159.20, date: 'Oct 18, 2026', status: 'Completed' },
    { id: 'tx3', type: 'Withdrawal', desc: 'Bank Transfer to xxxx4582', amount: -6500.00, date: 'Oct 15, 2026', status: 'Processed' },
    { id: 'tx4', type: 'Session', desc: 'Full Guidance w/ Aman G.', amount: 559.20, date: 'Oct 10, 2026', status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-white">Earnings</h1>
        <p className="text-text-secondary mt-1">Track your income and manage payouts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-accent to-accent-2 border border-accent/20 rounded-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="flex items-center gap-2 text-white/80 font-medium mb-1 relative z-10">
            <Wallet className="w-5 h-5" /> Available Balance
          </div>
          <div className="text-4xl md:text-5xl font-display font-bold mb-6 relative z-10">
            ₹4,250<span className="text-2xl text-white/60">.50</span>
          </div>

          <div className="mt-auto space-y-3 relative z-10">
            <button className="w-full py-3 bg-white text-accent rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-opacity-95 transition-all">
              Withdraw to Bank
            </button>
            <p className="text-xs text-white/70 text-center">Minimum withdrawal: ₹1,000</p>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-1">Total Earned (All Time)</h3>
            <div className="text-3xl font-semibold text-white mb-2">₹42,850</div>
            <div className="text-sm text-success flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" /> +15% this month
            </div>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h3 className="text-sm font-medium text-text-secondary mb-1">Pending Clearance</h3>
            <div className="text-3xl font-semibold text-white mb-2">₹950</div>
            <div className="text-sm text-text-secondary">From recent sessions (clears in 3 days)</div>
          </div>
          
          <div className="bg-surface border border-border rounded-2xl p-6 sm:col-span-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-text-secondary" />
              </div>
              <div>
                <h3 className="font-medium text-white">HDFC Bank ****4582</h3>
                <p className="text-sm text-text-secondary">Primary payout method</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-text-primary hover:bg-background transition-colors">
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-surface border border-border rounded-2xl overflow-hidden mt-8">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="font-display font-medium text-white text-lg">Transaction History</h2>
          <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background/50 border-b border-border text-xs uppercase tracking-wider text-text-secondary">
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Description</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {transactions.map(tx => (
                <tr key={tx.id} className="hover:bg-background/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{tx.date}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-white">{tx.desc}</div>
                    <div className="text-xs text-text-secondary">{tx.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-xs px-2 py-1 rounded-full border ${tx.status === 'Completed' || tx.status === 'Processed' ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${tx.amount > 0 ? 'text-success' : 'text-white'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}₹{Math.abs(tx.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border bg-background/50 text-center">
          <button className="text-sm text-accent hover:text-white font-medium transition-colors">
            View all transactions
          </button>
        </div>
      </div>
    </div>
  );
}
