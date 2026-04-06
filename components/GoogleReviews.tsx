"use client";

import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// 1. Define a proper Interface (Fixes the 'any' error)
interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]); // Typed state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data: Review[] = [
          { id: 1, author: "James W.", text: "Best accounting firm in London. Saved me thousands in NI.", rating: 5 },
          { id: 2, author: "Sarah L.", text: "The ROI calculator was spot on. Highly recommend.", rating: 5 },
          { id: 3, author: "TechFlow Ltd", text: "Seamless transition to MTD. Professional and fast.", rating: 5 },
        ];
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return (
    <div className="py-20 text-center opacity-50 uppercase text-[10px] font-black tracking-widest">
      Loading Reviews...
    </div>
  );

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-brand-navy tracking-tighter mb-4">
              Trusted by UK <br/> Founders
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">5.0 Google Rating</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-4xl bg-brand-light/30 border border-brand-navy/5 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-gold/20" size={40} />
              {/* 2. Escape quotes using curly braces (Fixes the unescaped entities error) */}
              <p className="text-sm leading-relaxed text-brand-navy font-medium mb-6 relative z-10">
                {"\""}{review.text}{"\""}
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}