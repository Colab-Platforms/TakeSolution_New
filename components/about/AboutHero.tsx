"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
}

const Eyebrow = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-700 text-sm font-medium tracking-wide mb-8 w-fit"
  >
    <Sparkles className="w-4 h-4" />
    TakeSolution Corporate
  </motion.div>
)

const HeroHeadline = () => (
  <motion.h1
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={0.1}
    className="font-display font-semibold text-[#111111] leading-[1.05] tracking-tight mb-7
               text-[clamp(44px,5vw,68px)] max-w-2xl"
  >
    Where <em className="italic font-light text-black/40">Research</em>
    <br />
    Meets the Science
    <br />
    of <em className="italic font-light text-black/40">Tomorrow</em>
  </motion.h1>
)

const HeroLead = () => (
  <motion.p
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={0.25}
    className="text-[17px] leading-[1.8] text-[#111111]/60 max-w-[480px] mb-[52px]"
  >
    A 20-year legacy in healthcare research, now reimagined under new ownership.
    We carry our institutional depth into the future — entering the HealthcareTech
    domain with AI-powered solutions built on the foundations of clinical science.
  </motion.p>
)

const HeroActions = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={0.4}
    className="flex flex-col sm:flex-row items-center gap-5 flex-wrap"
  >
    <a
      href="#story"
      className="group relative overflow-hidden px-8 py-4 rounded-full bg-[#111111] text-white font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex items-center gap-3"
    >
      <span className="relative z-10 flex items-center gap-2">
        Explore Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </a>
    <a
      href="#ai"
      className="px-8 py-4 rounded-full border border-black/10 text-black/70 font-medium transition-all duration-500 hover:bg-black/5 flex items-center gap-2"
    >
      Our AI Vision
    </a>
  </motion.div>
)

const stats = [
  { value: "20", suffix: "+", label: "Years of Research" },
  { value: "300", suffix: "+", label: "Brand Partners" },
  { value: "98", suffix: "%", label: "Data Accuracy" },
]

const HeroStats = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={0.55}
    className="flex flex-wrap gap-10 pt-12 mt-[52px] border-t border-black/5"
  >
    {stats.map(({ value, suffix, label }) => (
      <div key={label}>
        <div className="font-display text-[42px] font-semibold tracking-tight leading-none text-[#111111]">
          {value}
          <span className="text-[28px] text-blue-600 font-light">{suffix}</span>
        </div>
        <div className="text-[12px] font-medium uppercase tracking-[0.15em] text-black/40 mt-3">
          {label}
        </div>
      </div>
    ))}
  </motion.div>
)

const hCards = [
  {
    badge: "Core Legacy",
    badgeClass: "bg-blue-500/10 text-blue-700 border-blue-400/20",
    value: "300",
    suffix: "+",
    sub: "Global brand partnerships in clinical research & healthcare analytics",
    bg: "bg-white",
  },
  {
    badge: "Accuracy Rate",
    badgeClass: "bg-indigo-500/10 text-indigo-700 border-indigo-400/20",
    value: "98",
    suffix: "%",
    sub: "Trial and clinical data accuracy across all engagements",
    bg: "bg-[#f5f7fb]",
  },
  {
    badge: "New Ownership",
    badgeClass: "bg-purple-500/10 text-purple-700 border-purple-400/20",
    valueText: "Continuing\nthe Legacy",
    sub: "New stewardship committed to research excellence & AI innovation",
    bg: "bg-white",
  },
  {
    badge: "New Chapter",
    badgeClass: "bg-cyan-500/10 text-cyan-700 border-cyan-400/20",
    valueText: "HealthcareTech\n& AI",
    sub: "Entering AI diagnostics, predictive analytics & clinical intelligence",
    bg: "bg-gradient-to-br from-cyan-50 to-blue-50 border-t-4 border-t-cyan-500",
  },
]

const HeroRightGrid = () => (
  <div className="hidden lg:grid grid-rows-2 grid-cols-2 gap-px bg-black/5 border-l border-black/5">
    {hCards.map(({ badge, badgeClass, value, suffix, valueText, sub, bg }) => (
      <div
        key={badge}
        className={`relative flex flex-col justify-end p-10 overflow-hidden transition-colors duration-300 hover:brightness-[0.97] ${bg}`}
      >
        {/* Glow */}
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
          <div className="font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-[#111111]">
            {valueText?.split("\n").map((line, j) => (
              <span key={j}>{line}{j === 0 && <br />}</span>
            ))}
          </div>
        )}

        <p className="text-[14px] leading-[1.6] mt-4 text-[#111111]/60">
          {sub}
        </p>
      </div>
    ))}
  </div>
)

const AboutHero = () => (
  <section className="relative overflow-hidden bg-[#f5f7fb] px-4 py-4 md:px-6 lg:px-8 mt-2">
    <div className="relative mx-auto w-full overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-[55%_45%] relative z-10 w-full min-h-[85vh]">
        {/* Left — text content */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 h-full">
          <Eyebrow />
          <HeroHeadline />
          <HeroLead />
          <HeroActions />
          <HeroStats />
        </div>

        {/* Right — 2×2 stat grid */}
        <HeroRightGrid />
      </div>
    </div>
  </section>
)

export default AboutHero