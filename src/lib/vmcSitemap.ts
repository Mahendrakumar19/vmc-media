// Complete VMC Media Navigation & Service Sitemap Knowledge Base for LLM & Groq AI

export interface VMCPageRoute {
  title: string;
  url: string;
  description: string;
  category: "AI Solutions" | "Digital Marketing" | "Technology Solutions" | "Company" | "Conversion";
  keywords: string[];
}

export const VMC_SITEMAP_ROUTES: VMCPageRoute[] = [
  // AI Solutions
  {
    title: "AI Solutions Hub",
    url: "/ai-solutions",
    description: "Explore VMC Media's suite of autonomous AI calling voicebots, custom LLM chatbots, and WhatsApp automation.",
    category: "AI Solutions",
    keywords: ["ai", "artificial intelligence", "ai solutions", "automation", "bots", "voice ai", "conversational ai"]
  },
  {
    title: "Autonomous AI Voicebots",
    url: "/ai-solutions/ai-voicebot",
    description: "Human-like AI voicebots for instant inbound support and outbound lead qualification with <60s speed-to-lead and CRM sync.",
    category: "AI Solutions",
    keywords: ["voicebot", "voice bot", "calling bot", "ai calling", "phone bot", "outbound calling", "inbound call automation"]
  },
  {
    title: "Custom AI Chatbots",
    url: "/ai-solutions/ai-chatbot",
    description: "24/7 intelligent LLM chatbots trained on proprietary company knowledge to qualify intent, answer questions, and book sales calls.",
    category: "AI Solutions",
    keywords: ["chatbot", "chat bot", "customer support bot", "website bot", "ai chat", "lead capture bot", "llm bot"]
  },
  {
    title: "AIWA - Meta Cloud WhatsApp CRM",
    url: "https://aiwa.vmcmedia.in",
    description: "Enterprise WhatsApp CRM platform with multi-agent team inbox, automated broadcast campaigns, green tick support, and GST invoicing.",
    category: "AI Solutions",
    keywords: ["aiwa", "whatsapp", "whatsapp crm", "whatsapp api", "meta cloud api", "broadcast", "whatsapp automation"]
  },

  // Digital Marketing
  {
    title: "Digital Marketing Overview",
    url: "/services",
    description: "Full-funnel performance marketing services engineered to scale high-intent customer acquisition and positive ROAS.",
    category: "Digital Marketing",
    keywords: ["services", "digital marketing", "marketing", "growth agency", "lead generation", "performance marketing"]
  },
  {
    title: "Google Ads & PPC Management",
    url: "/services/google-ads",
    description: "Laser-targeted Search, Display, and Performance Max (PMax) campaigns engineered for immediate lead generation with positive ROAS.",
    category: "Digital Marketing",
    keywords: ["google ads", "ppc", "pay per click", "search ads", "adwords", "pmax", "performance max", "paid search"]
  },
  {
    title: "Social Media Marketing (SMM)",
    url: "/services/smm",
    description: "Full-funnel creative ads across Facebook, Instagram, and LinkedIn to capture customer attention and drive qualified inquiries.",
    category: "Digital Marketing",
    keywords: ["smm", "social media", "meta ads", "facebook ads", "instagram ads", "linkedin ads", "social media marketing"]
  },
  {
    title: "Search Engine Optimization (SEO)",
    url: "/services/seo",
    description: "Rank #1 for commercial keywords with technical site audits, content architecture, and authoritative backlink building.",
    category: "Digital Marketing",
    keywords: ["seo", "search engine optimization", "organic ranking", "rank 1", "google ranking", "backlinks"]
  },
  {
    title: "Local SEO & Google Maps Domination",
    url: "/services/local-seo",
    description: "Dominate Google 3-pack local map rankings to capture high-intent nearby customers actively calling your business.",
    category: "Digital Marketing",
    keywords: ["local seo", "gmb", "google my business", "google maps", "map 3 pack", "near me", "local business"]
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    url: "/services/cro",
    description: "Transform existing traffic into paying clients with data-driven A/B testing, heatmaps, and friction-free landing page UX.",
    category: "Digital Marketing",
    keywords: ["cro", "conversion rate", "landing page", "ab testing", "funnel optimization", "ux"]
  },
  {
    title: "E-Commerce Growth Marketing",
    url: "/services/ecommerce",
    description: "Scale DTC brands with high-converting shopping ads, dynamic catalog remarketing, and lifecycle retention flows.",
    category: "Digital Marketing",
    keywords: ["ecommerce", "e-commerce", "shopify", "dtc", "shopping ads", "online store", "gmv"]
  },
  {
    title: "Branding & Creative Design",
    url: "/services/branding",
    description: "High-trust brand identity, visual guidelines, conversion copy, and premium digital asset production.",
    category: "Digital Marketing",
    keywords: ["branding", "brand identity", "logo design", "creative design", "copywriting"]
  },

  // Technology Solutions
  {
    title: "Technology Solutions Overview",
    url: "/technology-solutions",
    description: "Enterprise software development, cloud infrastructure, and custom engineering.",
    category: "Technology Solutions",
    keywords: ["tech", "technology", "software", "development", "it solutions"]
  },
  {
    title: "Web Application Development",
    url: "/technology-solutions/web-development",
    description: "Bespoke high-speed Next.js 15, React, and TypeScript web platforms engineered for sub-second speeds and maximum conversion.",
    category: "Technology Solutions",
    keywords: ["web development", "website", "nextjs", "react", "frontend", "web app"]
  },
  {
    title: "Mobile App Development",
    url: "/technology-solutions/mobile-development",
    description: "Native and cross-platform iOS and Android applications with intuitive UX and secure cloud backend.",
    category: "Technology Solutions",
    keywords: ["mobile app", "android", "ios", "react native", "flutter", "app development"]
  },
  {
    title: "Custom Software Engineering",
    url: "/technology-solutions/custom-software",
    description: "Tailored ERP, CRM integrations, APIs, and microservices for enterprise workflows.",
    category: "Technology Solutions",
    keywords: ["custom software", "crm", "erp", "api", "backend", "enterprise software"]
  },

  // Company & Contact
  {
    title: "Industries We Serve",
    url: "/industries",
    description: "Specialized growth playbooks for Real Estate, Healthcare, BFSI, Education, Manufacturing, Automotive, E-commerce, and Legal.",
    category: "Company",
    keywords: ["industries", "healthcare", "real estate", "education", "bfsi", "manufacturing", "automotive", "retail"]
  },
  {
    title: "About VMC Media",
    url: "/about",
    description: "Learn about VMC Media's mission, leadership, proprietary growth methodology, and agency track record.",
    category: "Company",
    keywords: ["about", "about us", "company", "team", "agency", "mission", "vision"]
  },
  {
    title: "Contact & Consultation",
    url: "/contact",
    description: "Get in touch with VMC Media at our Noida office (+91 92505 92505, info@vmcmedia.in) or book a consultation.",
    category: "Company",
    keywords: ["contact", "contact us", "phone", "email", "office", "address", "noida", "location", "support"]
  }
];

export const VMC_GROQ_SYSTEM_PROMPT = `You are the official digital assistant for "VMC Media".
Always identify and refer to the company strictly as "VMC Media" (never just "VMC" or other variations).
VMC Media is a premier full-service Digital Growth & AI Automation Agency based in Noida (Delhi-NCR), India.
Contact: info@vmcmedia.in | Phone/WhatsApp: +91 92505 92505 | Headquarters: Sector 63, Noida, UP 201301.

STRICT INSTRUCTIONS:
- Always use the full company brand name "VMC Media".
- NEVER OFFER, PROMISE, OR MENTION ANY "FREE" SERVICE, "FREE" AUDIT, "FREE" TRIAL, OR "FREE" CONSULTATION. Always refer to actions professionally as "Connect with Our Experts", "Book a Consultation", "Schedule a Strategy Call", or "Explore Solutions". Under no circumstances use the word "free" in your text or action buttons.
- Never disclose, mention, or discuss the underlying technology stack, models, APIs, libraries, or infrastructure (do NOT mention Groq, Llama, LangChain, SDKs, or OpenAI). You were created directly by VMC Media's in-house engineering team.
- Provide direct, authoritative, highly tailored answers about VMC Media's growth strategies, marketing services, AI automation, and custom software.
- Always recommend the exact page and solution on vmcmedia.in that addresses their business needs.
- If asked pricing or custom consultation, guide them to connect with VMC Media experts.

Your core mission:
1. Understand the user's specific business challenge or question.
2. Provide a sharp, consultative, high-value answer.
3. Guide them to the exact right solution and relevant page on vmcmedia.in.
4. Offer them a direct action to connect with VMC experts or test a live demo.

You MUST respond strictly in the following JSON format:
{
  "reply": "Your concise, professional, friendly response here (in English, or friendly Hinglish if the user asks in Hindi). Keep it punchy and consultative.",
  "recommendedPage": {
    "title": "Exact title of the most relevant page",
    "url": "Relative URL path (e.g. /ai-solutions/ai-voicebot, /services/google-ads, /contact, etc.) or full URL for AIWA (https://aiwa.vmcmedia.in)",
    "reason": "One short sentence explaining why this page solves their need"
  },
  "actions": [
    { "label": "Button Label", "href": "url or omit if modal action", "action": "open_modal or omit" },
    { "label": "Secondary Button Label", "href": "url" }
  ]
}

Available VMC Services & Routes Map:
- AI Voicebots (instant sub-second conversational voice calling & CRM sync): /ai-solutions/ai-voicebot
- AI Chatbots (24/7 custom LLM lead capture & qualification): /ai-solutions/ai-chatbot
- AI Solutions Hub: /ai-solutions
- AIWA WhatsApp CRM SaaS (multi-agent inbox, broadcasts, Meta Cloud API): https://aiwa.vmcmedia.in
- Google Ads & PPC (Search, PMax, up to 4.2x ROAS): /services/google-ads
- Social Media Marketing (Meta, LinkedIn ads): /services/smm
- SEO & Google Map 3-pack Domination: /services/seo or /services/local-seo
- Conversion Rate Optimization (CRO): /services/cro
- E-Commerce Growth (Shopify, DTC): /services/ecommerce
- Branding & Creative Design: /services/branding
- All Services: /services
- Web & App Development (Next.js 15, React, iOS, Android): /technology-solutions/web-development or /technology-solutions/mobile-development
- Custom Software & ERP: /technology-solutions/custom-software
- Technology Overview: /technology-solutions
- Industries (Real Estate, Healthcare, BFSI, Education, etc.): /industries
- About VMC: /about
- Contact & Office Info: /contact
- Lead Consultation / Audit Form: action "open_modal"
- Direct WhatsApp Contact: href "https://wa.me/919250592505"

IMPORTANT: Return ONLY valid JSON with no markdown wrapping outside the JSON object.`;
