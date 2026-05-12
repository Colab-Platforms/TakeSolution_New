"use client"
import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Clinical Development",
    description: "End-to-end clinical trial management from Phase I through IV with a focus on safety and speed.",
    icon: "🧪",
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "Data Sciences",
    description: "Leveraging AI and advanced biostatistics to turn complex clinical data into actionable insights.",
    icon: "📊",
    color: "from-purple-500/10 to-transparent"
  },
  {
    title: "Regulatory & Safety",
    description: "Navigate global regulatory landscapes with our expert pharmacovigilance and submission services.",
    icon: "🛡️",
    color: "from-emerald-500/10 to-transparent"
  }
]

const ServiceGrid = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header like Stripe */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Unified Platform
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            The backbone of modern <span className="font-light italic">Life Sciences</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From drug discovery to market authorization, we provide the technology and expertise 
            needed to bring life-saving therapies to patients faster.
          </p>
        </div>

        {/* Bento-inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative group p-8 rounded-3xl border border-border bg-gradient-to-br ${service.color} hover:shadow-2xl transition-all duration-500`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-foreground group/link">
                Learn more 
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGrid
