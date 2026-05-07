"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Heart,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { teamMembers, companyValues } from "@/lib/site-data";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ------------------------------------------------------------------ */
/*  Value card icons & accent colors                                   */
/* ------------------------------------------------------------------ */

const valueIcons = [Lightbulb, Heart, Leaf, ShieldCheck];

const valueColors = [
  { bg: "bg-[#EAF2FF]", text: "text-[#0B57D0]" },
  { bg: "bg-[#FDE2EA]", text: "text-[#B4365A]" },
  { bg: "bg-[#DDF4E4]", text: "text-[#1B7A3D]" },
  { bg: "bg-[#ECE7FF]", text: "text-[#6B4FC7]" },
];

/* ------------------------------------------------------------------ */
/*  Team member avatar pastel colors                                   */
/* ------------------------------------------------------------------ */

const avatarColors = ["bg-[#EAF2FF]", "bg-[#ECE7FF]", "bg-[#DDF4E4]", "bg-[#FFF3B8]"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

/* ------------------------------------------------------------------ */
/*  Timeline data                                                      */
/* ------------------------------------------------------------------ */

const milestones = [
  { year: "2022", label: "Supportly founded" },
  { year: "2023", label: "First 100 call teams onboarded" },
  { year: "2024", label: "AI call summaries launch" },
  { year: "2024", label: "Series A funding" },
  { year: "2025", label: "5 000+ call teams on the platform" },
];

/* ================================================================== */
/*  AboutContent                                                       */
/* ================================================================== */

export default function AboutContent() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="bg-[#F8F5F0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-[#101010] sm:text-5xl"
          >
            We&rsquo;re building the call support platform we always wanted
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-[#525252]"
          >
            Phone support software that feels organized, considered, and genuinely
            human &mdash; designed for teams who care about every call.
          </motion.p>
        </div>
      </section>

      {/* ---- Mission ---- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0B57D0]">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
              Transform how businesses handle customer calls
            </h2>
            <p className="mt-4 text-[#525252] leading-relaxed">
              We believe phone support should empower teams, not drain them.
              Supportly is built so agents can focus on real calls
              instead of fighting their tools &mdash; with smart routing and AI
              that handles the rest.
            </p>
          </motion.div>

          {/* Abstract visual element */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full bg-[#EAF2FF]" />
              <div className="absolute top-6 left-6 h-36 w-36 rounded-full bg-[#DDF4E4]" />
              <div className="absolute bottom-4 right-4 h-28 w-28 rounded-full bg-[#ECE7FF]" />
              <div className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0B57D0]/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- Brand Story ---- */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-[#525252] leading-relaxed"
          >
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }}>
              Supportly started with a frustration most phone support teams know too
              well. Our founders spent years working with call center tools that were
              clunky, fragmented, and built for dashboards rather than people. Every
              system they tried added complexity instead of removing it.
            </motion.p>

            <motion.p variants={fadeUp} transition={{ duration: 0.5 }}>
              In 2022 they decided to start from scratch &mdash; not to build
              another bloated call center suite, but to create a workspace where
              phone support agents could do their best work. The goal was simple: make
              the software disappear so the call could take center stage.
            </motion.p>

            <motion.p variants={fadeUp} transition={{ duration: 0.5 }}>
              Today Supportly is used by thousands of teams who share that
              belief. We remain a small, focused company that ships thoughtfully,
              listens to customers, and measures success by how calm and
              effective our agents feel &mdash; not by how many features we can
              cram into a sidebar.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0B57D0]">
              What we stand for
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {companyValues.map((value, i) => {
              const Icon = valueIcons[i];
              const color = valueColors[i];
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-[#E5E1DA] bg-white p-6 md:p-8"
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${color.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${color.text}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#101010]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[#525252] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---- Team ---- */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0B57D0]">
              The people behind Supportly
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
              Meet the Team
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-[#E5E1DA] bg-white p-6 text-center"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-[#101010] ${avatarColors[i % avatarColors.length]}`}
                >
                  {getInitials(member.name)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#101010]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#0B57D0]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-[#525252] leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0B57D0]">
              Our journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
              Milestones
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-12 ml-4 border-l-2 border-[#E5E1DA] pl-8"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={`${m.year}-${i}`}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="relative pb-10 last:pb-0"
              >
                {/* Dot */}
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-[#0B57D0] bg-white" />
                <p className="text-sm font-semibold text-[#0B57D0]">
                  {m.year}
                </p>
                <p className="mt-1 text-[#101010] font-medium">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- Final CTA ---- */}
      <FinalCTA />
    </>
  );
}
