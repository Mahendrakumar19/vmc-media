export interface CitySEOData {
  slug: string;
  cityName: string;
  regionName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  subHeading: string;
  highlights: string[];
  localAddress: string;
}

export const CITIES_DATA: Record<string, CitySEOData> = {
  noida: {
    slug: "noida",
    cityName: "Noida",
    regionName: "Uttar Pradesh & NCR",
    metaTitle: "Best Digital Marketing Agency in Noida | VMC Media",
    metaDescription: "VMC Media is the #1 Digital Marketing & AI Agency in Noida, UP. Specializing in SEO, Google Ads, Meta Funnels, and AIWA WhatsApp Automation.",
    heroHeading: "Best Digital Marketing Agency in Noida",
    subHeading: "Scale your revenue in Noida & NCR with high-ROI performance marketing, Google Ads, local SEO domination, and 24/7 AI lead automation.",
    highlights: [
      "Headquartered at 5th Floor, Green Boulevard, Sector 62, Noida",
      "#1 Ranked Local SEO & GMB Map Pack Domination",
      "High-converting Google Ads & Meta Performance Campaigns",
      "AIWA WhatsApp CRM & Autonomous Voice Agents"
    ],
    localAddress: "5th Floor, Tower C, Block C, Green Boulevard, B-9/A, Sector 62, Noida, Uttar Pradesh – 201301"
  },
  delhi: {
    slug: "delhi",
    cityName: "Delhi",
    regionName: "Delhi NCR",
    metaTitle: "Best Digital Marketing Agency in Delhi NCR | VMC Media",
    metaDescription: "Looking for the top digital marketing agency in Delhi? VMC Media delivers high-ROI SEO, PPC advertising, and AI lead qualification.",
    heroHeading: "Best Digital Marketing Agency in Delhi",
    subHeading: "Empowering Delhi businesses with intent-driven search marketing, viral social media campaigns, and AI customer engagement.",
    highlights: [
      "Comprehensive Digital Marketing for Delhi Brands & Enterprises",
      "PPC Advertising & Social Media Lead Funnels",
      "24/7 AI Chatbot & WhatsApp Automation",
      "Dedicated Campaign Account Manager & Analytics"
    ],
    localAddress: "Delhi NCR Regional Hub (Connecting Connaught Place, South Delhi & NCR)"
  },
  gurugram: {
    slug: "gurugram",
    cityName: "Gurugram",
    regionName: "Haryana & NCR",
    metaTitle: "Best Digital Marketing Agency in Gurugram (Gurgaon) | VMC Media",
    metaDescription: "VMC Media is the leading digital marketing agency in Gurugram. Enterprise SEO, Google Ads, B2B Lead Generation & AI Voicebots.",
    heroHeading: "Best Digital Marketing Agency in Gurugram",
    subHeading: "Accelerate growth for Gurgaon tech startups and corporate brands with performance marketing and automated sales pipelines.",
    highlights: [
      "B2B Lead Generation & Enterprise SaaS Funnels",
      "Conversion Rate Optimization (CRO) & Landing Pages",
      "Official Meta Cloud API WhatsApp CRM Integration",
      "Proven ROAS Scaling for D2C & Corporate Brands"
    ],
    localAddress: "Gurugram Tech Hub Operations & Corporate Consulting"
  },
  lucknow: {
    slug: "lucknow",
    cityName: "Lucknow",
    regionName: "Uttar Pradesh",
    metaTitle: "Best Digital Marketing Agency in Lucknow | VMC Media",
    metaDescription: "Top digital marketing agency in Lucknow, UP. Transform your local business with SEO, Google Ads, Social Media, and AI Automation.",
    heroHeading: "Best Digital Marketing Agency in Lucknow",
    subHeading: "Dominating search rankings and customer engagement across Lucknow, Kanpur, and Uttar Pradesh with precision AI marketing.",
    highlights: [
      "Hyperlocal SEO & Google Business Profile Ranking",
      "E-Commerce & Retail Growth Campaigns",
      "AI Voicebot & WhatsApp CRM Setup",
      "Transparent Monthly Growth Reports"
    ],
    localAddress: "Lucknow Regional Growth Hub & UP Strategy Operations"
  },
  mumbai: {
    slug: "mumbai",
    cityName: "Mumbai",
    regionName: "Maharashtra",
    metaTitle: "Best Digital Marketing Agency in Mumbai | VMC Media",
    metaDescription: "VMC Media is a premier digital marketing agency in Mumbai. Scaling brands through data-driven performance ads, SEO, and AI chatbots.",
    heroHeading: "Best Digital Marketing Agency in Mumbai",
    subHeading: "Transform your brand reach in Mumbai with cutting-edge digital marketing strategies and 24/7 AI customer automation.",
    highlights: [
      "Full-Funnel Social Media & Performance Marketing",
      "High-Speed Web Development & UI/UX Design",
      "AI-Powered Customer Qualification",
      "Omnichannel Strategy Execution"
    ],
    localAddress: "Mumbai Commercial Network & West India Hub"
  },
  bengaluru: {
    slug: "bengaluru",
    cityName: "Bengaluru",
    regionName: "Karnataka",
    metaTitle: "Best Digital Marketing Agency in Bengaluru | VMC Media",
    metaDescription: "Top digital marketing & AI growth agency in Bengaluru (Bangalore). Scale your startup with SEO, Google Ads, and AIWA WhatsApp CRM.",
    heroHeading: "Best Digital Marketing Agency in Bengaluru",
    subHeading: "Partner with India's leading AI growth agency to scale tech startups and enterprise businesses in Bengaluru.",
    highlights: [
      "Startup Growth Hacking & B2B Funnels",
      "Google Ads & Performance Max Campaigns",
      "WhatsApp BYOK Multi-LLM Chatbots",
      "Data-Driven CRO & A/B Testing"
    ],
    localAddress: "Bengaluru Startup Growth Hub & Tech Operations"
  },
  chandigarh: {
    slug: "chandigarh",
    cityName: "Chandigarh",
    regionName: "Punjab & Haryana",
    metaTitle: "Best Digital Marketing Agency in Chandigarh | VMC Media",
    metaDescription: "Leading digital marketing agency in Chandigarh. Boost leads with SEO, Meta Ads, Local Business Marketing & AI Automation.",
    heroHeading: "Best Digital Marketing Agency in Chandigarh",
    subHeading: "Connecting Punjab & Tricity businesses with high-intent digital leads and 24/7 automated customer engagement.",
    highlights: [
      "Tricity Local SEO & Google Maps Supremacy",
      "Immigration & Education Admission Lead Funnels",
      "AI Voicebot Inbound & Outbound Qualification",
      "Custom Creative Content & Branding"
    ],
    localAddress: "Chandigarh Tricity Regional Hub"
  },
  jaipur: {
    slug: "jaipur",
    cityName: "Jaipur",
    regionName: "Rajasthan",
    metaTitle: "Best Digital Marketing Agency in Jaipur | VMC Media",
    metaDescription: "Best digital marketing agency in Jaipur, Rajasthan. SEO, PPC Google Ads, Social Media Marketing, and AI Lead Qualification.",
    heroHeading: "Best Digital Marketing Agency in Jaipur",
    subHeading: "Empowering Jaipur businesses, real estate developers, and retail brands with high-performance digital marketing.",
    highlights: [
      "Real Estate & Retail Lead Generation",
      "Google Ads Search & Display Campaigns",
      "WhatsApp & Web AI Chatbot Integration",
      "Local Brand Reputation Management"
    ],
    localAddress: "Jaipur & Rajasthan Growth Operations"
  }
};
