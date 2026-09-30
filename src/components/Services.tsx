'use client'

import { Search, BarChart3, Target, TrendingUp, FileText, Share2, Globe, PenTool, ArrowRight, Zap, Users, Shield, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Drive organic traffic with technical SEO, keyword research, and link building optimized for the Indian market.",
    color: "bg-accent",
    link: "/services/seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build brand presence across Instagram, Facebook, YouTube, and LinkedIn with regional content and influencer campaigns.",
    color: "bg-accent",
    link: "/services/smm",
  },
  {
    icon: FileText,
    title: "Content Marketing & Blogging",
    description: "Create pillar content, blog strategies, and localized content in Hindi and regional languages for higher engagement.",
    color: "bg-accent",
    link: "/services/branding",
  },
  {
    icon: Target,
    title: "Paid Advertising & PPC",
    description: "Performance-driven Google Ads and YouTube campaigns with hyperlocal targeting to maximize ROI.",
    color: "bg-accent",
    link: "/services/google-ads",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "GA4 dashboards, conversion tracking, and monthly reports with actionable insights for your business.",
    color: "bg-accent",
    link: "/services/cro",
  },
  {
    icon: Globe,
    title: "Digital Marketing & Growth",
    description: "End-to-end growth strategies combining SEO, CRO, and marketplace tactics for sustainable expansion.",
    color: "bg-accent",
    link: "/services/web-development",
  },
  {
    icon: PenTool,
    title: "Branding & Design",
    description: "Logo design, brand identity, and visual guidelines that establish market leadership.",
    color: "bg-accent",
    link: "/services/branding",
  },
  {
    icon: Zap,
    title: "Conversion Rate Optimization",
    description: "A/B testing, user behavior analysis, and checkout optimization to increase conversions.",
    color: "bg-accent",
    link: "/services/cro",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Marketing",
    description: "Marketplace optimization for Amazon, Flipkart, and independent stores to maximize sales velocity.",
    color: "bg-accent",
    link: "/services/ecommerce",
  },
  {
    icon: Shield,
    title: "Local SEO & Business Growth",
    description: "Google Business Profile optimization and location-based SEO to dominate local search results.",
    color: "bg-accent",
    link: "/services/local-seo",
  },
];

const Services = () => {
  const router = useRouter();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Observer for title section
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !titleVisible) {
            setTitleVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    // Observer for cards
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150); // Staggered animation delay
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((ref) => {
      if (ref) cardsObserver.observe(ref);
    });

    return () => {
      titleObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, [visibleCards, titleVisible]);

  return (
    <section id="services" className="pt-4 pb-16 lg:pt-6 lg:pb-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10" ref={sectionRef}>
        <div ref={titleRef} className="text-center mb-6 sm:mb-8 lg:mb-10 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-xs sm:text-sm font-semibold text-accent">Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-tight pb-2">
            <span className={`inline-block mr-3 transition-all duration-700 delay-200 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Comprehensive Digital
            </span>
            <span className={`inline-block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent transition-all duration-700 delay-300 pb-1 ${
              titleVisible ? 'opacity-100 translate-y-0 animate-gradient' : 'opacity-0 translate-y-12'
            }`}>
              Marketing Solutions
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {titleVisible ? (
              "We deliver measurable growth through data-driven strategies, cutting-edge tools, and transparent reporting—backed by industry specialists dedicated to your success.".split('').map((char, index) => (
                <span
                  key={index}
                  className="animate-char-slide-in"
                  style={{
                    animationDelay: `${0.4 + index * 0.015}s`,
                    opacity: 0
                  }}
                >
                  {char}
                </span>
              ))
            ) : (
              <span className="opacity-0">We deliver measurable growth through data-driven strategies, cutting-edge tools, and transparent reporting—backed by industry specialists dedicated to your success.</span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-border/50 hover:border-accent/50 shadow-lg hover:shadow-premium-lg transition-all duration-700 hover:-translate-y-2 flex flex-col h-full ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon with enhanced animation */}
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description - grows to fill available space */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link with enhanced animation */}
                <button 
                  onClick={() => router.push(service.link)}
                  className="inline-flex items-center text-sm font-semibold text-accent group-hover:gap-2 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  <span className="absolute inset-0 w-0 bg-accent/10 group-hover:w-full transition-all duration-300 rounded-md -z-0"></span>
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes char-slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        .animate-char-slide-in {
          animation: char-slide-in 0.3s ease-out forwards;
        }

        .delay-200 {
          transition-delay: 0.2s;
        }

        .delay-300 {
          transition-delay: 0.3s;
        }

        .delay-400 {
          transition-delay: 0.4s;
        }

        .shadow-premium-lg {
          box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.25),
                      0 0 0 1px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
};

export default Services;