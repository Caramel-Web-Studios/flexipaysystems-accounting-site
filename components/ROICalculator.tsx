"use client";
import { useState } from 'react';
import { BarChart3, CheckCircle2 } from 'lucide-react';

export default function ROICalculator() {
  const [turnover, setTurnover] = useState(100000);

  // FlexiPay Context: 3% operational efficiency + 150 hours saved @ £60/hr
  const totalValue = (turnover * 0.03) + (150 * 60);

  return (
    /* Background is your Navy #003366 for a "Power" section, or use White/Grey for "Clean" */
    <div id="roi-calc" className="bg-brand-text text-white p-8 md:p-12 rounded-4xl shadow-2xl border border-brand-primary/20">
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-brand-primary/20 p-2 rounded-lg">
          <BarChart3 className="text-brand-primary" size={28} />
        </div>
        <h3 className="text-2xl font-black tracking-tight uppercase">System Efficiency ROI</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-primary">
            Estimated Annual Revenue (£)
          </label>
          <input 
            type="number" 
            value={turnover}
            onChange={(e) => setTurnover(Number(e.target.value))}
            className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl font-bold text-2xl outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-brand-surface"
          />
          <div className="space-y-4 pt-4">
            {[
              'Automated Payroll Processing', 
              '150+ Admin Hours Reclaimed', 
              'Real-time Compliance Monitoring'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-medium text-brand-surface/70e/70">
                <CheckCircle2 size={18} className="text-brand-primary shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Result Card: Using your Light Grey #e2e2e2 for contrast */}
        <div className="bg-brand-surface p-10 rounded-4xl text-center shadow-inner">
          <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-4">
            Total System Value
          </p>
          <p className="text-6xl font-black text-brand-text">
            £{totalValue.toLocaleString()}
          </p>
          <p className="mt-6 text-[10px] font-bold text-brand-text/40 uppercase tracking-widest">
            Estimated Annual Efficiency Gain
          </p>
          
          <div className="mt-8 pt-6 border-t border-brand-text/5">
             <button className="text-xs font-bold text-brand-primary hover:text-brand-text transition-colors flex items-center gap-2 mx-auto">
               Download Full Report <CheckCircle2 size={12} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}