"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

const cards = [
  {
    id: "01",
    title: "Our Vision",
    icon: <Eye className="w-8 h-8" />,
    text: "To transform global healthcare through artificial intelligence and intelligent digital innovation.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "02",
    title: "Our Mission",
    icon: <Target className="w-8 h-8" />,
    text: "Building a connected, data-driven healthcare ecosystem where decisions are guided by real-time insights and clinical research is accelerated.",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    id: "03",
    title: "Our Values",
    icon: <Award className="w-8 h-8" />,
    text: "Precision-driven solutions with high standards of scientific and technological excellence, ensuring sustained value for stakeholders.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Purpose & Strategy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mb-8"
          >
            Pioneering the Future of <br />
            <span className="premium-gradient-text">
              Intelligent Healthcare
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-400 leading-relaxed"
          >
            For over two decades, we've combined deep domain expertise with cutting-edge 
            AI to deliver precise and scalable solutions for the life sciences sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-sm">
                {/* Decorative Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    {card.icon}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white group-hover:translate-x-1 transition-transform duration-500">
                    {card.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed transition-colors duration-500 group-hover:text-slate-200">
                    {card.text}
                  </p>

                  <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-px w-8 bg-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

