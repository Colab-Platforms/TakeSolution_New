"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Search, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Handshake 
} from "lucide-react";

const steps = [
  {
    title: "Submit Application",
    description: "Fill out our streamlined form focusing on your vision and clinical impact.",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    title: "Initial Screening",
    description: "Our investment team reviews your submission for strategic alignment.",
    icon: Search,
    color: "bg-indigo-500",
  },
  {
    title: "Founder Discussion",
    description: "A deep dive into your roadmap, team dynamics, and market positioning.",
    icon: MessageSquare,
    color: "bg-purple-500",
  },
  {
    title: "Technical & Clinical Review",
    description: "Rigorous validation of your technology and clinical viability by experts.",
    icon: ShieldCheck,
    color: "bg-pink-500",
  },
  {
    title: "Investment Committee",
    description: "Final evaluation by our committee for capital allocation and strategic fit.",
    icon: Users,
    color: "bg-rose-500",
  },
  {
    title: "Partnership & Onboarding",
    description: "Welcome to the TAKE network. We begin our journey to scale your impact.",
    icon: Handshake,
    color: "bg-teal-500",
  },
];

export default function InvestmentProcess() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden" id="process">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.25em] uppercase text-navy-500 font-bold mb-4 block"
          >
            The Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-navy-950 text-4xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Our Investment <span className="text-navy-400 italic font-light">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy-600 text-lg leading-relaxed"
          >
            We've refined our pipeline to ensure transparency and speed, 
            respecting the most valuable resource you have: your time.
          </motion.p>
        </div>

        {/* Desktop Horizontal Flow */}
        <div className="hidden lg:block relative mt-32">
          {/* Connection Line - Positioned to align with icons */}
          <div className="absolute top-8 left-0 w-full h-1 bg-navy-100 z-0" />
          
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-${step.color.split('-')[1]}-200/50 group-hover:scale-110 transition-transform duration-300 relative bg-white`}>
                  <div className={`absolute inset-0 ${step.color} rounded-2xl`} />
                  <step.icon className="w-8 h-8 relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-4 border-navy-50 flex items-center justify-center text-navy-900 text-xs font-bold shadow-sm z-20">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="mt-8 text-navy-950 font-bold text-center text-sm uppercase tracking-wider mb-3 px-2">
                  {step.title}
                </h3>
                <p className="text-navy-500 text-xs leading-relaxed text-center px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-12 relative">
          {/* Vertical Connection Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-navy-100 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-8 relative z-10"
            >
              <div className={`w-12 h-12 flex-shrink-0 ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg relative`}>
                <step.icon className="w-6 h-6" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-navy-50 flex items-center justify-center text-navy-900 text-[10px] font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1 pt-1">
                <h3 className="text-navy-950 font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-8 lg:p-12 rounded-[3rem] bg-navy-950 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-4">Ready to start the journey?</h4>
            <p className="text-navy-300 max-w-xl mx-auto mb-8">
              Typically, our process from submission to final decision takes between 4 to 8 weeks depending on technical complexity.
            </p>
            <a 
              href="#apply" 
              className="inline-flex h-12 items-center justify-center px-8 font-bold text-navy-950 bg-teal-400 rounded-xl hover:bg-teal-300 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
