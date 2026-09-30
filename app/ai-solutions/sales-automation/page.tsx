import dynamic from "next/dynamic"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

const Header = dynamic(() => import("@/components/Header"), { ssr: false, loading: () => <div className="h-20" /> })
const SalesAutomationSection = dynamic(() => import("@/components/SalesAutomationSection"), { ssr: false })
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false })

export const metadata: Metadata = {
  title: "Lead Generation & Sales Automation | VMC Media",
  description: "Connect traffic generation, conversational qualification, CRM synchronization, and automated calendar appointment booking.",
  alternates: {
    canonical: "https://www.vmcmedia.in/ai-solutions/sales-automation",
  },
}

export default function SalesAutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Lead Generation & Sales Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Instantly engage, qualify, and route prospects so your sales team only talks to high-intent buyers ready to close.
          </p>
        </div>
      </div>
      <SalesAutomationSection />
      <CTA />
      <Footer />
    </div>
  )
}
