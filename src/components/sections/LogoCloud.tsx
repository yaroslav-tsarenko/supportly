"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Bloom Commerce", icon: "B" },
  { name: "Stackwise", icon: "S" },
  { name: "Norde Studio", icon: "N" },
  { name: "Peakform", icon: "P" },
  { name: "Clearpath", icon: "C" },
  { name: "Waveline", icon: "W" },
];

export default function LogoCloud() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-[#767676] mb-10"
        >
          Trusted by growing teams that care about every conversation.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-2 text-[#767676]/70 select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F3EFE7] flex items-center justify-center text-sm font-bold text-[#767676]">
                {logo.icon}
              </div>
              <span className="text-base font-semibold tracking-tight">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
