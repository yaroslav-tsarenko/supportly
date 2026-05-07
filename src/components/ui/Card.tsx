"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-3xl border border-[#E5E1DA] bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
