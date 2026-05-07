"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { pricingPlans } from "@/lib/site-data";

export default function PricingTeaser() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label="PRICING" title="Simple, honest pricing" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-xl border p-6 shadow-sm ${
                plan.popular
                  ? "border-[#0B57D0] border-2 bg-white"
                  : "border-[#E5E1DA] bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0B57D0] px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-[#101010]">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-[#767676]">{plan.description}</p>

              <div className="mt-5 mb-6">
                <span className="text-4xl font-bold text-[#101010]">
                  ${plan.monthlyPrice}
                </span>
                <span className="text-sm text-[#767676]">/agent/month</span>
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
                href="/pricing"
                className="w-full"
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="ghost" href="/pricing">
            See full comparison &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
