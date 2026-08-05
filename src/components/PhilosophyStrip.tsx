"use client";

import { motion } from "framer-motion";

export default function PhilosophyStrip() {
  return (
    <section className="w-full bg-[#0B0A08] py-32 lg:py-48 px-4 sm:px-8 text-[#F1ECE3] flex items-center justify-center">
      <div className="max-w-[1200px] w-full border-y border-[#7E1424] py-24 text-center overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-3xl md:text-5xl lg:text-7xl uppercase tracking-tighter leading-tight"
        >
          "From the fractures,<br className="hidden md:block"/> something stirs — not destruction,<br className="hidden md:block"/> but rebirth."
        </motion.h2>
      </div>
    </section>
  );
}
