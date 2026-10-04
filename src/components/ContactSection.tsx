'use client';

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    industry: "",
    service: "Digital Marketing",
    message: ""
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim()) {
      setErrorMessage("Please complete your name, mobile number and email.");
      setStatus('error');
      return;
    }

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          company: formData.company,
          phone: formData.mobile,
          email: formData.email,
          industry: formData.industry,
          service: formData.service,
          message: formData.message || "Enquiry from Homepage contact form."
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: "", company: "", mobile: "", email: "", industry: "", service: "Digital Marketing", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry. Please try again.");
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again later.");
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-background border-t border-border" id="contact">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2cd1a1] mb-2 block">
            Let's Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            Tell Us What You Want to Achieve. We'll Help You Find the Right Digital Solution.
          </h2>
        </div>

        {/* Contact Form Card */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-xl">
          {status === 'success' ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#2cd1a1]/20 text-[#2cd1a1] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Enquiry Received!</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Thank you for reaching out. Our strategy team will review your requirements and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-[#2cd1a1] focus:ring-1 focus:ring-[#2cd1a1] text-sm text-foreground outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-[#2cd1a1] focus:ring-1 focus:ring-[#2cd1a1] text-sm text-foreground outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-[#2cd1a1] focus:ring-1 focus:ring-[#2cd1a1] text-sm text-foreground outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-[#2cd1a1] focus:ring-1 focus:ring-[#2cd1a1] text-sm text-foreground outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Business/Industry</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="Real Estate, Healthcare, E-Commerce, etc."
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-[#2cd1a1] focus:ring-1 focus:ring-[#2cd1a1] text-sm text-foreground outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">What are you looking for?</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-[#2cd1a1] focus:ring-1 focus:ring-[#2cd1a1] text-sm text-foreground outline-none transition-all"
                  >
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="AI Voicebot">AI Voicebot</option>
                    <option value="WhatsApp Automation">WhatsApp Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your business goals and timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-[#2cd1a1] focus:ring-1 focus:ring-[#2cd1a1] text-sm text-foreground outline-none transition-all"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] disabled:opacity-50 text-white font-bold px-10 py-4 rounded-xl text-base shadow-lg transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span>{status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
