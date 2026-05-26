"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen } from "lucide-react"

type TimelineEvent = {
  year: string
  title: string
  description: string
  variant: "default" | "amber" | "active"
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "EST. — EARLY 2000s",
    title: "Founded as a Healthcare Research Partner",
    description: "TakeSolution launches as a specialized analytics and research firm serving pharma and biotech brands in the healthcare domain.",
    variant: "default",
  },
  {
    year: "GROWTH ERA",
    title: "300+ Brand Partnerships Established",
    description: "Expanded into clinical data management, pharmacovigilance, and life sciences research — building one of the most trusted healthcare intelligence networks.",
    variant: "default",
  },
  {
    year: "2024 — TRANSITION",
    title: "New Ownership. Same Mission.",
    description: "TakeSolution transitions to new leadership. The commitment: preserve research excellence while pioneering the company's entry into AI-powered HealthcareTech.",
    variant: "amber",
  },
  {
    year: "NOW — ACTIVE",
    title: "Entering the HealthcareTech Era",
    description: "Building AI-native diagnostic tools, predictive health platforms, and intelligent clinical systems — backed by unmatched domain credibility.",
    variant: "active",
  },
]

const StoryText = () => (
  <div>
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-700 text-sm font-medium tracking-wide mb-8">
      <BookOpen className="w-4 h-4" />
      Our Story
    </div>
    
    <h2 className="font-display font-semibold tracking-tight text-[#111111] text-[clamp(40px,5vw,56px)] leading-[1.05]">
      A Legacy <em className="italic font-light text-black/30">Redefined</em>
    </h2>

    <p className="text-[17px] leading-[1.8] text-[#111111]/60 mt-8">
      TakeSolution was founded as a precision research partner for global healthcare
      brands — providing clinical analytics, market intelligence, and domain expertise
      that helped organizations navigate complex regulatory and scientific landscapes.
    </p>
    <p className="text-[17px] leading-[1.8] text-[#111111]/60 mt-5">
      For over two decades, we operated at the quiet intersection of data science and
      life sciences. Our work shaped decisions across pharmacovigilance, clinical trial
      design, and healthcare brand strategy — earning trust through rigor, not noise.
    </p>
    <p className="text-[17px] leading-[1.8] text-[#111111]/60 mt-5">
      Under new ownership, that foundation remains sacred. The new leadership team has
      committed to not just preserving TakeSolution's legacy — but elevating it, by
      bringing AI-native thinking into the same healthcare domains we have always served.
    </p>

    <blockquote className="font-display text-[26px] tracking-tight leading-[1.3] text-[#111111] border-l-4 border-blue-500 pl-8 mt-12 bg-blue-50/50 py-6 rounded-r-3xl">
      "We don't start from zero. We start from twenty years of earned credibility."
    </blockquote>
  </div>
)

const TimelineItem = ({ event, isLast, index }: { event: TimelineEvent; isLast: boolean; index: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const dotClass = {
    default: "bg-slate-300 shadow-[0_0_0_4px_#f8fafc]",
    amber:   "bg-indigo-500 shadow-[0_0_0_4px_#eef2ff]",
    active:  "bg-blue-600 shadow-[0_0_0_6px_#eff6ff] animate-pulse",
  }[event.variant]

  const cardClass = {
    default: "bg-white border-black/5 hover:border-black/10 hover:shadow-xl",
    amber:   "bg-indigo-50/50 border-indigo-100/50 hover:shadow-xl",
    active:  "bg-blue-50 border-blue-200 hover:shadow-xl hover:border-blue-300",
  }[event.variant]

  const yearClass = {
    default: "text-black/40",
    amber:   "text-indigo-600",
    active:  "text-blue-600",
  }[event.variant]

  return (
    <div className="grid grid-cols-[60px_1fr] gap-6">
      {/* Spine */}
      <div className="flex flex-col items-center pt-2">
        <div className={`w-3.5 h-3.5 rounded-full z-10 flex-shrink-0 ${dotClass}`} />
        {!isLast && (
          <div className="flex-1 w-[2px] mt-2 bg-gradient-to-b from-black/10 to-transparent" />
        )}
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
        className={`border rounded-[32px] p-8 md:p-10 mb-8 transition-all duration-300 shadow-sm ${cardClass}`}
      >
        <div className={`text-[12px] font-semibold tracking-[0.1em] uppercase mb-4 ${yearClass}`}>
          {event.year}
        </div>
        <div className="text-[20px] font-semibold tracking-tight text-[#111111] mb-3">
          {event.title}
        </div>
        <div className="text-[15px] leading-[1.7] text-[#111111]/60">
          {event.description}
        </div>
      </motion.div>
    </div>
  )
}

const StoryTimeline = () => (
  <div className="flex flex-col xl:-mt-2">
    {timelineEvents.map((event, i) => (
      <TimelineItem key={event.year} event={event} isLast={i === timelineEvents.length - 1} index={i} />
    ))}
  </div>
)

const AboutStory = () => (
  <section id="story" className="relative overflow-hidden bg-[#f5f7fb] px-4 pb-4 md:px-6 lg:px-8">
    <div className="relative mx-auto w-full overflow-hidden rounded-[40px] border border-black/5 bg-white p-10 py-20 lg:p-24 shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
      
      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-slate-50 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-[45%_1fr] gap-16 lg:gap-24 relative z-10 items-start">
        <StoryText />
        <StoryTimeline />
      </div>
    </div>
  </section>
)

export default AboutStory