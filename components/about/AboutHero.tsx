"use client"
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const AboutHero = () => {

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 2000], [1, 1.08]);
  return (
    <section className="relative pt-5 pb-32 bg-[#F8F7F3] overflow-hidden">
      <div className="container">
        {/* <div className="max-w-4xl mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold tracking-[0.2em] text-[#7C5CFF] uppercase mb-6 block"
          >
            About Take Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#1A1F3D] leading-[1.1] tracking-tight"
          >
            We are the ultimate strategic partner at the intersection of <span className="italic">science and technology</span>.
          </motion.h1>
        </div> */}

        <div className="w-full h-px bg-border/40 max-w-4xl mx-auto mb-20" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Left Column */}
          <div className="md:col-span-3 flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ scale }}
              className="relative rounded-[32px] overflow-hidden flex-1 min-h-[250px]"
            >
              <img src="/hero-grid-1.png" alt="Lab Research" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#DCE1EE] p-8 rounded-[32px] flex flex-col justify-center space-y-4 flex-1 min-h-[250px]"
            >
              <h3 className="text-3xl font-display text-[#1A1F3D]">300+<br />Deliveries</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Join countless satisfied customers who've relied on our consistent, expert deliveries.
              </p>
            </motion.div>
          </div>

          {/* Middle Column (Tall) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ scale }}
            transition={{ delay: 0.5 }}
            className="md:col-span-5 relative rounded-[32px] overflow-hidden group min-h-[400px] md:min-h-0"
          >
            <img src="/hero-grid-2.png" alt="Scientist" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
              <div className="space-y-1">
                <div className="text-4xl font-display">98%</div>
                <div className="text-xl font-medium">On-Time Rate</div>
              </div>
              <p className="text-sm opacity-90 max-w-[240px] leading-relaxed">
                You can rely on us to keep your operations running smoothly without delays.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#E5DFD9] p-8 rounded-[32px] flex flex-col justify-center space-y-4 flex-1 min-h-[250px]"
            >
              <p className="text-xs text-[#5D5750] leading-relaxed">
                Our unwavering quality ensures you receive top-purity solutions, always meeting your standards.
              </p>
              <div className="pt-2">
                <div className="text-3xl font-display text-[#1A1F3D]">99.8%</div>
                <div className="text-lg font-medium text-[#1A1F3D]">Product Purity</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              style={{ scale }}
              className="relative rounded-[32px] overflow-hidden flex-1 min-h-[250px]"
            >
              <img src="/hero-grid-3.png" alt="Process Equipment" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
