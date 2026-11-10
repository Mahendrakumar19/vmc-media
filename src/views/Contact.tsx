"use client";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock 
} from "@fortawesome/free-solid-svg-icons";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/submitLead";
import "@/styles/floating-labels.css";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    hasGst: "no",
    gstNumber: "",
  });
  const [hasConsent, setHasConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.company.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.industry.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all mandatory fields (*).",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number (numbers only).",
        variant: "destructive",
      });
      return;
    }

    if (formData.hasGst === "yes" && !formData.gstNumber.trim()) {
      toast({
        title: "GST Number Required",
        description: "Please enter your 15-digit GSTIN or select 'No'.",
        variant: "destructive",
      });
      return;
    }

    if (!hasConsent) {
      toast({
        title: "Consent Required",
        description: "Please accept the communication consent to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        hasGst: formData.hasGst === 'yes' ? 'Yes' : 'No',
        gstNumber: formData.hasGst === 'yes' ? formData.gstNumber : '',
        leadSource: "Next.js Website - Contact Page",
        message: formData.hasGst === 'yes' ? `GST Number: ${formData.gstNumber}` : 'GST: Not registered / No GST',
      });

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your enquiry has been received. Our team will contact you soon!",
        });
        setFormData({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          industry: "",
          hasGst: "no",
          gstNumber: "",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.name === "phone"
      ? e.target.value.replace(/\D/g, "").slice(0, 10)
      : e.target.value;
    setFormData({ ...formData, [e.target.name]: val });
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us | VMC Media Pvt. Ltd."
        description="Get in touch with VMC Media. We're here to help you unlock your brand's full potential. Contact us for digital marketing consultation."
        canonical="/contact"
      />      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-6 md:pb-8 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6">
              Let's Grow Your Business Together
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Have a project in mind? We're here to help you unlock your brand's full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 sm:py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center sm:text-left">
            Get In Touch With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
            {[
              {
                icon: faPhone,
                title: "Call Us",
                content: "+91 9250592505",
                href: "tel:+919250592505",
                subtext: "Mon-Sat 10am-6pm IST",
                accent: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                icon: faEnvelope,
                title: "Email Us",
                content: "info@vmcmedia.in",
                href: "mailto:info@vmcmedia.in",
                subtext: "We reply within 24 hours",
                accent: "text-[#2cd1a1]",
                bg: "bg-[#2cd1a1]/10",
              },
              {
                icon: faLocationDot,
                title: "Visit Us",
                content: "VMC Media",
                href: "https://maps.google.com/?q=Green+Boulevard+Sector+62+Noida",
                subtext: "501, 5th Floor, Tower C, Block C, Green Boulevard, B-9/A, Sector 62, Noida, Uttar Pradesh – 201301",
                accent: "text-purple-500",
                bg: "bg-purple-500/10",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center border-border hover:shadow-xl transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={item.icon} className={`w-6 h-6 sm:w-8 sm:h-8 ${item.accent}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                  <a
                    href={item.href}
                    className="text-base sm:text-lg font-semibold text-primary hover:underline block break-words mb-1"
                  >
                    {item.content}
                  </a>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{item.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="border-border animate-fade-in bg-card text-card-foreground shadow-xl" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-5 sm:p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-1.5 text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full h-11 px-3.5 text-sm border border-border rounded-xl text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-[#2cd1a1]/30 focus:border-[#2cd1a1] transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-1.5 text-foreground">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Enterprises Pvt Ltd"
                      required
                      className="w-full h-11 px-3.5 text-sm border border-border rounded-xl text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-[#2cd1a1]/30 focus:border-[#2cd1a1] transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5 text-foreground">
                      Work Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      required
                      className="w-full h-11 px-3.5 text-sm border border-border rounded-xl text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-[#2cd1a1]/30 focus:border-[#2cd1a1] transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* Phone with +91 Prefix */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-1.5 text-foreground">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-[#2cd1a1]/30 focus-within:border-[#2cd1a1] overflow-hidden transition-all">
                      <span className="inline-flex items-center px-3.5 bg-muted/60 text-foreground font-semibold text-xs sm:text-sm border-r border-border select-none text-muted-foreground">
                        🇮🇳 +91
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        required
                        className="w-full h-11 px-3.5 text-sm text-foreground bg-transparent outline-none transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  {/* Industry Vertical */}
                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold mb-1.5 text-foreground">
                      Industry Vertical <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="industry"
                      name="industry"
                      type="text"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g. Real Estate, BFSI, Healthcare"
                      required
                      className="w-full h-11 px-3.5 text-sm border border-border rounded-xl text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-[#2cd1a1]/30 focus:border-[#2cd1a1] transition-all placeholder:text-muted-foreground/60"
                    />
                  </div>

                  {/* GST Number Field with Yes / No option */}
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/80 space-y-3">
                    <label className="block text-xs font-bold text-foreground">Do you have a GST Number? *</label>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground font-medium">
                        <input
                          type="radio"
                          name="hasGst-contact-page"
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
                          name="hasGst-contact-page"
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
                        className="mt-0.5 w-4 h-4 rounded border-border text-[#2cd1a1] focus:ring-[#2cd1a1] cursor-pointer accent-[#2cd1a1] shrink-0"
                      />
                      <span className="text-[11px] text-muted-foreground leading-relaxed text-left">
                        I consent to receive communications from <strong className="text-foreground font-semibold">VMC Media Pvt Ltd.</strong>, in accordance with the{" "}
                        <Link href="/pages/privacy" target="_blank" className="text-[#2cd1a1] underline hover:text-teal-400">
                          Privacy Policy
                        </Link>
                        . I understand that I can opt-out at any time.
                      </span>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-11 rounded-xl bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 text-sm font-extrabold shadow-lg shadow-[#2cd1a1]/20 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Connect with Our Experts"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Card className="border-border bg-card">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faClock} className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">Office Hours</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">We're available during these times</p>
                    </div>
                  </div>
                  <div className="space-y-2.5 sm:space-y-3 text-sm sm:text-base">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-foreground font-medium">Monday - Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-foreground font-medium">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ready to Get Started Box - Theme-Responsive (Light & Dark) */}
              <Card className="border border-border shadow-xl relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#073D7B] via-[#052e5c] to-slate-900 text-white dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 dark:border-white/10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2cd1a1]/10 rounded-full blur-3xl pointer-events-none" />
                <CardContent className="p-6 sm:p-7 lg:p-8 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white tracking-tight">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-5 sm:mb-6 text-xs sm:text-sm text-slate-200/90 dark:text-slate-300 leading-relaxed font-normal">
                    Schedule a consultation with our team to discuss your marketing and AI automation goals.
                  </p>
                  <Button 
                    onClick={() => {
                      const formEl = document.getElementById('fullName');
                      formEl?.focus();
                      formEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    size="lg" 
                    className="w-full bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-[#2cd1a1]/25 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    Connect with Our Experts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interactive Google Map / Geolocation Section */}
          <div className="mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Our Office Location</h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
                501, 5th Floor, Tower C, Block C, Green Boulevard, B-9/A, Sector 62, Noida, Uttar Pradesh – 201301
              </p>
            </div>
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-xl">
              <iframe
                title="VMC Media Location - Green Boulevard Sector-62 Noida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4849313200735!2d77.36214307629559!3d28.615219984216853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce566270929f9%3A0x6d1be25f0535c829!2sGreen%20Boulevard!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;