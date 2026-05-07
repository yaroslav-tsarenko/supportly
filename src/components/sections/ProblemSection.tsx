"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  Clock,
  MessageSquareOff,
  BookX,
  EyeOff,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const problems = [
  {
    icon: Inbox,
    title: "Messy inboxes",
    description:
      "Conversations scattered across email, chat, and social — nothing in one place.",
    color: "#FFE4C2",
  },
  {
    icon: Clock,
    title: "Slow response times",
    description:
      "Customers waiting too long because your team can't find the right information fast enough.",
    color: "#FDE2EA",
  },
  {
    icon: MessageSquareOff,
    title: "Lost context",
    description:
      "Teams lacking conversation history, asking customers to repeat themselves.",
    color: "#ECE7FF",
  },
  {
    icon: BookX,
    title: "Scattered knowledge",
    description:
      "No single source of truth — answers buried in docs, Slack threads, and people's heads.",
    color: "#FFF3B8",
  },
  {
    icon: EyeOff,
    title: "No visibility",
    description:
      "Managers can't see what's happening, who's overloaded, or where things are falling through.",
    color: "#DDF4E4",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProblemSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="THE PROBLEM"
          title="Support shouldn't feel this hard"
          className="mb-16"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={cardVariant}
                className="rounded-2xl border border-[#E5E1DA] p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: p.color }}
                >
                  <Icon className="w-5 h-5 text-[#101010]" />
                </div>
                <h3 className="text-base font-semibold text-[#101010] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
