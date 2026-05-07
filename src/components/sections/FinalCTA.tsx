"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B57D0] py-20 md:py-28">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/3 h-32 w-32 -translate-y-1/2 rounded-full bg-white/[0.03]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Ready to transform your call support?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-white/80"
        >
          Start your free trial and see how smart call routing, AI summaries, and real-time analytics can level up your phone support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            href="/signup"
            className="bg-white text-[#0B57D0] hover:bg-white/90 shadow-lg border-0"
            size="lg"
          >
            Start free trial
          </Button>
          <Button
            href="/contact"
            className="border-white/40 text-white hover:bg-white/10 bg-transparent"
            size="lg"
          >
            Book a demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
