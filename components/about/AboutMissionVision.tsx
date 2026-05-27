"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react"

const data = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "To deliver research-backed intelligence and AI-powered solutions that empower healthcare organizations to make faster, safer, and more impactful decisions — without compromising on the clinical precision our partners have depended on for two decades.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&q=80",
    tags: ["Research Integrity", "Real-Time AI", "Evidence-Based"],
   
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To become the defining convergence point where life sciences research and artificial intelligence meet — building platforms that evolve with clinical science, serving a world where technology amplifies human healthcare expertise.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    tags: ["AI Ecosystem", "Legacy × Tech", "Global Shift"],
   
  },
];

export default function AboutMissionVision() {
  const [active, setActive] = useState("mission");

  return (
    <section className="relative overflow-hidden bg-[#23262C] py-32 md:py-40 px-6 md:px-10 border-t border-white/5">
      {/* Dark Mode Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative max-w-[1500px] mx-auto z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end mb-28">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-200 text-sm tracking-wide mb-8">
              <Sparkles className="w-4 h-4" />
              Purpose
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold leading-[1.05] tracking-tight text-white max-w-5xl">
              What Drives
              <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white"> everything</span> we do.
            </h2>
          </div>

          <div className="lg:pl-20 lg:border-l border-white/10">
            <p className="text-lg leading-9 text-slate-300 max-w-md">
              A premium editorial-inspired approach to defining our trajectory — blending life sciences
              research legacy with an unwavering commitment to AI innovation and precision engineering.
            </p>
          </div>
        </div>

        {/* Bento Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[480px]">
          {data.map((item) => {
            const isActive = active === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActive(item.id)}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-[38px] cursor-pointer group border border-white/10 bg-white/5 backdrop-blur-2xl ${
                  isActive ? "lg:col-span-8" : "lg:col-span-4"
                } ${
                  isActive
                    ? "shadow-[0_30px_120px_rgba(79,70,229,0.15)]"
                    : "hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:bg-white/10"
                }`}
                style={{ height: "100%", minHeight: "400px" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-[1400ms] ${
                      isActive ? "scale-105" : "group-hover:scale-110"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      isActive
                        ? "bg-gradient-to-br from-[#050816]/90 via-[#050816]/60 to-transparent"
                        : "bg-gradient-to-br from-[#050816]/80 via-[#050816]/50 to-transparent"
                    }`}
                  />
                </div>

                {/* Floating Element Element */}
                <div className="absolute top-8 right-8 text-white text-5xl md:text-6xl z-20 opacity-30 transition-all duration-500 group-hover:scale-110 group-hover:opacity-60">
                  {item.icon}
                </div>

                {/* Main Content */}
                <div className="relative z-20 flex flex-col justify-between h-full p-8 md:p-10 text-white">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-[10px] uppercase tracking-[3px] text-white/80 font-medium">
                          {item.id === "mission" ? "Core Mandate" : "Future Horizon"}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-1.5px] leading-[0.95] max-w-xl text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`min-w-[56px] h-[56px] rounded-full backdrop-blur-xl flex items-center justify-center border transition-all duration-500 hidden md:flex ${
                        isActive
                          ? "bg-white text-[#23262C] border-white rotate-45"
                          : "bg-white/10 border-white/10"
                      }`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="active-content"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.35, delay: 0.15 }}
                          className="mt-6"
                        >
                          <p className="text-slate-200 leading-7 md:leading-8 max-w-2xl text-base md:text-lg mb-8 font-light">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-[11px] uppercase tracking-[2px] text-white/90"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="inactive-content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-8 flex items-center gap-3 text-white/50 text-sm tracking-wide"
                        >
                          <span>Explore {item.title}</span>
                          <span className="w-8 h-[1px] bg-white/30" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}