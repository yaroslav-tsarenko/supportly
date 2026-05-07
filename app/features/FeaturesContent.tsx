"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  MessageCircle,
  Sparkles,
  BookOpen,
  Zap,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

interface Feature {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "inbox",
    icon: Inbox,
    iconBg: "bg-[#EAF2FF]",
    iconColor: "text-[#0B57D0]",
    label: "SHARED INBOX",
    title: "One inbox for every channel",
    description:
      "Bring email, chat, social, and SMS into a single view so nothing falls through the cracks. Assign, snooze, and collaborate without switching tabs.",
    bullets: [
      "Unified email, chat, social & SMS threads",
      "Collision detection — see who's already replying",
      "Internal notes and @mentions for quick handoffs",
      "Custom views, tags, and saved filters",
      "SLA timers with automatic escalation",
      "Bulk actions for high-volume triage",
    ],
    mockup: <InboxMockup />,
  },
  {
    id: "live-chat",
    icon: MessageCircle,
    iconBg: "bg-[#DDF4E4]",
    iconColor: "text-[#059669]",
    label: "LIVE CHAT",
    title: "Real-time conversations that convert",
    description:
      "Engage visitors the moment they land. A lightweight widget that loads fast, looks native, and connects directly to your inbox.",
    bullets: [
      "Customizable widget with your brand colors",
      "Pre-chat forms to capture context upfront",
      "Typing indicators and read receipts",
      "Offline mode with automatic follow-up email",
      "Proactive chat triggers based on behavior",
    ],
    mockup: <LiveChatMockup />,
  },
  {
    id: "ai",
    icon: Sparkles,
    iconBg: "bg-[#ECE7FF]",
    iconColor: "text-[#7C3AED]",
    label: "AI ASSISTANT",
    title: "AI that helps your team move faster",
    description:
      "Draft replies, summarize threads, and surface knowledge base answers — all powered by AI that learns from your past conversations.",
    bullets: [
      "One-click AI draft replies with confidence scores",
      "Automatic conversation summaries",
      "Knowledge base article suggestions",
      "Tone adjustment — formal, friendly, concise",
      "Auto-tagging and smart routing",
      "Continuous learning from agent corrections",
    ],
    mockup: <AiMockup />,
  },
  {
    id: "knowledge-base",
    icon: BookOpen,
    iconBg: "bg-[#FFE4C2]",
    iconColor: "text-[#D97706]",
    label: "KNOWLEDGE BASE",
    title: "Self-service that actually works",
    description:
      "Create a beautiful help center your customers will love. Articles, categories, and instant search — reducing tickets before they're created.",
    bullets: [
      "Rich text editor with images and embeds",
      "SEO-optimized article pages",
      "Instant search with AI-powered suggestions",
      "Feedback widgets — was this helpful?",
      "Custom domain and branding",
    ],
    mockup: <KnowledgeBaseMockup />,
  },
  {
    id: "automation",
    icon: Zap,
    iconBg: "bg-[#FDE2EA]",
    iconColor: "text-[#DB2777]",
    label: "AUTOMATION",
    title: "Put repetitive tasks on autopilot",
    description:
      "Build powerful no-code workflows that auto-assign, tag, escalate, and respond — so your team can focus on the conversations that matter.",
    bullets: [
      "Visual workflow builder — no code required",
      "Trigger on new ticket, update, SLA breach & more",
      "Auto-assign based on skills, load, or round-robin",
      "Canned responses with dynamic variables",
      "Time-based rules and follow-up sequences",
      "Webhook actions for external integrations",
    ],
    mockup: <AutomationMockup />,
  },
  {
    id: "analytics",
    icon: BarChart3,
    iconBg: "bg-[#FFF3B8]",
    iconColor: "text-[#B45309]",
    label: "ANALYTICS",
    title: "Insights that drive better support",
    description:
      "Understand your team's performance, spot trends, and make data-driven decisions with real-time dashboards and exportable reports.",
    bullets: [
      "Real-time dashboard with key metrics",
      "First response time, resolution time & CSAT",
      "Agent leaderboard and workload distribution",
      "Tag and channel breakdowns",
      "Scheduled email reports",
      "CSV and API data export",
    ],
    mockup: <AnalyticsMockup />,
  },
];

/* ------------------------------------------------------------------ */
/*  Capabilities grid data                                             */
/* ------------------------------------------------------------------ */

const capabilities = [
  "Shared inbox",
  "Live chat widget",
  "AI draft replies",
  "Knowledge base",
  "Workflow automation",
  "Real-time analytics",
  "Custom SLA policies",
  "Collision detection",
  "Internal notes",
  "Canned responses",
  "Auto-tagging",
  "Smart routing",
  "Customer satisfaction surveys",
  "Custom fields",
  "Webhooks & API",
  "Role-based permissions",
  "Audit log",
  "Custom branding",
  "Multilingual support",
  "Mobile apps",
  "SSO / SAML",
  "99.9% uptime SLA",
  "GDPR compliant",
  "Priority support",
];

/* ------------------------------------------------------------------ */
/*  Mockup components                                                  */
/* ------------------------------------------------------------------ */

function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#E5E1DA]/60 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#E5E1DA]/60 bg-[#FAF7F2]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      {children}
    </div>
  );
}

function InboxMockup() {
  const threads = [
    { initials: "JL", color: "bg-[#D97706]", name: "James Lee", subject: "Stripe integration error", tag: "Urgent", tagColor: "bg-[#FDE2EA] text-[#DB2777]", time: "2m ago", unread: true },
    { initials: "SK", color: "bg-[#0B57D0]", name: "Sarah Kim", subject: "How to export data?", tag: "Question", tagColor: "bg-[#EAF2FF] text-[#0B57D0]", time: "8m ago", unread: true },
    { initials: "RA", color: "bg-[#059669]", name: "Raj Anand", subject: "Billing cycle update", tag: "Billing", tagColor: "bg-[#FFE4C2] text-[#D97706]", time: "22m ago", unread: false },
    { initials: "MP", color: "bg-[#7C3AED]", name: "Maria Perez", subject: "Feature request: dark mode", tag: "Feature", tagColor: "bg-[#ECE7FF] text-[#7C3AED]", time: "1h ago", unread: false },
  ];

  return (
    <MockupShell>
      <div className="divide-y divide-[#E5E1DA]/60">
        {threads.map((t) => (
          <div key={t.name} className={`flex items-center gap-3 px-4 py-3 ${t.unread ? "bg-[#EAF2FF]/30" : ""}`}>
            <div className={`w-7 h-7 rounded-full ${t.color} flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0`}>
              {t.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className={`text-xs ${t.unread ? "font-semibold" : "font-medium"} text-[#101010] truncate`}>{t.name}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${t.tagColor}`}>{t.tag}</span>
              </div>
              <p className="text-[11px] text-[#525252] truncate">{t.subject}</p>
            </div>
            <span className="text-[9px] text-[#767676] flex-shrink-0">{t.time}</span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function LiveChatMockup() {
  return (
    <MockupShell>
      <div className="p-4 space-y-3">
        <div className="flex gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#059669] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">S</div>
          <div className="bg-[#DDF4E4] rounded-xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%]">
            <p className="text-xs text-[#101010] leading-relaxed">Hi! I&apos;m looking at your Pro plan. Can I get a walkthrough?</p>
            <span className="text-[9px] text-[#767676] mt-1 block">Just now</span>
          </div>
        </div>
        <div className="flex gap-2.5 justify-end">
          <div className="bg-[#EAF2FF] rounded-xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]">
            <p className="text-xs text-[#101010] leading-relaxed">Of course! I&apos;d love to walk you through it. The Pro plan includes unlimited agents and priority support.</p>
            <span className="text-[9px] text-[#767676] mt-1 block text-right">Just now</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-[9px] text-[#767676]">Visitor is typing...</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-[#E5E1DA] px-3 py-2">
          <input type="text" placeholder="Type a reply..." className="flex-1 text-xs text-[#767676] bg-transparent outline-none" readOnly />
          <div className="w-6 h-6 rounded-full bg-[#0B57D0] flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function AiMockup() {
  return (
    <MockupShell>
      <div className="p-4 space-y-3">
        <div className="flex gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#D97706] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">JL</div>
          <div className="bg-[#F3EFE7] rounded-xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
            <p className="text-xs text-[#101010] leading-relaxed">My invoice shows the wrong amount. I was charged twice this month.</p>
          </div>
        </div>
        <div className="bg-[#ECE7FF] rounded-xl px-4 py-3.5 border border-[#D4C8FF] relative">
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="text-[11px] font-semibold text-[#7C3AED]">AI Suggested Reply</span>
            <span className="text-[9px] text-[#767676] ml-auto">Confidence: 96%</span>
          </div>
          <p className="text-xs text-[#525252] leading-relaxed">
            Hi James, I&apos;m sorry about the duplicate charge. I&apos;ve checked your account and can confirm the extra payment. I&apos;ve initiated a refund that should appear within 3-5 business days.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[10px] px-3 py-1.5 bg-[#7C3AED] text-white rounded-full font-medium cursor-default">Use reply</span>
            <span className="text-[10px] px-3 py-1.5 bg-white text-[#525252] rounded-full border border-[#E5E1DA] cursor-default">Edit first</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[9px] text-[#767676]">Auto-tagged:</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FFE4C2] text-[#D97706] font-medium">Billing</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FDE2EA] text-[#DB2777] font-medium">Refund</span>
        </div>
      </div>
    </MockupShell>
  );
}

function KnowledgeBaseMockup() {
  return (
    <MockupShell>
      <div className="p-4">
        <div className="flex items-center gap-2 rounded-xl border border-[#E5E1DA] px-3 py-2 mb-4">
          <svg className="w-3.5 h-3.5 text-[#767676]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="text-xs text-[#767676]">Search help articles...</span>
        </div>
        <div className="space-y-2.5">
          {[
            { title: "Getting started with Supportly", views: "2.4k views", category: "Basics" },
            { title: "Setting up your shared inbox", views: "1.8k views", category: "Inbox" },
            { title: "Connecting live chat to your site", views: "1.2k views", category: "Live Chat" },
          ].map((a) => (
            <div key={a.title} className="flex items-start gap-3 rounded-lg border border-[#E5E1DA]/60 p-3 hover:bg-[#FAF7F2] transition-colors">
              <BookOpen className="w-4 h-4 text-[#D97706] mt-0.5 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#101010]">{a.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px] text-[#767676]">{a.views}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#FFE4C2] text-[#D97706] font-medium">{a.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1 text-[9px] text-[#767676]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
          23 articles published
        </div>
      </div>
    </MockupShell>
  );
}

function AutomationMockup() {
  return (
    <MockupShell>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-[#DB2777]" />
          <span className="text-xs font-semibold text-[#101010]">Auto-assign urgent tickets</span>
          <span className="ml-auto text-[9px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">Active</span>
        </div>
        <div className="space-y-2">
          {/* Trigger */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#FDE2EA]/30">
            <div className="w-5 h-5 rounded bg-[#FDE2EA] flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#DB2777]">IF</span>
            </div>
            <span className="text-[11px] text-[#101010]">Priority is <span className="font-semibold">Urgent</span></span>
          </div>
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-px h-4 bg-[#E5E1DA]" />
          </div>
          {/* Condition */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#FFE4C2]/30">
            <div className="w-5 h-5 rounded bg-[#FFE4C2] flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#D97706]">AND</span>
            </div>
            <span className="text-[11px] text-[#101010]">Tag contains <span className="font-semibold">Billing</span></span>
          </div>
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-px h-4 bg-[#E5E1DA]" />
          </div>
          {/* Action */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#DDF4E4]/30">
            <div className="w-5 h-5 rounded bg-[#DDF4E4] flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#059669]">DO</span>
            </div>
            <span className="text-[11px] text-[#101010]">Assign to <span className="font-semibold">Billing Team</span> + Send notification</span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 text-[9px] text-[#767676]">
          <span>Triggered 142 times this week</span>
          <span>Avg. save: 4 min/ticket</span>
        </div>
      </div>
    </MockupShell>
  );
}

function AnalyticsMockup() {
  const bars = [65, 80, 45, 90, 70, 55, 85];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <MockupShell>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Avg. first reply", value: "1.8 min", change: "-12%" },
            { label: "Resolution time", value: "4.2 hrs", change: "-8%" },
            { label: "CSAT score", value: "96%", change: "+3%" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-[#E5E1DA]/60 p-2.5">
              <p className="text-[9px] text-[#767676]">{m.label}</p>
              <p className="text-sm font-bold text-[#101010] mt-0.5">{m.value}</p>
              <p className="text-[9px] text-[#059669] font-medium">{m.change}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-[#E5E1DA]/60 p-3">
          <p className="text-[10px] font-medium text-[#101010] mb-2">Tickets resolved</p>
          <div className="flex items-end gap-1.5 h-16">
            {bars.map((h, i) => (
              <div key={days[i]} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-sm bg-[#0B57D0]" style={{ height: `${h}%` }} />
                <span className="text-[8px] text-[#767676]">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature Section component                                          */
/* ------------------------------------------------------------------ */

function FeatureSection({
  feature,
  reversed,
}: {
  feature: Feature;
  reversed: boolean;
}) {
  const Icon = feature.icon;

  return (
    <section
      id={feature.id}
      className="py-20 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text side */}
          <motion.div
            variants={reversed ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={reversed ? "lg:order-2" : ""}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center`}
              >
                <Icon className={`w-5 h-5 ${feature.iconColor}`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
                {feature.label}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight -tracking-[0.02em] text-[#101010] sm:text-4xl">
              {feature.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#525252] max-w-lg">
              {feature.description}
            </p>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-6 space-y-3"
            >
              {feature.bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={itemFade}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#DDF4E4] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#059669]" />
                  </div>
                  <span className="text-sm text-[#101010]">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Mockup side */}
          <motion.div
            variants={reversed ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={reversed ? "lg:order-1" : ""}
          >
            {feature.mockup}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main content                                                       */
/* ------------------------------------------------------------------ */

export default function FeaturesContent() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-bold uppercase tracking-widest text-[#0B57D0]"
          >
            Features
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight -tracking-[0.02em] text-[#101010] sm:text-5xl lg:text-6xl"
          >
            Everything your team needs to deliver great support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-[#525252]"
          >
            Shared inbox, live chat, AI assistant, knowledge base, automation,
            and analytics — all in one calm, thoughtfully-designed platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/signup" size="lg">
              Start free trial
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---- Feature sections ---- */}
      {features.map((feature, i) => (
        <div
          key={feature.id}
          className={i % 2 === 1 ? "bg-[#FAF7F2]" : "bg-white"}
        >
          <FeatureSection feature={feature} reversed={i % 2 === 1} />
        </div>
      ))}

      {/* ---- Capabilities grid ---- */}
      <section className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
              Everything included
            </p>
            <h2 className="text-3xl font-extrabold leading-tight -tracking-[0.02em] text-[#101010] sm:text-4xl md:text-5xl">
              All the tools, one platform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#525252]">
              No add-ons or hidden modules. Every plan includes the full set of
              capabilities your team needs.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap}
                variants={itemFade}
                className="flex items-center gap-2.5 rounded-xl border border-[#E5E1DA] bg-white px-4 py-3"
              >
                <Check className="w-4 h-4 text-[#059669] flex-shrink-0" />
                <span className="text-sm text-[#101010]">{cap}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button href="/pricing" variant="secondary" size="lg">
              See pricing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <FAQSection />

      {/* ---- Final CTA ---- */}
      <FinalCTA />
    </>
  );
}
