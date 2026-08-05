"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Downward moving subtle vertical light streaks */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#8B0000] to-transparent h-[40vh]"
            style={{
              left: `${15 + i * 14}%`,
            }}
            animate={{
              y: ["-100%", "200%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 7 + (i % 3) * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2,
            }}
          />
        ))}
      </div>

      {/* Floating ambient particles moving top to bottom */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-[#8B0000] blur-[1px]"
            style={{
              width: `${2 + (i % 3) * 2}px`,
              height: `${2 + (i % 3) * 2}px`,
              left: `${8 + (i * 7.5) % 85}%`,
            }}
            animate={{
              y: ["-10vh", "110vh"],
              x: [0, (i % 2 === 0 ? 15 : -15)],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + (i % 4) * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Subtle top-to-bottom dark gradient fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/60" />
    </div>
  );
}
