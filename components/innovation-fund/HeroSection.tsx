"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

const stats = [
  { value: "₹5Cr", label: "Total Fund Size" },
  { value: "3", label: "Focus Sectors" },
  { value: "5", label: "Selection Stages" },
];

const rightCards = [
  {
    badge: "Healthcare",
    badgeClass: "bg-blue-500/10 text-blue-700 border-blue-400/20",
    valueText: "Digital Health\n& AI",
    sub: "Platforms, diagnostics, clinical intelligence, and AI-driven patient care.",
  },
  {
    badge: "Artificial Intelligence",
    badgeClass: "bg-indigo-500/10 text-indigo-700 border-indigo-400/20",
    valueText: "Enterprise AI\nSolutions",
    sub: "Automation, analytics, and intelligent software at scale.",
  },
  {
    badge: "Technology",
    badgeClass: "bg-cyan-500/10 text-cyan-700 border-cyan-400/20",
    valueText: "Deep-Tech\n& Platforms",
    sub: "Differentiated software, deep-tech, and market-ready product innovation.",
  },
  {
    badge: "Fund Corpus",
    badgeClass: "bg-purple-500/10 text-purple-700 border-purple-400/20",
    value: "₹5",
    suffix: "Cr",
    sub: "Committed capital from Take Solutions to back visionary founders.",
    highlight: true,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-4 py-4 md:px-6 lg:px-8 mt-2">
      <div className="relative mx-auto w-full overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        {/* Background glows */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-[55%_45%] relative z-10 w-full min-h-[85vh]">

          {/* Left */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 h-full">

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-700 text-sm font-medium tracking-wide mb-8 w-fit"
            >
              <Sparkles className="w-4 h-4" />
              Innovation Fund · Rs. 5 Crores
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="font-display font-semibold text-[#111111] leading-[1.05] tracking-tight mb-7 text-[clamp(44px,5vw,68px)] max-w-2xl"
            >
              Backing{" "}
              <em className="italic font-light text-black/40">bold ideas</em>
              <br />
              with strategic capital.
            </motion.h1>

            {/* Lead */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
              className="text-[17px] leading-[1.8] text-[#111111]/60 max-w-[480px] mb-[52px]"
            >
              Take Solutions has committed Rs. 5 crores to invest in startups
              and growth-stage businesses building transformative solutions in
              healthcare, artificial intelligence, and technology.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex flex-col sm:flex-row items-center gap-5 flex-wrap"
            >
              <a
                href="#apply"
                className="group relative overflow-hidden px-8 py-4 rounded-full bg-[#111111] text-white font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for Funding{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#eligibility"
                className="px-8 py-4 rounded-full border border-black/10 text-black/70 font-medium transition-all duration-500 hover:bg-black/5 flex items-center gap-2"
              >
                See Eligibility
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.55}
              className="flex flex-wrap gap-10 pt-12 mt-[52px] border-t border-black/5"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-[42px] font-semibold tracking-tight leading-none text-[#111111]">
                    {value}
                  </div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.15em] text-black/40 mt-3">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 2×2 grid */}
          <div className="hidden lg:grid grid-rows-2 grid-cols-2 gap-px bg-black/5 border-l border-black/5">
            {rightCards.map(({ badge, badgeClass, value, suffix, valueText, sub, highlight }) => (
              <div
                key={badge}
                className={`relative flex flex-col justify-end p-10 overflow-hidden transition-colors duration-300 hover:brightness-[0.97] ${
                  highlight
                    ? "bg-gradient-to-br from-indigo-50 to-blue-50 border-t-4 border-t-indigo-500"
                    : "bg-white"
                }`}
              >
                <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-white opacity-40 blur-2xl rounded-full pointer-events-none" />

                <div className={`inline-flex items-center px-4 py-2 rounded-full border text-[11px] font-semibold tracking-wide w-fit mb-5 ${badgeClass}`}>
                  {badge}
                </div>

                {value ? (
                  <div className="font-display text-[48px] font-semibold tracking-tight leading-none text-[#111111]">
                    {value}
                    <span className="text-[28px] font-light text-black/40">{suffix}</span>
                  </div>
                ) : (
                  <div className="font-display text-[28px] font-semibold leading-[1.1] tracking-tight text-[#111111]">
                    {valueText?.split("\n").map((line, j) => (
                      <span key={j}>{line}{j === 0 && <br />}</span>
                    ))}
                  </div>
                )}

                <p className="text-[14px] leading-[1.6] mt-4 text-[#111111]/60">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}