'use client';

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    industry: "",
    hasGst: "no",
    gstNumber: ""
  });

  const [hasConsent, setHasConsent] = useState(true);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim() || !formData.company.trim() || !formData.industry.trim()) {
      setErrorMessage("Please complete all mandatory fields (Name, Company, Mobile, Email, and Industry).");
      setStatus('error');
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile.trim())) {
      setErrorMessage("Please enter a valid 10-digit mobile number (numbers only).");
      setStatus('error');
      return;
    }

    if (formData.hasGst === 'yes' && !formData.gstNumber.trim()) {
      setErrorMessage("Please provide your GST number or select 'No'.");
      setStatus('error');
      return;
    }

    if (!hasConsent) {
      setErrorMessage("Please accept the communication consent to proceed.");
      setStatus('error');
      return;
    }

    try {
      const result = await submitLead({
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        hasGst: formData.hasGst === 'yes' ? 'Yes' : 'No',
        gstNumber: formData.hasGst === 'yes' ? formData.gstNumber : '',
        leadSource: "Next.js Website - Contact Section",
        message: formData.hasGst === 'yes' ? `GST Number: ${formData.gstNumber}` : 'GST: Not registered / No GST'
      });

      if (result.success) {
        setStatus('success');
        setFormData({ name: "", company: "", mobile: "", email: "", industry: "", hasGst: "no", gstNumber: "" });
      } else {
        setErrorMessage(result.error || "Failed to submit enquiry. Please try again.");
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again later.");
      setStatus('error');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-muted/20 to-background border-t border-border/80 relative overflow-hidden" id="contact">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#2cd1a1]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What to Expect & Social Proof */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight mb-4">
                Let&apos;s Engineer Your Growth Engine
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Connect directly with our senior digital growth and conversational AI architects. We don&apos;t do generic sales calls — we review your actual funnel and identify where you are leaking revenue.
              </p>
            </div>

            {/* What Happens Next - Timeline */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">What Happens Next:</h3>
              {[
                {
                  step: "01",
                  title: "Discovery & Funnel Audit",
                  desc: "We analyze your website, ad spend, and customer touchpoints before we speak."
                },
                {
                  step: "02",
                  title: "Tailored Architecture Proposal",
                  desc: "Review a customized roadmap covering lead engines, voicebots, or CRM sync."
                },
                {
                  step: "03",
                  title: "Rapid 48-Hour Go-Live",
                  desc: "Zero developer headaches. Our team configures and integrates your solution."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/80 shadow-xs">
                  <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-mono font-black text-xs flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-0.5">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Badge */}
            {/* <div className="p-4 rounded-2xl bg-card/60 border border-border/80 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-foreground">Authorised Partner:</span> Tata Teleservices Smart Digital Solutions &amp; Official WhatsApp Cloud API.
              </p>
            </div> */}
          </div>

          {/* Right Column: Sleek Enterprise Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-xl relative">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#2cd1a1]/20 text-[#2cd1a1] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">Enquiry Received</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A growth architect will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/80 focus:border-[#2cd1a1] focus:ring-2 focus:ring-[#2cd1a1]/20 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/80 focus:border-[#2cd1a1] focus:ring-2 focus:ring-[#2cd1a1]/20 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-section-mobile" className="block text-xs font-bold text-foreground mb-1.5">
                        Mobile Number *
                      </label>
                      <div className="flex rounded-xl bg-muted/30 border border-border/80 focus-within:border-[#2cd1a1] focus-within:ring-2 focus-within:ring-[#2cd1a1]/20 overflow-hidden transition-all">
                        <span className="inline-flex items-center px-3.5 bg-muted/70 text-foreground font-semibold text-xs sm:text-sm border-r border-border/80 select-none text-muted-foreground">
                          🇮🇳 +91
                        </span>
                        <input
                          id="contact-section-mobile"
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                          placeholder="9876543210"
                          className="w-full px-4 py-3 text-sm text-foreground bg-transparent outline-none transition-all placeholder:text-muted-foreground/60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/80 focus:border-[#2cd1a1] focus:ring-2 focus:ring-[#2cd1a1]/20 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">Industry Vertical *</label>
                    <input
                      type="text"
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      placeholder="e.g. Real Estate, Healthcare, Education, BFSI, etc."
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/80 focus:border-[#2cd1a1] focus:ring-2 focus:ring-[#2cd1a1]/20 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* GST Number Field with Yes / No option */}
                  <div className="p-4 rounded-xl bg-muted/20 border border-border/80 space-y-3">
                    <label className="block text-xs font-bold text-foreground">Do you have a GST Number? *</label>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground font-medium">
                        <input
                          type="radio"
                          name="hasGst-contact"
                          value="yes"
                          checked={formData.hasGst === 'yes'}
                          onChange={() => setFormData({ ...formData, hasGst: 'yes' })}
                          className="w-4 h-4 text-[#2cd1a1] focus:ring-[#2cd1a1] accent-[#2cd1a1] cursor-pointer"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground font-medium">
                        <input
                          type="radio"
                          name="hasGst-contact"
                          value="no"
                          checked={formData.hasGst === 'no'}
                          onChange={() => setFormData({ ...formData, hasGst: 'no', gstNumber: '' })}
                          className="w-4 h-4 text-[#2cd1a1] focus:ring-[#2cd1a1] accent-[#2cd1a1] cursor-pointer"
                        />
                        <span>No</span>
                      </label>
                    </div>

                    {formData.hasGst === 'yes' && (
                      <div className="pt-1 animate-fade-in">
                        <input
                          type="text"
                          required
                          value={formData.gstNumber}
                          onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value.toUpperCase() })}
                          placeholder="Enter 15-digit GSTIN (e.g. 07AAAAA0000A1Z5)"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/80 focus:border-[#2cd1a1] focus:ring-2 focus:ring-[#2cd1a1]/20 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60"
                        />
                      </div>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={hasConsent}
                        onChange={(e) => setHasConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-border/80 text-[#2cd1a1] focus:ring-[#2cd1a1] cursor-pointer accent-[#2cd1a1] shrink-0"
                      />
                      <span className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                        I consent to receive communications from <strong className="text-foreground font-semibold">VMC Media Pvt Ltd.</strong>, in accordance with the{" "}
                        <Link href="/pages/privacy" target="_blank" className="text-[#2cd1a1] underline hover:text-[#27b98f]">
                          Privacy Policy
                        </Link>
                        . I understand that I can opt-out at any time.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] disabled:opacity-50 text-slate-950 font-black px-8 py-4 rounded-xl text-sm shadow-xl shadow-[#2cd1a1]/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'submitting' ? 'Submitting Details...' : 'Connect with Our Experts'}</span>
                    </button>
                    <p className="text-[11px] text-center text-muted-foreground mt-2">
                      Strict confidentiality assured. No spam or unsolicited marketing.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
