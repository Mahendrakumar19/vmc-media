'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ChevronDown, Search, Share2, Target, Globe, PenTool, 
  BarChart3, ShoppingCart, MapPin, Shield, 
  MessageSquare, Mic, Bot, ExternalLink, ArrowRight,
  Zap, Building2, GraduationCap, Stethoscope
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "@/components/ThemeToggle";
import GetStartedModal from "@/components/GetStartedModal";
import { useModal } from "@/context/ModalContext";

// Centralized Navigation Config to avoid duplication
const PRODUCTS = [
  {
    name: "AIWA WhatsApp CRM",
    tagline: "WhatsApp-First Revenue OS & Multi-Agent Inbox",
    badge: "Flagship SaaS",
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
    href: "/ai-solutions/sales-automation",
    icon: Zap,
    accent: "text-amber-500",
    bgAccent: "bg-amber-500/10",
    description: "Real-time CRM sync, instant lead alerts, webhook pipelines & deal scoring."
  }
];

const TECH_SOLUTIONS = [
  { name: "Web Application Development", href: "/services/web-development", desc: "Next.js & modern SaaS web apps" },
  { name: "Mobile App Development", href: "/services/mobile-app", desc: "Native iOS & Android mobile apps" },
  { name: "Custom Software", href: "/services/custom-software", desc: "Tailored enterprise software & API integrations" },
  { name: "Cloud Solutions", href: "/services/cloud-deployment", desc: "AWS, Vercel & cloud hosting" },
];

const INDUSTRIES = [
  { name: "Real Estate & Builders", href: "/portfolio/real-estate", icon: Building2, desc: "Instant site visit bookings & broker CRM" },
  { name: "Higher Education & Consultancies", href: "/portfolio/college-consultancy", icon: GraduationCap, desc: "Admission funnels & multi-counselor routing" },
  { name: "Healthcare & Hospitals", href: "/portfolio/hospital", icon: Stethoscope, desc: "Patient appointment scheduling & OPD triage" },
  { name: "E-commerce & Retail Brands", href: "/portfolio/ecommerce", icon: ShoppingCart, desc: "Abandoned cart WhatsApp recovery & payment links" },
];

const DIGITAL_MARKETING = [
  { name: "Google Ads & PPC Campaigns", href: "/services/google-ads", icon: Target, desc: "High-ROI intent search & performance max" },
  { name: "Social Media Marketing (SMM)", href: "/services/smm", icon: Share2, desc: "Meta, LinkedIn & viral creative funnels" },
  { name: "Conversion Rate Optimization (CRO)", href: "/services/cro", icon: BarChart3, desc: "A/B tested high-converting landing pages" },
  { name: "Search Engine Optimization (SEO)", href: "/services/seo", icon: Search, desc: "Dominant organic rank & technical audit" },
  { name: "Local SEO & Multi-City GMB", href: "/services/local-seo", icon: MapPin, desc: "Hyperlocal discovery & map pack domination" },
  { name: "Content Creation & Branding", href: "/services/branding", icon: PenTool, desc: "Positioning, pitch decks & copy" },
  { name: "Online Reputation Management", href: "/services/orm", icon: Shield, desc: "Brand authority & proactive review shield" },
];

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileExpanded = (key: string) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-xs">
      <div className="w-full px-4 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-95 transition-all py-1 group shrink-0" onClick={closeAll}>
            <img
              src="/logo-vm.svg"
              alt="VMC Media - Connect · Create · Catalyse"
              className="h-11 sm:h-12 md:h-14 w-auto max-w-[170px] sm:max-w-[190px] md:max-w-[210px] object-contain dark:hidden"
            />
            <img
              src="/logo-vm-dark.svg"
              alt="VMC Media - Connect · Create · Catalyse"
              className="h-11 sm:h-12 md:h-14 w-auto max-w-[170px] sm:max-w-[190px] md:max-w-[210px] object-contain hidden dark:block"
            />
          </NavLink>

          {/* Desktop Navigation (Shared Data Model) */}
          <nav className="hidden xl:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm tracking-wide relative group"
              activeClassName="text-primary font-semibold"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            <NavLink
              to="/services"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm tracking-wide relative group"
              activeClassName="text-primary font-semibold"
            >
              Digital Marketing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            {/* AI Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("ai")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium py-2 text-sm cursor-pointer">
                <span>AI Solutions</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#2cd1a1]/10 text-[#2cd1a1] border border-[#2cd1a1]/20">
                  AIWA
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "ai" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "ai" && (
                <div className="absolute top-full left-0 pt-3 w-[640px] animate-in fade-in zoom-in-95 duration-200 z-50">
                  <div className="bg-popover border border-border rounded-2xl shadow-2xl p-5 ring-1 ring-border/50">
                    <div className="flex items-center justify-between p-3.5 mb-3 rounded-xl bg-gradient-to-r from-[#2cd1a1]/10 via-accent/10 to-primary/10 border border-[#2cd1a1]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#2cd1a1] text-slate-950 flex items-center justify-center font-bold shadow-md">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-foreground">AIWA WhatsApp CRM Platform</span>
                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#2cd1a1] text-slate-950">
                              Flagship SaaS
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground">
                            WhatsApp Revenue OS with Multi-Agent Inbox &amp; GST Invoicing
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://aiwa.vmcmedia.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 shadow-sm transition-all"
                      >
                        <span>Login</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {PRODUCTS.map((p) => (
                        <div key={p.name} className="group/p p-3 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/40 transition-all flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <div className={`w-7 h-7 rounded-lg ${p.bgAccent} flex items-center justify-center ${p.accent}`}>
                                <p.icon className="w-3.5 h-3.5" />
                              </div>
                              <h4 className="text-xs font-semibold text-foreground group-hover/p:text-primary transition-colors">
                                {p.name}
                              </h4>
                            </div>
                            <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1">{p.description}</p>
                          </div>
                          <div className="mt-2.5 pt-2 border-t border-border/40 flex items-center justify-between text-[11px]">
                            <NavLink to={p.href} className="text-muted-foreground hover:text-foreground font-medium flex items-center gap-1">
                              Details <ArrowRight className="w-3 h-3" />
                            </NavLink>
                            {p.externalHref && (
                              <a href={p.externalHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2cd1a1] hover:underline flex items-center gap-1">
                                Launch <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technology Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("tech")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2 text-sm cursor-pointer">
                <span>Technology Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "tech" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "tech" && (
                <div className="absolute top-full left-0 pt-3 w-[320px] animate-in fade-in zoom-in-95 duration-200 z-50">
                  <div className="bg-popover border border-border rounded-2xl shadow-2xl p-3 ring-1 ring-border/50">
                    <div className="space-y-1">
                      {TECH_SOLUTIONS.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="block p-2.5 rounded-xl hover:bg-muted/80 transition-all group/t"
                        >
                          <div className="text-xs font-semibold text-foreground group-hover/t:text-primary transition-colors">
                            {item.name}
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{item.desc}</p>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Link */}
            <NavLink
              to="/industries"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm tracking-wide relative group"
              activeClassName="text-primary font-semibold"
            >
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            {/* About Us Link */}
            <NavLink to="/about" className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm">
              About Us
            </NavLink>

            {/* Contact Link */}
            <NavLink to="/contact" className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 text-sm">
              Contact
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Desktop Action Buttons (Get Free Demo removed, Login kept) */}
            <div className="hidden md:flex items-center gap-2.5">
              <Button
                onClick={() => {
                  window.location.href = "https://aiwa.vmcmedia.in";
                }}
                className="bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold px-5 text-sm rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                Login
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="xl:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Overlay Menu (Driven directly by the exact same NAV arrays) */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 px-3 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto bg-background/98 backdrop-blur-2xl">
            <nav className="flex flex-col gap-1.5">
              {/* Top AIWA Banner */}
              <div className="p-3 mb-2 rounded-xl bg-gradient-to-r from-[#2cd1a1]/10 via-accent/10 to-primary/10 border border-[#2cd1a1]/20">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2cd1a1] animate-pulse" />
                    <span className="font-bold text-xs text-foreground">AIWA WhatsApp CRM</span>
                  </div>
                  <span className="text-[10px] bg-[#2cd1a1] text-slate-950 px-2 py-0.5 rounded-full font-bold">
                    Live SaaS
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Multi-Agent WhatsApp CRM, Meta Cloud API, AI Chatbot BYOK &amp; GST Invoicing.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://aiwa.vmcmedia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-[#2cd1a1] text-slate-950 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5"
                  >
                    <span>Launch AIWA</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <NavLink
                    to="/products/aiwa"
                    onClick={closeAll}
                    className="flex-1 text-center py-2 bg-card border border-border text-foreground text-xs font-semibold rounded-lg flex items-center justify-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>
              </div>

              {/* Standard Links */}
              <NavLink
                to="/"
                className="text-foreground hover:text-primary hover:bg-muted font-medium py-2.5 px-3 rounded-lg text-sm transition-all"
                onClick={closeAll}
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className="text-foreground hover:text-primary hover:bg-muted font-medium py-2.5 px-3 rounded-lg text-sm transition-all"
                onClick={closeAll}
              >
                Digital Marketing
              </NavLink>

              {/* Responsive Collapsible AI Solutions */}
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <button
                  onClick={() => toggleMobileExpanded("ai")}
                  className="flex items-center justify-between w-full text-foreground hover:bg-muted font-medium py-2.5 px-3 text-sm cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span>AI Solutions</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#2cd1a1]/15 text-[#2cd1a1] rounded font-semibold">
                      AIWA
                    </span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "ai" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "ai" && (
                  <div className="px-2 pb-2 space-y-1 bg-muted/20">
                    {PRODUCTS.map((p) => (
                      <NavLink
                        key={p.name}
                        to={p.href}
                        className="flex items-center gap-2.5 text-xs py-2 px-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all"
                        onClick={closeAll}
                      >
                        <p.icon className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground">{p.name}</div>
                          <div className="text-[10px] text-muted-foreground line-clamp-1">{p.tagline}</div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Responsive Collapsible Technology Solutions */}
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <button
                  onClick={() => toggleMobileExpanded("tech")}
                  className="flex items-center justify-between w-full text-foreground hover:bg-muted font-medium py-2.5 px-3 text-sm cursor-pointer"
                >
                  <span>Technology Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "tech" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "tech" && (
                  <div className="px-2 pb-2 space-y-1 bg-muted/20">
                    {TECH_SOLUTIONS.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block text-xs py-2 px-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all"
                        onClick={closeAll}
                      >
                        <div className="font-semibold text-foreground">{item.name}</div>
                        <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Responsive Collapsible Industries */}
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <button
                  onClick={() => toggleMobileExpanded("ind")}
                  className="flex items-center justify-between w-full text-foreground hover:bg-muted font-medium py-2.5 px-3 text-sm cursor-pointer"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "ind" ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === "ind" && (
                  <div className="px-2 pb-2 space-y-1 bg-muted/20">
                    <NavLink
                      to="/industries"
                      className="flex items-center justify-between text-xs py-2 px-2.5 text-[#2cd1a1] font-semibold hover:bg-muted rounded-md transition-all border-b border-border/40 mb-1"
                      onClick={closeAll}
                    >
                      <span>Explore All Industries</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </NavLink>
                    {INDUSTRIES.map((ind) => (
                      <NavLink
                        key={ind.name}
                        to={ind.href}
                        className="flex items-center gap-2 text-xs py-2 px-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all"
                        onClick={closeAll}
                      >
                        <ind.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{ind.name}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className="text-foreground hover:text-primary hover:bg-muted font-medium py-2.5 px-3 rounded-lg text-sm transition-all"
                onClick={closeAll}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className="text-foreground hover:text-primary hover:bg-muted font-medium py-2.5 px-3 rounded-lg text-sm transition-all"
                onClick={closeAll}
              >
                Contact
              </NavLink>

              {/* Mobile Actions Container */}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2.5">
                <Button
                  onClick={() => {
                    openModal();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold shadow-md py-3 text-sm rounded-xl transition-all cursor-pointer"
                >
                  Get Free Consultation
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = "https://aiwa.vmcmedia.in";
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-border hover:bg-muted text-foreground font-semibold py-3 text-sm rounded-xl transition-all cursor-pointer"
                >
                  Login
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
