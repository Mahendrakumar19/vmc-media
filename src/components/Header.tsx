
'use client'


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Share2, Target, Globe, PenTool, BarChart3, ShoppingCart, MapPin, Users, Award, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "@/components/ThemeToggle";
import GetStartedModal from "@/components/GetStartedModal";
import { useModal } from "@/context/ModalContext";

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const services = {
    core: [
      { name: "Search Engine Optimization (SEO)", href: "/services/seo", icon: Search },
      { name: "Social Media Marketing (SMM)", href: "/services/smm", icon: Share2 },
      { name: "Google Ads & PPC Campaigns", href: "/services/google-ads", icon: Target },
      { name: "Website Development & UI/UX", href: "/services/web-development", icon: Globe },
      { name: "Content Creation & Branding", href: "/services/branding", icon: PenTool },
    ],
    additional: [
      { name: "Conversion Rate Optimization", href: "/services/cro", icon: BarChart3 },
      { name: "E-commerce Marketing", href: "/services/ecommerce", icon: ShoppingCart },
      { name: "Local SEO Services", href: "/services/local-seo", icon: MapPin },
      { name: "Influencer Marketing", href: "/services/influencer-marketing", icon: Users },
      { name: "Online Reputation Management (ORM)", href: "/services/orm", icon: Shield },
    ],
  };

  const portfolio = [
    { name: "Real Estate", href: "/portfolio/real-estate", icon: Globe },
    { name: "College/Admission Consultancy", href: "/portfolio/college-consultancy", icon: Award },
    { name: "Hospital", href: "/portfolio/hospital", icon: Shield },
    { name: "Ecommerce", href: "/portfolio/ecommerce", icon: ShoppingCart },
  ];

  const aiSolutions = [
    { name: "AI Chatbot (Web & WhatsApp)", href: "/ai-solutions/ai-chatbot", icon: Search },
    { name: "AI Voicebot (Inbound & Outbound)", href: "/ai-solutions/ai-voicebot", icon: Target },
    { name: "Lead & Sales Automation", href: "/ai-solutions/sales-automation", icon: Share2 },
    { name: "WhatsApp Automation", href: "/ai-solutions/ai-chatbot", icon: Globe },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="w-full px-4 lg:px-6 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-95 transition-all py-1 group">
            <div className="bg-white/90 dark:bg-white/95 px-3 py-1.5 rounded-xl shadow-sm border border-black/5 dark:border-white/20 transition-all duration-300 group-hover:shadow-md group-hover:bg-white">
              <img 
                src="/logo-vm.png" 
                alt="VMC Media - Connect · Create · Grow" 
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 relative group"
              activeClassName="text-primary"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 pt-2 w-[600px] animate-fade-in">
                  <div className="bg-background border border-border rounded-xl shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Core Services</h3>
                      <div className="space-y-1">
                        {services.core.map((service) => (
                          <NavLink
                            key={service.href}
                            to={service.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all group/item"
                          >
                            <service.icon className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">{service.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Additional Services</h3>
                      <div className="space-y-1">
                        {services.additional.map((service) => (
                          <NavLink
                            key={service.href}
                            to={service.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all group/item"
                          >
                            <service.icon className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">{service.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("ai")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                AI Solutions <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "ai" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "ai" && (
                <div className="absolute top-full left-0 pt-2 w-80 animate-fade-in">
                  <div className="bg-background border border-border rounded-xl shadow-2xl p-4">
                  <div className="space-y-1">
                    {aiSolutions.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/10 hover:text-accent transition-all group/item"
                      >
                        <item.icon className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </NavLink>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("portfolio")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2">
                Portfolio <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "portfolio" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "portfolio" && (
                <div className="absolute top-full left-0 pt-2 w-80 animate-fade-in">
                  <div className="bg-background border border-border rounded-xl shadow-2xl p-4">
                  <div className="space-y-1">
                    {portfolio.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all group/item"
                      >
                        <item.icon className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </NavLink>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}

            <NavLink
              to="/pages/about"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            <NavLink
              to="/blog"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium px-1 py-2 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* <div className="hidden xl:flex items-center gap-2 px-4 py-2 bg-muted rounded-full whitespace-nowrap">
              <span className="text-secondary font-semibold text-sm">Support:</span>
              <span className="text-foreground font-bold text-sm">+91 9250592505</span>
            </div> */}
            <ThemeToggle />
            <Button 
              onClick={() => openModal()}
              className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all font-semibold px-6"
            >
              Book AI Demo
            </Button>
            <button
              className="lg:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 px-0 border-t border-border animate-fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-2 px-4">
              <NavLink
                to="/"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              {/* Mobile Services Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("services")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "services" && (
                  <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                    <p className="text-xs font-bold text-secondary uppercase px-4 py-2">Core Services</p>
                    {services.core.map((service) => (
                      <NavLink
                        key={service.href}
                        to={service.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <service.icon className="w-4 h-4" />
                        {service.name}
                      </NavLink>
                    ))}
                    <p className="text-xs font-bold text-secondary uppercase px-4 py-2 mt-2">Additional Services</p>
                    {services.additional.map((service) => (
                      <NavLink
                        key={service.href}
                        to={service.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <service.icon className="w-4 h-4" />
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI Solutions Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("ai")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                >
                  AI Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "ai" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "ai" && (
                  <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                    {aiSolutions.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Portfolio Dropdown */}
              <div className="border-b border-border pb-2">
                <button
                  onClick={() => toggleMobileDropdown("portfolio")}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                >
                  Portfolio
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === "portfolio" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "portfolio" && (
                  <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                    {portfolio.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-2 text-sm py-2 px-4 text-muted-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/pages/about"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>

              <NavLink
                to="/blog"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className="text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>

              <div className="pt-4 mt-4 border-t border-border px-0">
                {/* <div className="flex items-center gap-2 text-sm mb-4 p-3 bg-muted rounded-lg mx-4">
                  <span className="text-secondary font-semibold">Support:</span>
                  <span className="text-foreground font-bold">+91 9250592505</span>
                </div> */}
                <div className="px-4">
                  <Button 
                    onClick={() => {
                      openModal();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg"
                  >
                    Book AI Demo
                  </Button>
                </div>
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
