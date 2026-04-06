"use client";

import { useState } from 'react';
import { Calculator, ChevronDown, Menu, X, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  // Core Navigation Links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  // UK Calculator Sub-menu Links (Matching your new component IDs)
  const calculatorLinks = [
    { name: 'Salary Estimator', href: '/#salary-calc' },
    { name: 'ROI Tracker', href: '/#roi-calc' },
    { name: 'Tax Optimizer', href: '/#salary-calc' },
  ];

  return (
    <nav className="bg-white border-b border-brand-navy/5 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 font-black text-brand-navy tracking-tighter text-xl">
          <Calculator className="text-brand-gold w-6 h-6" />
          <span>YOURNAME<span className="text-brand-gold font-light">CPA</span></span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
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
            <button className="flex items-center gap-1 text-brand-navy group-hover:text-brand-gold transition-colors cursor-pointer uppercase">
              Calculators 
              <ChevronDown size={12} className={`transition-transform duration-300 ${isCalcOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Panel */}
            <div className={`absolute top-full -left-4 w-60 bg-white border border-brand-navy/5 shadow-2xl rounded-2xl py-3 transition-all duration-300 ${isCalcOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              {calculatorLinks.map((calc) => (
                <Link 
                  key={calc.name} 
                  href={calc.href} 
                  onClick={() => setIsCalcOpen(false)}
                  className="block px-6 py-3 text-[10px] font-black text-brand-navy hover:bg-brand-light hover:text-brand-gold transition-colors uppercase tracking-widest"
                >
                  {calc.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* CLIENT LOGIN BUTTON */}
          <Link 
            href="https://portal.yourname.com" 
            target="_blank"
            className="flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-navy/10 hover:-translate-y-0.5"
          >
            <Lock size={12} /> 
            <span className="mt-0.5">Client Login</span>
          </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="md:hidden text-brand-navy p-2 hover:bg-brand-light rounded-lg transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU PANEL --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-navy/5 fixed inset-x-0 top-20 bottom-0 z-40 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-black text-brand-navy active:text-brand-gold" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="space-y-6 pt-4 border-t border-brand-navy/5">
            <p className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px]">Calculators</p>
            <div className="grid gap-6 pl-4 border-l-2 border-brand-gold/20">
              {calculatorLinks.map((calc) => (
                <Link 
                  key={calc.name} 
                  href={calc.href} 
                  className="text-xl font-bold text-brand-slate hover:text-brand-navy" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {calc.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="https://portal.yourname.com" 
            className="mt-auto bg-brand-navy text-white p-6 rounded-2xl text-center font-black flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-transform"
          >
            <Lock size={20} /> Client Login
          </Link>
        </div>
      )}
    </nav>
  );
}