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
    /* Background set to your light grey #e2e2e2 */
    <main className="overflow-x-hidden bg-brand-surface">
      <Hero />
      <TrustBar />
      <Services />
      
      {/* Calculators Section - Subtle contrast using the brand teal with low opacity */}
      <section className="py-24 bg-brand-primary/5 space-y-32">
        <div id="salary-calc" className="max-w-5xl mx-auto px-6">
          <SalaryCalculator />
        </div>
        <div id="roi-calc" className="max-w-5xl mx-auto px-6">
          <ROICalculator />
        </div>
      </section>

      <GoogleReviews />
      
      {/* --- READY TO START (FlexiPay Rebrand) --- */}
      <section id="contact" className="py-32 bg-brand-surface border-t border-brand-text/10 px-6 text-brand-text">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Swapped Gold for your Brand Teal #19757e */}
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-6 block">
              FlexiPay Systems
            </span>
            
            {/* Text color now uses your Navy #003366 */}
            <h2 className="text-5xl md:text-7xl font-black text-brand-text mb-10 tracking-tighter leading-[0.9]">
              Ready to <span className="italic text-brand-primary">automate</span>?
            </h2>
            
            <p className="text-brand-text/80 text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">
              Stop fighting manual spreadsheets. Join the forward-thinking systems that automate your finance function and reclaim your growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Button: Teal background, White text */}
              <button className="w-full sm:w-auto bg-brand-primary text-white px-12 py-6 rounded-full font-black text-lg hover:bg-brand-text transition-all shadow-2xl shadow-brand-primary/20 hover:-translate-y-1 active:scale-95">
                Start Your System Setup
              </button>
              
              {/* Secondary Button: White/Bordered using your Navy text */}
              <button className="w-full sm:w-auto bg-white text-brand-text border border-brand-text/20 px-12 py-6 rounded-full font-black text-lg hover:bg-brand-primary hover:text-white transition-all active:scale-95">
                View Solutions
              </button>
            </div>

            <p className="mt-12 text-[10px] font-bold text-brand-text/40 uppercase tracking-widest">
              Live System Status: Fully Operational
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}