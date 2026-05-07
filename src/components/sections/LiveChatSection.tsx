"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Mic,
  MicOff,
  Pause,
  PhoneForwarded,
  Circle,
  PhoneOff,
  Sparkles,
  User,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } },
};

export default function LiveChatSection() {
  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="LIVE CALLS"
          title="Real-time call handling, beautifully simple"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#101010] mb-4">
              Handle every call with confidence
            </h3>
            <p className="text-[#525252] leading-relaxed mb-6">
              Your team gets the tools they need to manage calls efficiently.
              Smart routing, real-time coaching, and seamless transfers keep
              customers happy and agents productive.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Instant connection",
                  desc: "Calls routed to available agents based on skill and availability.",
                },
                {
                  title: "Call transfers",
                  desc: "Warm and cold transfers with context passed to the next agent.",
                },
                {
                  title: "Real-time monitoring",
                  desc: "Supervisors can listen in and coach agents during live calls.",
                },
                {
                  title: "Smart hold",
                  desc: "Custom hold music and estimated wait times keep callers informed.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0B57D0] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#101010]">{item.title}</p>
                    <p className="text-sm text-[#525252]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Active call interface mockup */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[360px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#E5E1DA]/60 overflow-hidden">
              {/* Agent header */}
              <div className="bg-[#0B57D0] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#28C840] border-2 border-[#0B57D0]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Sarah Chen</p>
                    <p className="text-[11px] text-white/70">On Call</p>
                  </div>
                </div>
              </div>

              {/* Caller info card */}
              <div className="px-4 pt-4 pb-3">
                <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E5E1DA]/60">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-[#EAF2FF] flex items-center justify-center">
                      <User className="w-4 h-4 text-[#0B57D0]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#101010]">James Lawson</p>
                      <p className="text-[11px] text-[#767676]">+1 (555) 234-8901</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#767676]">Previous calls: 3 &middot; Customer since Jan 2025</p>
                </div>
              </div>

              {/* Call timer */}
              <div className="text-center py-3">
                <span className="text-3xl font-bold text-[#101010] tabular-nums">03:47</span>
              </div>

              {/* Call controls */}
              <div className="flex justify-center gap-3 px-4 pb-4">
                {[
                  { icon: MicOff, label: "Mute", bg: "#F3EFE7" },
                  { icon: Pause, label: "Hold", bg: "#F3EFE7" },
                  { icon: PhoneForwarded, label: "Transfer", bg: "#F3EFE7" },
                  { icon: Circle, label: "Record", bg: "#FDE2EA" },
                  { icon: PhoneOff, label: "End", bg: "#DC2626" },
                ].map((ctrl) => {
                  const CtrlIcon = ctrl.icon;
                  const isEnd = ctrl.label === "End";
                  return (
                    <div key={ctrl.label} className="flex flex-col items-center gap-1">
                      <button
                        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                        style={{ backgroundColor: ctrl.bg }}
                      >
                        <CtrlIcon className={`w-4.5 h-4.5 ${isEnd ? "text-white" : "text-[#525252]"}`} style={{ width: 18, height: 18 }} />
                      </button>
                      <span className="text-[9px] text-[#767676]">{ctrl.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Quick notes */}
              <div className="px-4 pb-3">
                <div className="bg-[#F8F5F0] rounded-xl px-3.5 py-2.5 text-xs text-[#767676] border border-[#E5E1DA]/60">
                  Add quick notes...
                </div>
              </div>

              {/* AI suggestion panel */}
              <div className="px-4 pb-4">
                <div className="bg-[#ECE7FF] rounded-xl px-3.5 py-3 border border-[#D4C8FF]">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span className="text-[10px] font-semibold text-[#7C3AED]">AI Suggestion</span>
                  </div>
                  <p className="text-[11px] text-[#525252] leading-relaxed">
                    Caller has an open billing ticket (#4821). Consider referencing the pending refund of $24.99.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
