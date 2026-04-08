"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Quote } from "lucide-react";
import Image from "next/image"; 
import Link from 'next/link';

export default function Hero() {
  return (
    /* Main Section: Acts as the full-width container */
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-brand-surface">
      
      {/* 1. FULL-WIDTH BACKGROUND (Stretches edge-to-edge) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/london-bg.jpg" 
          alt="London Cityscape"
          fill
          priority
          className="object-cover object-center opacity-60 mix-blend-luminosity" 
        />
        {/* Corrected Gradient: Fades the image out towards the edges */}
        <div 
          className="absolute inset-0" 
         style={{ 
      background: "linear-gradient(135deg, rgba(249, 248, 244, 0.1) 0%, #F9F8F4 80%)"
    }}
        />
      </div>

      {/* 2. CONTENT GRID (Centered within the background) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        {/* --- Text Content (Left Side) --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="flex items-center gap-2 w-fit text-brand-primary font-black tracking-[0.3em] text-[10px] uppercase bg-brand-primary/10 px-4 py-2 rounded-full mb-8 border border-brand-primary/20">
            <Zap size={12} fill="currentColor" />
            Next-Gen Payroll Systems 2026
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-brand-text leading-[0.9] mb-8 tracking-tighter uppercase">
            Payroll <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-text to-brand-primary">
              automated.
            </span>
          </h1>

          <p className="text-lg text-brand-text/70 mb-10 max-w-md leading-relaxed font-medium">
            Deploying intelligent financial systems and automated payroll for UK businesses that are ready to scale.
          </p>

          <Link href="/contact" className="inline-block">
            <button className="group bg-brand-text text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-primary transition-all duration-300 shadow-2xl shadow-brand-text/20 active:scale-95">
              Book Free Consultation 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

        {/* --- 3. FOUNDER'S VISUAL (Right Side) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex relative h-162.5 items-end justify-center"
        >
          <div className="relative w-full max-w-sm h-full flex items-end justify-center group">
              
              {/* Teal Background Card */}
              <div className="absolute inset-x-0 bottom-0 top-[25%] bg-brand-primary rounded-[3.5rem] shadow-2xl shadow-brand-primary/20 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
              
              {/* Founder Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                <Image 
                  src="/founder.png" 
                  alt="Nighat Zafar - Founder"
                  width={600}
                  height={750}
                  priority
                  className="w-auto h-[112%] object-contain object-bottom transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                />
              </div>

              {/* Float Quote Box */}
              <div className="absolute bottom-12 -left-6 -right-6 z-20 bg-brand-text p-7 rounded-4xl shadow-2xl border border-white/5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
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