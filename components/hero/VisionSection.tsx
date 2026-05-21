"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const visionData = [
  {
    id: "clinical-research",
    title: "Clinical Research",
    description:
      "AI-powered clinical ecosystems reducing risk and accelerating patient outcomes.",
    stat: "62%",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    tags: ["AI Trials", "Remote Care", "Predictive Insights"],
  },
  {
    id: "regulatory-affairs",
    title: "Regulatory Affairs",
    description:
      "Building intelligent compliance systems for future-ready healthcare organizations.",
    stat: "45%",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    tags: ["Compliance", "Automation", "Global Standards"],
  },
  {
    id: "pharmacovigilance",
    title: "Pharmacovigilance",
    description:
      "Detecting signals faster with next-generation safety intelligence.",
    stat: "30%",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
    tags: ["Drug Safety", "Signal Detection", "Monitoring"],
  },
  {
    id: "data-tech",
    title: "Data & Technology",
    description:
      "Transforming healthcare with scalable cloud and data infrastructure.",
    stat: "80%",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&q=80",
    tags: ["Cloud Systems", "AI Analytics", "Big Data"],
  },
];

export default function VisionSectionRevamp() {
  const [active, setActive] = useState("clinical-research");

  return (
    <section className="relative overflow-hidden bg-[#f8f8f4] text-[#111111] py-32 md:py-40 px-6 md:px-10">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#d7f0ff] opacity-70 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] rounded-full bg-[#ffe1cc] opacity-70 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(0,0,0,0.6) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end mb-28">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-14 h-[1px] bg-black/60" />

              <span className="uppercase tracking-[5px] text-[11px] font-semibold text-black/40">
                Healthcare Vision
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-semibold leading-[1.05] tracking-tight max-w-5xl">
              Creating
              <span className="italic font-light text-black/30">
                {" "}
                intelligent
              </span>
              <br />
              healthcare systems for a more human future.
            </h2>
          </div>

          <div className="lg:pl-20 lg:border-l border-black/10">
            <p className="text-lg leading-9 text-black/55 max-w-md">
              A premium editorial-inspired experience blending healthcare,
              artificial intelligence, and modern interaction design into one
              seamless ecosystem.
            </p>
          </div>
        </div>

        {/* Bento Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto lg:auto-rows-[220px]">
          {visionData.map((item, index) => {
            const isActive = active === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActive(item.id)}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-[38px] cursor-pointer group border border-black/5 bg-white ${
                  index === 0
                    ? "lg:col-span-7 lg:row-span-2"
                    : index === 1
                    ? "lg:col-span-5 lg:row-span-2"
                    : index === 2
                    ? "lg:col-span-5 lg:row-span-2"
                    : "lg:col-span-7 lg:row-span-2"
                } ${
                  isActive
                    ? "shadow-[0_30px_120px_rgba(0,0,0,0.12)]"
                    : "hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                }`}
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
                        ? "bg-gradient-to-br from-black/70 via-black/30 to-black/10"
                        : "bg-gradient-to-br from-black/55 via-black/15 to-transparent"
                    }`}
                  />
                </div>

                {/* Floating Number */}
                <div className="absolute top-7 right-7 text-white/15 text-6xl md:text-7xl font-bold tracking-[-4px] z-20">
                  0{index + 1}
                </div>

                {/* Main Content */}
                <div className="relative z-20 flex flex-col justify-between h-full p-8 md:p-10 text-white">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-5">
                        <div className="w-2 h-2 rounded-full bg-[#6ee7b7]" />
                        <span className="text-[10px] uppercase tracking-[3px] text-white/70 font-medium">
                          Healthcare Division
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-1px] md:tracking-[-3px] leading-[0.95] max-w-xl">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`min-w-[74px] h-[74px] rounded-full backdrop-blur-xl flex items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? "bg-white text-black border-white rotate-45"
                          : "bg-white/10 border-white/10"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M8 7H17V16" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <div className="flex items-end justify-between gap-6 mb-8">
                      <div>
                        <p className="text-white/60 leading-7 max-w-lg text-sm md:text-base mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-xs uppercase tracking-[2px] text-white/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hidden md:block text-right">
                        <div className="text-6xl md:text-7xl font-bold tracking-[-4px] leading-none">
                          {item.stat}
                        </div>

                        <p className="text-white/50 uppercase tracking-[3px] text-[10px] mt-3">
                          Performance Growth
                        </p>
                      </div>
                    </div>

                    {/* Expanded Preview */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.45 }}
                          className="border-t border-white/10 pt-6 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-lg">
                              AI
                            </div>

                            <div>
                              <p className="text-white/40 uppercase tracking-[3px] text-[10px] mb-2">
                                Strategic Vision
                              </p>

                              <h4 className="text-lg md:text-xl font-semibold max-w-md leading-snug">
                                Building scalable healthcare ecosystems focused on speed, empathy, and precision.
                              </h4>
                            </div>
                          </div>

                          <button className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium hover:gap-5 transition-all duration-500">
                            Explore

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4"
                            >
                              <path d="M7 17L17 7" />
                              <path d="M8 7H17V16" />
                            </svg>
                          </button>
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
