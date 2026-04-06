"use client";
import { useState } from 'react';
import { PoundSterling, Wallet } from 'lucide-react';

export default function SalaryCalculator() {
  const [gross, setGross] = useState(50000);

  const calculateNet = (amt: number) => {
    const allowance = 12570;
    const taxable = Math.max(0, amt - allowance);
    const tax = taxable > 37700 ? (37700 * 0.2) + ((taxable - 37700) * 0.4) : taxable * 0.2;
    const ni = amt > 12570 ? (amt - 12570) * 0.08 : 0; 
    return amt - tax - ni;
  };

  const net = calculateNet(gross);

  return (
    <div id="salary-calc" className="bg-white p-8 md:p-12 rrounded-4xl border border-brand-navy/5 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-brand-gold/10 p-3 rounded-xl text-brand-gold">
          <PoundSterling size={24} />
        </div>
        <h3 className="text-2xl font-black text-brand-navy">UK Salary & Tax Estimator</h3>
      </div>

      <div className="space-y-10">
        <div>
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-brand-slate mb-4">
            Annual Gross Pay <span>£{gross.toLocaleString()}</span>
          </div>
          <input 
            type="range" min="15000" max="150000" step="1000" value={gross}
            onChange={(e) => setGross(Number(e.target.value))}
            className="w-full h-2 bg-brand-light rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-brand-light p-6 rounded-2xl">
            <p className="text-[10px] font-bold text-brand-slate uppercase mb-1">Monthly Take-Home</p>
            <p className="text-3xl font-black text-brand-navy underline decoration-brand-gold decoration-4">
              £{Math.round(net / 12).toLocaleString()}
            </p>
          </div>
          <div className="bg-brand-navy p-6 rounded-2xl text-white">
            <div className="flex items-center gap-2 mb-2 text-brand-gold uppercase font-bold text-[10px]">
              <Wallet size={12} /> Tax Efficiency Tip
            </div>
            <p className="text-xs leading-relaxed opacity-80">
              Personal Allowance covers your first **£12,570**. We recommend a Salary/Dividend split for Directors to minimize NI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}