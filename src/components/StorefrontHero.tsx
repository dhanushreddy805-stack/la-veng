"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

interface HeroSlide {
  id: number;
  slug: string;
  numberStr: string;
  tabTitle: string;
  chapter: string;
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  imageSrc: string;
  bgSrc: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    slug: "the-fractured-core",
    numberStr: "01",
    tabTitle: "THE FRACTURED CORE",
    chapter: "CHAPTER I",
    title1: "THE",
    title2: "FRACTURED",
    title3: "CORE",
    subtitle: "FROM THE FRACTURES, SOMETHING STIRS NOT DESTRUCTION, BUT REBIRTH",
    imageSrc: "/images/products/1.png",
    bgSrc: "/images/products/bg1.png",
  },
  {
    id: 2,
    slug: "the-halo-of-fracture",
    numberStr: "02",
    tabTitle: "THE HALO OF FRACTURE",
    chapter: "CHAPTER I",
    title1: "THE",
    title2: "HALO OF",
    title3: "FRACTURE",
    subtitle: "EVEN PURITY MUST SHATTER TO REMEMBER IT WAS ALIVE",
    imageSrc: "/images/products/2.png",
    bgSrc: "/images/products/bg2.png",
  },
  {
    id: 3,
    slug: "every-scar-tells-a-story",
    numberStr: "03",
    tabTitle: "EVERY SCAR TELLS A STORY",
    chapter: "CHAPTER I",
    title1: "EVERY SCAR",
    title2: "TELLS A",
    title3: "STORY",
    subtitle: "EVERY SCAR IS A SENTENCE IN THE STORY OF WHO WE BECAME",
    imageSrc: "/images/products/3.png",
    bgSrc: "/images/products/bg3.png",
  },
  {
    id: 4,
    slug: "the-awakened-one",
    numberStr: "04",
    tabTitle: "THE AWAKENED ONE",
    chapter: "CHAPTER I",
    title1: "THE",
    title2: "AWAKENED",
    title3: "ONE",
    subtitle: "A SYMBOL OF WHO YOU'RE BECOMING",
    imageSrc: "/images/products/4.png",
    bgSrc: "/images/products/bg4.png",
  },
];

export default function StorefrontHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll loop (4.5s per slide)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const activeSlide = HERO_SLIDES[activeIndex];

  return (
    <div className="w-full bg-transparent text-white flex flex-col items-center select-none pt-14 md:pt-16">
      {/* HERO CONTAINER CANVAS */}
      <div className="w-full">
        <div
          className="relative w-full flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* CANVAS BODY */}
          <div className="relative w-full h-[580px] sm:h-[650px] md:h-[700px] flex items-center justify-between px-8 sm:px-16 overflow-hidden">



            {/* LEFT OVERLAY CONTENT */}
            <div className="relative z-10 max-w-lg flex flex-col items-start pt-4 sm:pt-0">

              {/* Chapter label with editorial line prefix */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1px] bg-[#8B0000]" />
                <span className="font-mono-accent text-[#8B0000] text-[11px] tracking-[0.3em] uppercase">
                  {activeSlide.chapter}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-title-${activeSlide.id}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col mb-5"
                >
                  <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white font-normal leading-[0.95]">
                    {activeSlide.title1}
                  </h2>
                  <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white font-normal leading-[0.95]">
                    {activeSlide.title2}
                  </h2>
                  <div className="flex flex-col items-start mt-1">
                    <h2
                      className="font-serif text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight font-normal leading-[0.95]"
                      style={{
                        color: "#8B0000",
                        textShadow: "0 0 40px rgba(139,0,0,0.5), 0 0 80px rgba(139,0,0,0.2)",
                      }}
                    >
                      {activeSlide.title3}
                    </h2>
                    {/* Animated underline */}
                    <motion.div
                      key={`underline-${activeSlide.id}`}
                      initial={{ width: 0 }}
                      animate={{ width: "3.5rem" }}
                      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                      className="h-[2px] bg-[#8B0000] mt-3 rounded-full shadow-[0_0_10px_#8B0000]"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`hero-sub-${activeSlide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="font-mono-accent text-[11px] sm:text-xs text-white/50 tracking-[0.25em] uppercase leading-relaxed max-w-xs mb-9"
                >
                  {activeSlide.subtitle}
                </motion.p>
              </AnimatePresence>

              {/* Editorial CTA button */}
              <Link href={`/product/${activeSlide.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.03, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3 bg-[#8B0000]/10 hover:bg-[#8B0000]/20 border border-[#8B0000]/50 hover:border-[#8B0000] text-white pl-0 pr-6 py-3.5 rounded-full font-mono-accent text-[11px] tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(139,0,0,0.15)] hover:shadow-[0_0_30px_rgba(139,0,0,0.35)]">
                    {/* Red pill accent on left */}
                    <div className="w-10 h-10 rounded-full bg-[#8B0000] group-hover:bg-[#a00000] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-[0_0_12px_rgba(139,0,0,0.6)]">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <span>EXPLORE {activeSlide.tabTitle}</span>
                  </div>
                </motion.button>
              </Link>
            </div>

            {/* CENTER MODEL IMAGE */}
            <div className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`model-img-${activeSlide.id}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-[320px] sm:w-[440px] md:w-[520px] h-[460px] sm:h-[540px] md:h-[600px] flex justify-center items-center pointer-events-auto cursor-pointer"
                >
                  <Link href={`/product/${activeSlide.slug}`} className="relative w-full h-full block">
                    <Image
                      src={activeSlide.imageSrc}
                      alt={activeSlide.tabTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-contain object-center drop-shadow-[0_25px_45px_rgba(139,0,0,0.65)] hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE VERTICAL SLIDER */}
            <div className="relative z-20 flex flex-col items-center gap-3 py-4">
              <span className="font-serif text-sm tracking-widest text-white font-medium">
                {activeSlide.numberStr}
              </span>

              <div className="w-[2px] h-28 bg-white/10 relative rounded-full overflow-hidden">
                <motion.div
                  className="w-full bg-[#8B0000] rounded-full shadow-[0_0_8px_#8B0000]"
                  animate={{
                    height: `${((activeIndex + 1) / HERO_SLIDES.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>

              <span className="font-serif text-sm tracking-widest text-gray-500">
                04
              </span>
            </div>
          </div>

          {/* ATTACHED BOTTOM CHAPTER / PRODUCT NAVIGATION BAR */}
          <div className="w-full max-w-[1380px] mx-auto bg-[#0f0f0f]/80 border border-white/10 rounded-2xl px-4 sm:px-8 py-3.5 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar z-30 backdrop-blur-xl -mt-10 sm:-mt-14 shadow-2xl">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-mono-accent transition-all duration-300 whitespace-nowrap ${isActive ? "text-white font-semibold" : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                  <span className={isActive ? "text-[#8B0000] font-bold" : "text-gray-500"}>
                    {slide.numberStr}
                  </span>
                  <span>{slide.tabTitle}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeHeroTab"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#8B0000] rounded-full shadow-[0_0_8px_#8B0000]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
