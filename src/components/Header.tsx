
'use client'


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ChevronDown, Search, Share2, Target, Globe, PenTool, 
  BarChart3, ShoppingCart, MapPin, Users, Award, Shield, 
  MessageSquare, Mic, Bot, Sparkles, ExternalLink, ArrowRight,
  Zap, Database, CheckCircle2, Layers, Cpu, Building2, GraduationCap, Stethoscope
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "@/components/ThemeToggle";
import GetStartedModal from "@/components/GetStartedModal";
import { useModal } from "@/context/ModalContext";

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const products = [
    {
      name: "AIWA WhatsApp CRM",
      tagline: "WhatsApp-First Revenue OS & Multi-Agent Inbox",
      badge: "Flagship SaaS",
      badgeColor: "bg-[#2cd1a1]/10 text-[#2cd1a1] border-[#2cd1a1]/20",
      href: "/products/aiwa",
      externalHref: "https://aiwa.vmcmedia.in",
      icon: MessageSquare,
      accent: "text-[#2cd1a1]",
      bgAccent: "bg-[#2cd1a1]/10",
      description: "Official Cloud API, Multi-LLM AI Agent (BYOK), Kanban CRM & GST invoicing on WhatsApp."
    },
    {
      name: "AI Voicebot (Inbound & Outbound)",
      tagline: "Autonomous Voice AI Agents",
      badge: "Sub-Second Latency",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      href: "/ai-solutions/ai-voicebot",
      icon: Mic,
      accent: "text-blue-500",
      bgAccent: "bg-blue-500/10",
      description: "Instant 60-second speed-to-lead calls, qualification, calendar sync & human handoff."
    },
    {
      name: "AI Chatbots & Lead Engines",
      tagline: "Omnichannel Intent & Qualification",
      badge: "Multi-Model",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      href: "/ai-solutions/ai-chatbot",
      icon: Bot,
      accent: "text-purple-500",
      bgAccent: "bg-purple-500/10",
      description: "Trained on your business docs to qualify buyer intent and book meetings 24/7."
    },
    {
      name: "Revenue Pipeline & Sales Automation",
      tagline: "End-to-End Pipeline Routing",
      badge: "Zero Drop-off",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      href: "/ai-solutions/sales-automation",
      icon: Zap,
      accent: "text-amber-500",
      bgAccent: "bg-amber-500/10",
      description: "Real-time CRM sync, instant lead alerts, webhook pipelines & deal scoring."
    }
  ];

  const services = {
    performance: [
      { name: "Google Ads & PPC Campaigns", href: "/services/google-ads", icon: Target, desc: "High-ROI intent search & performance max" },
      { name: "Social Media Marketing (SMM)", href: "/services/smm", icon: Share2, desc: "Meta, LinkedIn & viral creative funnels" },
      { name: "Conversion Rate Optimization (CRO)", href: "/services/cro", icon: BarChart3, desc: "A/B tested high-converting landing pages" },
    ],
    growth: [
      { name: "Search Engine Optimization (SEO)", href: "/services/seo", icon: Search, desc: "Dominant organic rank & technical audit" },
      { name: "Local SEO & Multi-City GMB", href: "/services/local-seo", icon: MapPin, desc: "Hyperlocal discovery & map pack domination" },
      { name: "E-Commerce Growth Marketing", href: "/services/ecommerce", icon: ShoppingCart, desc: "ROAS scaling for Shopify & D2C brands" },
    ],
    creative: [
      { name: "Web Development & UI/UX", href: "/services/web-development", icon: Globe, desc: "Next.js, high-speed SaaS architectures" },
      { name: "Content Creation & Branding", href: "/services/branding", icon: PenTool, desc: "Positioning, pitch decks & copy" },
      { name: "Online Reputation Management", href: "/services/orm", icon: Shield, desc: "Brand authority & proactive review shield" },
    ]
  };

  const industries = [
    { name: "Real Estate & Builders", href: "/portfolio/real-estate", icon: Building2, desc: "Instant site visit bookings & broker CRM" },
    { name: "Higher Education & Consultancies", href: "/portfolio/college-consultancy", icon: GraduationCap, desc: "Admission funnels & multi-counselor routing" },
    { name: "Healthcare & Hospitals", href: "/portfolio/hospital", icon: Stethoscope, desc: "Patient appointment scheduling & OPD triage" },
    { name: "E-commerce & Retail Brands", href: "/portfolio/ecommerce", icon: ShoppingCart, desc: "Abandoned cart WhatsApp recovery & payment links" },
  ];

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="w-full px-4 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-95 transition-all py-1 group">
            <div className="bg-white/95 dark:bg-white/95 px-3.5 py-1.5 rounded-xl shadow-sm border border-black/5 dark:border-white/20 transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]">
              <img 
                src="/logo-vm.png" 
                alt="VMC Media - Connect · Create · Grow" 
                className="h-10 sm:h-11 md:h-12 w-auto object-contain" 
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm tracking-wide relative group"
              activeClassName="text-primary font-semibold"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            {/* Mega Menu: Products & SaaS */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium py-2 text-sm">
                <span>Products & SaaS</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#2cd1a1]/10 text-[#2cd1a1] border border-[#2cd1a1]/20">
                  AIWA
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "products" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-6 ring-1 ring-black/5">
                    
                    {/* Header Banner for AIWA */}
                    <div className="flex items-center justify-between p-4 mb-4 rounded-xl bg-gradient-to-r from-[#2cd1a1]/10 via-accent/10 to-primary/10 border border-[#2cd1a1]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#2cd1a1] text-white flex items-center justify-center font-bold shadow-md">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-foreground">AIWA WhatsApp CRM Platform</span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#2cd1a1] text-white shadow-sm">
                              Live SaaS
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">The ultimate WhatsApp-First Revenue OS for Indian businesses & agencies</p>
                        </div>
                      </div>
                      <a
                        href="https://aiwa.vmcmedia.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#2cd1a1] hover:bg-[#27b98f] text-white shadow-sm transition-all hover:scale-105"
                      >
                        <span>Open AIWA</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {products.map((p) => (
                        <div
                          key={p.name}
                          className="group/p p-3.5 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/40 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-lg ${p.bgAccent} flex items-center justify-center ${p.accent}`}>
                                  <p.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-foreground group-hover/p:text-primary transition-colors">
                                    {p.name}
                                  </h4>
                                </div>
                              </div>
                              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                                {p.badge}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                              {p.description}
                            </p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between text-xs">
                            <NavLink to={p.href} className="text-muted-foreground hover:text-foreground font-medium flex items-center gap-1">
                              Overview <ArrowRight className="w-3 h-3" />
                            </NavLink>
                            {p.externalHref && (
                              <a
                                href={p.externalHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#2cd1a1] hover:underline flex items-center gap-1"
                              >
                                Launch App <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Subdomain Footer note */}
                    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground px-1">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        <span>Powered by Meta Cloud API + Multi-LLM BYOK Architecture</span>
                      </div>
                      <a href="https://aiwa.vmcmedia.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                        aiwa.vmcmedia.in &rarr;
                      </a>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu: Growth Services */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2 text-sm">
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "services" && (
                <div className="absolute top-full -left-20 pt-3 w-[780px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-6 ring-1 ring-black/5">
                    <div className="grid grid-cols-3 gap-6">
                      
                      <div>
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border">
                          <Target className="w-4 h-4 text-primary" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Performance & Paid</h3>
                        </div>
                        <div className="space-y-2">
                          {services.performance.map((s) => (
                            <NavLink
                              key={s.href}
                              to={s.href}
                              className="group block p-2 rounded-lg hover:bg-muted/60 transition-all"
                            >
                              <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                                {s.name}
                              </div>
                              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{s.desc}</p>
                            </NavLink>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border">
                          <Search className="w-4 h-4 text-secondary" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Organic & Local</h3>
                        </div>
                        <div className="space-y-2">
                          {services.growth.map((s) => (
                            <NavLink
                              key={s.href}
                              to={s.href}
                              className="group block p-2 rounded-lg hover:bg-muted/60 transition-all"
                            >
                              <div className="text-xs font-semibold text-foreground group-hover:text-secondary transition-colors flex items-center justify-between">
                                {s.name}
                              </div>
                              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{s.desc}</p>
                            </NavLink>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border">
                          <Globe className="w-4 h-4 text-accent" />
                          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Tech & Reputation</h3>
                        </div>
                        <div className="space-y-2">
                          {services.creative.map((s) => (
                            <NavLink
                              key={s.href}
                              to={s.href}
                              className="group block p-2 rounded-lg hover:bg-muted/60 transition-all"
                            >
                              <div className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                                {s.name}
                              </div>
                              <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{s.desc}</p>
                            </NavLink>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu: Solutions by Industry */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2 text-sm">
                Industries <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "industries" && (
                <div className="absolute top-full -left-10 pt-3 w-[560px] animate-fade-in">
                  <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-5 ring-1 ring-black/5">
                    <div className="grid grid-cols-2 gap-3">
                      {industries.map((ind) => (
                        <NavLink
                          key={ind.href}
                          to={ind.href}
                          className="group p-3 rounded-xl border border-border/60 hover:border-secondary/50 hover:bg-muted/40 transition-all"
                        >
                          <div className="flex items-center gap-2.5 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                              <ind.icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-semibold text-foreground group-hover:text-secondary transition-colors">
                              {ind.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground line-clamp-2">{ind.desc}</p>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm"
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm"
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm"
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* Direct Subdomain CTA to AIWA SaaS */}
            <a
              href="https://aiwa.vmcmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#2cd1a1]/10 text-[#2cd1a1] hover:bg-[#2cd1a1] hover:text-white border border-[#2cd1a1]/20 transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Launch AIWA</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Primary Action Button */}
            <Button 
              onClick={() => openModal()}
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all font-semibold px-5 text-sm rounded-xl"
            >
              Book AI Demo
            </Button>

            {/* Mobile Hamburger */}
            <button
              className="xl:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 px-2 border-t border-border animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto bg-background/98 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              
              {/* Highlight AIWA Mobile Card */}
              <div className="p-3 mb-2 rounded-xl bg-gradient-to-r from-[#2cd1a1]/10 via-accent/10 to-primary/10 border border-[#2cd1a1]/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2cd1a1] animate-pulse" />
                    <span className="font-bold text-xs text-foreground">AIWA WhatsApp CRM</span>
                  </div>
                  <span className="text-[10px] bg-[#2cd1a1] text-white px-2 py-0.5 rounded-full font-semibold">Live SaaS</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Multi-Agent WhatsApp CRM, Meta Cloud API, AI Chatbot BYOK & GST Billing.</p>
                <div className="flex gap-2">
                  <a
                    href="https://aiwa.vmcmedia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-[#2cd1a1] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5"
                  >
                    <span>Launch AIWA</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <NavLink
                    to="/products/aiwa"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 text-center py-2 bg-card border border-border text-foreground text-xs font-semibold rounded-lg flex items-center justify-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="/"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-2.5 px-4 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              {/* Mobile Products Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("products")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-2.5 px-4 rounded-lg text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span>Products & SaaS</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#2cd1a1]/10 text-[#2cd1a1] rounded">AI</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "products" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "products" && (
                  <div className="mt-2 ml-4 space-y-1">
                    {products.map((p) => (
                      <NavLink
                        key={p.name}
                        to={p.href}
                        className="flex items-center gap-3 text-xs py-2 px-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <p.icon className="w-4 h-4 text-primary" />
                        <div>
                          <div className="font-semibold text-foreground">{p.name}</div>
                          <div className="text-[10px] text-muted-foreground">{p.tagline}</div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("services")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-2.5 px-4 rounded-lg text-sm"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "services" && (
                  <div className="mt-2 ml-4 space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase px-3 pt-1">Performance & Ads</p>
                    {services.performance.map((s) => (
                      <NavLink
                        key={s.href}
                        to={s.href}
                        className="flex items-center gap-2 text-xs py-1.5 px-3 text-muted-foreground hover:text-primary rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <s.icon className="w-3.5 h-3.5" />
                        {s.name}
                      </NavLink>
                    ))}

                    <p className="text-[10px] font-bold text-muted-foreground uppercase px-3 pt-2">Growth & SEO</p>
                    {services.growth.map((s) => (
                      <NavLink
                        key={s.href}
                        to={s.href}
                        className="flex items-center gap-2 text-xs py-1.5 px-3 text-muted-foreground hover:text-secondary rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <s.icon className="w-3.5 h-3.5" />
                        {s.name}
                      </NavLink>
                    ))}

                    <p className="text-[10px] font-bold text-muted-foreground uppercase px-3 pt-2">Tech & Design</p>
                    {services.creative.map((s) => (
                      <NavLink
                        key={s.href}
                        to={s.href}
                        className="flex items-center gap-2 text-xs py-1.5 px-3 text-muted-foreground hover:text-accent rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <s.icon className="w-3.5 h-3.5" />
                        {s.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("industries")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-2.5 px-4 rounded-lg text-sm"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "industries" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "industries" && (
                  <div className="mt-2 ml-4 space-y-1">
                    {industries.map((ind) => (
                      <NavLink
                        key={ind.href}
                        to={ind.href}
                        className="flex items-center gap-2 text-xs py-1.5 px-3 text-muted-foreground hover:text-secondary rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ind.icon className="w-3.5 h-3.5" />
                        {ind.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-2.5 px-4 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>

              <NavLink
                to="/blog"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-2.5 px-4 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-2.5 px-4 rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>

              <div className="pt-4 mt-2 border-t border-border px-2">
                <Button 
                  onClick={() => {
                    openModal();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md py-2.5 text-sm"
                >
                  Book AI Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;

