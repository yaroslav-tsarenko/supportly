"use client";

import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  CreditCard,
  Puzzle,
  UserCog,
  Code,
  Wrench,
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  { icon: BookOpen, label: "Getting Started", count: 12, color: "#EAF2FF" },
  { icon: CreditCard, label: "Billing", count: 8, color: "#DDF4E4" },
  { icon: Puzzle, label: "Integrations", count: 15, color: "#ECE7FF" },
  { icon: UserCog, label: "Account", count: 6, color: "#FFE4C2" },
  { icon: Code, label: "API", count: 10, color: "#FFF3B8" },
  { icon: Wrench, label: "Troubleshooting", count: 9, color: "#FDE2EA" },
];

const articles = [
  { title: "How to set up your first inbox", category: "Getting Started", helpful: 94 },
  { title: "Connecting Stripe for payment data", category: "Integrations", helpful: 91 },
  { title: "Managing team member permissions", category: "Account", helpful: 88 },
  { title: "Customizing your live chat widget", category: "Getting Started", helpful: 96 },
  { title: "Understanding your monthly invoice", category: "Billing", helpful: 85 },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function KnowledgeBaseSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="KNOWLEDGE BASE"
          title="Help customers help themselves"
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
            <span className="ml-4 text-xs text-[#767676]">help.supportly.io</span>
          </div>

          <div className="p-6 md:p-8">
            {/* Header with search */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#101010] mb-3">
                How can we help you?
              </h3>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767676]" />
                <div className="bg-white rounded-xl pl-10 pr-4 py-3 text-sm text-[#767676] border border-[#E5E1DA] shadow-sm">
                  Search for articles, guides, and more...
                </div>
              </div>
            </div>

            {/* Categories grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.label}
                    className="bg-white rounded-xl p-4 border border-[#E5E1DA]/60 hover:shadow-md transition-shadow cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-2.5"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Icon className="w-4 h-4 text-[#101010]" />
                    </div>
                    <p className="text-sm font-semibold text-[#101010]">{cat.label}</p>
                    <p className="text-[11px] text-[#767676] mt-0.5">{cat.count} articles</p>
                  </div>
                );
              })}
            </div>

            {/* Popular articles */}
            <div>
              <h4 className="text-sm font-semibold text-[#101010] mb-3">
                Popular articles
              </h4>
              <div className="bg-white rounded-xl border border-[#E5E1DA]/60 divide-y divide-[#E5E1DA]/40">
                {articles.map((article) => (
                  <div
                    key={article.title}
                    className="flex items-center justify-between px-4 py-3 hover:bg-[#FAF7F2] transition-colors cursor-default"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#101010] font-medium truncate">
                        {article.title}
                      </p>
                      <p className="text-[11px] text-[#767676] mt-0.5">
                        {article.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <ThumbsUp className="w-3 h-3 text-[#059669]" />
                        <span className="text-[10px] text-[#059669] font-medium">
                          {article.helpful}%
                        </span>
                        <ThumbsDown className="w-3 h-3 text-[#767676] ml-1" />
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[#767676]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
