"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const conversations = [
  { initials: "EC", name: "Emily Carter", preview: "Hi, I need help with my order...", time: "2m", unread: true, color: "#0B57D0" },
  { initials: "JL", name: "James Liu", preview: "The invoice doesn't match...", time: "8m", unread: true, color: "#7C3AED" },
  { initials: "SK", name: "Sarah Kim", preview: "Thanks for the quick response!", time: "15m", unread: false, color: "#059669" },
  { initials: "AT", name: "Alex Torres", preview: "Can I upgrade my plan?", time: "1h", unread: false, color: "#D97706" },
  { initials: "PS", name: "Priya Sharma", preview: "Found a bug in the dashboard", time: "2h", unread: false, color: "#DB2777" },
  { initials: "MR", name: "Marcus Rivera", preview: "Need API documentation help", time: "3h", unread: false, color: "#0891B2" },
];

const messages = [
  {
    sender: "customer",
    initials: "EC",
    name: "Emily Carter",
    text: "Hi, I need help with my order #4821. It still shows as processing but I placed it 3 days ago. Can you check on the status?",
    time: "2:34 PM",
  },
  {
    sender: "agent",
    initials: "YT",
    name: "You",
    text: "Hi Emily! Let me look into order #4821 for you right away. I can see it in our system.",
    time: "2:35 PM",
  },
  {
    sender: "agent",
    initials: "YT",
    name: "You",
    text: "Good news — it looks like your order shipped this morning! The tracking number is TRK-8294-XP. You should receive an email confirmation shortly.",
    time: "2:36 PM",
  },
  {
    sender: "note",
    initials: "YT",
    name: "You",
    text: "Internal: Customer has been waiting 3 days. Flagged for follow-up if delivery is delayed beyond estimate.",
    time: "2:36 PM",
  },
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
          label="THE PRODUCT"
          title="Everything in one calm workspace"
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
            <span className="ml-4 text-xs font-medium text-[#767676]">Supportly — Inbox</span>
          </div>

          <div className="flex min-h-[480px]">
            {/* Left sidebar: Conversation list */}
            <div className="w-[260px] border-r border-[#E5E1DA]/60 flex-shrink-0 hidden md:block">
              <div className="px-4 py-3 border-b border-[#E5E1DA]/40 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#101010]">Inbox</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EAF2FF] text-[#0B57D0] font-medium">
                  12 open
                </span>
              </div>
              <div className="px-3 py-2 border-b border-[#E5E1DA]/40">
                <div className="bg-[#F3EFE7] rounded-lg px-3 py-1.5 text-xs text-[#767676]">
                  Search conversations...
                </div>
              </div>
              {conversations.map((c, i) => (
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
                        <span className={`text-sm truncate ${c.unread ? "font-semibold text-[#101010]" : "text-[#525252]"}`}>
                          {c.name}
                        </span>
                        <span className="text-[10px] text-[#767676] flex-shrink-0 ml-2">{c.time}</span>
                      </div>
                      <p className="text-xs text-[#767676] truncate mt-0.5">{c.preview}</p>
                    </div>
                    {c.unread && <div className="w-2 h-2 rounded-full bg-[#0B57D0] flex-shrink-0" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Main: Active conversation */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Conversation header */}
              <div className="px-5 py-3 border-b border-[#E5E1DA]/60 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0B57D0] flex items-center justify-center text-[11px] font-bold text-white">
                    EC
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#101010]">Emily Carter</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">
                        Open
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFF3B8] text-[#D97706] font-medium">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[10px] px-3 py-1 rounded-full border border-[#E5E1DA] text-[#525252]">
                    Assigned to: You
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 px-5 py-4 space-y-4 overflow-auto">
                {messages.map((m, i) => {
                  if (m.sender === "note") {
                    return (
                      <div key={i} className="bg-[#FFF3B8]/60 border border-[#FFF3B8] rounded-xl px-4 py-2.5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#D97706]">
                            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <span className="text-[10px] font-semibold text-[#D97706]">Internal Note</span>
                        </div>
                        <p className="text-xs text-[#525252] leading-relaxed">{m.text}</p>
                      </div>
                    );
                  }

                  const isCustomer = m.sender === "customer";
                  return (
                    <div key={i} className={`flex gap-2.5 ${isCustomer ? "" : "justify-end"}`}>
                      {isCustomer && (
                        <div className="w-7 h-7 rounded-full bg-[#0B57D0] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0 mt-0.5">
                          {m.initials}
                        </div>
                      )}
                      <div
                        className={`rounded-xl px-4 py-2.5 max-w-[75%] ${
                          isCustomer
                            ? "bg-[#F3EFE7] rounded-tl-sm"
                            : "bg-[#EAF2FF] rounded-tr-sm"
                        }`}
                      >
                        <p className="text-xs text-[#101010] leading-relaxed">{m.text}</p>
                        <span className={`text-[9px] text-[#767676] mt-1 block ${isCustomer ? "" : "text-right"}`}>
                          {m.time}
                        </span>
                      </div>
                      {!isCustomer && (
                        <div className="w-7 h-7 rounded-full bg-[#059669] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0 mt-0.5">
                          {m.initials}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* AI suggestion */}
                <div className="bg-[#ECE7FF]/70 rounded-xl px-4 py-3 border border-[#D4C8FF]">
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#7C3AED]">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                    <span className="text-[11px] font-semibold text-[#7C3AED]">AI Suggested Reply</span>
                  </div>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    Great question, Emily! Your order #4821 has now been shipped and is on its way. Your tracking number is TRK-8294-XP, and the estimated delivery is within 2-3 business days. Is there anything else I can help you with?
                  </p>
                  <div className="flex gap-2 mt-2.5">
                    <button className="text-[10px] px-3 py-1 bg-[#7C3AED] text-white rounded-full font-medium">
                      Use reply
                    </button>
                    <button className="text-[10px] px-3 py-1 bg-white text-[#525252] rounded-full border border-[#E5E1DA]">
                      Edit first
                    </button>
                    <button className="text-[10px] px-3 py-1 bg-white text-[#525252] rounded-full border border-[#E5E1DA]">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-5 py-3 border-t border-[#E5E1DA]/60">
                <div className="bg-[#F8F5F0] rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <span className="text-xs text-[#767676]">Type your reply...</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#E5E1DA] flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#767676]">
                        <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <button className="text-[10px] px-3 py-1 bg-[#0B57D0] text-white rounded-full font-medium">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar: Customer details */}
            <div className="w-[220px] border-l border-[#E5E1DA]/60 flex-shrink-0 hidden lg:block">
              <div className="p-4 border-b border-[#E5E1DA]/40">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0B57D0] mx-auto flex items-center justify-center text-base font-bold text-white">
                    EC
                  </div>
                  <p className="text-sm font-semibold text-[#101010] mt-2">Emily Carter</p>
                  <p className="text-[11px] text-[#767676]">emily@acmeinc.co</p>
                </div>
              </div>
              <div className="p-4 border-b border-[#E5E1DA]/40">
                <p className="text-[10px] font-semibold text-[#767676] uppercase tracking-wider mb-2.5">Details</p>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#767676]">Company</span>
                    <span className="text-[#101010] font-medium">Acme Inc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767676]">Plan</span>
                    <span className="text-[#101010] font-medium">Growth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767676]">Created</span>
                    <span className="text-[#101010] font-medium">Mar 12, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767676]">Conversations</span>
                    <span className="text-[#101010] font-medium">12</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[10px] font-semibold text-[#767676] uppercase tracking-wider mb-2.5">Recent Activity</p>
                <div className="space-y-2.5">
                  {[
                    { action: "Opened ticket", time: "2m ago" },
                    { action: "Viewed pricing page", time: "1h ago" },
                    { action: "Updated billing info", time: "2d ago" },
                    { action: "Contacted support", time: "5d ago" },
                  ].map((a) => (
                    <div key={a.action} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5E1DA] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[11px] text-[#101010]">{a.action}</p>
                        <p className="text-[9px] text-[#767676]">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
