"use client";

import { motion } from "framer-motion";
import {
  PhoneForwarded,
  ListOrdered,
  Headphones,
  Sparkles,
  BarChart3,
  PhoneCall,
  Check,
  ArrowRight,
  Phone,
  Clock,
  Users,
  Mic,
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
    id: "call-routing",
    icon: PhoneForwarded,
    iconBg: "bg-[#EAF2FF]",
    iconColor: "text-[#0B57D0]",
    label: "SMART CALL ROUTING",
    title: "Every call reaches the right agent",
    description:
      "Intelligent routing based on agent skills, availability, and caller priority. Reduce transfers, cut wait times, and make every connection count.",
    bullets: [
      "Skills-based routing with weighted matching",
      "Overflow handling and failover rules",
      "VIP caller recognition and priority lanes",
      "Department and location-based routing",
      "Time-of-day and holiday routing schedules",
      "Real-time routing rule adjustments",
    ],
    mockup: <CallRoutingMockup />,
  },
  {
    id: "call-queues",
    icon: ListOrdered,
    iconBg: "bg-[#DDF4E4]",
    iconColor: "text-[#059669]",
    label: "CALL QUEUE MANAGEMENT",
    title: "Organized queues your callers will appreciate",
    description:
      "Give callers estimated wait times, position updates, and the option to request a callback. Keep your team focused while callers stay informed.",
    bullets: [
      "Estimated wait time announcements",
      "Queue position updates for callers",
      "Priority queue lanes for VIP customers",
      "Configurable hold music and messages",
      "Queue overflow to voicemail or callback",
    ],
    mockup: <QueueMockup />,
  },
  {
    id: "agent-workspace",
    icon: Headphones,
    iconBg: "bg-[#ECE7FF]",
    iconColor: "text-[#7C3AED]",
    label: "AGENT WORKSPACE",
    title: "Everything agents need, one screen",
    description:
      "A unified desktop that surfaces caller history, account details, and internal notes the moment a call connects. No more scrambling for context.",
    bullets: [
      "Caller info and history on screen instantly",
      "Inline notes and call disposition tagging",
      "One-click transfer, hold, and conference",
      "CRM integration with live data sync",
      "Canned responses and call scripts",
      "After-call work timer and wrap-up forms",
    ],
    mockup: <AgentWorkspaceMockup />,
  },
  {
    id: "ai-summaries",
    icon: Sparkles,
    iconBg: "bg-[#FFE4C2]",
    iconColor: "text-[#D97706]",
    label: "AI CALL SUMMARIES",
    title: "AI that listens so your team can focus",
    description:
      "Automatic transcription, smart summaries, and action-item extraction after every call. No more manual note-taking or missed details.",
    bullets: [
      "Real-time call transcription",
      "Automatic post-call summary generation",
      "Action item and follow-up detection",
      "Sentiment analysis and escalation alerts",
      "Searchable transcript archive",
    ],
    mockup: <AiSummaryMockup />,
  },
  {
    id: "analytics",
    icon: BarChart3,
    iconBg: "bg-[#FFF3B8]",
    iconColor: "text-[#B45309]",
    label: "CALL ANALYTICS",
    title: "Insights that drive better call support",
    description:
      "Track every metric that matters: call volume, wait times, resolution rates, and agent performance. Real-time dashboards and exportable reports.",
    bullets: [
      "Real-time dashboard with key call metrics",
      "Average wait time, handle time & abandonment rate",
      "Agent leaderboard and workload distribution",
      "Peak hour and trend analysis",
      "Scheduled email reports",
      "CSV and API data export",
    ],
    mockup: <AnalyticsMockup />,
  },
  {
    id: "callbacks",
    icon: PhoneCall,
    iconBg: "bg-[#FDE2EA]",
    iconColor: "text-[#DB2777]",
    label: "CALLBACK REQUESTS",
    title: "No one likes waiting on hold",
    description:
      "Let customers schedule a callback at a time that works for them. Reduce abandonment, improve satisfaction, and smooth out call spikes.",
    bullets: [
      "Self-service callback scheduling for callers",
      "Automated callback with queue position hold",
      "Preferred time window selection",
      "SMS and email callback confirmations",
      "Callback analytics and completion tracking",
    ],
    mockup: <CallbackMockup />,
  },
];

/* ------------------------------------------------------------------ */
/*  Capabilities grid data                                             */
/* ------------------------------------------------------------------ */

const capabilities = [
  "Smart call routing",
  "Call queue management",
  "Agent workspace",
  "AI call summaries",
  "Call analytics",
  "Callback scheduling",
  "Call recording",
  "Live monitoring",
  "Whisper coaching",
  "Call transfers",
  "IVR menus",
  "Priority queues",
  "Customer satisfaction surveys",
  "Custom fields",
  "Webhooks & API",
  "Role-based permissions",
  "Audit log",
  "Custom hold music",
  "Number porting",
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

function CallRoutingMockup() {
  return (
    <MockupShell>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <PhoneForwarded className="w-4 h-4 text-[#0B57D0]" />
          <span className="text-xs font-semibold text-[#101010]">Call Routing Flow</span>
        </div>
        <div className="space-y-2">
          {/* Incoming */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#EAF2FF]/30">
            <div className="w-5 h-5 rounded bg-[#EAF2FF] flex items-center justify-center">
              <Phone className="w-3 h-3 text-[#0B57D0]" />
            </div>
            <span className="text-[11px] text-[#101010]">Incoming call from <span className="font-semibold">+1 (415) 555-0142</span></span>
          </div>
          <div className="flex justify-center"><div className="w-px h-4 bg-[#E5E1DA]" /></div>
          {/* Check */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#FFE4C2]/30">
            <div className="w-5 h-5 rounded bg-[#FFE4C2] flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#D97706]">IF</span>
            </div>
            <span className="text-[11px] text-[#101010]">Caller is <span className="font-semibold">VIP customer</span></span>
          </div>
          <div className="flex justify-center"><div className="w-px h-4 bg-[#E5E1DA]" /></div>
          {/* Route */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#DDF4E4]/30">
            <div className="w-5 h-5 rounded bg-[#DDF4E4] flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#059669]">DO</span>
            </div>
            <span className="text-[11px] text-[#101010]">Route to <span className="font-semibold">Senior Agent Team</span> (priority lane)</span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 text-[9px] text-[#767676]">
          <span>Avg. routing time: 1.2s</span>
          <span>98.7% first-contact match</span>
        </div>
      </div>
    </MockupShell>
  );
}

function QueueMockup() {
  const queueItems = [
    { position: 1, name: "Sarah K.", wait: "0:42", status: "Connecting...", statusColor: "text-[#059669]" },
    { position: 2, name: "James L.", wait: "1:15", status: "In queue", statusColor: "text-[#D97706]" },
    { position: 3, name: "Raj A.", wait: "2:03", status: "In queue", statusColor: "text-[#D97706]" },
    { position: 4, name: "Maria P.", wait: "2:48", status: "Callback requested", statusColor: "text-[#7C3AED]" },
  ];

  return (
    <MockupShell>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-[#101010]">Support Queue</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">4 callers</span>
        </div>
        <div className="space-y-2">
          {queueItems.map((item) => (
            <div key={item.position} className="flex items-center gap-3 rounded-lg border border-[#E5E1DA]/60 p-2.5">
              <span className="text-[10px] font-bold text-[#767676] w-4 text-center">#{item.position}</span>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-medium text-[#101010]">{item.name}</span>
                <span className="text-[9px] text-[#767676] ml-2">Wait: {item.wait}</span>
              </div>
              <span className={`text-[9px] font-medium ${item.statusColor}`}>{item.status}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1 text-[9px] text-[#767676]">
          <Clock className="w-3 h-3" />
          Est. wait: 3 min &middot; 6 agents available
        </div>
      </div>
    </MockupShell>
  );
}

function AgentWorkspaceMockup() {
  return (
    <MockupShell>
      <div className="p-4 space-y-3">
        {/* Caller info bar */}
        <div className="flex items-center gap-3 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#ECE7FF]/20">
          <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center text-[10px] font-bold text-white">JL</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#101010]">James Lee</p>
            <p className="text-[9px] text-[#767676]">VIP &middot; Acme Corp &middot; 12 previous calls</p>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
            Live
          </span>
        </div>
        {/* Call controls */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-3 py-1.5 bg-[#0B57D0] text-white rounded-full font-medium cursor-default flex items-center gap-1"><Mic className="w-3 h-3" /> Mute</span>
          <span className="text-[10px] px-3 py-1.5 bg-white text-[#525252] rounded-full border border-[#E5E1DA] cursor-default">Hold</span>
          <span className="text-[10px] px-3 py-1.5 bg-white text-[#525252] rounded-full border border-[#E5E1DA] cursor-default">Transfer</span>
          <span className="text-[10px] px-3 py-1.5 bg-[#FDE2EA] text-[#DB2777] rounded-full font-medium cursor-default">End call</span>
        </div>
        {/* Notes */}
        <div className="rounded-lg border border-[#E5E1DA]/60 p-2.5">
          <p className="text-[9px] font-semibold text-[#767676] mb-1">CALL NOTES</p>
          <p className="text-[11px] text-[#525252]">Customer asking about invoice #4821. Wants to upgrade from Growth to Scale plan.</p>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-[#767676]">
          <Clock className="w-3 h-3" />
          <span>Duration: 4:32</span>
          <span>&middot;</span>
          <span>Recording active</span>
        </div>
      </div>
    </MockupShell>
  );
}

function AiSummaryMockup() {
  return (
    <MockupShell>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 rounded-lg border border-[#E5E1DA]/60 p-2.5 bg-[#F3EFE7]">
          <Phone className="w-4 h-4 text-[#D97706]" />
          <div>
            <p className="text-[11px] font-medium text-[#101010]">Call with James Lee &middot; 8m 24s</p>
            <p className="text-[9px] text-[#767676]">Ended 2 min ago</p>
          </div>
        </div>
        <div className="bg-[#FFE4C2]/30 rounded-xl px-4 py-3.5 border border-[#FFE4C2] relative">
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span className="text-[11px] font-semibold text-[#D97706]">AI Call Summary</span>
          </div>
          <p className="text-xs text-[#525252] leading-relaxed">
            Customer called about a duplicate charge on invoice #4821. Agent confirmed the error and initiated a refund. Customer also expressed interest in upgrading to the Scale plan.
          </p>
          <div className="mt-2 pt-2 border-t border-[#FFE4C2]">
            <p className="text-[9px] font-semibold text-[#D97706] mb-1">Action items:</p>
            <p className="text-[10px] text-[#525252]">1. Process refund for $79.00</p>
            <p className="text-[10px] text-[#525252]">2. Send Scale plan pricing info</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FFE4C2] text-[#D97706] font-medium">Billing</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#EAF2FF] text-[#0B57D0] font-medium">Upgrade</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">Positive sentiment</span>
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
            { label: "Avg. wait time", value: "1.4 min", change: "-18%" },
            { label: "Avg. handle time", value: "6.2 min", change: "-8%" },
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
          <p className="text-[10px] font-medium text-[#101010] mb-2">Calls handled</p>
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

function CallbackMockup() {
  return (
    <MockupShell>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <PhoneCall className="w-4 h-4 text-[#DB2777]" />
          <span className="text-xs font-semibold text-[#101010]">Callback Scheduler</span>
        </div>
        <div className="space-y-2.5">
          {[
            { name: "Sarah Kim", time: "Today, 2:00 PM", status: "Scheduled", statusBg: "bg-[#EAF2FF] text-[#0B57D0]" },
            { name: "Raj Anand", time: "Today, 3:30 PM", status: "Scheduled", statusBg: "bg-[#EAF2FF] text-[#0B57D0]" },
            { name: "Maria Perez", time: "Today, 1:15 PM", status: "Completed", statusBg: "bg-[#DDF4E4] text-[#059669]" },
          ].map((cb) => (
            <div key={cb.name} className="flex items-center gap-3 rounded-lg border border-[#E5E1DA]/60 p-2.5">
              <PhoneCall className="w-4 h-4 text-[#DB2777] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium text-[#101010]">{cb.name}</p>
                <p className="text-[9px] text-[#767676]">{cb.time}</p>
              </div>
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${cb.statusBg}`}>{cb.status}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3 text-[9px] text-[#767676]">
          <span>3 callbacks today</span>
          <span>92% completion rate</span>
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
            Everything your team needs to deliver great call support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-[#525252]"
          >
            Smart call routing, queue management, agent workspace, AI summaries,
            analytics, and callbacks — all in one calm, thoughtfully-designed phone support platform.
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
              Schedule a call
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
              call support capabilities your team needs.
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
