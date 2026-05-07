"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Button from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success";

const teamSizeOptions = ["1–5", "6–20", "21–50", "51–200", "200+"];

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most teams are up and running within a day. Our onboarding specialists will guide you every step of the way.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — every plan includes a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings.",
  },
];

export default function ContactContent() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight text-[#101010] md:text-5xl"
          >
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-[#525252]"
          >
            Have a question, need a demo, or just want to say hello? We&rsquo;d
            love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_380px]">
          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E5E1DA] bg-[#F8F5F0] py-20 text-center">
                <CheckCircle className="h-14 w-14 text-green-600" />
                <h2 className="mt-6 text-2xl font-semibold text-[#101010]">
                  Thanks! We&rsquo;ll be in touch within 24 hours.
                </h2>
                <p className="mt-2 text-[#525252]">
                  Keep an eye on your inbox for our reply.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-[#101010]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-[#E5E1DA] bg-white px-4 py-2.5 text-sm text-[#101010] placeholder:text-[#767676] focus:border-[#0B57D0] focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/30"
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[#101010]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-[#E5E1DA] bg-white px-4 py-2.5 text-sm text-[#101010] placeholder:text-[#767676] focus:border-[#0B57D0] focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/30"
                    placeholder="jane@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-[#101010]"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-lg border border-[#E5E1DA] bg-white px-4 py-2.5 text-sm text-[#101010] placeholder:text-[#767676] focus:border-[#0B57D0] focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/30"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Team size */}
                <div>
                  <label
                    htmlFor="teamSize"
                    className="mb-1.5 block text-sm font-medium text-[#101010]"
                  >
                    Team size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    className="w-full appearance-none rounded-lg border border-[#E5E1DA] bg-white px-4 py-2.5 text-sm text-[#101010] focus:border-[#0B57D0] focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/30"
                  >
                    <option value="">Select team size</option>
                    {teamSizeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-[#101010]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border border-[#E5E1DA] bg-white px-4 py-2.5 text-sm text-[#101010] placeholder:text-[#767676] focus:border-[#0B57D0] focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/30"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex items-center justify-center rounded-lg bg-[#0B57D0] px-7 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#063B91] focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/30 disabled:opacity-60"
                >
                  {formState === "submitting" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Book a demo */}
            <div className="rounded-2xl border border-[#E5E1DA] bg-[#F8F5F0] p-6">
              <div className="mb-3 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#0B57D0]" />
                <h3 className="text-base font-semibold text-[#101010]">
                  Book a demo
                </h3>
              </div>
              <p className="mb-4 text-sm text-[#525252]">
                See Supportly in action with a personalized walkthrough tailored
                to your team&rsquo;s needs.
              </p>
              <Button href="/contact" variant="primary" size="sm">
                Schedule a demo
              </Button>
            </div>

            {/* Email us */}
            <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <div className="mb-3 flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#0B57D0]" />
                <h3 className="text-base font-semibold text-[#101010]">
                  Email us
                </h3>
              </div>
              <a
                href="mailto:hello@supportly.io"
                className="text-sm font-medium text-[#0B57D0] hover:underline"
              >
                hello@supportly.io
              </a>
            </div>

            {/* Office */}
            <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <div className="mb-3 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#0B57D0]" />
                <h3 className="text-base font-semibold text-[#101010]">
                  Office
                </h3>
              </div>
              <p className="text-sm text-[#525252]">San Francisco, CA</p>
            </div>

            {/* FAQ mini */}
            <div className="rounded-2xl border border-[#E5E1DA] bg-white p-6">
              <h3 className="mb-4 text-base font-semibold text-[#101010]">
                Frequently asked
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#E5E1DA] pb-3 last:border-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-2 text-left text-sm font-medium text-[#101010]"
                    >
                      {faq.q}
                      {openFaq === i ? (
                        <ChevronUp className="h-4 w-4 shrink-0 text-[#767676]" />
                      ) : (
                        <ChevronDown className="h-4 w-4 shrink-0 text-[#767676]" />
                      )}
                    </button>
                    {openFaq === i && (
                      <p className="mt-2 text-sm text-[#525252]">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
