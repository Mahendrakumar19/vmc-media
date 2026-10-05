import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, FileText, Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | VMC Media",
  description: "VMC Media Privacy Policy. Read about how we collect, protect, process, and handle your data and privacy.",
  alternates: {
    canonical: "https://www.vmcmedia.in/pages/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase mb-6">
            <Lock className="w-4 h-4" />
            <span>Data Protection &amp; Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: October 2026 | VMC Media Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl prose dark:prose-invert leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground text-sm">
              We collect information you provide directly to us when filling out audit forms, contacting our consultation team, or subscribing to AIWA WhatsApp CRM services. This includes your name, business email address, phone number, company name, and project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground text-sm mb-3">
              Your information is used strictly to provide, maintain, and improve our digital marketing, SEO, web engineering, and AI automation services. Specifically, we use your data to:
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
              <li>Deliver requested marketing audits and consultation proposals.</li>
              <li>Provision AIWA WhatsApp CRM API credentials and voicebot agent configurations.</li>
              <li>Send critical system notifications, invoice receipts, and service updates.</li>
              <li>Analyze campaign performance and optimize user experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Data Security &amp; Encryption</h2>
            <p className="text-muted-foreground text-sm">
              We implement enterprise-grade TLS/SSL encryption, secure cloud infrastructure on AWS/Vercel, and strict access controls to safeguard your data. VMC Media never sells or rents customer data to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. Cookies &amp; Analytics</h2>
            <p className="text-muted-foreground text-sm">
              Our website uses cookies and privacy-focused analytics tools to understand website traffic, measure campaign conversions, and enhance navigation speed. You can disable cookies in your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. Contact Us Regarding Privacy</h2>
            <p className="text-muted-foreground text-sm">
              If you have any questions or data deletion requests, please contact our Data Protection Officer at{" "}
              <a href="mailto:Info@vmcmedia.in" className="text-[#073D7B] dark:text-[#2cd1a1] font-bold underline">
                Info@vmcmedia.in
              </a>{" "}
              or write to Level-5, Tower C, Green Boulevard, Block C, Sector-62, Noida, UP 201301.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
