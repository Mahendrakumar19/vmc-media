'use client';

import Link from "next/link";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#012766] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: VMC Media Brand & Address (Span 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
              <img 
                src="/logo-vm-dark.svg" 
                alt="VMC Media Logo" 
                className="h-16 sm:h-20 w-auto object-contain" 
              />
            </Link>
            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              Digital Marketing and AI-powered customer engagement solutions helping businesses attract, engage and grow.
            </p>
            <div className="pt-1 text-xs text-white/70 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2cd1a1] shrink-0 mt-0.5" />
                <span>Level-5, Tower C, Green Boulevard, Sector-62, Noida, UP 201301</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3.5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><Link href="/" className="hover:text-[#2cd1a1] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#2cd1a1] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/ai-solutions/ai-chatbot" className="hover:text-[#2cd1a1] transition-colors">AI Solutions</Link></li>
              <li><a href="#industries" className="hover:text-[#2cd1a1] transition-colors">Industries</a></li>
              <li><Link href="/about" className="hover:text-[#2cd1a1] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#2cd1a1] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: AI Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3.5 uppercase tracking-wider">AI Solutions</h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><Link href="/ai-solutions/ai-chatbot" className="hover:text-[#2cd1a1] transition-colors">AI Chatbot</Link></li>
              <li><Link href="/ai-solutions/ai-voicebot" className="hover:text-[#2cd1a1] transition-colors">AI Voicebot</Link></li>
              <li><Link href="/ai-solutions/sales-automation" className="hover:text-[#2cd1a1] transition-colors">Lead Qualification</Link></li>
              <li><a href="https://aiwa.vmcmedia.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#2cd1a1] transition-colors font-semibold text-[#2cd1a1]">AIWA WhatsApp</a></li>
              <li><Link href="/ai-solutions/sales-automation" className="hover:text-[#2cd1a1] transition-colors">CRM Pipeline</Link></li>
            </ul>
          </div>

          {/* Col 5: Digital Services */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3.5 uppercase tracking-wider">Digital Services</h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><Link href="/services/seo" className="hover:text-[#2cd1a1] transition-colors">SEO &amp; Ranking</Link></li>
              <li><Link href="/services/local-seo" className="hover:text-[#2cd1a1] transition-colors">Local SEO (GMB)</Link></li>
              <li><Link href="/services/google-ads" className="hover:text-[#2cd1a1] transition-colors">Google Ads &amp; PPC</Link></li>
              <li><Link href="/services/smm" className="hover:text-[#2cd1a1] transition-colors">Social Meta Ads</Link></li>
              <li><Link href="/services/cro" className="hover:text-[#2cd1a1] transition-colors">Performance CRO</Link></li>
            </ul>
          </div>

          {/* Col 6: Dedicated Contact Us at Last */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3.5 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2cd1a1] shrink-0" />
                <a href="mailto:Info@vmcmedia.in" className="hover:text-[#2cd1a1] transition-colors break-all">Info@vmcmedia.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2cd1a1] shrink-0" />
                <a href="tel:+919250592505" className="hover:text-[#2cd1a1] transition-colors">+91 92505 92505</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#2cd1a1] shrink-0" />
                <a href="https://www.vmcmedia.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#2cd1a1] transition-colors">vmcmedia.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 VMC Media Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;