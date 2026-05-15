"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const visionPoints = [
  "AI-Driven Diagnostics",
  "Intelligent Digital Innovation",
  "Connected Global Health",
  "Future-Ready Clinical Platforms",
];

export default function Vision() {
  return (
    <section className="py-24 bg-[#f7f5f1] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          {/* IMAGE COLLAGE RIGHT */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
                  alt="Vision Main"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute top-50 -left-20 md:-left-20 w-1/3 md:w-1/3 aspect-square rounded-[30px] overflow-hidden border-8 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=400"
                  alt="Vision Detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* CONTENT LEFT */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                To transform global healthcare through artificial intelligence 
                and intelligent digital innovation. We envision a world where 
                technology eliminates barriers to quality healthcare, creating 
                intelligent platforms that evolve to meet the needs of a 
                changing world.
              </p>

              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
