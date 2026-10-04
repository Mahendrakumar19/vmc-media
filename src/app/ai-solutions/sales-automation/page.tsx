import Header from "@/components/Header"
import SalesAutomationSection from "@/components/SalesAutomationSection"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

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
