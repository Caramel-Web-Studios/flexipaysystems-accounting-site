import { Mail, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 mb-16">
        {/* Bio */}
        <div>
          <h3 className="text-brand-gold font-black text-xl mb-6 tracking-tighter">YOURNAME CPA</h3>
          <p className="text-sm text-brand-light/50 leading-relaxed">
            Specialized accounting for digital agencies and creative freelancers. 
            We turn your financial data into a strategic roadmap for growth.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">Get in Touch</h4>
          <div className="flex items-start gap-3 text-sm text-brand-light/80">
            <MapPin size={18} className="text-brand-gold shrink-0" />
            <p>123 Wall Street, Suite 400<br />New York, NY 10005</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-brand-light/80">
            <Mail size={18} className="text-brand-gold" />
            <a href="mailto:hello@yourname.com" className="hover:text-brand-gold transition">hello@yourname.com</a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">Business Hours</h4>
          <ul className="space-y-3 text-sm text-brand-light/80">
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Mon — Fri</span> <span>9:00 AM - 6:00 PM</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Sat</span> <span>By Appointment</span></li>
            <li className="flex justify-between opacity-40"><span>Sun</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
        <p>© 2026 YourName CPA • <Link href="/privacy" className="hover:text-white">Privacy</Link></p>
        <a href="https://caramelwebstudios.com" target="_blank" className="flex items-center gap-1 hover:text-brand-gold transition font-bold">
          Designed by Caramel Web Studios <ExternalLink size={10} />
        </a>
      </div>
    </footer>
  );
}