"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PRODUCTS = [
  { 
    id: 1, 
    name: "THE AWAKENING TEE", 
    price: "799", 
    img1: "/images/carousel/product_1.png", 
    img2: "/images/carousel/product_2.png" 
  },
  { 
    id: 2, 
    name: "OBSIDIAN HOODIE", 
    price: "899", 
    img1: "/images/carousel/product_2.png", 
    img2: "/images/carousel/product_1.png" 
  },
  { 
    id: 3, 
    name: "FRACTURED SOUL JACKET", 
    price: "999", 
    img1: "/images/carousel/product_3.png", 
    img2: "/images/carousel/product_4.png" 
  },
  { 
    id: 4, 
    name: "ECLIPSE LONG SLEEVE", 
    price: "749", 
    img1: "/images/carousel/product_4.png", 
    img2: "/images/carousel/product_3.png" 
  },
];

export default function LatestDropRail() {
  return (
    <section className="w-full bg-[#0B0A08] py-32 px-4 sm:px-8 text-[#F1ECE3]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-none">Latest Drop</h2>
          <a href="#" className="font-mono text-xs uppercase tracking-widest hover:text-white/70 transition-colors border-b border-[#F1ECE3]/30 pb-1 mb-2">View All →</a>
        </div>
        
        {/* Scrollable on mobile, grid on desktop */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
          {PRODUCTS.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer flex-shrink-0 w-[85vw] sm:w-[300px] lg:w-auto snap-center flex flex-col"
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[4/5] bg-[#1C181B] rounded-[2rem] overflow-hidden mb-5 shadow-2xl border border-white/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                <Image src={item.img1} alt={item.name} fill className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
                <Image src={item.img2} alt={item.name} fill className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Quick Add overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                  <button className="w-full bg-[#F1ECE3] text-[#0B0A08] font-bold text-xs uppercase py-3 rounded-full hover:bg-white transition-colors shadow-xl">
                    Quick Add
                  </button>
                </div>
              </div>
              
              {/* Meta */}
              <div className="flex justify-between items-start px-1">
                <h3 className="font-body font-bold text-sm uppercase tracking-wide">{item.name}</h3>
                <span className="font-mono text-sm">₹{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
