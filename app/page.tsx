import dynamic from 'next/dynamic'
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { Metadata } from 'next'

// Lazy load components that use context hooks with loading fallback
const Header = dynamic(() => import("@/components/Header"), { 
  ssr: false,
  loading: () => <div className="h-20" /> 
})
const AIWAShowcaseSection = dynamic(() => import("@/components/AIWAShowcaseSection"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const ConnectCreateGrow = dynamic(() => import("@/components/ConnectCreateGrow"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const AIChatbotSection = dynamic(() => import("@/components/AIChatbotSection"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const AIVoicebotSection = dynamic(() => import("@/components/AIVoicebotSection"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const SalesAutomationSection = dynamic(() => import("@/components/SalesAutomationSection"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const About = dynamic(() => import("@/components/About"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const Stats = dynamic(() => import("@/components/Stats"), { 
  ssr: false,
  loading: () => <div className="h-64" /> 
})
const Portfolio = dynamic(() => import("@/components/Portfolio"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
})
const CTA = dynamic(() => import("@/components/CTA"), { 
  ssr: false,
  loading: () => <div className="h-80" /> 
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <AIWAShowcaseSection />
      <ConnectCreateGrow />
      <AIChatbotSection />
      <AIVoicebotSection />
      <SalesAutomationSection />
      <IndustriesSection />
      <Portfolio />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

