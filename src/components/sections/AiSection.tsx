"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  SmilePlus,
  GitBranch,
  Tag,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const aiFeatures = [
  { icon: FileText, label: "AI call transcription", description: "Every call automatically transcribed in real time" },
  { icon: Sparkles, label: "Automatic call summaries", description: "Get concise summaries the moment a call ends" },
  { icon: SmilePlus, label: "Sentiment analysis", description: "Detect caller mood and satisfaction instantly" },
  { icon: GitBranch, label: "Smart call routing suggestions", description: "AI recommends the best agent for each call" },
  { icon: Tag, label: "Auto-tagging by topic", description: "Calls categorized automatically without manual effort" },
  { icon: CheckCircle, label: "Follow-up action detection", description: "Surface next steps and commitments from every call" },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function AiSection() {
  return (
    <section className="bg-[#EAF2FF] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="AI-POWERED"
          title="Let AI handle the post-call work"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Feature list */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-5">
              {aiFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 text-[#0B57D0]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#101010] mb-0.5">
                        {f.label}
                      </h4>
                      <p className="text-sm text-[#525252]">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Call summary mockup */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#E5E1DA]/60 overflow-hidden">
              {/* Mockup header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#E5E1DA]/60 bg-[#FAF7F2]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-[11px] font-medium text-[#767676]">Call Summary</span>
              </div>

              <div className="p-5 space-y-4">
                {/* Call details */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] text-[#767676] uppercase tracking-wide">Caller</p>
                    <p className="text-xs font-medium text-[#101010]">James Lawson</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#767676] uppercase tracking-wide">Agent</p>
                    <p className="text-xs font-medium text-[#101010]">Sarah Chen</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#767676] uppercase tracking-wide">Duration</p>
                    <p className="text-xs font-medium text-[#101010]">6m 42s</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#767676] uppercase tracking-wide">Date</p>
                    <p className="text-xs font-medium text-[#101010]">May 7, 2026</p>
                  </div>
                </div>

                {/* AI summary */}
                <div className="bg-[#ECE7FF] rounded-xl px-4 py-3.5 border border-[#D4C8FF] relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span className="text-[11px] font-semibold text-[#7C3AED]">AI-Generated Summary</span>
                  </div>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    Customer called regarding a billing discrepancy on their last invoice. Agent confirmed an overcharge of $24.99 due to a duplicate subscription renewal. Refund was processed immediately. Customer was satisfied with the resolution and asked about upgrading their plan.
                  </p>
                </div>

                {/* Sentiment */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#767676] uppercase tracking-wide">Detected Sentiment:</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#DDF4E4] text-[#059669] font-semibold">Positive</span>
                </div>

                {/* Auto-tags */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#767676] uppercase tracking-wide">Auto-tags:</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FFE4C2] text-[#D97706] font-medium">Billing</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FDE2EA] text-[#DB2777] font-medium">Refund Request</span>
                </div>

                {/* Suggested follow-ups */}
                <div>
                  <p className="text-[10px] text-[#767676] uppercase tracking-wide mb-2">Suggested Follow-up Actions</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0B57D0]" />
                      <span className="text-xs text-[#525252]">Send refund confirmation email</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0B57D0]" />
                      <span className="text-xs text-[#525252]">Share plan upgrade options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0B57D0]" />
                      <span className="text-xs text-[#525252]">Flag duplicate billing for engineering review</span>
                    </div>
                  </div>
                </div>

                {/* Confidence */}
                <div className="flex items-center gap-2 pt-1 border-t border-[#E5E1DA]/60">
                  <span className="text-[9px] text-[#767676]">Confidence Score:</span>
                  <span className="text-[9px] font-semibold text-[#059669]">96%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
