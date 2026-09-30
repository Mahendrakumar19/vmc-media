import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import SEO from "@/components/SEO";

const CTA = dynamic(() => import("@/components/CTA"), { ssr: false });

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Portfolio />
      <CTA />
    </div>
  );
};

export default Index;

