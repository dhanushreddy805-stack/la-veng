"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroSplashProps {
  onComplete?: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sequence timing matching video:
    // 0s-1.2s: V logo reveals + red splash animation
    // 1.2s-2.2s: LA VENGEANCE text reveals
    // 2.8s: Start fade out overlay
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(12px)",
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          {/* INTENSE CRIMSON RED SPLASH AT BOTTOM (Matching Video Frame 00:00) */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-t from-[#8B0000] via-[#8B0000]/50 to-transparent blur-[40px] pointer-events-none"
          />

          {/* FIERY CRIMSON SIDE SPLASH FLARES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1.1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full bg-[#ff0000]/40 blur-[100px] pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1.1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
            className="absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full bg-[#ff0000]/40 blur-[100px] pointer-events-none"
          />

          {/* RADIAL CENTER CRIMSON EMBLEM GLOW */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute w-[600px] h-[600px] rounded-full bg-radial from-[#8B0000]/60 via-[#8B0000]/25 to-transparent blur-[90px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center gap-6">
            {/* Winged V Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 drop-shadow-[0_0_45px_rgba(255,255,255,0.6)]"
            >
              <Image
                src="/logo.svg"
                alt="LA VENGEANCE Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Typography LA VENGEANCE Fade & Expand */}
            <motion.div
              initial={{ opacity: 0, y: 15, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.5em" }}
              transition={{ duration: 1.1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-[0.5em] font-semibold text-center pl-[0.5em] drop-shadow-[0_4px_12px_rgba(139,0,0,0.8)]"
            >
              LA VENGEANCE
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
