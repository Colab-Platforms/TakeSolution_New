"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Beaker,
  Truck,
  Cpu,
  FileText,
  HeartPulse,
  Database,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    title: "Life Sciences",
    description:
      "Digital transformation solutions for biotech, healthcare, and research organizations.",
    icon: <Beaker className="w-5 h-5" />,
    number: "01",
  },
  {
    title: "Supply Chain",
    description:
      "Intelligent logistics ecosystems designed for speed, compliance, and scalability.",
    icon: <Truck className="w-5 h-5" />,
    number: "02",
  },
  {
    title: "AI & Analytics",
    description:
      "Enterprise-grade AI systems delivering predictive intelligence and automation.",
    icon: <Cpu className="w-5 h-5" />,
    number: "03",
  },
  {
    title: "Regulatory Affairs",
    description:
      "Streamlined regulatory workflows and global compliance infrastructure.",
    icon: <FileText className="w-5 h-5" />,
    number: "04",
  },
  {
    title: "Pharmacovigilance",
    description:
      "Advanced patient safety monitoring with real-time signal detection.",
    icon: <HeartPulse className="w-5 h-5" />,
    number: "05",
  },
  {
    title: "Clinical Data",
    description:
      "Modern clinical data platforms with integrity, governance, and AI assistance.",
    icon: <Database className="w-5 h-5" />,
    number: "06",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#f7f5f1] py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-black/5 ml-[8%]" />
        <div className="absolute right-0 top-0 h-full w-[1px] bg-black/5 mr-[8%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] tracking-[0.35em] uppercase text-black/40 mb-6"
            >
              What We Do
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-0"
            >
              Healthcare
              <br />
              <span className="text-accent">Intelligence</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/50 text-lg leading-relaxed max-w-xl"
          >
            We build deeply integrated systems for modern healthcare,
            life-sciences, and pharmaceutical enterprises — combining
            technology, compliance, and intelligent automation into one unified
            ecosystem.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-black/10">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative min-h-[340px] border-b border-r border-black/10 p-10 bg-transparent hover:bg-black transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 text-[12px] tracking-[0.2em] text-black/30 group-hover:text-white/30 transition-colors duration-500">
                {item.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                {item.icon}
              </div>

              {/* Content */}
              <div className="mt-20">
                <h3 className="text-3xl tracking-[-0.04em] font-semibold text-black group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="mt-5 text-black/50 leading-relaxed text-[15px] group-hover:text-white/60 transition-colors duration-500 max-w-[280px]">
                  {item.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute left-10 bottom-10 flex items-center gap-3 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm text-white/80 tracking-wide">
                  Explore
                </span>

                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}