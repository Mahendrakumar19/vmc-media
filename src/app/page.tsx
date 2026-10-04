import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import AIChatbotFeatureSection from "@/components/AIChatbotFeatureSection";
import AIVoicebotSection from "@/components/AIVoicebotSection";
import WhyVMC from "@/components/WhyVMC";
import HowWeWork from "@/components/HowWeWork";
import IndustriesSection from "@/components/IndustriesSection";
import DigitalMarketingAISection from "@/components/DigitalMarketingAISection";
import About from "@/components/About";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Trust / Positioning Strip */}
      <TrustStrip />

      {/* 4. Services Section (4 Main Cards) */}
      <ServicesSection />

      {/* 5. AI Chatbot Feature Section (Dark Navy + Green + Chat Thread) */}
      <AIChatbotFeatureSection />

      {/* 6. AI Voicebot Section (Light Contrast + Voice Flow) */}
      <AIVoicebotSection />

      {/* 7. Why VMC Media (4 Cards) */}
      <WhyVMC />

      {/* 8. How We Work (5 Steps) */}
      <HowWeWork />

      {/* 9. Industries (8 Cards) */}
      <IndustriesSection />

      {/* 10. Digital Marketing + AI Signature Section */}
      <DigitalMarketingAISection />

      {/* 11 & 12. About Us & Our Approach to AI */}
      <About />

      {/* 13. CTA Section (Full-Width Navy) */}
      <CTA />

      {/* 14. Contact Section (Form with Service Dropdown) */}
      <ContactSection />

      {/* 15. Regional Local SEO Links Strip */}
      <LocalSEOStrip />

      {/* 16. Footer */}
      <Footer />
    </main>
  );
}

