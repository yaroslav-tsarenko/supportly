"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Search,
  Palette,
  Tag,
  GitBranch,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const aiFeatures = [
  { icon: Sparkles, label: "AI draft replies", description: "Generate contextual responses in one click" },
  { icon: FileText, label: "Conversation summaries", description: "Get instant overviews of long threads" },
  { icon: Search, label: "Knowledge base search", description: "Surface relevant articles automatically" },
  { icon: Palette, label: "Tone adjustment", description: "Shift between formal, friendly, and concise" },
  { icon: Tag, label: "Auto-tagging", description: "Categorize conversations without manual effort" },
  { icon: GitBranch, label: "Smart routing", description: "Route to the right team member instantly" },
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
          title="Let AI handle the repetitive work"
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

          {/* Right: AI mockup */}
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
              </div>

              <div className="p-5 space-y-3">
                {/* Customer message */}
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#D97706] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                    JL
                  </div>
                  <div className="bg-[#F3EFE7] rounded-xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]">
                    <p className="text-xs text-[#101010] leading-relaxed">
                      I&apos;m having trouble connecting the Stripe integration. It keeps showing an authentication error even after I regenerated my API keys.
                    </p>
                    <span className="text-[9px] text-[#767676] mt-1 block">3:12 PM</span>
                  </div>
                </div>

                {/* Agent reply */}
                <div className="flex gap-2.5 justify-end">
                  <div className="bg-[#EAF2FF] rounded-xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%]">
                    <p className="text-xs text-[#101010] leading-relaxed">
                      Let me look into the Stripe integration issue for you, James.
                    </p>
                    <span className="text-[9px] text-[#767676] mt-1 block text-right">3:13 PM</span>
                  </div>
                </div>

                {/* AI suggestion overlay */}
                <div className="bg-[#ECE7FF] rounded-xl px-4 py-3.5 border border-[#D4C8FF] relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span className="text-[11px] font-semibold text-[#7C3AED]">AI Suggested Reply</span>
                    <span className="text-[9px] text-[#767676] ml-auto">Based on 3 similar tickets</span>
                  </div>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    Hi James! This authentication error usually happens when the API keys are copied with extra whitespace. Could you try the following: 1) Go to your Stripe dashboard, 2) Copy the Secret Key again carefully, 3) Paste it in Settings &gt; Integrations &gt; Stripe. Make sure there are no spaces before or after the key.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <button className="text-[10px] px-3 py-1.5 bg-[#7C3AED] text-white rounded-full font-medium">
                      Use reply
                    </button>
                    <button className="text-[10px] px-3 py-1.5 bg-white text-[#525252] rounded-full border border-[#E5E1DA]">
                      Edit first
                    </button>
                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="text-[9px] text-[#767676]">Confidence:</span>
                      <span className="text-[9px] font-semibold text-[#059669]">94%</span>
                    </div>
                  </div>
                </div>

                {/* Auto-tags */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[9px] text-[#767676]">Auto-tagged:</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FFE4C2] text-[#D97706] font-medium">Integration</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#FDE2EA] text-[#DB2777] font-medium">Stripe</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#ECE7FF] text-[#7C3AED] font-medium">Auth Error</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
