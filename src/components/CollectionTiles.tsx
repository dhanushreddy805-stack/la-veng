"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const COLLECTIONS = [
  {
    id: "chapter-1",
    title: "CHAPTER I",
    subtitle: "AWAKENING",
    description: "The first fracture. A collection born from the tension between order and chaos.",
    image: "/images/carousel/product_3.png", // Placeholder
    align: "left"
  },
  {
    id: "chapter-2",
    title: "CHAPTER II",
    subtitle: "OBSIDIAN",
    description: "Embracing the shadows. Heavyweights and structured silhouettes for the modern era.",
    image: "/images/carousel/product_1.png", // Placeholder
    align: "right"
  }
];

export default function CollectionTiles() {
  return (
    <section className="w-full bg-[#0B0A08] py-32 text-[#F1ECE3]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-24 px-4 sm:px-8">
        {COLLECTIONS.map((col, i) => (
          <motion.div 
            key={col.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${col.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} bg-[#1C181B] rounded-[2.5rem] overflow-hidden min-h-[600px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] border border-white/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]`}
          >
            {/* Image side */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full bg-[#2A2528] flex items-center justify-center p-12 overflow-hidden">
               {/* Background texture/blur */}
               <Image src={col.image} alt={col.title} fill className="object-cover opacity-20 blur-xl scale-110" />
               {/* Subject */}
               <Image src={col.image} alt={col.title} width={400} height={500} className="relative z-10 object-contain drop-shadow-2xl" />
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 relative">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#7E1424] mb-4">{col.title}</span>
              <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-[0.9]">{col.subtitle}</h2>
              <p className="text-[#9C9A96] font-body text-lg leading-relaxed mb-10 max-w-md">
                {col.description}
              </p>
              <div>
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-[#F1ECE3] text-[#0B0A08] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                  Explore Drop
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
