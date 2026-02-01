
export const BRAND_NAME = "Sheermedia";
export const SECURE_LINES = ["044-4356-1680", "044-4208-7110"];
export const ENCRYPTED_MAIL = "media@sheermedia.co.in";
export const OFFICE_ADDRESS = {
  recipient: "L. Henry",
  building: "1st Floor, 1B, Jain's La Gardeni'a,",
  street: "46B, Kothari Road, Nungambakkam,",
  city: "Chennai - 600 034."
};

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
  badge: "Managed Growth & AI Solutions",
  headlines: ["AI-Powered Growth,", "Marketing & Digital"],
  highlight: "Solutions.",
  description: "You focus on business. We handle execution, optimization, and results using AI-driven growth intelligence and high-performance marketing strategies.",
  primaryCTA: "Book a Strategy Call",
  secondaryCTA: "Meet Our Team"
};

export const IDENTITY_SECTION = {
  badge: "What We Do",
  title: "Managed",
  highlight: "Execution."
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
  colorScheme?: "violet" | "emerald";
  challenge?: {
    title: string;
    points: string[];
  };
  performance?: {
    title: string;
    stats: { label: string; value: string; desc: string }[];
  };
  industries?: string[];
  splitSection?: {
    badge: string;
    title: string;
    description: string;
    image: string;
    stats: { label: string; value: string }[];
  };
  gallerySection?: {
    badge: string;
    title: string;
    description: string;
    images: string[];
  };
  infrastructureSection?: {
    title: string;
    image: string;
    cta: string;
  };
  technicalModules?: TechnicalModule[];
}

export const SERVICES_SECTION = {
  badge: "Our Core Managed Services",
  title: ["Growth,", "Simplified."],
  quote: "You focus on business. We handle execution, optimization, and results.",
  items: [
    {
      slug: "ai-growth",
      title: "AI Growth Intelligence",
      subtitle: "MANAGED_PERFORMANCE",
      points: ["Fully Managed", "No Tools to Learn", "No Platform Access Needed", "ROI Focused"],
      img: "/images/1551288049.jpg",
      description: "We use advanced AI systems internally to analyze your website, competitors, and discover high-intent keywords to optimize Google Ads and paid campaigns.",
      fullDescription: "We handle the internal heavy lifting. Our team uses AI to discover demand signals, reduce wasted ad spend, and improve CTR, conversions, and ROI. You don't need to learn any platforms; we manage everything from keyword discovery to transparent ROI reporting.",
      colorScheme: "violet",
      deliverables: ["Market & Competitor Intelligence", "Keyword Discovery & Intent Mapping", "AI-Optimized Ad Copy", "Continuous Performance Optimization", "Transparent ROI Reporting"],
      impacts: [{ label: "CTR Lift", value: "3.4x" }, { label: "Ad Waste", value: "-62%" }, { label: "Management", value: "100%" }],
      splitSection: {
        badge: "Managed Intelligence",
        title: "Internal AI. Real Profit.",
        description: "Stop managing complex ad tools. We use proprietary AI to find the exact demand signals that convert, so you can focus on your business while we handle the execution.",
        image: "/images/1518186285589.jpg",
        stats: [{ label: "Efficiency Gain", value: "94%" }, { label: "Tool Learning", value: "0%" }]
      },
      gallerySection: {
        badge: "Performance Stack",
        title: "Cold Data. Hot Results.",
        description: "Our systems analyze millions of points of intent to ensure every marketing dollar is spent effectively.",
        images: [
          "/images/1460925895917.jpg",
          "/images/1551434678.jpg",
          "/images/1504384308090.jpg"
        ]
      },
      infrastructureSection: {
        title: "Fully Managed ROI.",
        image: "/images/1558494949.jpg",
        cta: "Deploy Managed Growth"
      },
      industries: ["Finance", "E-commerce", "SaaS"]
    },
    {
      slug: "whatsapp-engagement",
      title: "WhatsApp & Mobile",
      subtitle: "CONVERSATIONAL_SCALE",
      points: ["90%+ Open Rates", "Managed Strategy", "Creative Personalization", "Deployment Handled"],
      img: "/images/1577563906417.jpg",
      description: "We execute hyper-personalized WhatsApp and mobile campaigns that drive massive engagement and conversion, handled entirely by our team.",
      fullDescription: "WhatsApp is the most personal digital space. We build automated, non-intrusive campaigns using the WhatsApp Business API. From campaign strategy and creative production to final deployment and reporting—Sheermedia handles it all.",
      colorScheme: "emerald",
      deliverables: ["Personalized Video & Message Campaigns", "WhatsApp Business API Execution", "CRM & Data-Based Targeting", "Automated Follow-ups & Nurturing", "Real-time Engagement Analytics"],
      impacts: [{ label: "Open Rates", value: "90%+" }, { label: "Engagement", value: "High" }, { label: "Customer Trust", value: "Peak" }],
      splitSection: {
        badge: "Mobile Engagement",
        title: "Personal. Scaled.",
        description: "Marketing should feel like a message from a friend. We create intimacy that builds stronger customer relationships and higher conversions.",
        image: "/images/1512428559087.jpg",
        stats: [{ label: "Open Rate", value: "98%" }, { label: "Conv. Delta", value: "+22%" }]
      },
      gallerySection: {
        badge: "Connected Network",
        title: "Managed Reach.",
        description: "Engage your customers where they are, when they are ready, with content handled end-to-end by Sheermedia.",
        images: [
          "/images/1556656793.jpg",
          "/images/1512941937669.jpg",
          "/images/1576678927484.jpg"
        ]
      },
      infrastructureSection: {
        title: "Global Reach.",
        image: "/images/1516321318423.jpg",
        cta: "Start Managed Campaigns"
      }
    },
    {
      slug: "ai-automation",
      title: "AI Agents & Automation",
      subtitle: "OPERATIONAL_AUTONOMY",
      points: ["Lead Qualification", "Support Automation", "CRM Sync", "Faster Response"],
      img: "/images/1531746790731.jpg",
      description: "We deploy AI-powered agents to automate and enhance business workflows, qualifying leads and handling support 24/7.",
      fullDescription: "Outcome-driven automation. Our AI agents handle lead qualification, nurturing, sales follow-ups, and customer support. This reduces operational effort and ensures no lead is left cold, with full integration into your CRM/ERP.",
      colorScheme: "violet",
      deliverables: ["Lead Qualification & Nurturing", "Customer Support Automation", "Sales Follow-ups & Reminders", "CRM & ERP Task Automation", "Voice & Message Analysis"],
      impacts: [{ label: "Response Time", value: "Instant" }, { label: "Lead Conversion", value: "Higher" }, { label: "Op. Effort", value: "Reduced" }],
      splitSection: {
        badge: "Autonomous Agents",
        title: "Work Never Sleeps.",
        description: "While your team rests, your AI agents are qualifying prospects and closing the gap on customer support queries.",
        image: "/images/1516110833967.jpg",
        stats: [{ label: "Lead Qual Time", value: "-90%" }, { label: "Availability", value: "24/7" }]
      },
      gallerySection: {
        badge: "Automation Hub",
        title: "Silent Efficiency.",
        description: "Watch your operational overhead drop as our AI handles high-volume interactions with human-like precision.",
        images: [
          "/images/1550751827.jpg",
          "/images/1518186285589.jpg",
          "/images/1485827404703.jpg"
        ]
      },
      infrastructureSection: {
        title: "Smarter Workflows.",
        image: "/images/1550751827.jpg",
        cta: "Deploy AI Agents"
      }
    },
    {
      slug: "market-research",
      title: "Demand & Expansion",
      subtitle: "STRATEGIC_INTELLIGENCE",
      points: ["Demand Validation", "Customer Profiling", "Competitor Analysis", "Actionable Reports"],
      img: "/images/1460925895917.jpg",
      description: "Make smarter decisions using AI-backed market intelligence to validate product demand and identify customer segments.",
      fullDescription: "We deliver actionable reports, not raw data. Our market intelligence helps you validate service demand, analyze competitors and pricing, and discover new market expansion opportunities with absolute clarity.",
      colorScheme: "emerald",
      deliverables: ["Product & Service Demand Validation", "Ideal Customer Segment Identification", "Competitor & Pricing Analysis", "New Market Expansion Maps", "Actionable Executive Insights"],
      impacts: [{ label: "Actionable Data", value: "100%" }, { label: "Decision Risk", value: "Low" }, { label: "Expansion Edge", value: "High" }],
      splitSection: {
        badge: "Anthropological Data",
        title: "The Human Pulse.",
        description: "Data is useless without context. We combine cold analytics with warm sentiment study to find exactly where your audience is underserved.",
        image: "/images/1552664730.jpg",
        stats: [{ label: "Sentiment Accuracy", value: "97%" }, { label: "Market Validation", value: "Peak" }]
      },
      gallerySection: {
        badge: "Intelligence Lab",
        title: "Deep Context.",
        description: "We dive beneath surface level metrics to understand the 'Why' behind every market trend.",
        images: [
          "/images/1522202176988.jpg",
          "/images/1454165833767.jpg",
          "/images/1551288049.jpg"
        ]
      },
      infrastructureSection: {
        title: "Global Intelligence.",
        image: "/images/1451187580459.jpg",
        cta: "Scan Your Market"
      }
    },
    {
      slug: "digital-media",
      title: "Digital Media Marketing",
      subtitle: "PERFORMANCE_ENGINEERING",
      points: ["Google Ads", "Social Media", "Content Strategy", "Performance Focused"],
      img: "/images/1557804506.jpg",
      description: "Complete digital marketing execution under one roof. We focus on traffic, leads, and sales with full performance tracking.",
      fullDescription: "Our goal is Traffic → Leads → Sales. We manage your Google Ads, Meta/LinkedIn social media marketing, and content strategy with high-performance execution and optimization.",
      colorScheme: "violet",
      deliverables: ["Google Ads & Paid Campaigns", "Social Media Marketing (Meta, LinkedIn)", "Content Strategy & Creatives", "Performance Tracking & Optimization", "Lead Generation Focus"],
      impacts: [{ label: "ROAS", value: "Stable" }, { label: "Traffic", value: "High-Intent" }, { label: "Strategy", value: "Full-Loop" }],
      splitSection: {
        badge: "Growth Loops",
        title: "Compound Result.",
        description: "Performance isn't about a single win; it's about building a system where every dollar spent earns the next three.",
        image: "/images/1551434678.jpg",
        stats: [{ label: "Average ROAS", value: "5.4x" }, { label: "Conversion Lift", value: "3.4x" }]
      },
      gallerySection: {
        badge: "Creative Impact",
        title: "Vibrant Impact.",
        description: "We test thousands of variables to find the one that resonates with your true audience.",
        images: [
          "/images/1542744173.jpg",
          "/images/1557804506.jpg",
          "/images/1460925895917.jpg"
        ]
      },
      infrastructureSection: {
        title: "Scaling Command.",
        image: "/images/1531297484001.jpg",
        cta: "Scale Your Brand"
      }
    },
    {
      slug: "web-development",
      title: "Web Design & Dev",
      subtitle: "CONVERSION_ARCHITECTURE",
      points: ["High-speed Pages", "Conversion First", "SEO Ready", "Mobile First"],
      img: "/images/1581291518633.jpg",
      description: "We design and build high-performing, fast-loading websites that convert visitors into leads for startups and SMEs.",
      fullDescription: "Your website is your hardest working salesperson. We build SEO-ready, mobile-first, conversion-focused UI integrated with modern marketing and analytics tools.",
      colorScheme: "emerald",
      deliverables: ["Business Websites & Landing Pages", "SEO-Ready & Mobile-First Design", "Fast-Loading UI", "Marketing & Analytics Tool Integration", "Lead-Capture Optimization"],
      impacts: [{ label: "Load Time", value: "<1s" }, { label: "Conversion", value: "+24%" }, { label: "UI Design", value: "Elite" }],
      splitSection: {
        badge: "Pixel Precision",
        title: "Conversion First.",
        description: "Your website is your best salesperson. We make sure it's fast, convincing, and always open for business.",
        image: "/images/1547658719.jpg",
        stats: [{ label: "Perf Score", value: "100/100" }, { label: "Conv Rate", value: "6.2%" }]
      },
      gallerySection: {
        badge: "Modern Stack",
        title: "Aesthetically Fast.",
        description: "Beauty meeting performance. We use serverless technology for infinite scalability.",
        images: [
          "/images/1507238691740.jpg",
          "/images/1581291518633.jpg",
          "/images/1517694712202.jpg"
        ]
      },
      infrastructureSection: {
        title: "Infinite Presence.",
        image: "/images/1551434678.jpg",
        cta: "Build My Site"
      }
    }
  ]
};

export const PRODUCT_FEATURES_DATA = [
  {
    badge: "Strategic Insights",
    title: "Managed AI Growth",
    subtitle: "We handle the internal analysis of website signals and competitor moves so you can focus on the big picture.",
    points: [
      "Competitive Edge Mapping",
      "High-value Keyword discovery",
      "Managed ROI reporting"
    ],
    image: "/images/1551434678.jpg"
  },
  {
    badge: "Human Connection",
    isReversed: true,
    title: "Personalized Outreach",
    subtitle: "90%+ Open rates with hyper-personalized WhatsApp campaigns fully deployed and managed by our team.",
    points: [
      "Campaign Strategy",
      "Creative & Personalization",
      "Managed Deployment & Reporting"
    ],
    image: "/images/1512941937669.jpg"
  }
];

export const BENEFITS_SECTION = {
  badge: "Simple 4-Step Managed Model",
  title: "How It",
  highlight: "Works.",
  steps: [
    { 
      title: "Understand Your Business", 
      id: "PHASE_01",
      desc: "We analyze your goals, audience, competitors, and specific challenges.",
      kpi: "Clarity",
      deliverable: "Audit Report",
      meta: "14-Day Cycle"
    },
    { 
      title: "Strategy & Setup", 
      id: "PHASE_02",
      desc: "Custom growth + digital execution plan tailored for your brand.",
      kpi: "Expected ROI",
      deliverable: "Strategic Plan",
      meta: "Ready to Go"
    },
    { 
      title: "Execution & Automation", 
      id: "PHASE_03",
      desc: "AI-driven marketing, engagement, and operational optimization.",
      kpi: "Leads",
      deliverable: "Managed Output",
      meta: "Now Active"
    },
    { 
      title: "Reporting & Scaling", 
      id: "PHASE_04",
      desc: "Insights, ROI tracking, and continuous data-driven improvement.",
      kpi: "Growth",
      deliverable: "Global Reach",
      meta: "Full Scaling"
    }
  ],
  whySheer: {
    badge: "Why Work With Us?",
    title: "The",
    highlight: "Sheer Advantage.",
    stats: [
      { label: "Experience", value: "12+" },
      { label: "Success Stories", value: "130+" }
    ],
    reasons: [
      { t: "One Outsourced Partner", d: "A single, expert point of contact for growth + digital execution, eliminating the need for multiple agencies." },
      { t: "AI-Powered Execution", d: "No tools for you to learn. We use proprietary internal AI to drive results without complexity on your end." },
      { t: "No Tool Management", d: "You focus on business. We handle every platform, tool, and operational detail so you don't have to." },
      { t: "Transparent Reporting", d: "Measurable ROI tracking with clear reports showing exactly how your brand is growing in the real world." },
      { t: "Fully Scalable", d: "Our managed services are built to grow with you, from high-growth startups to global enterprises." }
    ]
  }
};

export const CONTACT_SECTION_CONTENT = {
  badge: "Let's Talk Growth",
  title: "Start Your",
  highlight: "Success.",
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
      message: "Tell us about your business goals..."
    },
    submit: "Get Started",
    success: "Thank you! Our growth specialist will contact you shortly."
  }
};

export const MODAL_CONTENT = {
  title: "Ready to",
  highlight: "Scale?",
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
  description: "Sheermedia provides fully managed growth, marketing, and digital services. Clients are not required to access or operate any underlying platforms or tools.",
  navTitle: "Explore",
  contactTitle: "Get in Touch",
  secureLineLabel: "Give Us a Call",
  encryptedMailLabel: "Drop us a mail",
  addressLabel: "Our Office",
  legal: {
    copyright: "© 2025 SHEERMEDIA GROUP",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Use", href: "#" }
    ]
  }
};

export const CHAT_CONTENT = {
  title: "Growth Advisor",
  badge: "Managed Intelligence",
  initialMessage: "Hi! I'm your Sheermedia growth advisor. How can I help you scale your business today?",
  systemInstruction: "You are the Sheermedia Growth Advisor. Be professional, data-centric, and focused on ROI. Emphasize that we are a managed services company—we handle the execution while the client focuses on business.",
  placeholder: "Ask about managed growth...",
  error: "Sorry, I'm having a little trouble. Feel free to book a call instead!"
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
    title: "AI Growth Intel", 
    description: "Internal AI that finds demand signals and optimizes spend without client complexity.",
    iconType: "ai"
  },
  {
    id: "02", 
    title: "WhatsApp Scale", 
    description: "Managed hyper-personalized outreach with 90%+ open rates and API execution.",
    iconType: "whatsapp"
  },
  {
    id: "03", 
    title: "Managed Ads", 
    description: "Full campaign execution focused on ROI. No tools for you to learn or manage.",
    iconType: "ads"
  },
  {
    id: "04", 
    title: "Web Performance", 
    description: "High-conversion, fast-loading websites designed to turn visitors into business results.",
    iconType: "web"
  }
];

