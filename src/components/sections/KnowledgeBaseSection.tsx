"use client";

import { motion } from "framer-motion";
import {
  Search,
  Play,
  Phone,
  Headphones,
  AlertTriangle,
  PhoneCall,
  GraduationCap,
  Flag,
  SmilePlus,
  Frown,
  Meh,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  { icon: Phone, label: "Sales Calls", count: 48, color: "#EAF2FF" },
  { icon: Headphones, label: "Support Calls", count: 124, color: "#DDF4E4" },
  { icon: AlertTriangle, label: "Escalations", count: 17, color: "#FDE2EA" },
  { icon: PhoneCall, label: "Callbacks", count: 31, color: "#FFE4C2" },
  { icon: GraduationCap, label: "Training", count: 22, color: "#ECE7FF" },
];

const sentimentIcons: Record<string, { icon: typeof SmilePlus; color: string }> = {
  positive: { icon: SmilePlus, color: "#059669" },
  neutral: { icon: Meh, color: "#767676" },
  negative: { icon: Frown, color: "#DC2626" },
};

const callRecordings = [
  { caller: "James Lawson", agent: "Sarah Chen", date: "May 7, 2026", duration: "6:42", tags: ["Billing", "Refund"], sentiment: "positive" },
  { caller: "Maria Gonzalez", agent: "Marcus Rivera", date: "May 7, 2026", duration: "3:18", tags: ["Onboarding"], sentiment: "positive" },
  { caller: "Robert Kim", agent: "Emma Lindqvist", date: "May 6, 2026", duration: "11:05", tags: ["Escalation", "Technical"], sentiment: "negative" },
  { caller: "Aisha Patel", agent: "Sarah Chen", date: "May 6, 2026", duration: "4:55", tags: ["Sales", "Upgrade"], sentiment: "neutral" },
  { caller: "Tom Bakker", agent: "James Okafor", date: "May 6, 2026", duration: "7:30", tags: ["Support", "Bug Report"], sentiment: "neutral" },
];

const filterTabs = ["All Calls", "Flagged", "Needs Review"];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function KnowledgeBaseSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="CALL LIBRARY"
          title="Every call, searchable and organized"
          className="mb-16"
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-[#FAF7F2] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.05)] border border-[#E5E1DA]/60 overflow-hidden"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#E5E1DA]/60 bg-white">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-4 text-xs text-[#767676]">calls.supportly.io</span>
          </div>

          <div className="p-6 md:p-8">
            {/* Search bar */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767676]" />
                <div className="bg-white rounded-xl pl-10 pr-4 py-3 text-sm text-[#767676] border border-[#E5E1DA] shadow-sm">
                  Search calls...
                </div>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 mb-6">
              {filterTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`text-xs px-4 py-2 rounded-full font-medium transition-colors ${
                    i === 0
                      ? "bg-[#0B57D0] text-white"
                      : "bg-white text-[#525252] border border-[#E5E1DA] hover:bg-[#F3EFE7]"
                  }`}
                >
                  {tab}
                  {tab === "Flagged" && (
                    <Flag className="w-3 h-3 inline ml-1.5 -mt-0.5" />
                  )}
                </button>
              ))}
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.label}
                    className="bg-white rounded-xl p-3 border border-[#E5E1DA]/60 hover:shadow-md transition-shadow cursor-default"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Icon className="w-4 h-4 text-[#101010]" />
                    </div>
                    <p className="text-xs font-semibold text-[#101010]">{cat.label}</p>
                    <p className="text-[10px] text-[#767676] mt-0.5">{cat.count} calls</p>
                  </div>
                );
              })}
            </div>

            {/* Call recording cards */}
            <div className="bg-white rounded-xl border border-[#E5E1DA]/60 divide-y divide-[#E5E1DA]/40">
              {callRecordings.map((recording) => {
                const SentimentIcon = sentimentIcons[recording.sentiment].icon;
                const sentimentColor = sentimentIcons[recording.sentiment].color;
                return (
                  <div
                    key={`${recording.caller}-${recording.date}`}
                    className="flex items-center justify-between px-4 py-3.5 hover:bg-[#FAF7F2] transition-colors cursor-default"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm text-[#101010] font-medium truncate">
                          {recording.caller}
                        </p>
                        <SentimentIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: sentimentColor }} />
                      </div>
                      <p className="text-[11px] text-[#767676]">
                        Agent: {recording.agent} &middot; {recording.date} &middot; {recording.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                      <div className="flex gap-1.5">
                        {recording.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] px-2 py-0.5 rounded-full bg-[#EAF2FF] text-[#0B57D0] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-8 h-8 rounded-full bg-[#0B57D0] flex items-center justify-center flex-shrink-0 hover:bg-[#0945A8] transition-colors">
                        <Play className="w-3.5 h-3.5 text-white ml-0.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
