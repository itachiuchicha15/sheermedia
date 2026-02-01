
export const BRAND_NAME = "Sheermedia";
export const SECURE_LINE = "+91 98401 08896";
export const ENCRYPTED_MAIL = "hello@sheermedia.tech";

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Success Stories', href: '#products' },
];

export const CLIENT_LOGOS = [
  "TATA", "Quick Heal", "JET India", "Arstech", 
  "Fonzel", "Control Print", "Elcom", "Goldenage", 
  "DNA", "Sunmitra"
];

export const HERO_CONTENT = {
  badge: "The Future of Growth",
  headlines: ["AI-Powered Growth,", "Marketing & Digital"],
  highlight: "Solutions.",
  description: "Sheermedia helps brands grow using AI-driven insights, personalized engagement, and high-performance marketing strategies designed for humans.",
  primaryCTA: "Book a Strategy Call",
  secondaryCTA: "Meet Our Team"
};

export const IDENTITY_SECTION = {
  badge: "What We Do Best",
  title: "Growth",
  highlight: "Strategy."
};

export interface TechnicalModule {
  id: string;
  title: string;
  headline: string;
  description: string;
  points: string[];
  cta: string;
}

export interface ServiceDetailItem {
  slug: string;
  title: string;
  subtitle: string;
  points: string[];
  img: string;
  description: string;
  fullDescription: string;
  deliverables: string[];
  impacts: { label: string; value: string }[];
  challenge?: {
    title: string;
    points: string[];
  };
  performance?: {
    title: string;
    stats: { label: string; value: string; desc: string }[];
  };
  industries?: string[];
  platformPotential?: {
    title: string;
    items: { title: string; desc: string }[];
  };
  technicalModules?: TechnicalModule[];
}

export const SERVICES_SECTION = {
  badge: "Our Solutions",
  title: ["Growth,", "Simplified."],
  quote: "Crafted for high-performance and results.",
  items: [
    {
      slug: "ai-growth",
      title: "AI Growth Insights",
      subtitle: "Performance Optimization",
      points: ["CTR Booster", "Ad Spend Optimizer", "ROI Analytics", "Keyword Research"],
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop",
      description: "The solution you need to boost your results and maximize ad efficiency.",
      fullDescription: "Nearly 60% of Google ad spend is often mismanaged. Our AI identifies the most effective keywords, ensuring your budget drives real business results.",
      deliverables: [
        "Ad spend optimization and waste reduction",
        "High-intent keyword discovery",
        "Personalized ad creation",
        "Scientific market intent analysis",
        "Free ad performance audit",
        "Results-focused execution model"
      ],
      impacts: [
        { label: "Wasted Spend", value: "-60%" },
        { label: "Click Rates", value: "Higher" },
        { label: "Ad Relevance", value: "Premium" }
      ],
      technicalModules: [
        {
          id: "CTR_BOOSTER",
          title: "CTR Booster",
          headline: "The Boost Your Ads Need",
          description: "Reach the right person at the right time. Our AI creates personalized ads that people actually want to click.",
          points: [
            "Guaranteed increase in engagement",
            "Contextual ads that build trust",
            "Eliminate generic keyword waste"
          ],
          cta: "Boost My Results"
        },
        {
          id: "AD_OPTIMIZER",
          title: "Ad Optimizer",
          headline: "Stop Wasting Your Marketing Budget",
          description: "Identify non-performing keywords instantly and shift your budget to winners. We focus on ROI above all else.",
          points: [
            "Clear list of winning keywords",
            "Automatic budget reallocation",
            "Pay-for-results accountability"
          ],
          cta: "Get Free Audit"
        }
      ]
    },
    {
      slug: "market-research",
      title: "Market Insights",
      subtitle: "Business Intelligence",
      points: ["Market Pulse", "Customer Profiling", "Benchmarking", "Pricing Strategy"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      description: "Strategic Business Growth powered by deep market research.",
      fullDescription: "Sheermedia provides a real-world validation of your product demand. We help you understand your market before you spend a single marketing dollar.",
      deliverables: [
        "Real-world demand validation",
        "Ideal customer profile mapping",
        "Customer acquisition cost projection",
        "Industry benchmark analysis",
        "Marketing budget optimization"
      ],
      impacts: [
        { label: "Strategy", value: "Clear" },
        { label: "Confidence", value: "100%" }
      ],
      technicalModules: [
        {
          id: "MARKET_PULSE",
          title: "Market Pulse",
          headline: "Understand Your Product's Potential",
          description: "See if your product is in high demand before you scale your business.",
          points: [
            "Detailed customer mapping",
            "Behavioral profile analysis",
            "Growth vs. Budget projections"
          ],
          cta: "See Market Pulse"
        }
      ]
    },
    {
      slug: "ai-search",
      title: "AI Search Presence",
      subtitle: "Content Strategy",
      points: ["Reverse Pull", "LLM Visibility", "Search Trends", "Premium Content"],
      img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      description: "Be the first answer in the new world of AI-driven search.",
      fullDescription: "Our 'Reverse Pull' strategy ensures your brand is the preferred source in AI summaries from Perplexity, Gemini, and ChatGPT. We build your authority so you get cited.",
      deliverables: [
        "Appear in AI Search summaries",
        "AI-ready content for social & blogs",
        "Build authority for AI engines",
        "Modern content creation",
        "Strategy for AI-first search"
      ],
      impacts: [
        { label: "Visibility", value: "High" },
        { label: "Content Value", value: "Peak" }
      ],
      technicalModules: [
        {
          id: "REVERSE_PULL",
          title: "Reverse Pull",
          headline: "Stand Out in AI Search",
          description: "Ensure your brand is the one AI models recommend to their users.",
          points: [
            "Content designed for AI highlighting",
            "High-authority storytelling",
            "Future-proof search strategy"
          ],
          cta: "Be Found by AI"
        }
      ]
    },
    {
      slug: "whatsapp-engagement",
      title: "WhatsApp & Mobile",
      subtitle: "Customer Connection",
      points: ["90%+ Open Rates", "Smart Outreach", "Automated Service", "Mobile Growth"],
      img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
      description: "Connect. Engage. Grow. Mobile marketing that feels personal and delivers.",
      fullDescription: "Reach your customers where they are with messages they actually appreciate. We ensure your brand is trusted and your messages are seen.",
      deliverables: [
        "Personalized outreach strategy",
        "Conversational journeys",
        "Interactive customer support",
        "Omnichannel mobile growth",
        "99% delivery reliability"
      ],
      impacts: [
        { label: "Open Rate", value: "98%" },
        { label: "Daily Views", value: "High" }
      ],
      challenge: {
        title: "The Problem",
        points: [
          "95% of generic messages are ignored",
          "Low engagement on old channels",
          "Difficulty building real connections"
        ]
      },
      performance: {
        title: "Proven Results",
        stats: [
          { label: "Engagement", value: "12-19%", desc: "Typical click rates for our personalized mobile campaigns." },
          { label: "Seen by Users", value: "90-98%", desc: "Outstanding open rates compared to traditional email." },
          { label: "Video Views", value: "60%+", desc: "Retention rates for short, helpful video messages." }
        ]
      },
      industries: ["Retail", "Real Estate", "Travel", "Automotive", "E-commerce"]
    },
    {
      slug: "personalized-video",
      title: "Personalized Video",
      points: ["Custom Stories", "Dynamic Video", "Scaling 1-on-1", "Human Connection"],
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
      description: "Videos that speak directly to your customers with their data in mind.",
      fullDescription: "Stand out in a crowded digital world. Our video engine allows you to send millions of custom videos that feel like they were made for just one person.",
      deliverables: [
        "Dynamic video content",
        "Data-driven storytelling",
        "Interactive web video",
        "Direct-to-mobile video links",
        "Customer retention campaigns"
      ],
      impacts: [
        { label: "Retention", value: "60%" },
        { label: "Impact", value: "Massive" }
      ]
    },
    {
      slug: "ai-automation",
      title: "AI Business Assistants",
      points: ["Voice Assistants", "Sales Support", "CRM Sync", "Better Workflows"],
      img: "https://images.unsplash.com/photo-1518433278988-2b2bb19777f1?q=80&w=2070&auto=format&fit=crop",
      description: "Smart AI assistants that handle the repetitive work so you don't have to.",
      fullDescription: "Free up your team for higher-level work. Our AI assistants can handle support, sales calls, and data entry with human-like precision.",
      deliverables: [
        "Professional voice assistance",
        "Faster sales closing support",
        "Customer service automation",
        "Automatic CRM updates",
        "Voice-to-data business reports"
      ],
      impacts: [
        { label: "Efficiency", value: "Peak" },
        { label: "Costs", value: "Lower" }
      ],
      technicalModules: [
        {
          id: "VOICE_ASSISTANTS",
          title: "Voice Assistants",
          headline: "Empower Your Sales Team",
          description: "Let AI handle the initial outreach and scheduling so your team can focus on closing deals.",
          points: [
            "24/7 Availability",
            "Smart message analysis",
            "Automatic follow-ups"
          ],
          cta: "See How It Works"
        }
      ]
    },
    {
      slug: "digital-media",
      title: "Growth Marketing",
      points: ["Search Ads", "Social Media", "Funnel Strategy", "Creative ROI"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      description: "Complete performance marketing focused on results you can see.",
      fullDescription: "We build integrated marketing strategies that use data to drive real growth across all digital channels.",
      deliverables: [
        "Google & Social Ad management",
        "Content & creative strategy",
        "Sales funnel optimization",
        "Data-driven scaling",
        "Clear, honest reporting"
      ],
      impacts: [
        { label: "Growth", value: "Scalable" },
        { label: "ROI", value: "High" }
      ]
    },
    {
      slug: "web-development",
      title: "Web Design & Dev",
      points: ["High-speed Pages", "Conversion First", "SEO Ready", "Modern Design"],
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      description: "Beautiful, fast websites that turn visitors into loyal customers.",
      fullDescription: "We build high-performance landing pages and websites designed specifically for your target audience, ready in just 10 days.",
      deliverables: [
        "Custom high-speed websites",
        "Persona-based landing pages",
        "Interactive lead capture",
        "CRM & Mobile integration",
        "Fast 10-day delivery"
      ],
      impacts: [
        { label: "Build Time", value: "10 Days" },
        { label: "Result", value: "Optimal" }
      ],
      technicalModules: [
        {
          id: "WEB_PAGES",
          title: "Conversion Pages",
          headline: "Pages That Sell",
          description: "Stunning, personalized web pages for every type of customer you serve.",
          points: [
            "Ultra-fast loading times",
            "Automated lead syncing",
            "Mobile-first design"
          ],
          cta: "Start My Website"
        }
      ]
    }
  ]
};

export const PRODUCT_FEATURES_DATA = [
  {
    badge: "Strategic Insights",
    title: "AI Growth Systems",
    subtitle: "Continuous market analysis to find the best opportunities for your brand to scale.",
    points: [
      "Competitive Edge Mapping",
      "High-value Keyword discovery",
      "Real-time ROI tracking"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
  },
  {
    badge: "Human Connection",
    isReversed: true,
    title: "Personalized Reach",
    subtitle: "Reaching people in a way that feels personal and respectful across all mobile channels.",
    points: [
      "Custom Video Outreach",
      "Friendly Customer Journeys",
      "Integrated Engagement Tracking"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  }
];

export const BENEFITS_SECTION = {
  badge: "Our Simple Process",
  title: "The Journey",
  highlight: "Forward.",
  steps: [
    { 
      title: "Discovery", 
      id: "PHASE_01",
      desc: "We dive deep into your business goals and market potential to find your best path to growth.",
      kpi: "Clarity",
      deliverable: "Audit Report",
      meta: "14-Day Cycle"
    },
    { 
      title: "Strategy", 
      id: "PHASE_02",
      desc: "We build a personalized roadmap that connects your brand with the right customers.",
      kpi: "Expected ROI",
      deliverable: "Growth Plan",
      meta: "Ready to Go"
    },
    { 
      title: "Launch", 
      id: "PHASE_03",
      desc: "We activate your high-performance campaigns with precision and constant monitoring.",
      kpi: "Leads",
      deliverable: "Live Campaigns",
      meta: "Now Active"
    },
    { 
      title: "Scale", 
      id: "PHASE_04",
      desc: "We use data-driven insights to grow your impact and maximize your success.",
      kpi: "Growth",
      deliverable: "Global Reach",
      meta: "Full Scaling"
    }
  ],
  whySheer: {
    badge: "Why Work With Us?",
    title: "The",
    highlight: "Sheer Impact.",
    stats: [
      { label: "Experience", value: "12+" },
      { label: "Success Stories", value: "130+" }
    ],
    reasons: [
      { t: "Expert Guidance", d: "We offer a single, expert point of contact for all your growth and AI needs, eliminating confusion." },
      { t: "Proven Results", d: "Every strategy is backed by data and proven models that take the guesswork out of marketing." },
      { t: "True Transparency", d: "You'll always know exactly where your budget is going and what results it's bringing." }
    ]
  }
};

export const CONTACT_SECTION_CONTENT = {
  badge: "Let's Talk",
  title: "Start Your",
  highlight: "Growth.",
  emailLabel: "Send an Email",
  whatsappLabel: "Chat on WhatsApp",
  form: {
    labels: {
      name: "Your Name",
      email: "Email Address",
      message: "How can we help?"
    },
    placeholders: {
      name: "Jane Smith",
      email: "jane@company.com",
      message: "Tell us about your goals..."
    },
    submit: "Get Started",
    success: "Thank you! We'll be in touch."
  }
};

export const MODAL_CONTENT = {
  title: "Start Your",
  highlight: "Journey.",
  form: {
    placeholders: {
      name: "Full Name",
      email: "Email Address",
      message: "How can we help you grow?"
    },
    submit: "GET STARTED",
    success: "Success! We've received your request.",
    close: "Close"
  }
};

export const FOOTER_CONTENT = {
  backgroundTitle: "SHEER",
  description: "Helping brands reach their full potential since 2013.",
  navTitle: "Explore",
  contactTitle: "Get in Touch",
  secureLineLabel: "Call Us",
  encryptedMailLabel: "Email Us",
  legal: {
    copyright: "© 2025 SHEERMEDIA GROUP",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Use", href: "#" }
    ]
  }
};

export const CHAT_CONTENT = {
  title: "Growth Assistant",
  badge: "AI Powered",
  initialMessage: "Hi! I'm your Sheermedia growth assistant. How can I help you today?",
  systemInstruction: "You are the Sheermedia Growth Assistant. Be helpful, professional, and friendly. Focus on how we can help the user grow their business.",
  placeholder: "Type a message...",
  error: "Sorry, I'm having a little trouble connecting. Feel free to book a call instead!"
};

export const FINAL_CTA = {
  badge: "It's time to grow",
  title: "Ready to",
  highlight: "Start?",
  button: "Book Your Strategy Call"
};

export const IDENTITY_CARDS = [
  {
    id: "01", 
    title: "Market Insights", 
    description: "Understand your competitors and find hidden opportunities for growth.",
  },
  {
    id: "02", 
    title: "Effective Copy", 
    description: "Words that build trust and drive action from your target audience.",
  },
  {
    id: "03", 
    title: "Smart Marketing", 
    description: "Reach more people with less waste using data-driven ad management.",
  },
  {
    id: "04", 
    title: "Better Websites", 
    description: "Beautiful websites designed to turn visitors into happy customers.",
  }
];
