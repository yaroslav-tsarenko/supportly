"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 right-6 z-50 mx-auto max-w-xl"
        >
          <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6 shadow-lg">
            <p className="text-sm leading-relaxed text-[#525252]">
              We use cookies to improve your experience and analyze site usage.
              By continuing, you agree to our{" "}
              <Link
                href="/cookies"
                className="font-medium text-[#0B57D0] underline underline-offset-2 hover:text-[#063B91] transition-colors"
              >
                Cookie Policy
              </Link>
              .
            </p>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={accept}
                className="inline-flex items-center justify-center rounded-full bg-[#0B57D0] px-5 py-2 text-sm font-medium text-white hover:bg-[#063B91] transition-colors cursor-pointer"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={decline}
                className="inline-flex items-center justify-center rounded-full border border-[#E5E1DA] bg-white px-5 py-2 text-sm font-medium text-[#525252] hover:bg-[#F8F5F0] transition-colors cursor-pointer"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
