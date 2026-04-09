"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image"; 
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-brand-surface">
      
      {/* --- Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/london-bg.jpg" 
          alt="London Cityscape"
          fill
          priority
          className="object-cover object-center opacity-60 mix-blend-luminosity" 
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "linear-gradient(135deg, rgba(249, 248, 244, 0.1) 0%, #F9F8F4 80%)" }}
        />
      </div>

      {/* --- Content Grid --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        {/* --- Text (Left) --- */}
       <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
  {/* Tagline */}
  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6 block">
    FlexiPay Systems
  </span>

  {/* Headline */}
  <h1 className="text-4xl md:text-5xl font-black text-brand-text mb-6 leading-tight">
    Startup Payroll & <span className="text-brand-primary italic">Bookkeeping</span>
  </h1>

  {/* Subtext */}
  <p className="text-lg text-brand-text/70 mb-10 max-w-md leading-relaxed font-medium">
    Focus on growing your startup while we take care of your payroll, bookkeeping, and compliance — accurate, reliable, and stress-free.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">
    <Link href="/contact">
  <motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#19757e" }} // Teal on hover
  whileTap={{ scale: 0.95 }}
  className="bg-brand-text text-white px-12 py-5 rounded-full font-bold flex items-center gap-3 transition-all duration-300 shadow-2xl shadow-brand-text/20"
>
  Book Free Consultation
</motion.button>
    </Link>
    <Link href="/quote">
     <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
  whileTap={{ scale: 0.95 }}
  className="bg-white text-brand-text border border-brand-text/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-primary hover:text-white transition-all duration-300"
>
  Request a Quote
</motion.button>
    </Link>
  </div>
</motion.div>

       {/* --- Founder Visual (Right) --- */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="hidden md:flex relative h-162.5 items-end justify-center group overflow-visible"
>
  <div className="relative w-full max-w-sm h-full flex items-end justify-center">

    {/* Background Card (behind image) */}
    <div className="absolute inset-x-0 bottom-0 top-[25%] rounded-[3.5rem] shadow-2xl shadow-brand-primary/20 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out z-0" />

    {/* Glow / Vignette */}
    <div className="absolute inset-0  rounded-[3.5rem] pointer-events-none z-10" />

    {/* Founder Image */}
    <div className="relative z-20 w-full h-100 md:h-125 flex items-end justify-center pointer-events-none overflow-hidden rounded-3xl">
      <Image 
        src="/founder.jpg" 
        alt="Nighat Zafar - Founder"
        width={600}
        height={750}
        priority
        className="
          w-auto h-[115%] object-cover object-bottom
          transition-all duration-700 ease-out 
          group-hover:scale-105 group-hover:-translate-y-3
          group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]
        "
      />
    </div>

   

    {/* Floating Quote Box */}
    <div className="absolute bottom-12 -left-6 -right-6 z-30 bg-brand-text p-7 rounded-4xl shadow-2xl border border-white/5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <Quote className="text-brand-primary mb-3" size={24} fill="currentColor" />
      <p className="text-brand-surface text-[15px] font-medium leading-relaxed italic mb-4">
        &quot;We build systems that give UK founders their time back.&quot;
      </p>
      <div className="flex flex-col text-[10px] font-black uppercase text-brand-primary tracking-widest">
        <span>Nighat Zafar</span>
        <span className="text-white/40">Founder, FlexiPay Systems</span>
      </div>
    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
}