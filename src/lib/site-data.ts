export const siteConfig = {
  name: "Supportly",
  tagline: "Smart call support software for growing teams",
  description:
    "A modern call support platform with smart routing, call queue management, AI call summaries, real-time monitoring, and powerful analytics.",
  url: "https://supportly.io",
  email: "hello@supportly.io",
};

export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const featureDropdownItems = [
  {
    label: "Smart Call Routing",
    href: "/features#call-routing",
    description: "Route calls to the right agent or team automatically",
    icon: "PhoneForwarded",
  },
  {
    label: "Call Queue Management",
    href: "/features#call-queues",
    description: "Organized queues that keep wait times low",
    icon: "ListOrdered",
  },
  {
    label: "Agent Workspace",
    href: "/features#agent-workspace",
    description: "Everything agents need during a call",
    icon: "Headphones",
  },
  {
    label: "AI Call Summaries",
    href: "/features#ai-summaries",
    description: "Automatic transcription and summaries for every call",
    icon: "Sparkles",
  },
  {
    label: "Call Analytics",
    href: "/features#analytics",
    description: "Track call metrics and team performance",
    icon: "BarChart3",
  },
  {
    label: "Callback Requests",
    href: "/features#callbacks",
    description: "Let customers schedule callbacks instead of waiting",
    icon: "PhoneCall",
  },
];

export const features = [
  {
    title: "Smart Call Routing",
    description:
      "Automatically route incoming calls to the right agent or team based on skills, availability, and customer history.",
    icon: "PhoneForwarded",
    color: "#EAF2FF",
  },
  {
    title: "Call Queue Management",
    description:
      "Keep call queues organized with priority levels, estimated wait times, and overflow rules.",
    icon: "ListOrdered",
    color: "#DDF4E4",
  },
  {
    title: "Agent Workspace",
    description:
      "Give agents a unified workspace with caller info, history, and tools — everything they need during a call.",
    icon: "Headphones",
    color: "#ECE7FF",
  },
  {
    title: "AI Call Summaries",
    description:
      "Get automatic transcriptions and AI-generated summaries after every call. Never miss a detail.",
    icon: "Sparkles",
    color: "#FFF3B8",
  },
  {
    title: "Call Analytics",
    description:
      "Track call volume, wait times, resolution rates, and agent performance with real-time dashboards.",
    icon: "BarChart3",
    color: "#FFE4C2",
  },
  {
    title: "Callback Requests",
    description:
      "Let customers request a callback instead of waiting on hold. Reduce abandonment and improve satisfaction.",
    icon: "PhoneCall",
    color: "#FDE2EA",
  },
  {
    title: "Live Call Monitoring",
    description:
      "Supervisors can listen in, whisper to agents, or join calls in real-time for coaching and quality assurance.",
    icon: "Radio",
    color: "#EAF2FF",
  },
  {
    title: "Call History Timeline",
    description:
      "See every call, recording, and summary for each customer in a single chronological timeline.",
    icon: "Clock",
    color: "#DDF4E4",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams handling inbound calls",
    monthlyPrice: 29,
    yearlyPrice: 24,
    popular: false,
    features: [
      "Up to 3 agents",
      "500 calls/month",
      "Basic call routing",
      "Call queue management",
      "Call history",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For growing support teams",
    monthlyPrice: 79,
    yearlyPrice: 66,
    popular: true,
    features: [
      "Up to 15 agents",
      "Everything in Starter",
      "Unlimited calls",
      "AI call summaries",
      "Smart call routing",
      "Call analytics dashboard",
      "Callback requests",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For advanced call operations",
    monthlyPrice: 199,
    yearlyPrice: 166,
    popular: false,
    features: [
      "Unlimited agents",
      "Everything in Growth",
      "Live call monitoring",
      "SLA management",
      "Custom integrations",
      "Dedicated account manager",
      "SSO & advanced security",
      "API access",
      "Custom reporting",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Supportly cut our missed calls by 60% in the first month. The smart routing means customers actually reach the right person on the first try.",
    name: "Sarah Chen",
    role: "Head of Support",
    company: "Bloom Commerce",
  },
  {
    quote:
      "The AI call summaries save our agents at least an hour a day on post-call notes. We finally have accurate records without the busywork.",
    name: "Marcus Rivera",
    role: "Customer Success Lead",
    company: "Stackwise",
  },
  {
    quote:
      "We consolidated three phone systems into Supportly and the transition was seamless. Our team loves the unified workspace.",
    name: "Emma Lindqvist",
    role: "Operations Manager",
    company: "Norde Studio",
  },
];

export const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes, every plan comes with a 14-day free trial. No credit card required. You can explore all features and decide which plan works best for your team.",
  },
  {
    question: "How do I connect my phone numbers?",
    answer:
      "Supportly works with your existing phone numbers. You can port numbers over or provision new ones directly from the dashboard. We support local, toll-free, and international numbers.",
  },
  {
    question: "Does it include AI features?",
    answer:
      "Yes. Our AI engine automatically transcribes calls, generates summaries, detects customer sentiment, and suggests next steps. AI features are available on Growth and Scale plans.",
  },
  {
    question: "Are calls recorded?",
    answer:
      "Yes, call recording is available on all plans. Recordings are stored securely and can be reviewed, searched, and shared. You can configure recording rules to meet compliance requirements.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is a top priority. We use end-to-end encryption for all calls, SOC 2 compliance, and regular security audits. Call recordings and data are stored in secure, redundant data centers.",
  },
  {
    question: "Can I migrate from another phone system?",
    answer:
      "Yes, we offer free migration assistance for teams moving from other phone support platforms. Our team will help you port numbers, transfer data, and get set up smoothly.",
  },
];

export const integrations = [
  { name: "Slack", icon: "Hash", color: "#E8DEF8" },
  { name: "Salesforce", icon: "Cloud", color: "#EAF2FF" },
  { name: "HubSpot", icon: "Target", color: "#FFE4C2" },
  { name: "Twilio", icon: "Phone", color: "#DDF4E4" },
  { name: "RingCentral", icon: "PhoneCall", color: "#FDE2EA" },
  { name: "Zapier", icon: "Zap", color: "#FFF3B8" },
  { name: "Microsoft Teams", icon: "Users", color: "#EAF2FF" },
  { name: "Zendesk", icon: "Headphones", color: "#E8DEF8" },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export const teamMembers = [
  {
    name: "Alex Morgan",
    role: "CEO & Co-Founder",
    bio: "Former support lead at a fast-growing SaaS startup. Built Supportly to fix the phone support problems he saw firsthand.",
  },
  {
    name: "Priya Patel",
    role: "CTO & Co-Founder",
    bio: "Engineering leader with a passion for building call infrastructure that feels simple but handles massive scale.",
  },
  {
    name: "James Okafor",
    role: "Head of Design",
    bio: "Believes great call support software should feel as calm and intuitive as the best customer interactions.",
  },
  {
    name: "Lisa Nakamura",
    role: "Head of AI",
    bio: "ML researcher focused on making AI that genuinely helps call agents — from transcription to real-time suggestions.",
  },
];

export const companyValues = [
  {
    title: "Clarity over complexity",
    description:
      "We build tools that are easy to understand and use. If something feels complicated, we haven't finished designing it.",
  },
  {
    title: "Every call matters",
    description:
      "Behind every support call is a real person. We build with empathy for both customers and support teams.",
  },
  {
    title: "Calm by design",
    description:
      "Support work is demanding. Our software should reduce stress, not add to it.",
  },
  {
    title: "Honest and transparent",
    description:
      "We say what we mean, price fairly, and build trust through consistency.",
  },
];
