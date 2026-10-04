import Header from "@/components/Header"
import AIVoicebotSection from "@/components/AIVoicebotSection"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Voicebot Solutions (Inbound & Outbound Calling) | VMC Media",
  description: "Automate inbound receptionist handling and outbound speed-to-lead follow-ups with natural conversational AI voice agents.",
  alternates: {
    canonical: "https://www.vmcmedia.in/ai-solutions/ai-voicebot",
  },
}

export default function AIVoicebotPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI Voicebot for Inbound & Outbound Calls
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engage leads within 60 seconds of form submission. Handle hundreds of simultaneous calls with a natural conversational tone.
          </p>
        </div>
      </div>
      <AIVoicebotSection />
      <CTA />
      <Footer />
    </div>
  )
}
