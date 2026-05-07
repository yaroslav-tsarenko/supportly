"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  MessageCircle,
  Sparkles,
  BookOpen,
  Zap,
  Clock,
  Users,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { features } from "@/lib/site-data";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Inbox,
  MessageCircle,
  Sparkles,
  BookOpen,
  Zap,
  Clock,
  Users,
  BarChart3,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function FeatureGrid() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="FEATURES"
          title="Everything your team needs"
          className="mb-16"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <motion.div
                key={f.title}
                variants={card}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-[#E5E1DA] p-6 hover:shadow-lg transition-shadow cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: f.color }}
                >
                  {Icon && <Icon className="w-5 h-5 text-[#101010]" />}
                </div>
                <h3 className="text-base font-semibold text-[#101010] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
