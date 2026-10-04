import Header from "@/components/Header"
import AIChatbotSection from "@/components/AIChatbotSection"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Chatbot Solutions (Website & WhatsApp) | VMC Media",
  description: "Deploy 24/7 conversational AI chatbots for your website and WhatsApp to capture leads, answer FAQs, and qualify prospect intent automatically.",
  alternates: {
    canonical: "https://www.vmcmedia.in/ai-solutions/ai-chatbot",
  },
}

export default function AIChatbotPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI Chatbot for Website & WhatsApp
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy conversational AI that understands customer intent, answers complex pricing questions, and qualifies budgets 24/7.
          </p>
        </div>
      </div>
      <AIChatbotSection />
      <CTA />
      <Footer />
    </div>
  )
}
