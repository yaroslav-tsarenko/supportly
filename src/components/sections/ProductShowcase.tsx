"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Phone,
  PhoneForwarded,
  ArrowRightLeft,
  Sparkles,
  ListPlus,
  TicketPlus,
} from "lucide-react";

const callQueue = [
  { initials: "EC", name: "Emily Carter", wait: "0:42", priority: "High", dept: "Billing", color: "#0B57D0", priorityColor: "#DB2777", priorityBg: "#FDE2EA" },
  { initials: "JL", name: "James Liu", wait: "1:15", priority: "Normal", dept: "Support", color: "#7C3AED", priorityColor: "#525252", priorityBg: "#F3EFE7" },
  { initials: "SK", name: "Sarah Kim", wait: "2:30", priority: "High", dept: "Sales", color: "#059669", priorityColor: "#DB2777", priorityBg: "#FDE2EA" },
  { initials: "AT", name: "Alex Torres", wait: "3:08", priority: "Normal", dept: "Support", color: "#D97706", priorityColor: "#525252", priorityBg: "#F3EFE7" },
  { initials: "PS", name: "Priya Sharma", wait: "4:22", priority: "Urgent", dept: "Billing", color: "#DB2777", priorityColor: "#FF5F57", priorityBg: "#FFE4C2" },
  { initials: "MR", name: "Marcus Rivera", wait: "5:01", priority: "Normal", dept: "Tech", color: "#0891B2", priorityColor: "#525252", priorityBg: "#F3EFE7" },
];

const callHistory = [
  { date: "Apr 28", duration: "6:12", resolution: "Resolved", resColor: "#059669", resBg: "#DDF4E4" },
  { date: "Apr 15", duration: "3:45", resolution: "Resolved", resColor: "#059669", resBg: "#DDF4E4" },
  { date: "Mar 30", duration: "8:22", resolution: "Escalated", resColor: "#D97706", resBg: "#FFF3B8" },
  { date: "Mar 12", duration: "2:10", resolution: "Resolved", resColor: "#059669", resBg: "#DDF4E4" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function ProductShowcase() {
  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="THE PLATFORM"
          title="Everything in one calm call workspace"
          className="mb-16"
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.07)] border border-[#E5E1DA]/60 overflow-hidden"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E5E1DA]/60 bg-[#FAF7F2]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-4 text-xs font-medium text-[#767676]">Supportly — Call Center</span>
          </div>

          <div className="flex min-h-[480px]">
            {/* Left sidebar: Call queue */}
            <div className="w-[260px] border-r border-[#E5E1DA]/60 flex-shrink-0 hidden md:block">
              <div className="px-4 py-3 border-b border-[#E5E1DA]/40 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#101010]">Call Queue</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FDE2EA] text-[#DB2777] font-medium">
                  6 waiting
                </span>
              </div>
              <div className="px-3 py-2 border-b border-[#E5E1DA]/40">
                <div className="bg-[#F3EFE7] rounded-lg px-3 py-1.5 text-xs text-[#767676]">
                  Search callers...
                </div>
              </div>
              {callQueue.map((c, i) => (
                <div
                  key={c.name}
                  className={`px-4 py-3 border-b border-[#E5E1DA]/30 cursor-default ${
                    i === 0 ? "bg-[#EAF2FF]" : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#101010] truncate">{c.name}</span>
                        <span className="text-[10px] text-[#767676] flex-shrink-0 ml-2 font-mono">{c.wait}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded-full font-medium"
                          style={{ backgroundColor: c.priorityBg, color: c.priorityColor }}
                        >
                          {c.priority}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#EAF2FF] text-[#0B57D0] font-medium">
                          {c.dept}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main: Active call panel */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Call header */}
              <div className="px-5 py-3 border-b border-[#E5E1DA]/60 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0B57D0] flex items-center justify-center text-[11px] font-bold text-white">
                    EC
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#101010]">Emily Carter</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">
                        Active Call
                      </span>
                      <span className="text-[11px] font-mono text-[#101010] font-semibold">12:34</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[10px] px-3 py-1 rounded-full border border-[#E5E1DA] text-[#525252]">
                    Agent: You
                  </div>
                </div>
              </div>

              {/* Call content */}
              <div className="flex-1 px-5 py-4 space-y-4 overflow-auto">
                {/* Call notes area */}
                <div className="space-y-3">
                  <p className="text-[10px] font-semibold text-[#767676] uppercase tracking-wider">Call Notes</p>
                  <div className="bg-[#F3EFE7] rounded-xl px-4 py-2.5">
                    <p className="text-xs text-[#101010] leading-relaxed">
                      Customer calling about order #4821 — placed 3 days ago, still shows as processing. Checking warehouse status now.
                    </p>
                    <span className="text-[9px] text-[#767676] mt-1 block">12:30 PM — You</span>
                  </div>
                  <div className="bg-[#F3EFE7] rounded-xl px-4 py-2.5">
                    <p className="text-xs text-[#101010] leading-relaxed">
                      Confirmed with warehouse: order shipped this morning. Provided tracking TRK-8294-XP. Customer satisfied.
                    </p>
                    <span className="text-[9px] text-[#767676] mt-1 block">12:34 PM — You</span>
                  </div>
                </div>

                {/* Internal note */}
                <div className="bg-[#FFF3B8]/60 border border-[#FFF3B8] rounded-xl px-4 py-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#D97706]">
                      <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-[10px] font-semibold text-[#D97706]">Internal Note from Marcus R.</span>
                  </div>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    This customer called twice last week about the same order. Flag for follow-up if delivery doesn&apos;t arrive by Friday.
                  </p>
                </div>

                {/* AI Call Summary */}
                <div className="bg-[#ECE7FF]/70 rounded-xl px-4 py-3 border border-[#D4C8FF]">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span className="text-[11px] font-semibold text-[#7C3AED]">AI Call Summary</span>
                  </div>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    Customer Emily Carter called regarding delayed order #4821 (placed May 4). Order has now shipped with tracking TRK-8294-XP. Estimated delivery: 2-3 business days. Customer was satisfied with resolution. Recommend automated shipping notification for future orders.
                  </p>
                  <div className="flex gap-2 mt-2.5">
                    <button className="text-[10px] px-3 py-1 bg-[#7C3AED] text-white rounded-full font-medium">
                      Save to record
                    </button>
                    <button className="text-[10px] px-3 py-1 bg-white text-[#525252] rounded-full border border-[#E5E1DA]">
                      Edit
                    </button>
                    <button className="text-[10px] px-3 py-1 bg-white text-[#525252] rounded-full border border-[#E5E1DA]">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>

              {/* Note input bar */}
              <div className="px-5 py-3 border-t border-[#E5E1DA]/60">
                <div className="bg-[#F8F5F0] rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <span className="text-xs text-[#767676]">Add call note...</span>
                  <button className="text-[10px] px-3 py-1 bg-[#0B57D0] text-white rounded-full font-medium">
                    Save note
                  </button>
                </div>
              </div>
            </div>

            {/* Right sidebar: Customer details + call history + quick actions */}
            <div className="w-[220px] border-l border-[#E5E1DA]/60 flex-shrink-0 hidden lg:block">
              <div className="p-4 border-b border-[#E5E1DA]/40">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0B57D0] mx-auto flex items-center justify-center text-base font-bold text-white">
                    EC
                  </div>
                  <p className="text-sm font-semibold text-[#101010] mt-2">Emily Carter</p>
                  <p className="text-[11px] text-[#767676]">+1 (555) 234-8901</p>
                </div>
              </div>
              <div className="p-4 border-b border-[#E5E1DA]/40">
                <p className="text-[10px] font-semibold text-[#767676] uppercase tracking-wider mb-2.5">Details</p>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#767676]">Email</span>
                    <span className="text-[#101010] font-medium">emily@acme.co</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767676]">Company</span>
                    <span className="text-[#101010] font-medium">Acme Inc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767676]">Plan</span>
                    <span className="text-[#101010] font-medium">Growth</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-[#E5E1DA]/40">
                <p className="text-[10px] font-semibold text-[#767676] uppercase tracking-wider mb-2.5">Call History</p>
                <div className="space-y-2">
                  {callHistory.map((h) => (
                    <div key={h.date} className="flex items-center justify-between text-[11px]">
                      <div>
                        <span className="text-[#101010]">{h.date}</span>
                        <span className="text-[#767676] ml-1.5">{h.duration}</span>
                      </div>
                      <span
                        className="text-[9px] px-1.5 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: h.resBg, color: h.resColor }}
                      >
                        {h.resolution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <p className="text-[10px] font-semibold text-[#767676] uppercase tracking-wider mb-2.5">Quick Actions</p>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-lg border border-[#E5E1DA] text-[#525252] hover:bg-[#FAF7F2] transition-colors">
                    <PhoneForwarded className="w-3.5 h-3.5" />
                    Transfer call
                  </button>
                  <button className="w-full flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-lg border border-[#E5E1DA] text-[#525252] hover:bg-[#FAF7F2] transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    Add to callback queue
                  </button>
                  <button className="w-full flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-lg border border-[#E5E1DA] text-[#525252] hover:bg-[#FAF7F2] transition-colors">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    Create ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
