import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | VMC Media",
  description: "VMC Media Terms & Conditions. Read our service agreements, payment terms, intellectual property rules, and client SLA guidelines.",
  alternates: {
    canonical: "https://www.vmcmedia.in/pages/terms",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase mb-6">
            <FileText className="w-4 h-4" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: October 2026 | VMC Media Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl prose dark:prose-invert leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground text-sm">
              By accessing VMC Media's website, engaging our digital marketing services, or subscribing to our AIWA WhatsApp CRM and AI Voicebot platforms, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Digital Marketing &amp; Engineering Services</h2>
            <p className="text-muted-foreground text-sm mb-3">
              VMC Media provides performance marketing (SEO, Google Ads, Meta Ads), custom web development, and AI customer automation services as defined in individual client Statement of Work (SOW) agreements.
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
              <li>Campaign performance metrics (ROAS, rankings) depend on search engine algorithms and market ad auction dynamics.</li>
              <li>Clients must provide timely access to ad accounts, brand assets, and technical credentials required for campaign execution.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Payment Terms &amp; Billing</h2>
            <p className="text-muted-foreground text-sm">
              Retainer fees and project milestones are billed in advance according to invoice terms. Subscriptions for AIWA WhatsApp CRM are billed monthly/annually. All taxes (GST) will be charged as per applicable Indian tax regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. Intellectual Property</h2>
            <p className="text-muted-foreground text-sm">
              Upon full payment of invoice fees, clients retain ownership of custom domain assets, custom web source code, and design deliverables. VMC Media retains proprietary rights to underlying SaaS source frameworks and AIWA CRM core code.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. Governing Law &amp; Dispute Resolution</h2>
            <p className="text-muted-foreground text-sm">
              These terms shall be governed by and construed in accordance with the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in Gautam Buddha Nagar (Noida / Greater Noida), Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
