"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

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

function InboxMockup() {
  const conversations = [
    { name: "Emily Carter", preview: "Hi, I need help with my order...", time: "2m", unread: true },
    { name: "James Liu", preview: "The invoice doesn't match the...", time: "8m", unread: true },
    { name: "Sarah Kim", preview: "Thanks for the quick response!", time: "15m", unread: false },
    { name: "Alex Torres", preview: "Can I upgrade my plan?", time: "1h", unread: false },
    { name: "Priya Sharma", preview: "I found a bug in the dashboard", time: "2h", unread: false },
  ];

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
          <span className="text-xs font-medium text-[#767676]">Supportly Inbox</span>
          <div className="w-16" />
        </div>

        <div className="flex min-h-[340px]">
          {/* Conversation list */}
          <div className="w-[220px] border-r border-[#E5E1DA]/60 flex-shrink-0">
            <div className="px-3 py-2 border-b border-[#E5E1DA]/40">
              <div className="bg-[#F3EFE7] rounded-lg px-3 py-1.5 text-xs text-[#767676]">Search...</div>
            </div>
            {conversations.map((c, i) => (
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
                    style={{ backgroundColor: ["#0B57D0", "#7C3AED", "#059669", "#D97706", "#DB2777"][i] }}
                  >
                    {c.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs truncate ${c.unread ? "font-semibold text-[#101010]" : "text-[#525252]"}`}>
                        {c.name}
                      </span>
                      <span className="text-[10px] text-[#767676] flex-shrink-0 ml-1">{c.time}</span>
                    </div>
                    <p className="text-[10px] text-[#767676] truncate mt-0.5">{c.preview}</p>
                  </div>
                  {c.unread && <div className="w-1.5 h-1.5 rounded-full bg-[#0B57D0] flex-shrink-0" />}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active conversation */}
          <div className="flex-1 flex flex-col">
            <div className="px-4 py-2.5 border-b border-[#E5E1DA]/60 flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold text-[#101010]">Emily Carter</span>
                <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-medium">
                  Open
                </span>
              </div>
              <span className="text-[10px] text-[#767676]">Assigned to you</span>
            </div>

            <div className="flex-1 px-4 py-3 space-y-3 overflow-auto">
              {/* Customer message */}
              <motion.div animate={float(0, 2)} className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0B57D0] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0 mt-0.5">
                  EC
                </div>
                <div className="bg-[#F3EFE7] rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-xs text-[#101010]">
                    Hi, I need help with my order #4821. It still shows as processing but I placed it 3 days ago.
                  </p>
                  <span className="text-[9px] text-[#767676] mt-1 block">2:34 PM</span>
                </div>
              </motion.div>

              {/* Agent message */}
              <div className="flex gap-2 justify-end">
                <div className="bg-[#EAF2FF] rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                  <p className="text-xs text-[#101010]">
                    Hi Emily! Let me look into order #4821 for you right away.
                  </p>
                  <span className="text-[9px] text-[#767676] mt-1 block text-right">2:35 PM</span>
                </div>
              </div>

              {/* AI suggestion */}
              <motion.div animate={float(0.5, 3)} className="mt-2">
                <div className="bg-[#ECE7FF] rounded-xl px-3 py-2.5 border border-[#D4C8FF]">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#7C3AED]">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                    <span className="text-[10px] font-semibold text-[#7C3AED]">AI Suggested Reply</span>
                  </div>
                  <p className="text-[11px] text-[#525252] leading-relaxed">
                    I checked your order #4821 and it looks like it&apos;s been shipped as of this morning. You should receive a tracking email shortly. The estimated delivery is within 2-3 business days.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-[9px] px-2.5 py-1 bg-[#7C3AED] text-white rounded-full font-medium">
                      Use reply
                    </button>
                    <button className="text-[9px] px-2.5 py-1 bg-white text-[#525252] rounded-full border border-[#E5E1DA]">
                      Edit
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="px-4 py-2.5 border-t border-[#E5E1DA]/60">
              <div className="bg-[#F8F5F0] rounded-xl px-3 py-2 text-xs text-[#767676]">
                Type your reply...
              </div>
            </div>
          </div>

          {/* Customer sidebar */}
          <motion.div animate={float(1, 4)} className="w-[170px] border-l border-[#E5E1DA]/60 p-3 flex-shrink-0 hidden xl:block">
            <div className="text-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#0B57D0] mx-auto flex items-center justify-center text-sm font-bold text-white">
                EC
              </div>
              <p className="text-xs font-semibold text-[#101010] mt-1.5">Emily Carter</p>
              <p className="text-[10px] text-[#767676]">emily@company.co</p>
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
                <span className="text-[#767676]">Convos</span>
                <span className="text-[#101010] font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#767676]">Joined</span>
                <span className="text-[#101010] font-medium">Mar 2025</span>
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
              Customer support that feels{" "}
              <em className="not-italic font-[800] italic text-[#0B57D0]">
                calm, fast, and&nbsp;human.
              </em>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg md:text-xl text-[#525252] leading-relaxed max-w-lg"
            >
              One platform for your inbox, live chat, AI replies, and knowledge
              base. Less chaos, more clarity.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="/contact">
                Start free trial
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
          <InboxMockup />
        </div>
      </div>
    </section>
  );
}
