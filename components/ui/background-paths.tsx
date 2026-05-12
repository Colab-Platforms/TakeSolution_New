"use client"

import { motion } from "framer-motion"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function BackgroundPaths({
  title = "Background Paths",
  className,
}: {
  title?: string
  className?: string
}) {
  const words = title.split(" ")

  return (
    <div className={cn("relative min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black", className)}>
      {/* Animated Paths */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full text-zinc-100 dark:text-zinc-900/50"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 100 C 20 0 50 0 100 100"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 0 C 30 100 70 100 100 0"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M0 50 Q 50 0 100 50"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white uppercase italic"
        >
          {words.map((word, i) => (
             <span key={i} className={i % 2 === 1 ? "font-light" : ""}>
               {word}{" "}
             </span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto"
        >
          Crafting the future of domain-intensive technology solutions for global enterprises.
        </motion.p>
      </div>
    </div>
  )
}
