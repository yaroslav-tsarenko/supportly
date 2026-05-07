"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const metrics = [
  {
    label: "Average response time",
    value: "4m 32s",
    trend: "-12%",
    positive: true,
  },
  {
    label: "Resolved this week",
    value: "847",
    trend: "+8%",
    positive: true,
  },
  {
    label: "Customer satisfaction",
    value: "94%",
    trend: "+3%",
    positive: true,
  },
];

const teamWorkload = [
  { name: "Sarah", value: 85 },
  { name: "Marcus", value: 72 },
  { name: "Emma", value: 63 },
  { name: "James", value: 91 },
  { name: "Priya", value: 54 },
];

const volumeData = [30, 45, 38, 60, 52, 70, 65, 80, 72, 90, 85, 78];

export default function AnalyticsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label="ANALYTICS" title="See the full picture" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#E5E1DA] bg-white p-6 shadow-sm md:p-8"
        >
          {/* Metric cards */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-[#E5E1DA] bg-[#FAF7F2] p-5"
              >
                <p className="mb-1 text-sm text-[#767676]">{m.label}</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-[#101010]">
                    {m.value}
                  </span>
                  <span
                    className={`mb-0.5 inline-flex items-center gap-0.5 text-sm font-medium ${
                      m.positive ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {m.positive ? (
                      <ArrowUp className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5" />
                    )}
                    {m.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Team workload bar chart */}
            <div className="rounded-xl border border-[#E5E1DA] bg-[#FAF7F2] p-5">
              <p className="mb-4 text-sm font-medium text-[#101010]">
                Team workload
              </p>
              <div className="space-y-3">
                {teamWorkload.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <span className="w-14 text-sm text-[#525252]">
                      {member.name}
                    </span>
                    <div className="flex-1 h-5 rounded-full bg-[#E5E1DA]/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#0B57D0]"
                        style={{ width: `${member.value}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-sm text-[#767676]">
                      {member.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversation volume line chart */}
            <div className="rounded-xl border border-[#E5E1DA] bg-[#FAF7F2] p-5">
              <p className="mb-4 text-sm font-medium text-[#101010]">
                Conversation volume
              </p>
              <div className="flex h-32 items-end gap-1.5">
                {volumeData.map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-[#0B57D0]/80 transition-all hover:bg-[#0B57D0]"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-xs text-[#767676]">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
