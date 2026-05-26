"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

const CTAText = () => (
  <div>
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-700 text-sm font-medium tracking-wide mb-8">
      <Sparkles className="w-4 h-4" />
      Get Started
    </div>
    
    <h3 className="font-display font-semibold tracking-tight text-[#111111] leading-[1.05] text-[clamp(40px,5vw,56px)]">
      Ready to Build with
      <br />
      <em className="italic font-light text-black/30">TakeSolution?</em>
    </h3>
    <p className="text-[17px] leading-[1.8] text-[#111111]/60 mt-6 max-w-[520px]">
      Whether you need deep healthcare research, clinical analytics, or want to explore
      our AI-powered HealthcareTech solutions — we're here to co-create your next
      breakthrough.
    </p>
  </div>
)

const CTAActions = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-start shrink-0">
    <a
      href="#"
      className="group relative overflow-hidden px-8 py-4 rounded-full bg-[#111111] text-white font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex items-center gap-3"
    >
      <span className="relative z-10 flex items-center gap-2">
        Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-gray-800 to-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </a>
    <a
      href="#"
      className="px-8 py-4 rounded-full border border-black/10 text-black/70 font-medium transition-all duration-500 hover:bg-black/5 flex items-center gap-2"
    >
      View Innovation Fund
    </a>
  </div>
)

const AboutCTA = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-4 pb-4 md:px-6 lg:px-8 pt-10">
      <div className="relative mx-auto w-full overflow-hidden rounded-[40px] border border-black/5 bg-gradient-to-b from-white to-blue-50/50 p-12 lg:p-24 shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-[1500px] mx-auto z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center"
          >
            <CTAText />
            <CTAActions />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCTA