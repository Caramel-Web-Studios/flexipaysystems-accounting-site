"use client";
import { useState } from 'react';
import { PoundSterling, Wallet, Info } from 'lucide-react';

export default function SalaryCalculator() {
  const [gross, setGross] = useState(50000);

  const calculateNet = (amt: number) => {
    const allowance = 12570;
    const taxable = Math.max(0, amt - allowance);
    // Simple UK Tax Logic
    const tax = taxable > 37700 ? (37700 * 0.2) + ((taxable - 37700) * 0.4) : taxable * 0.2;
    const ni = amt > 12570 ? (amt - 12570) * 0.08 : 0; 
    return amt - tax - ni;
  };

  const net = calculateNet(gross);

  return (
    <div id="salary-calc" className="bg-white p-8 md:p-12 rounded-4xl border border-brand-text/5 shadow-2xl">
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
          <PoundSterling size={24} />
        </div>
        <h3 className="text-2xl font-black text-brand-text uppercase tracking-tight">System Salary Estimator</h3>
      </div>

      <div className="space-y-12">
        {/* Slider Section */}
        <div>
          <div className="flex justify-between items-end mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-text/40">
              Annual Gross Pay
            </span>
            <span className="text-3xl font-black text-brand-primary">
              £{gross.toLocaleString()}
            </span>
          </div>
          <input 
            type="range" min="15000" max="150000" step="1000" value={gross}
            onChange={(e) => setGross(Number(e.target.value))}
            className="w-full h-2 bg-brand-surface rounded-lg appearance-none cursor-pointer accent-brand-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Take-Home Card: Uses your Grey #e2e2e2 */}
          <div className="bg-brand-surface p-8 rounded-3xl border border-brand-text/5">
            <p className="text-[10px] font-bold text-brand-text/60 uppercase mb-2 tracking-widest">Monthly Take-Home</p>
            <p className="text-4xl font-black text-brand-text">
              £{Math.round(net / 12).toLocaleString()}
            </p>
            <div className="mt-4 h-1 w-12 bg-brand-primary rounded-full" />
          </div>

          {/* System Tip Card: Uses your Navy #003366 */}
          <div className="bg-brand-text p-8 rounded-3xl text-white shadow-xl shadow-brand-text/20">
            <div className="flex items-center gap-2 mb-4 text-brand-primary uppercase font-black text-[10px] tracking-widest">
              <Wallet size={14} /> System Insight
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              FlexiPay automation ensures your first <span className="text-white font-bold">£12,570</span> is optimized. 
              Our systems automatically flag Dividend/Salary splits for maximum efficiency.
            </p>
            <button className="mt-6 text-[10px] flex items-center gap-1 font-bold text-brand-primary hover:text-white transition-colors uppercase">
              Learn about automation <Info size={10} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}