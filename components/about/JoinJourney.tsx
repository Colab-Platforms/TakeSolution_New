"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, TrendingUp, Handshake } from "lucide-react";

export default function JoinJourney() {
  return (
    <section className="relative py-32 bg-[#020617] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Innovation Fund</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                Empowering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Next Generation</span>
              </h2>
              
              <p className="text-xl text-slate-400 leading-relaxed mb-10">
                Our Innovation Fund provides more than just capital. We offer 
                strategic advisory, scientific mentorship, and global market access 
                to startups revolutionizing healthcare.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 rounded-2xl bg-blue-600 font-bold overflow-hidden transition-all hover:bg-blue-500">
                  <div className="relative z-10 flex items-center gap-2">
                    Submit Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all">
                  Learn Strategy
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Strategic Capital",
                  desc: "Investment focused on long-term value and disruptive health technologies.",
                  icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
                },
                {
                  title: "Scientific Advisory",
                  desc: "Access to our network of 100+ clinical and tech experts.",
                  icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
                },
                {
                  title: "Global Growth",
                  desc: "Scale your solution across 12+ countries with our infrastructure.",
                  icon: <Handshake className="w-6 h-6 text-purple-400" />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex gap-6 group hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Trusted By Section */}
        <div className="mt-40 pt-20 border-t border-white/5">
          <div className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500 mb-16">
            DRIVING GLOBAL HEALTHCARE EXCELLENCE
          </div>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             {['Pfizer', 'Merck', 'Novartis', 'Sanofi', 'DHL', 'FedEx'].map((name) => (
              <span key={name} className="text-2xl font-bold tracking-tighter text-white">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
