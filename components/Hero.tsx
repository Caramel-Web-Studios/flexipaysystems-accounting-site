"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Quote } from "lucide-react";
import Image from "next/image"; // IMPORT NEXT IMAGE COMPONENT

export default function Hero() {
  return (
    /* 1. APPLYING LONDON BACKGROUND TO THE HEADER */
    <header className="relative w-full max-w-7xl mx-auto px-6 pt-24 pb-32 grid md:grid-cols-2 gap-16 items-center overflow-hidden">
      
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/london-bg.jpg" // The name of your background image
          alt="London Cityscape"
          fill
          priority
          className="object-cover object-center filter grayscale" // Apply grayscale to blend
        />
        {/* Subtle overlay using your brand surface color #e2e2e2 */}
        <div className="absolute inset-0 bg-brand-surface opacity-80" />
      </div>

      {/* --- Text Content (Left Side) --- */}
      <motion.div
        className="relative z-10" // Bring text above background
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Badge: Now using Teal #19757e */}
        <span className="flex items-center gap-2 w-fit text-brand-primary font-bold tracking-[0.3em] text-[10px] uppercase bg-brand-primary/10 px-4 py-1.5 rounded-full mb-6">
          <Zap size={12} fill="currentColor" />
          Next-Gen Payroll Systems 2026
        </span>

        {/* Heading: Using Navy #003366 and a Teal Gradient */}
        <h1 className="text-6xl md:text-8xl font-black text-brand-text leading-[0.9] mb-8 tracking-tighter uppercase">
          Payroll <br /> 
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-text to-brand-primary">
            automated.
          </span>
        </h1>

        <p className="text-lg text-brand-text mb-10 max-w-md leading-relaxed font-medium">
          Deploying intelligent financial systems and automated payroll for UK businesses that are ready to scale.
        </p>

        {/* Button: Navy background with Teal hover effect */}
        <button className="group bg-brand-text text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-primary transition-all duration-300 shadow-2xl shadow-brand-text/20 active:scale-95">
          Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* --- 2. FOUNDER'S VISUAL (Right Side) --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block relative z-10 h-full"
      >
        <div className="relative aspect-4/5 w-full max-w-sm mx-auto flex items-end justify-center rounded-[3rem] overflow-hidden group">
            
            {/* Background Shape in the Brand Teal #19757e */}
            <div className="absolute inset-0 top-1/4 bg-brand-primary rounded-[3rem] shadow-2xl shadow-brand-primary/20 transform group-hover:scale-105 transition-transform duration-500" />
            
            {/* The Founder's Picture (Assumes public/founder.png) */}
            <Image 
              src="/founder.png" 
              alt="FlexiPay Systems Founder"
              width={500}
              height={625}
              priority
              className="relative z-10 w-auto h-[105%] object-cover object-bottom" // Picture slightly overflows the container for depth
            />

            {/* Subtle Name/Title Overlay using brand colors */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-brand-text p-5 rounded-2xl shadow-xl border border-white/5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Quote className="text-brand-primary mb-2" size={18} fill="currentColor" />
                <p className="text-brand-surface text-sm font-medium leading-relaxed italic mb-3">
                   &quot;We build systems that give UK founders their time back.&quot;
                </p>
                <div className="flex flex-col text-[10px] font-black uppercase text-brand-primary tracking-widest">
                  <span>Your Name</span>
                  <span className="text-white opacity-40">Founder, FlexiPay Systems</span>
                </div>
            </div>
        </div>
      </motion.div>
    </header>
  );
}