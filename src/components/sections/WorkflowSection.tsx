"use client";

import { motion } from "framer-motion";
import { Phone, PhoneForwarded, Sparkles, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: 1,
    title: "Connect your phone numbers",
    description:
      "Link your business phone lines and toll-free numbers in just a few clicks.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Route calls to the right team",
    description:
      "Smart call routing directs callers to the best available agent by skill, language, or department.",
    icon: PhoneForwarded,
  },
  {
    number: 3,
    title: "AI helps agents resolve faster",
    description:
      "Real-time AI summaries, suggested responses, and automatic note-taking keep agents focused.",
    icon: Sparkles,
  },
  {
    number: 4,
    title: "Measure and improve call quality",
    description:
      "Track resolution rates, call durations, and sentiment trends to continuously improve.",
    icon: TrendingUp,
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="HOW IT WORKS"
          title="Up and running in minutes"
        />
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Dotted connector line on desktop */}
          <div className="absolute top-14 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] hidden lg:block">
            <div className="h-0.5 w-full border-t-2 border-dashed border-[#E5E1DA]" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number badge */}
              <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF2FF] text-sm font-bold text-[#0B57D0]">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F5F0]">
                <step.icon className="h-6 w-6 text-[#0B57D0]" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-[#101010]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#525252]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
