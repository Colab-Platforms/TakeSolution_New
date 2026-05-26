"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers } from "lucide-react"

type ServiceVariant = "legacy" | "healthtech"

type Service = {
  num: string
  icon: React.ReactNode
  iconVariant: "blue" | "indigo" | "cyan"
  name: string
  description: string
  variant: ServiceVariant
}

const services: Service[] = [
  {
    num: "01",
    icon: <span className="text-2xl">🔬</span>,
    iconVariant: "blue",
    name: "Healthcare Research",
    description: "Comprehensive research and strategic analysis for healthcare brands — from clinical trial insights and safety studies to competitive intelligence.",
    variant: "legacy",
  },
  {
    num: "02",
    icon: <span className="text-2xl">📊</span>,
    iconVariant: "blue",
    name: "Clinical Analytics",
    description: "Deep analytical frameworks that transform raw clinical data into structured, decision-ready intelligence — built for pharma and biotech.",
    variant: "legacy",
  },
  {
    num: "03",
    icon: <span className="text-2xl">🛡️</span>,
    iconVariant: "indigo",
    name: "Pharmacovigilance",
    description: "Systematic monitoring and reporting of adverse events and drug safety signals, ensuring continuous regulatory compliance with speed.",
    variant: "legacy",
  },
  {
    num: "04",
    icon: <span className="text-2xl">🤖</span>,
    iconVariant: "cyan",
    name: "AI Diagnostics",
    description: "Developing intelligent diagnostic assistance tools trained on healthcare-domain datasets — augmenting clinical decision-making.",
    variant: "healthtech",
  },
  {
    num: "05",
    icon: <span className="text-2xl">⚡</span>,
    iconVariant: "cyan",
    name: "Predictive Health AI",
    description: "Machine learning models that surface early clinical signals, forecast patient outcomes, and compress time-to-treatment.",
    variant: "healthtech",
  },
  {
    num: "06",
    icon: <span className="text-2xl">🌐</span>,
    iconVariant: "cyan",
    name: "HealthTech Integration",
    description: "End-to-end integration of AI platforms into existing healthcare workflows — connecting clinical data and EHR systems.",
    variant: "healthtech",
  },
]

const iconVariantClass: Record<Service["iconVariant"], string> = {
  blue:   "bg-blue-500/10 text-blue-600 border border-blue-200",
  indigo: "bg-indigo-500/10 text-indigo-600 border border-indigo-200",
  cyan:   "bg-cyan-500/10 text-cyan-600 border border-cyan-200",
}

const tagVariantClass: Record<ServiceVariant, string> = {
  legacy:     "bg-indigo-50 text-indigo-700 border border-indigo-200",
  healthtech: "bg-cyan-50 text-cyan-700 border border-cyan-200",
}

const tagLabel: Record<ServiceVariant, string> = {
  legacy:     "Life Sciences Legacy",
  healthtech: "HealthcareTech",
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
      className="relative px-8 py-10 transition-colors duration-300 hover:bg-slate-50 bg-white group"
    >
      <div className="font-mono text-[11px] tracking-[0.14em] text-black/30 mb-6">
        {service.num}
      </div>

      <div className={`w-[52px] h-[52px] flex items-center justify-center rounded-[16px] mb-6 transition-transform duration-300 group-hover:scale-110 origin-left ${iconVariantClass[service.iconVariant]}`}>
        {service.icon}
      </div>

      <h3 className="text-[20px] font-semibold text-[#111111] tracking-tight mb-3">
        {service.name}
      </h3>

      <p className="text-[15px] font-light leading-[1.7] text-black/60">
        {service.description}
      </p>

      <span className={`inline-block mt-[24px] font-mono text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full ${tagVariantClass[service.variant]}`}>
        {tagLabel[service.variant]}
      </span>
    </motion.div>
  )
}

const AboutWhatWeDo = () => (
  <section id="services" className="relative overflow-hidden bg-[#f5f7fb] px-4 pb-4 md:px-6 lg:px-8">
    <div className="relative mx-auto w-full overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.04)] pb-8">
      
      <div className="max-w-[1500px] mx-auto px-6 py-24">
        {/* Intro */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 mb-20 items-end">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-700 text-sm font-medium tracking-wide mb-8">
              <Layers className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="font-display font-semibold tracking-tight text-[#111111] text-[clamp(40px,5vw,56px)] leading-[1.05]">
              Two Pillars.
              <br />
              <em className="italic font-light text-black/30">One Purpose.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.8] text-[#111111]/60 lg:pl-12 lg:border-l border-black/10">
            Our practice spans deep-rooted Life Sciences research capabilities and an emerging
            HealthcareTech portfolio — each reinforcing the other, unified by an unwavering
            commitment to clinical accuracy and real-world impact.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-[32px] overflow-hidden border border-black/5">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default AboutWhatWeDo