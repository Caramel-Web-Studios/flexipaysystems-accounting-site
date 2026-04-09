"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Accreditation {
  src: string;
  alt: string;
}

interface AccreditationsProps {
  logos: Accreditation[];
}

export default function Accreditations({ logos }: AccreditationsProps) {
  return (
      <section className="border-y border-brand-navy/5 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-brand-slate uppercase tracking-[0.2em] mb-10">
          Our Credentials
        </p>
       

        <div className="flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="w-32 h-16 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={64}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}