"use client";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import "@/styles/floating-labels.css";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your audit request has been sent. We'll contact you soon!",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send request. Please try again.",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us | VMC Media Pvt. Ltd."
        description="Get in touch with VMC Media. We're here to help you unlock your brand's full potential. Contact us for digital marketing consultation."
        canonical="/contact"
      />      
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Grow Your Business Together
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Have a project in mind? We're here to help you unlock your brand's full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Get In Touch With Us</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 9250592505",
                subtext: "Mon-Sat 10am-6pm IST",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "Info@vmcmedia.in",
                subtext: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "VMC Media Pvt. Ltd.",
                subtext: "701,7th Floor, logix city centre, Sector-32, Noida-201301",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{item.content}</p>
                  <p className="text-sm text-muted-foreground">{item.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  {/* Full Name */}
                  <div className="floating-label-container">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                    />
                    <label htmlFor="fullName" className="floating-label">
                      Full Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="floating-label-container">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                    />
                    <label htmlFor="email" className="floating-label">
                      Email Address
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="floating-label-container">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="floating-input w-full h-10 px-3 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all"
                    />
                    <label htmlFor="phone" className="floating-label">
                      Phone Number
                    </label>
                  </div>

                  {/* Service Dropdown */}
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="w-full h-10 px-3 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 !placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all [&>span]:text-gray-500 !bg-white !text-gray-900">
                      <SelectValue placeholder="I'm interested in..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo">SEO Services</SelectItem>
                      <SelectItem value="smm">Social Media Marketing</SelectItem>
                      <SelectItem value="ppc">Google Ads & PPC</SelectItem>
                      <SelectItem value="web">Website Development</SelectItem>
                      <SelectItem value="branding">Branding & Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Message */}
                  <div className="floating-label-container">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="floating-textarea w-full px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all resize-none"
                    />
                    <label htmlFor="message" className="floating-textarea-label">
                      Tell us about your project
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-10 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Request Audit"}
                  </Button>
                  <p className="text-[10px] text-center text-gray-500 pt-1">
                    By submitting, you agree to our privacy policy
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">We're available during these times</p>
                    </div>
                  </div>
                  <div className="space-y-3">
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

              <Card className="border-border bg-gradient-to-br from-accent to-secondary">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                  <p className="mb-6 text-white/90">
                    Schedule a free consultation with our team to discuss your marketing goals.
                  </p>
                  <Button size="lg" className="w-full bg-white text-secondary hover:bg-white/90">
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;