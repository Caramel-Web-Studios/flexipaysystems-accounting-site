"use client"; 

import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import Link from 'next/link';



const newsItems = [
  {
    title: "Spring Budget 2026: Key Takeaways for Ltd Companies",
    date: "April 05, 2026",
    tag: "Tax Update",
    desc: "A breakdown of the new corporation tax thresholds and investment allowances."
  },
  {
    title: "VAT Flat Rate Scheme vs. Standard: Which is better?",
    date: "March 22, 2026",
    tag: "VAT",
    desc: "We compare the math for service-based businesses to see where you save more."
  },
  {
    title: "Closing your Financial Year: A 10-Point Checklist",
    date: "March 10, 2026",
    tag: "Accounting",
    desc: "Don't leave your bookkeeping to the last minute. Follow our director-approved guide."
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <section className="bg-brand-navy pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Newspaper size={12} /> Resource Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Latest UK Tax <span className="text-brand-gold">&</span> Business News</h1>
          <p className="text-brand-light/50 text-sm leading-relaxed">
            Stay ahead of HMRC changes with our monthly insights for UK entrepreneurs.
          </p>
        </div>
      </section>

      {/* News Feed */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-xl shadow-brand-navy/5 hover:shadow-2xl transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{item.tag}</span>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                  <Calendar size={12} /> {item.date}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-brand-navy mb-4 group-hover:text-brand-gold transition-colors italic">
                {item.title}
              </h3>
              
              <p className="text-sm text-brand-slate leading-relaxed mb-8">
                {item.desc}
              </p>

              <Link href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy group-hover:gap-4 transition-all">
                Read Full Update <ArrowRight size={14} className="text-brand-gold" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-3xl mx-auto mt-24 px-6 text-center">
        <div className="p-12 bg-brand-navy rounded-4xl text-white">
          {/* FIXED: Using &apos; for the apostrophe below */}
          <h2 className="text-2xl font-black mb-4 text-white">Don&apos;t miss an HMRC deadline.</h2>
          <p className="text-brand-light/60 text-sm mb-8">Join our newsletter for monthly tax-saving tips delivered to your inbox.</p>
          <form className="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-brand-gold transition text-white placeholder:text-white/30"
            />
            <button className="bg-brand-gold text-brand-navy font-black px-8 py-4 rounded-full hover:scale-105 transition-transform uppercase text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}