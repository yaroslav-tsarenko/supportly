"use client";

import { motion } from "framer-motion";
import {
  Hash,
  Phone,
  CreditCard,
  Target,
  PhoneCall,
  Users,
  Headphones,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { integrations } from "@/lib/site-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hash,
  Phone,
  CreditCard,
  Target,
  PhoneCall,
  Users,
  Headphones,
  Zap,
};

export default function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="INTEGRATIONS"
          title="Works with your favorite tools"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {integrations.map((integration, i) => {
            const Icon = iconMap[integration.icon];
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center gap-3 rounded-xl border border-[#E5E1DA] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: integration.color }}
                >
                  {Icon && <Icon className="h-5 w-5 text-[#101010]" />}
                </div>
                <span className="text-sm font-medium text-[#101010]">
                  {integration.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" href="/features#integrations">
            View all integrations
          </Button>
        </div>
      </div>
    </section>
  );
}
