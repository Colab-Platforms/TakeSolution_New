"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const missionPoints = [
  "Data-Driven Healthcare Ecosystem",
  "Real-Time Clinical Insights",
  "Accelerated Research & Innovation",
  "Global Healthcare Impact",
];

export default function Mission() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* IMAGE COLLAGE LEFT */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="Mission Main"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute bottom-[10%] -right-4 md:-right-16 w-1/3 aspect-square rounded-[20px] md:rounded-[30px] overflow-hidden border-4 md:border-8 border-black shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
                  alt="Mission Detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* CONTENT RIGHT */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-white leading-relaxed mb-10">
                To build a connected, data-driven healthcare ecosystem where 
                decisions are guided by real-time insights and clinical research 
                is accelerated. We strive to empower life sciences companies 
                with precision-driven solutions that improve patient outcomes 
                globally.
              </p>

              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{point}</span>
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
