"use client";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  MessageSquare,
} from "lucide-react";

const About = () => {
  const approach = [
    {
      icon: Target,
      title: "Understand Your Business DNA",
      description:
        "We begin by mapping your technology landscape, pain points, and strategic growth objectives to engineer the right AI and IT roadmap.",
    },
    {
      icon: Lightbulb,
      title: "Design an Intelligent Strategy",
      description:
        "Every enterprise is unique. We architect tailored AI, cloud, and digital solutions aligned with your industry and business model.",
    },
    {
      icon: Award,
      title: "Execute with Precision",
      description:
        "Our certified technology experts deploy, integrate, and manage solutions with meticulous attention to security, scalability, and performance.",
    },
    {
      icon: TrendingUp,
      title: "Optimise, Scale & Catalyse",
      description:
        "We continuously monitor, fine-tune, and evolve your digital ecosystem to maximise ROI and accelerate long-term growth.",
    },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "Generative & Conversational AI",
      description:
        "Harness the power of large language models, AI chatbots, and intelligent automation to reimagine customer experiences and internal operations.",
    },
    {
      icon: Cloud,
      title: "IT Infrastructure & Cloud Services",
      description:
        "End-to-end cloud migration, managed IT infrastructure, and hybrid multi-cloud architectures built for reliability and scale.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Proactive threat detection, zero-trust frameworks, and compliance-ready security postures that protect your digital assets.",
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Communication",
      description:
        "Unified cloud communication platforms—CPaaS, UCaaS, WhatsApp Business API, and more—to engage customers across every touchpoint.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | VMC Media - AI-Driven IT Solutions & Digital Transformation"
        description="VMC Media is an AI-driven IT solutions and services company empowering businesses with next-generation technology—cloud, cybersecurity, generative AI, and omnichannel communication."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About VMC Media
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              An AI-driven IT solutions and services company dedicated to
              empowering businesses with next-generation technology
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Single Feature Image */}
            <div className="relative animate-fade-in rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src="/about-vmc-agency.png"
                alt="VMC Media AI-Driven IT Solutions Team"
                className="w-full h-[400px] object-cover rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Right Side - Content */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                AI-Driven IT Solutions & Digital Transformation
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                VMC Media Pvt. Ltd. is an AI-driven IT solutions and services
                company dedicated to empowering businesses with next-generation
                technology. We specialise in delivering end-to-end IT
                infrastructure, communication solutions(Chatbots, Voicebots, Cloud Telephony, IVR, WhatsApp CRM),
                digital transformation, cloud services and cybersecurity
                offerings tailored for the B2B sector.
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                We combine deep domain expertise with a strong AI and
                cloud-centric approach to modernise business operations—helping
                enterprises adopt Smart Digital Solutions across connectivity,
                cloud communications, cybersecurity, productivity, omnichannel
                engagement, and more.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To become a leading AI and technology solutions partner,
                    enabling Indian and global enterprises to unlock their full
                    digital potential through innovation, intelligence, and
                    impact.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To deliver secure, scalable, and future-ready digital
                    solutions that modernise operations, accelerate growth, and
                    create lasting competitive advantage for businesses of every
                    size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We bring together AI, cloud, and enterprise technology to deliver
              transformative outcomes across every layer of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((item, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Approach
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A structured, AI-augmented methodology that transforms complexity
              into clarity and ideas into measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose VMC Media?
              </h2>
              <ul className="space-y-4">
                {[
                  "14+ years of proven technology and digital expertise",
                  "End-to-end AI, cloud, and IT infrastructure capabilities",
                  "150+ successful enterprise and B2B projects delivered",
                  "95% client retention rate reflecting our commitment to excellence",
                  "Certified professionals across cloud, cybersecurity & AI platforms",
                  "Deep integration expertise with leading SaaS and CPaaS providers",
                  "Customised solutions built around your industry and growth stage",
                  "Dedicated account management and 24/7 priority support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card
              className="border-border animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Values
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      Innovation First
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We stay at the frontier of AI and cloud technology,
                      constantly evolving our solutions to keep our clients
                      ahead of the curve.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      Security & Trust
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Every solution we build is designed with
                      security-by-default principles, ensuring data protection
                      and regulatory compliance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      Transparency
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We believe in open communication, clear SLAs, and
                      real-time reporting so you always know exactly where your
                      investment stands.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      Partnership
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Your growth is our growth. We embed ourselves as a
                      long-term technology partner, not just a vendor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI-driven IT solutions can modernise
              your operations, strengthen your security, and catalyse growth.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-accent font-bold px-8 py-3 rounded-lg hover:bg-white/90 transition-all"
            >
              Get in Touch With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
