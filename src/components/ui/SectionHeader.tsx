"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`text-center ${className}`}
    >
      {label && (
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
          {label}
        </p>
      )}
      <h2 className="text-4xl font-extrabold leading-tight -tracking-[0.02em] text-[#101010] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#525252]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
