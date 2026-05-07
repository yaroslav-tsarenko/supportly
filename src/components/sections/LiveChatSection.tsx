"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } },
};

const chatMessages = [
  {
    sender: "agent",
    text: "Hi there! Welcome to Supportly. How can I help you today?",
    time: "4:01 PM",
  },
  {
    sender: "customer",
    text: "I'm trying to connect my Shopify store but I keep getting a timeout error.",
    time: "4:02 PM",
  },
  {
    sender: "agent",
    text: "I can help with that! The timeout usually happens when the store URL has a trailing slash. Could you try removing it and reconnecting?",
    time: "4:02 PM",
  },
  {
    sender: "customer",
    text: "That worked! Thank you so much, that was super fast.",
    time: "4:03 PM",
  },
  {
    sender: "agent",
    text: "Glad to hear it! Is there anything else I can help with?",
    time: "4:03 PM",
  },
];

const quickReplies = ["Yes, one more question", "No, that's all!", "Rate this conversation"];

export default function LiveChatSection() {
  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="LIVE CHAT"
          title="Real-time conversations, beautifully simple"
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
              Meet your customers where they are
            </h3>
            <p className="text-[#525252] leading-relaxed mb-6">
              Add a beautiful, customizable chat widget to your site in minutes.
              Conversations flow into your shared inbox alongside email and
              social messages, so your team never misses a beat.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Instant connection",
                  desc: "Customers get real-time help without leaving your site.",
                },
                {
                  title: "Rich messages",
                  desc: "Send images, links, and formatted text in conversations.",
                },
                {
                  title: "Offline mode",
                  desc: "Collect messages when your team is away and follow up later.",
                },
                {
                  title: "Customizable widget",
                  desc: "Match your brand colors, position, and greeting message.",
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

          {/* Right: Chat widget mockup */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[360px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#E5E1DA]/60 overflow-hidden">
              {/* Chat header */}
              <div className="bg-[#0B57D0] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold text-white">
                      S
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#28C840] border-2 border-[#0B57D0]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Supportly</p>
                    <p className="text-[11px] text-white/70">Typically replies in minutes</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 max-h-[360px] overflow-auto">
                {chatMessages.map((msg, i) => {
                  const isAgent = msg.sender === "agent";
                  return (
                    <div
                      key={i}
                      className={`flex ${isAgent ? "" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 ${
                          isAgent
                            ? "bg-[#F3EFE7] rounded-bl-sm"
                            : "bg-[#0B57D0] text-white rounded-br-sm"
                        }`}
                      >
                        <p className={`text-xs leading-relaxed ${isAgent ? "text-[#101010]" : "text-white"}`}>
                          {msg.text}
                        </p>
                        <span
                          className={`text-[9px] mt-1 block ${
                            isAgent ? "text-[#767676]" : "text-white/60 text-right"
                          }`}
                        >
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Typing indicator */}
                <div className="flex">
                  <div className="bg-[#F3EFE7] rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#767676] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#767676] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#767676] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick replies */}
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-[#0B57D0] text-[#0B57D0] font-medium hover:bg-[#EAF2FF] transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-[#E5E1DA]/60 flex items-center gap-2">
                <div className="flex-1 bg-[#F8F5F0] rounded-xl px-3.5 py-2.5 text-xs text-[#767676]">
                  Type a message...
                </div>
                <button className="w-9 h-9 rounded-full bg-[#0B57D0] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
