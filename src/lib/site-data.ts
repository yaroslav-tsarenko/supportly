export const siteConfig = {
  name: "Supportly",
  tagline: "Calm customer support software for growing teams",
  description:
    "A modern customer support platform with shared inbox, live chat, AI replies, knowledge base, automation, and analytics.",
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
    label: "Shared Inbox",
    href: "/features#inbox",
    description: "One inbox for all your conversations",
    icon: "Inbox",
  },
  {
    label: "Live Chat",
    href: "/features#live-chat",
    description: "Real-time conversations with customers",
    icon: "MessageCircle",
  },
  {
    label: "AI Assistant",
    href: "/features#ai",
    description: "Smart replies and summaries powered by AI",
    icon: "Sparkles",
  },
  {
    label: "Knowledge Base",
    href: "/features#knowledge-base",
    description: "Self-service help center for your customers",
    icon: "BookOpen",
  },
  {
    label: "Automation",
    href: "/features#automation",
    description: "Rules and workflows that save time",
    icon: "Zap",
  },
  {
    label: "Analytics",
    href: "/features#analytics",
    description: "Insights into your support performance",
    icon: "BarChart3",
  },
];

export const features = [
  {
    title: "Shared Inbox",
    description:
      "Bring email, chat, and social messages into one clean workspace. No more switching between tabs.",
    icon: "Inbox",
    color: "#EAF2FF",
  },
  {
    title: "Live Chat",
    description:
      "Talk to customers in real-time with a beautiful, customizable chat widget.",
    icon: "MessageCircle",
    color: "#DDF4E4",
  },
  {
    title: "AI Assistant",
    description:
      "Get draft replies, conversation summaries, and smart suggestions instantly.",
    icon: "Sparkles",
    color: "#ECE7FF",
  },
  {
    title: "Knowledge Base",
    description:
      "Create a searchable help center so customers can find answers on their own.",
    icon: "BookOpen",
    color: "#FFF3B8",
  },
  {
    title: "Automation Rules",
    description:
      "Route conversations, assign tags, and trigger actions without lifting a finger.",
    icon: "Zap",
    color: "#FFE4C2",
  },
  {
    title: "Customer Timeline",
    description:
      "See every interaction, purchase, and note in one place for full context.",
    icon: "Clock",
    color: "#FDE2EA",
  },
  {
    title: "Team Collaboration",
    description:
      "Internal notes, mentions, and assignments keep your team in sync.",
    icon: "Users",
    color: "#EAF2FF",
  },
  {
    title: "Analytics",
    description:
      "Track response times, satisfaction scores, and team workload at a glance.",
    icon: "BarChart3",
    color: "#DDF4E4",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting started",
    monthlyPrice: 29,
    yearlyPrice: 24,
    popular: false,
    features: [
      "Up to 3 team members",
      "Shared inbox",
      "Live chat widget",
      "Basic knowledge base",
      "Email support",
      "500 conversations/month",
    ],
  },
  {
    name: "Growth",
    description: "For growing support teams",
    monthlyPrice: 79,
    yearlyPrice: 66,
    popular: true,
    features: [
      "Up to 15 team members",
      "Everything in Starter",
      "AI assistant",
      "Automation rules",
      "Analytics dashboard",
      "Unlimited conversations",
      "Priority support",
      "Custom branding",
    ],
  },
  {
    name: "Scale",
    description: "For advanced operations",
    monthlyPrice: 199,
    yearlyPrice: 166,
    popular: false,
    features: [
      "Unlimited team members",
      "Everything in Growth",
      "Advanced AI features",
      "Custom integrations",
      "SLA management",
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
      "Supportly helped us reduce context switching and gave our team one calm place to work. Our response time dropped by 40% in the first month.",
    name: "Sarah Chen",
    role: "Head of Support",
    company: "Bloom Commerce",
  },
  {
    quote:
      "The AI suggestions are genuinely useful — not gimmicky. They help new team members respond with confidence from day one.",
    name: "Marcus Rivera",
    role: "Customer Success Lead",
    company: "Stackwise",
  },
  {
    quote:
      "We moved from three different tools to just Supportly. The knowledge base alone saved us hours every week.",
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
    question: "Can I connect email and chat?",
    answer:
      "Absolutely. Supportly brings email, live chat, and social messages into a single shared inbox so your team never has to switch between tools.",
  },
  {
    question: "Does it include AI features?",
    answer:
      "Yes. Our AI assistant can draft replies, summarize conversations, suggest knowledge base articles, adjust tone, and auto-tag conversations. It's available on Growth and Scale plans.",
  },
  {
    question: "Can I use Supportly for ecommerce?",
    answer:
      "Definitely. Supportly integrates with Shopify, Stripe, and other ecommerce tools so you can see order details right alongside customer conversations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is a top priority. We use end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, redundant data centers.",
  },
  {
    question: "Can I migrate from another tool?",
    answer:
      "Yes, we offer free migration assistance for teams moving from other help desk platforms. Our team will help you transfer your data and get set up smoothly.",
  },
];

export const integrations = [
  { name: "Slack", icon: "Hash", color: "#E8DEF8" },
  { name: "Shopify", icon: "ShoppingBag", color: "#DDF4E4" },
  { name: "Stripe", icon: "CreditCard", color: "#EAF2FF" },
  { name: "HubSpot", icon: "Target", color: "#FFE4C2" },
  { name: "Salesforce", icon: "Cloud", color: "#EAF2FF" },
  { name: "WhatsApp", icon: "MessageSquare", color: "#DDF4E4" },
  { name: "Gmail", icon: "Mail", color: "#FDE2EA" },
  { name: "Zapier", icon: "Zap", color: "#FFF3B8" },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/features#integrations" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  resources: [
    { label: "Help Center", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
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
    bio: "Former support lead at a fast-growing SaaS startup. Built Supportly to fix the problems he saw firsthand.",
  },
  {
    name: "Priya Patel",
    role: "CTO & Co-Founder",
    bio: "Engineering leader with a passion for building tools that feel simple but do powerful things.",
  },
  {
    name: "James Okafor",
    role: "Head of Design",
    bio: "Believes great support software should feel as calm and friendly as the best customer interactions.",
  },
  {
    name: "Lisa Nakamura",
    role: "Head of AI",
    bio: "ML researcher focused on making AI that genuinely helps support teams rather than replacing them.",
  },
];

export const companyValues = [
  {
    title: "Clarity over complexity",
    description:
      "We build tools that are easy to understand and use. If something feels complicated, we haven't finished designing it.",
  },
  {
    title: "Every conversation matters",
    description:
      "Behind every support ticket is a real person. We build with empathy for both customers and support teams.",
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
