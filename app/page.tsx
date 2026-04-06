"use client";

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import SalaryCalculator from '../components/SalaryCalculator';
import ROICalculator from '../components/ROICalculator';
import GoogleReviews from '../components/GoogleReviews';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TrustBar />
      <Services />
      
      {/* Calculators Section */}
      <section className="py-24 bg-brand-light/30 space-y-32">
        <div id="salary-calc" className="max-w-5xl mx-auto px-6">
          <SalaryCalculator />
        </div>
        <div id="roi-calc" className="max-w-5xl mx-auto px-6">
          <ROICalculator />
        </div>
      </section>

      <GoogleReviews />
      
      {/* --- READY TO START (Grey Background) --- */}
      <section id="contact" className="py-32 bg-slate-50 border-t border-brand-navy/5 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-6 block">
              Next Steps
            </span>
            
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy mb-10 tracking-tighter leading-[0.9]">
              Ready to <span className="italic text-brand-gold">optimize</span>?
            </h2>
            
            <p className="text-brand-slate text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">
              Stop guessing your tax bill. Join the UK founders who have automated their finance function and reclaimed their time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-brand-navy text-white px-12 py-6 rounded-full font-black text-lg hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl shadow-brand-navy/10 hover:-translate-y-1 active:scale-95">
                Book Your Free Strategy Session
              </button>
              <button className="w-full sm:w-auto bg-white text-brand-navy border border-brand-navy/10 px-12 py-6 rounded-full font-black text-lg hover:bg-brand-light transition-all active:scale-95">
                View Our Pricing
              </button>
            </div>

            <p className="mt-12 text-[10px] font-bold text-brand-slate/50 uppercase tracking-widest">
              Average response time: &lt; 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}