import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Briefcase, Users, TrendingUp, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "150+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      value: "14+",
      label: "Years Industry Experience",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Client Retention",
    },
  ];

  const approach = [
    {
      icon: Target,
      title: "Understand Your Goals",
      description: "We start by deeply understanding your business objectives and market position.",
    },
    {
      icon: Lightbulb,
      title: "Develop a Customized Strategy",
      description: "Every business is unique. We create tailored strategies aligned with your goals.",
    },
    {
      icon: Award,
      title: "Execute with Precision",
      description: "Our experienced team executes campaigns with meticulous attention to detail.",
    },
    {
      icon: TrendingUp,
      title: "Measure, Optimize & Scale",
      description: "We continuously monitor performance and optimize for maximum ROI and growth.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | VMC Media - Full-Service Digital Marketing Agency"
        description="Learn about VMC Media, a full-service digital marketing agency with 14+ years of experience delivering results-driven solutions for businesses worldwide."
        canonical="/pages/about"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-2 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              About VMC Media
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Elevating brands and driving revenue growth through strategic digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 items-center mb-8">
            {/* Left Side - Images */}
            <div className="relative animate-fade-in max-w-xl mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-3">
                {/* Main Large Image */}
                <div className="col-span-2 relative z-10 rounded-2xl overflow-hidden">
                  <Image
                    src="/about-top.webp"
                    alt="Team collaboration"
                    width={600}
                    height={240}
                    priority
                    className="w-full h-[240px] object-cover rounded-2xl"
                  />
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 bg-card p-3 rounded-xl shadow-xl border border-border">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary mb-1">14+</p>
                      <p className="text-xs text-muted-foreground">Years Exp</p>
                    </div>
                  </div>
                </div>
                
                {/* Two Smaller Images Below */}
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/about-vmc-down.webp"
                    alt="Team meeting"
                    width={280}
                    height={140}
                    priority
                    className="w-full h-[140px] object-cover rounded-xl"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/brand.webp"
                    alt="Performance Driven"
                    width={280}
                    height={140}
                    priority
                    className="w-full h-[140px] object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-3xl -z-10" />
            </div>

            {/* Right Side - Content */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ABOUT VMC MEDIA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Award-Winning Full-Service Digital Marketing Agency
              </h2>
              <p className="text-base text-muted-foreground mb-3 leading-relaxed">
                VMC Media Pvt. Ltd. is a full-service digital marketing agency dedicated to helping businesses thrive in the competitive digital world. With a passion for creativity and a commitment to performance, we deliver solutions that elevate brands and drive revenue growth.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become a leading global digital marketing agency known for excellence, creativity, and delivering real business results.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses of all sizes with innovative digital marketing strategies that drive growth, increase visibility, and create lasting customer relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Our Approach
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We believe in a strategic, data-driven approach to digital marketing that delivers measurable results.
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
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Why Choose VMC Media?
              </h2>
              <ul className="space-y-2\">
                {[
                  "14+ years of proven industry experience and expertise",
                  "150+ successful projects delivered across diverse industries",
                  "95% client retention rate reflecting our commitment to excellence",
                  "Data-driven strategies that deliver measurable ROI",
                  "Team of certified digital marketing professionals",
                  "Transparent reporting and regular performance updates",
                  "Customized solutions tailored to your business goals",
                  "Dedicated account management and priority support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Values</h3>
                <div className="space-y-4\">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      We strive for excellence in everything we do, from strategy to execution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      We stay ahead of trends and adopt innovative approaches to deliver cutting-edge solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Transparency</h4>
                    <p className="text-sm text-muted-foreground">
                      We believe in open communication and transparent reporting with our clients.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Partnership</h4>
                    <p className="text-sm text-muted-foreground">
                      Your success is our success. We treat clients as partners in achieving growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
              Let's discuss your digital marketing goals and create a strategy that drives real results.
            </p>
            <a href="/contact" className="inline-block bg-white text-accent font-bold px-8 py-3 rounded-lg hover:bg-white/90 transition-all">
              Get in Touch With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

