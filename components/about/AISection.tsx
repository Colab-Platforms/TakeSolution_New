"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles, ArrowRight, Brain, Milestone, Activity, Database } from "lucide-react"

type AIPill = {
  icon: React.ReactNode
  name: string
  sub: string
  color: string
}

const aiPills: AIPill[] = [
  { icon: <Brain className="w-6 h-6" />, name: "Neural Diagnostics", sub: "In Development", color: "blue" },
  { icon: <Milestone className="w-6 h-6" />, name: "Drug Intelligence", sub: "AI-Powered", color: "indigo" },
  { icon: <Activity className="w-6 h-6" />, name: "Real-Time Signals", sub: "Clinical Monitoring", color: "cyan" },
  { icon: <Database className="w-6 h-6" />, name: "Health Data Mesh", sub: "Interoperability", color: "purple" },
]

const colorClasses = {
  blue: "bg-blue-500/10 text-blue-600 border-blue-200",
  indigo: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
  cyan: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
  purple: "bg-purple-500/10 text-purple-600 border-purple-200",
}

const AITextContent = () => (
  <div>
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-700 text-sm font-medium tracking-wide mb-8">
      <Sparkles className="w-4 h-4" />
      A New Chapter
    </div>

    <h2 className="text-5xl md:text-[64px] font-display font-semibold leading-[1.05] tracking-tight text-[#111111] mb-8">
      The{" "}
      <span className="block text-blue-600 italic font-light">
        Intelligence
      </span>
      Layer for Healthcare
    </h2>

    <p className="text-[17px] text-[#111111]/70 leading-[1.8] mt-6 max-w-xl font-light">
      Most AI companies entering healthcare start without domain knowledge. TakeSolution
      is different — we enter the AI era with 20+ years of clinical research depth,
      regulatory understanding, and an existing network of healthcare brand trust.
    </p>

    <p className="text-[17px] text-[#111111]/50 leading-[1.8] mt-5 max-w-xl font-light">
      We are building AI systems that are clinically grounded — not technically
      impressive-but-useless. This isn't a pivot. It's an evolution.
    </p>

    <a
      href="#"
      className="inline-flex items-center gap-3 mt-10 text-[15px] font-medium
                 text-blue-600 hover:text-blue-700 transition-colors group"
    >
      Explore our Innovation Pipeline 
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
)

const AIPillCard = ({ pill, index }: { pill: AIPill; index: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
      className={`group rounded-3xl border border-black/5 bg-[#f5f7fb] p-7 hover:shadow-lg hover:border-black/10 transition-all duration-300`}
    >
      <span className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 group-hover:scale-110 origin-left transition-transform duration-300 border ${colorClasses[pill.color as keyof typeof colorClasses]}`}>
        {pill.icon}
      </span>
      <div className="text-[17px] font-semibold text-[#111111] tracking-tight">{pill.name}</div>
      <div className="text-[10px] tracking-[0.14em] uppercase text-black/40 mt-3 font-mono">
        {pill.sub}
      </div>
    </motion.div>
  )
}

const AICodeBlock = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 }}
      className="col-span-2 rounded-[32px] border border-black/5 bg-black/[0.03] backdrop-blur-2xl p-8 hover:bg-black/[0.05] transition-colors"
    >
      <pre className="font-mono text-[14px] leading-[2] text-[#111111] overflow-x-auto">
        <span className="text-black/40">{"// TakeSolution convergence model"}</span>
        {"\n"}
        <span className="text-blue-600">research_legacy</span>
        {" + "}
        <span className="text-blue-600">ai_innovation</span>
        {"\n  → "}
        <span className="text-[#111111] font-bold">clinical_intelligence</span>
        {"\n  → "}
        <span className="text-blue-600">healthcaretech_impact</span>
      </pre>
    </motion.div>
  )
}

const AIVisual = () => (
  <div className="grid grid-cols-2 gap-5 relative">
    {/* Decor */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-100/50 blur-3xl rounded-full pointer-events-none" />
    
    {aiPills.map((pill, i) => (
      <AIPillCard key={pill.name} pill={pill} index={i} />
    ))}
    <AICodeBlock />
  </div>
)

const AISection = () => (
  <section id="ai" className="relative overflow-hidden bg-[#f5f7fb] px-4 pt-10 pb-4 md:px-6 lg:px-8">
    <div className="relative mx-auto w-full overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.04)] pb-8">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-50/50 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10 px-8 py-24 lg:p-24">
        <div className="grid lg:grid-cols-[45%_1fr] gap-16 lg:gap-24 items-center">
          <AITextContent />
          <AIVisual />
        </div>
      </div>
    </div>
  </section>
)

export default AISection