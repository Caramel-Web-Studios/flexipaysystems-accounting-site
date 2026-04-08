"use client";

import { useState } from 'react';
import { ShieldCheck, ChevronDown, Menu, X, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  // Core Navigation Links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // UK Calculator Sub-menu Links
  const calculatorLinks = [
    { name: 'Salary Estimator', href: '/#salary-calc' },
    { name: 'ROI Tracker', href: '/#roi-calc' },
    { name: 'Tax Optimizer', href: '/#salary-calc' },
  ];

  return (
    /* Background remains white for clarity, border uses your Navy #003366 at low opacity */
    <nav className="bg-white border-b border-brand-text/5 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* --- LOGO (Replaced Calculator with ShieldCheck for "Systems" feel) --- */}
        <Link href="/" className="flex items-center gap-2 font-black text-brand-text tracking-tighter text-2xl group">
          <div className="bg-brand-primary p-1.5 rounded-lg group-hover:bg-brand-text transition-colors">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-brand-text uppercase">FlexiPay<span className="text-brand-primary font-light">Systems</span></span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-brand-text hover:text-brand-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          
          {/* CALCULATORS DROPDOWN */}
          <div 
            className="relative group py-4"
            onMouseEnter={() => setIsCalcOpen(true)}
            onMouseLeave={() => setIsCalcOpen(false)}
          >
            <button className="flex items-center gap-1 text-brand-text group-hover:text-brand-primary transition-colors cursor-pointer uppercase">
              Calculators 
              <ChevronDown size={12} className={`transition-transform duration-300 ${isCalcOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Panel */}
            <div className={`absolute top-full -left-4 w-60 bg-white border border-brand-text/5 shadow-2xl rounded-2xl py-3 transition-all duration-300 ${isCalcOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              {calculatorLinks.map((calc) => (
                <Link 
                  key={calc.name} 
                  href={calc.href} 
                  onClick={() => setIsCalcOpen(false)}
                  className="block px-6 py-3 text-[10px] font-black text-brand-text hover:bg-brand-surface hover:text-brand-primary transition-colors uppercase tracking-widest"
                >
                  {calc.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* CLIENT LOGIN BUTTON (Navy #003366 background, Teal hover) */}
          <Link 
            href="https://portal.flexipaysystems.com" 
            target="_blank"
            className="flex items-center gap-2 bg-brand-text text-white px-6 py-3 rounded-full hover:bg-brand-primary transition-all duration-300 shadow-lg shadow-brand-text/10 hover:-translate-y-0.5"
          >
            <Lock size={12} /> 
            <span className="mt-0.5">Portal Login</span>
          </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="md:hidden text-brand-text p-2 hover:bg-brand-surface rounded-lg transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU PANEL --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-surface fixed inset-x-0 top-20 bottom-0 z-40 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-black text-brand-text active:text-brand-primary" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="space-y-6 pt-4 border-t border-brand-text/10">
            <p className="text-brand-primary font-black uppercase tracking-[0.3em] text-[10px]">Calculators</p>
            <div className="grid gap-6 pl-4 border-l-2 border-brand-primary/20">
              {calculatorLinks.map((calc) => (
                <Link 
                  key={calc.name} 
                  href={calc.href} 
                  className="text-xl font-bold text-brand-text hover:text-brand-primary" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {calc.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="https://portal.flexipaysystems.com" 
            className="mt-auto bg-brand-text text-white p-6 rounded-2xl text-center font-black flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-transform"
          >
            <Lock size={20} /> Client Login
          </Link>
        </div>
      )}
    </nav>
  );
}