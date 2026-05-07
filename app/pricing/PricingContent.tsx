"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { pricingPlans, faqs } from "@/lib/site-data";

/* ------------------------------------------------------------------ */
/*  Feature comparison data                                           */
/* ------------------------------------------------------------------ */

type CellValue = boolean | string;

interface ComparisonRow {
  feature: string;
  starter: CellValue;
  growth: CellValue;
  scale: CellValue;
}

const comparisonRows: ComparisonRow[] = [
  { feature: "Shared Inbox", starter: true, growth: true, scale: true },
  { feature: "Live Chat", starter: true, growth: true, scale: true },
  { feature: "AI Assistant", starter: false, growth: true, scale: true },
  { feature: "Knowledge Base", starter: "Basic", growth: "Advanced", scale: "Advanced" },
  { feature: "Automation", starter: false, growth: true, scale: true },
  { feature: "Analytics", starter: false, growth: true, scale: true },
  { feature: "Custom Branding", starter: false, growth: true, scale: true },
  { feature: "SSO", starter: false, growth: false, scale: true },
  { feature: "API Access", starter: false, growth: false, scale: true },
  { feature: "Priority Support", starter: false, growth: true, scale: true },
  { feature: "SLA Management", starter: false, growth: false, scale: true },
  { feature: "Dedicated Manager", starter: false, growth: false, scale: true },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function CellIcon({ value }: { value: CellValue }) {
  if (typeof value === "string") {
    return <span className="text-sm text-[#525252]">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-[#0B57D0]" />
  ) : (
    <X className="mx-auto h-5 w-5 text-[#C4C4C4]" />
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function PricingContent() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(index: number) {
    setOpenFaq(openFaq === index ? null : index);
  }

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-[#101010] sm:text-5xl"
          >
            Simple, honest pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-[#525252]"
          >
            Start free, upgrade when you&apos;re ready. All plans include a
            14-day trial.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E5E1DA] bg-white px-1.5 py-1.5"
          >
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !yearly
                  ? "bg-[#0B57D0] text-white"
                  : "text-[#525252] hover:text-[#101010]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                yearly
                  ? "bg-[#0B57D0] text-white"
                  : "text-[#525252] hover:text-[#101010]"
              }`}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-[#DDF4E4] px-2 py-0.5 text-xs font-semibold text-[#166534]">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ---- Pricing Cards ---- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
                  plan.popular
                    ? "border-[#0B57D0] border-2 scale-[1.02] z-10 bg-white"
                    : "border-[#E5E1DA] bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#0B57D0] px-4 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-[#101010]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-[#767676]">
                  {plan.description}
                </p>

                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-[#101010]">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-[#767676]">/agent/month</span>
                  {yearly && (
                    <span className="ml-2 text-sm text-[#767676] line-through">
                      ${plan.monthlyPrice}
                    </span>
                  )}
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#525252]"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0B57D0]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                  href="/signup"
                  className="w-full"
                >
                  {plan.popular ? "Start free trial" : "Get started"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Feature Comparison Table ---- */}
      <section className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-3xl font-bold tracking-tight text-[#101010]"
          >
            Compare plans
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-x-auto rounded-xl border border-[#E5E1DA] bg-white"
          >
            <table className="w-full min-w-[540px] text-left">
              <thead>
                <tr className="border-b border-[#E5E1DA]">
                  <th className="px-6 py-4 text-sm font-semibold text-[#101010]">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#101010]">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#0B57D0]">
                    Growth
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#101010]">
                    Scale
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-[#E5E1DA] last:border-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm text-[#101010]">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellIcon value={row.starter} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellIcon value={row.growth} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellIcon value={row.scale} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ---- Enterprise CTA ---- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-[#101010]"
          >
            Need something custom?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-[#525252]"
          >
            We offer tailored plans for enterprise teams with advanced security,
            compliance, and integration needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button href="/contact" size="lg">
              Contact sales
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center text-3xl font-bold tracking-tight text-[#101010]"
          >
            Frequently asked questions
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-[#E5E1DA] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-[#101010] sm:text-base">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-[#767676]" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-[#525252]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Final CTA ---- */}
      <FinalCTA />
    </>
  );
}
