"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  Phone,
  Mic,
  MicOff,
  Pause,
  ArrowRightLeft,
  PhoneOff,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const float = (delay: number, y: number = 6) => ({
  y: [-y, y],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
    delay,
  },
});

const activeCalls = [
  { name: "Emily Carter", duration: "04:32", status: "Active", agent: "YT", color: "#0B57D0", statusColor: "#059669", statusBg: "#DDF4E4" },
  { name: "James Liu", duration: "02:15", status: "On Hold", agent: "MR", color: "#7C3AED", statusColor: "#D97706", statusBg: "#FFF3B8" },
  { name: "Sarah Kim", duration: "00:08", status: "Ringing", agent: "AK", color: "#059669", statusColor: "#0B57D0", statusBg: "#EAF2FF" },
  { name: "Alex Torres", duration: "11:47", status: "Active", agent: "LS", color: "#D97706", statusColor: "#059669", statusBg: "#DDF4E4" },
];

function CallDashboardMockup() {
  return (
    <motion.div
      custom={4}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-2xl mx-auto lg:mx-0"
    >
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#E5E1DA]/60 overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E1DA]/60 bg-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-xs font-medium text-[#767676]">Supportly Call Center</span>
          <div className="w-16" />
        </div>

        <div className="flex min-h-[340px]">
          {/* Active calls list */}
          <div className="w-[200px] border-r border-[#E5E1DA]/60 flex-shrink-0">
            <div className="px-3 py-2 border-b border-[#E5E1DA]/40">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#101010]">Active Calls</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">
                  {activeCalls.length} live
                </span>
              </div>
            </div>
            {activeCalls.map((c, i) => (
              <motion.div
                key={c.name}
                animate={i === 0 ? {} : undefined}
                className={`px-3 py-2.5 border-b border-[#E5E1DA]/30 cursor-default ${
                  i === 0 ? "bg-[#EAF2FF]" : "hover:bg-[#FAF7F2]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-semibold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#101010] truncate">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[9px] text-[#767676] font-mono">{c.duration}</span>
                      <span
                        className="text-[8px] px-1.5 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: c.statusBg, color: c.statusColor }}
                      >
                        {c.status}
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-white"
                    style={{ backgroundColor: ["#059669", "#0891B2", "#DB2777", "#7C3AED"][i] }}
                  >
                    {c.agent}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active call view */}
          <div className="flex-1 flex flex-col">
            <div className="px-4 py-2.5 border-b border-[#E5E1DA]/60 flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold text-[#101010]">Emily Carter</span>
                <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">
                  Active
                </span>
              </div>
              <span className="text-[10px] text-[#767676]">Assigned to you</span>
            </div>

            <div className="flex-1 px-4 py-3 space-y-3 overflow-auto">
              {/* Caller info */}
              <motion.div animate={float(0, 2)} className="bg-[#F3EFE7] rounded-xl px-3 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B57D0] flex items-center justify-center text-sm font-bold text-white">
                    EC
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#101010]">Emily Carter</p>
                    <p className="text-[10px] text-[#767676]">+1 (555) 234-8901</p>
                    <p className="text-[10px] text-[#767676]">Acme Inc</p>
                  </div>
                  <div className="ml-auto text-center">
                    <p className="text-lg font-bold text-[#101010] font-mono">04:32</p>
                    <p className="text-[9px] text-[#059669] font-medium">In Progress</p>
                  </div>
                </div>
              </motion.div>

              {/* Call action buttons */}
              <div className="flex items-center justify-center gap-3">
                <button className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-[#F3EFE7] hover:bg-[#E5E1DA] transition-colors">
                  <Mic className="w-4 h-4 text-[#525252]" />
                  <span className="text-[9px] text-[#525252] font-medium">Mute</span>
                </button>
                <button className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-[#FFF3B8] hover:bg-[#FFE99A] transition-colors">
                  <Pause className="w-4 h-4 text-[#D97706]" />
                  <span className="text-[9px] text-[#D97706] font-medium">Hold</span>
                </button>
                <button className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-[#EAF2FF] hover:bg-[#D4E4FF] transition-colors">
                  <ArrowRightLeft className="w-4 h-4 text-[#0B57D0]" />
                  <span className="text-[9px] text-[#0B57D0] font-medium">Transfer</span>
                </button>
                <button className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-[#FDE2EA] hover:bg-[#FBCCD8] transition-colors">
                  <PhoneOff className="w-4 h-4 text-[#DB2777]" />
                  <span className="text-[9px] text-[#DB2777] font-medium">End Call</span>
                </button>
              </div>

              {/* AI suggestion */}
              <motion.div animate={float(0.5, 3)} className="mt-2">
                <div className="bg-[#ECE7FF] rounded-xl px-3 py-2.5 border border-[#D4C8FF]">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3 h-3 text-[#7C3AED]" />
                    <span className="text-[10px] font-semibold text-[#7C3AED]">AI Suggestion</span>
                  </div>
                  <p className="text-[11px] text-[#525252] leading-relaxed">
                    Based on the caller&apos;s history, they may be asking about their recent order #4821. Tracking: TRK-8294-XP
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-[9px] px-2.5 py-1 bg-[#7C3AED] text-white rounded-full font-medium">
                      View order
                    </button>
                    <button className="text-[9px] px-2.5 py-1 bg-white text-[#525252] rounded-full border border-[#E5E1DA]">
                      Dismiss
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Customer sidebar */}
          <motion.div animate={float(1, 4)} className="w-[170px] border-l border-[#E5E1DA]/60 p-3 flex-shrink-0 hidden xl:block">
            <div className="text-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#0B57D0] mx-auto flex items-center justify-center text-sm font-bold text-white">
                EC
              </div>
              <p className="text-xs font-semibold text-[#101010] mt-1.5">Emily Carter</p>
              <p className="text-[10px] text-[#767676]">+1 (555) 234-8901</p>
            </div>
            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between">
                <span className="text-[#767676]">Company</span>
                <span className="text-[#101010] font-medium">Acme Inc</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#767676]">Plan</span>
                <span className="text-[#101010] font-medium">Growth</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#767676]">Calls</span>
                <span className="text-[#101010] font-medium">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#767676]">Last call</span>
                <span className="text-[#101010] font-medium">Apr 28</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-[#FAF7F2] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#101010] leading-[0.95] tracking-[-0.05em] font-[800]"
              style={{ fontSize: "clamp(48px, 8vw, 92px)" }}
            >
              Customer support built around{" "}
              <em className="not-italic font-[800] italic text-[#0B57D0]">
                calls, not&nbsp;clutter.
              </em>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg md:text-xl text-[#525252] leading-relaxed max-w-lg"
            >
              One platform for call routing, agent workspaces, AI call
              summaries, and performance analytics. Less chaos, faster
              resolutions.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="/contact">
                Get started
              </Button>
              <Button variant="secondary" size="lg" href="/features">
                See how it works
              </Button>
            </motion.div>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 text-sm text-[#767676]"
            >
              Free 14-day trial &middot; No credit card required &middot; Cancel
              anytime
            </motion.p>
          </div>

          {/* Mockup side */}
          <CallDashboardMockup />
        </div>
      </div>
    </section>
  );
}
