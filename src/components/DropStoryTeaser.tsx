"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DropStoryTeaser() {
  return (
    <section className="w-full bg-[#0B0A08] py-32 px-4 sm:px-8 text-[#F1ECE3]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-[1400px] mx-auto bg-[#1C181B] flex flex-col md:flex-row overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] border border-white/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]" 
      >
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-start">
           <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-[0.9]">
             Chapter I <br/>
             <span className="italic text-[#9C9A96]">Awakening</span>
           </h2>
           <p className="text-[#F1ECE3]/80 font-body text-lg leading-relaxed mb-12 max-w-md">
             The garments are an armor. A structure built on silence, finally beginning to crack. Welcome to the first era of vengeance.
           </p>
           <a href="#" className="font-mono text-sm uppercase tracking-widest border-b border-[#7E1424] pb-1 hover:text-[#7E1424] transition-colors">
             Read The Story →
           </a>
        </div>
        
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] bg-[#0B0A08] flex items-center justify-center p-12">
           <Image src="/images/carousel/product_4.png" alt="Awakening Story" fill className="object-cover opacity-30" />
           {/* Oxblood tint overlay at 20% */}
           <div className="absolute inset-0 bg-[#7E1424] opacity-20 mix-blend-multiply pointer-events-none"></div>
           <Image src="/images/carousel/product_4.png" alt="Awakening Story" width={400} height={500} className="relative z-10 object-contain drop-shadow-2xl grayscale contrast-125" />
        </div>
      </motion.div>
    </section>
  );
}
