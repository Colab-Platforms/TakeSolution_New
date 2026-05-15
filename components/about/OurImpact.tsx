"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Users2, Rocket, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Years of Excellence",
    value: "20+",
    suffix: "Years",
    description: "Deep-rooted expertise in Life Sciences and technology.",
    icon: <Rocket className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Active Members",
    value: "100+",
    suffix: "Members",
    description: "Professionals driving the health platform forward.",
    icon: <Users2 className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    label: "Market Opportunity",
    value: "$197",
    suffix: "Billion",
    description: "Targeting the massive health tech potential in India.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    label: "Global Reach",
    value: "12",
    suffix: "Countries",
    description: "Delivering solutions across major global markets.",
    icon: <Globe2 className="w-6 h-6" />,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
];

export default function OurImpact() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-6 block">
              Our Global Impact
            </span>
            <h2>
              Driving Change on a <br />
              <span className="text-blue-600 italic">Global Scale</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-12">
              We are not just a technology company; we are catalysts for 
              transformation in the life sciences and healthcare industry, 
              impacting lives through digital precision.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm">
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-widest">Headquarters</h4>
                <p className="text-slate-500 text-sm font-medium">Chennai, India</p>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm">
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-widest">Focus Area</h4>
                <p className="text-slate-500 text-sm font-medium">Life Sciences & AI</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="impact-stat">
                    {stat.value}
                  </span>
                  <span className="text-lg font-semibold text-slate-400">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">
                  {stat.label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
