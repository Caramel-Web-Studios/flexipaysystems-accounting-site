"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// 1. Explicitly define the types for Next.js 15 params
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function ArticlePage({ params }: PageProps) {
  // 2. Unwrap the promise using 'use'
  const resolvedParams = use(params);
  
  // 3. Extract the slug and create the display title
  const currentSlug = resolvedParams.slug;
  const displayTitle = currentSlug.replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* ARTICLE HERO */}
      <section className="relative pt-32 pb-20 bg-brand-text overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/news-hero.jpg" 
            alt="Article Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-text/90 to-brand-text" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/news" className="inline-flex items-center gap-2 text-brand-primary text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all">
              <ArrowLeft size={14} /> Back to Insights
            </Link>
            
            <button className="text-white/40 hover:text-brand-primary transition-colors">
              <Share2 size={18} />
            </button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6 text-[10px] text-white/40 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1"><Calendar size={12} /> April 05, 2026</span>
              <span className="flex items-center gap-1"><Clock size={12} /> 4 Min Read</span>
              <span className="text-brand-primary">Corporate Update</span>
            </div>
            
            {/* 4. Use displayTitle here to clear the 'unused' error */}
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              {displayTitle}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-brand-text/5 border border-brand-text/5">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-brand-text/80 font-medium leading-relaxed mb-8 italic">
              This technical briefing provides an overview of the strategic implications regarding: {displayTitle}.
            </p>

            <p className="text-brand-text/60 leading-relaxed mb-6">
              As FlexiPay Systems continues to monitor UK fiscal policy, we ensure our clients remain ahead of regulatory shifts. This specific update addresses the operational requirements for modern Ltd companies.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-brand-text/5 text-center">
            <h3 className="text-xl font-black text-brand-text uppercase mb-4">Request a Consultation</h3>
            <p className="text-brand-text/60 text-sm mb-8">Discuss how these updates specifically impact your business infrastructure.</p>
            <Link href="/contact">
              <button className="bg-brand-primary text-white font-black px-10 py-5 rounded-full hover:bg-brand-text transition-all uppercase text-[10px] tracking-widest active:scale-95">
                Schedule Strategic Briefing
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}