// Comprehensive Knowledge Base for VMC Media AI Assistant

export interface VMCKnowledgeItem {
  category: string;
  keywords: string[];
  title: string;
  response: string;
  actions?: Array<{ label: string; href?: string; action?: string }>;
}

export const VMC_KNOWLEDGE_BASE: VMCKnowledgeItem[] = [
  {
    category: "About VMC Media",
    keywords: ["who are you", "about vmc", "what is vmc media", "company", "location", "office", "address", "founder", "agency"],
    title: "About VMC Media",
    response: "VMC Media is a premier full-service Digital Growth & AI Automation Agency based in Noida/Delhi-NCR, India. We specialize in performance marketing (Google Ads, Meta Ads, SEO, CRO), proprietary AI solutions (Autonomous AI Voicebots, AI Chatbots, Multi-agent WhatsApp CRM via AIWA), and custom web/SaaS engineering.",
    actions: [
      { label: "About Us Page", href: "/about" },
      { label: "Connect with Experts", action: "open_modal" }
    ]
  },
  {
    category: "AI Solutions - Overview",
    keywords: ["ai solutions", "ai services", "ai", "artificial intelligence", "automation", "bots"],
    title: "VMC AI Solutions Suite",
    response: "VMC Media builds enterprise-grade AI automation tools that run 24/7:\n\n1. **Autonomous AI Voicebots**: Human-like conversational voice agents for instant outbound qualification & inbound support with sub-second latency.\n2. **AI Chatbots & Lead Engines**: Custom LLM chatbots trained on your business documents to qualify intent, answer questions, and book meetings.\n3. **AIWA WhatsApp CRM Platform**: Meta Cloud API-powered multi-agent team inbox, automated broadcast campaigns, and CRM sync.",
    actions: [
      { label: "Explore AI Solutions", href: "/ai-solutions" },
      { label: "Launch AIWA Platform", href: "https://aiwa.vmcmedia.in" }
    ]
  },
  {
    category: "AI Voicebots",
    keywords: ["voicebot", "voice bot", "calling bot", "ai calling", "voice assistant", "cold call", "outbound", "inbound call"],
    title: "Autonomous AI Voicebots",
    response: "Our AI Voicebots deliver human-like conversational voice with <60s speed-to-lead. They handle inbound inquiries, execute outbound qualification campaigns, overcome customer objections, and automatically sync structured lead notes to your CRM.",
    actions: [
      { label: "Voicebot Details", href: "/ai-solutions/ai-voicebot" },
      { label: "Book a Live Demo", action: "open_modal" }
    ]
  },
  {
    category: "AI Chatbots",
    keywords: ["chatbot", "chat bot", "customer support bot", "website bot", "ai chat", "lead capture bot"],
    title: "Custom AI Chatbots & Lead Engines",
    response: "Our custom LLM chatbots are trained directly on your business catalog, FAQs, and service playbook. They engage visitors 24/7, answer technical questions, capture phone & email credentials, and schedule qualified appointments directly into your calendar.",
    actions: [
      { label: "Chatbot Features", href: "/ai-solutions/ai-chatbot" },
      { label: "Get a Custom Bot", action: "open_modal" }
    ]
  },
  {
    category: "AIWA WhatsApp CRM",
    keywords: ["aiwa", "whatsapp crm", "whatsapp api", "whatsapp automation", "broadcast", "meta cloud api"],
    title: "AIWA - WhatsApp Business Automation Platform",
    response: "AIWA (by VMC Media) is an enterprise WhatsApp platform built on the official Meta Cloud API. It features multi-agent team inboxes, automated broadcast campaigns with green tick support, automated GST invoicing, and CRM lead capture.",
    actions: [
      { label: "Visit AIWA SaaS", href: "https://aiwa.vmcmedia.in" },
      { label: "Request WhatsApp Demo", action: "open_modal" }
    ]
  },
  {
    category: "Digital Marketing - Overview",
    keywords: ["digital marketing", "marketing services", "online marketing", "growth marketing", "lead generation"],
    title: "Performance Digital Marketing",
    response: "We manage end-to-end performance marketing engineered for real business revenue:\n\n• **Google Ads & PPC**: Search, Display & Performance Max for high-intent leads (up to 4.2x ROAS).\n• **Social Media Marketing (SMM)**: High-converting creative ads across Meta & LinkedIn.\n• **SEO & Local Map Domination**: Rank #1 on Google Search and Map 3-pack.\n• **CRO (Conversion Rate Optimization)**: Turn existing traffic into paying clients.\n• **E-Commerce Scaling**: Shopify & DTC growth marketing.",
    actions: [
      { label: "View All Services", href: "/services" },
      { label: "Get Growth Assessment", action: "open_modal" }
    ]
  },
  {
    category: "Google Ads & PPC",
    keywords: ["google ads", "ppc", "pay per click", "search ads", "adwords", "pmax", "performance max"],
    title: "Google Ads & PPC Management",
    response: "Our PPC team builds laser-targeted Search & Performance Max campaigns with strict negative keyword lists, conversion-optimized landing pages, and real-time ROAS tracking. Clients consistently see lower customer acquisition costs (CAC) and qualified inbound phone calls.",
    actions: [
      { label: "Google Ads Service", href: "/services/google-ads" },
      { label: "Audit My Current Ads", action: "open_modal" }
    ]
  },
  {
    category: "SEO & Local Search",
    keywords: ["seo", "search engine optimization", "google ranking", "rank 1", "local seo", "gmb", "google map"],
    title: "Search Engine Optimization & Local SEO",
    response: "We offer comprehensive Technical SEO, content architecture, and authoritative backlink building to dominate competitive commercial keywords. For local businesses, our Local SEO guarantees dominance in the Google 3-Pack Map rankings to capture high-intent nearby customers.",
    actions: [
      { label: "SEO Services", href: "/services/seo" },
      { label: "Local SEO Details", href: "/services/local-seo" }
    ]
  },
  {
    category: "Web & Custom Software",
    keywords: ["website", "web development", "custom software", "nextjs", "react", "app development", "mobile app", "saas"],
    title: "Modern Web & Custom Software Engineering",
    response: "We engineer lightning-fast Next.js 15, React, and TypeScript web applications, customer portals, and mobile apps. Every platform features sub-second Core Web Vitals, headless CMS integration, secure authentication, and built-in technical SEO.",
    actions: [
      { label: "Technology Solutions", href: "/technology-solutions" },
      { label: "Start a Project", action: "open_modal" }
    ]
  },
  {
    category: "Industries Served",
    keywords: ["industry", "industries", "healthcare", "real estate", "education", "finance", "bfsi", "manufacturing", "ecommerce", "retail"],
    title: "Industries We Specialize In",
    response: "VMC Media designs bespoke growth engines across 8 key sectors:\n• **Healthcare & Hospitals** (Patient appointment booking)\n• **Real Estate & PropTech** (High-ticket buyer qualification)\n• **Education & EdTech** (Student admission funnels)\n• **BFSI & Financial Services** (Loan & policy leads)\n• **Manufacturing & B2B Industrial** (RFQ generation)\n• **E-Commerce & DTC** (ROAS & GMV lift)\n• **Automotive Dealerships** (Test drive bookings)\n• **Legal & Professional Services** (Consultation pipelines)",
    actions: [
      { label: "Explore Industries", href: "/industries" }
    ]
  },
  {
    category: "Contact & Support",
    keywords: ["contact", "phone", "email", "address", "office hours", "call", "whatsapp", "reach out", "support"],
    title: "Contact VMC Media",
    response: "You can reach our team directly:\n\n• **Email**: info@vmcmedia.in\n• **Phone / WhatsApp**: +91 92505 92505\n• **Office Hours**: Monday – Saturday, 10:00 AM – 6:00 PM IST\n• **Headquarters**: Sector 63, Noida, Uttar Pradesh 201301, India\n\nWould you like to schedule a consultation with our growth experts?",
    actions: [
      { label: "Contact Page", href: "/contact" },
      { label: "WhatsApp Chat", href: "https://wa.me/919250592505" },
      { label: "Connect with Experts", action: "open_modal" }
    ]
  },
  {
    category: "Pricing & Quotation",
    keywords: ["price", "pricing", "cost", "how much", "quote", "charges", "package", "fees"],
    title: "Pricing & Custom Growth Packages",
    response: "Because every business has unique scale objectives, our pricing is customized based on your required growth channels (performance PPC, SEO, custom AI Voicebot, or full-funnel agency retainer). We offer transparent ROI projections before you commit.\n\nShare your project details to get an immediate customized estimate!",
    actions: [
      { label: "Get Custom Quote", action: "open_modal" },
      { label: "Call Us: +91 92505 92505", href: "tel:+919250592505" }
    ]
  }
];

export function findBestKnowledgeAnswer(query: string): VMCKnowledgeItem {
  const normalized = query.toLowerCase().trim();

  // 1. Direct keyword match with scoring
  let bestMatch: VMCKnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of VMC_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      if (normalized.includes(kw)) {
        score += kw.length; // prioritize longer, more specific phrases
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return bestMatch;
  }

  // Fallback default helpful response
  return {
    category: "General Inquiry",
    keywords: [],
    title: "How Can We Help You Grow?",
    response: "Thank you for reaching out to VMC Media! We specialize in Performance Digital Marketing (PPC, SEO, SMM), Autonomous AI Voicebots, custom AI Chatbots, and the AIWA WhatsApp CRM platform.\n\nWould you like to speak directly with one of our growth strategists, or explore a specific service?",
    actions: [
      { label: "Connect with Our Experts", action: "open_modal" },
      { label: "Explore AI Solutions", href: "/ai-solutions" },
      { label: "View All Services", href: "/services" },
      { label: "Chat on WhatsApp", href: "https://wa.me/919250592505" }
    ]
  };
}
