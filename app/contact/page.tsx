"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";

declare global {
  interface Window {
    hbspt: unknown;
  }
}

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "website-consultation" });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#19757e" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();

    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "148029377",
          formId: "15e148d2-417a-4481-b45c-d15533c1c205",
          target: "#hubspot-form-container",
          css: "",
          cssClass: "flexipay-custom-form"
        });
      }
    };
  }, []);

  return (
    <main className="bg-brand-surface min-h-screen pb-20 overflow-hidden">
      
      {/* 1. HEADER WRAPPER WITH BACKGROUND IMAGE */}
      <section className="relative pt-32 pb-24 z-20 overflow-hidden">
        {/* The Background Image - Limited to this section only */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/planner.jpg" 
            alt="planner"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity" 
          />
          {/* Gradient that fades out at the bottom of the header */}
          <div 
            className="absolute inset-0" 
            style={{ 
             background: "linear-gradient(to bottom, transparent 0%, #f8fafb 100%)"
            }} 
          />
        </div>

        {/* HEADER CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/50 backdrop-blur-md border border-brand-primary/20 shadow-sm mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[9px]">
              Engagement Portal 
            </span>
          </motion.div>

          <div className="relative">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[140px] font-black text-brand-text/5 select-none tracking-tighter uppercase whitespace-nowrap">
              Contact
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-7xl md:text-9xl font-black text-brand-text leading-[0.8] tracking-[-0.05em] uppercase"
            >
              Strategic <br />
              <span className="text-transparent bg-clip-text bg-linear-to-br from-brand-primary via-[#2db7c5] to-brand-text">
                Briefing.
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-brand-text/60 font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Connect with our team to streamline your operations <br className="hidden md:block" /> 
            and deploy automated payroll at scale.
          </motion.p>
        </div>
      </section>

      {/* 2. GRID AND CARDS SECTION (CLEAN BACKGROUND) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-12">
        
        {/* TOP ROW: 60/40 SPLIT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* CAL.COM SCHEDULER (60%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-brand-text/5 border border-brand-text/5 flex flex-col"
          >
            <h3 className="text-[11px] font-black uppercase tracking-widest text-brand-text mb-8 border-b border-brand-text/5 pb-4 flex items-center gap-2">
              <Calendar size={14} className="text-brand-primary" />
              Schedule Briefing
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-10 grow">
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={14} className="text-brand-primary" />
                    <p className="text-brand-primary font-black uppercase tracking-widest text-[9px]">Duration</p>
                  </div>
                  <p className="text-sm font-bold text-brand-text">30 Minute Session</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 size={14} className="text-brand-primary" />
                    <p className="text-brand-primary font-black uppercase tracking-widest text-[9px]">Focus</p>
                  </div>
                  <ul className="space-y-3">
                    {['Workflow Automation', 'System Integration', 'UK Compliance'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] font-bold text-brand-text/70 uppercase tracking-tight">
                        <span className="w-1 h-1 rounded-full bg-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-2 bg-brand-surface/40 rounded-3xl overflow-hidden border border-brand-text/5 p-1">
                <Cal 
                  namespace="website-consultation"
                  calLink="caramelwebstudios/website-consultation"
                  style={{ width: "100%", height: "100%", minHeight: "550px" }}
                  config={{ layout: "month_view", theme: "light", useSlotsViewOnSmallScreen: "true" }}
                />
              </div>
            </div>
          </motion.div>

          {/* HUBSPOT FORM CARD (40%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-10 rounded-[2.5rem] border border-brand-text/5 shadow-2xl shadow-brand-text/5 flex flex-col"
          >
            <h3 className="text-[11px] font-black uppercase tracking-widest text-brand-text mb-8 border-b border-brand-text/5 pb-4 flex items-center gap-2">
              <Mail size={14} className="text-brand-primary" />
              General Inquiry
            </h3>
            <div id="hubspot-form-container" className="w-full grow" />
          </motion.div>
        </div>

        {/* BOTTOM ROW: CONTACT CARDS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 w-full"
        >
          <div className="flex items-center gap-6 p-8 rounded-4xl bg-brand-text text-white shadow-xl group flex-1 transition-all hover:-translate-y-1">
            <div className="bg-brand-primary/20 p-4 rounded-2xl text-brand-primary group-hover:scale-110 transition-transform duration-300">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Direct Correspondence</p>
              <p className="text-xl md:text-2xl font-bold tracking-tight">+44 7828 693 818</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 rounded-4xl bg-white border border-brand-text/5 shadow-sm group flex-1 transition-all hover:-translate-y-1">
            <div className="bg-brand-primary/10 p-4 rounded-2xl text-brand-primary group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/40 mb-1">Electronic Mail</p>
              <p className="text-xl md:text-2xl font-bold text-brand-text lowercase tracking-tight">info@flexipaysystems.com</p>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}