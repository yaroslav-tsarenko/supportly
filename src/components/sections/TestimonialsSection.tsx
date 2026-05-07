"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/site-data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

const avatarColors = ["#EAF2FF", "#DDF4E4", "#ECE7FF"];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label="TESTIMONIALS" title="Loved by support teams" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col rounded-xl border border-[#E5E1DA] bg-white p-6 shadow-sm"
            >
              <p className="mb-6 flex-1 text-lg italic leading-relaxed text-[#525252]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-[#0B57D0]"
                  style={{ backgroundColor: avatarColors[i % avatarColors.length] }}
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#101010]">
                    {t.name}
                  </p>
                  <p className="text-sm text-[#767676]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
