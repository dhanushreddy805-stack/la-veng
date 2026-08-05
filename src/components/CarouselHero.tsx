"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";

const IMAGES = [
  { id: 0, src: "/images/carousel/image_1.png", bg: "#0B0A08", panel: "#1C181B" },
  { id: 1, src: "/images/carousel/image_2.png", bg: "#1A1112", panel: "#2A1A1E" },
  { id: 2, src: "/images/carousel/image_3.png", bg: "#121210", panel: "#1F1E1B" },
  { id: 3, src: "/images/carousel/image_4.png", bg: "#1C181B", panel: "#282428" },
];

export default function CarouselHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useMobile(640);

  useEffect(() => {
    IMAGES.forEach((img) => {
      const image = new window.Image();
      image.src = img.src;
    });
  }, []);

  const navigate = useCallback((direction: "next" | "prev") => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => {
      if (direction === "next") return (prev + 1) % 4;
      return (prev + 3) % 4;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating]);

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const getRole = (index: number) => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex + 3) % 4) return "left";
    if (index === (activeIndex + 1) % 4) return "right";
    return "back";
  };

  const variants = {
    center: {
      x: "-50%",
      left: "50%",
      scale: isMobile ? 1.15 : 1.4,
      filter: "blur(0px)",
      opacity: 1,
      zIndex: 20,
      height: isMobile ? "65%" : "95%",
      bottom: isMobile ? "15%" : "0%",
    },
    left: {
      x: "-50%",
      left: isMobile ? "15%" : "25%",
      scale: 0.9,
      filter: "blur(4px)",
      opacity: 0.4,
      zIndex: 10,
      height: isMobile ? "16%" : "28%",
      bottom: isMobile ? "32%" : "12%",
    },
    right: {
      x: "-50%",
      left: isMobile ? "85%" : "75%",
      scale: 0.9,
      filter: "blur(4px)",
      opacity: 0.4,
      zIndex: 10,
      height: isMobile ? "16%" : "28%",
      bottom: isMobile ? "32%" : "12%",
    },
    back: {
      x: "-50%",
      left: "50%",
      scale: 0.8,
      filter: "blur(8px)",
      opacity: 0,
      zIndex: 5,
      height: isMobile ? "13%" : "22%",
      bottom: isMobile ? "32%" : "12%",
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden font-body"
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        transition: "background-color 800ms cubic-bezier(0.22,1,0.36,1)"
      }}
    >
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-50 opacity-35"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat"
        }}
      />

      {/* Giant Ghost Text */}
      <div 
        className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2]"
        style={{ top: "18%" }}
      >
        <span 
          className="font-display italic font-black uppercase whitespace-nowrap opacity-[0.03]"
          style={{
            color: "var(--color-brand-white)",
            fontSize: "clamp(90px, 26vw, 380px)",
            lineHeight: 1,
            letterSpacing: "-0.02em"
          }}
        >
          FRACTURE
        </span>
      </div>

      {/* Top Left Brand Label */}
      <div className="absolute top-6 left-4 sm:top-8 sm:left-8 z-[60]">
        <span 
          className="font-mono text-xs font-medium uppercase"
          style={{ color: "var(--color-brand-beige)", letterSpacing: "0.2em" }}
        >
          LA VENGEANCE
        </span>
      </div>

      {/* Carousel Layers */}
      <div className="absolute inset-0 z-[3]">
        {IMAGES.map((img, i) => {
          const role = getRole(i);
          return (
            <motion.div
              key={img.id}
              className="absolute flex justify-center items-end"
              style={{
                aspectRatio: "0.6 / 1",
                willChange: "transform, filter, opacity"
              }}
              initial={false}
              animate={variants[role]}
              transition={{
                duration: 0.8,
                ease: easeCurve
              }}
            >
              <Image 
                src={img.src}
                alt={`Collection item ${i + 1}`}
                fill
                priority={role === "center" || role === "right" || role === "left"}
                className="object-contain object-bottom select-none pointer-events-none"
                draggable={false}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Left Content & Nav Buttons */}
      <div className="absolute bottom-6 left-4 sm:bottom-16 sm:left-16 z-[60] max-w-[380px]">
        <h2 
          className="font-display text-lg sm:text-[24px] opacity-95 mb-2 sm:mb-4 uppercase"
          style={{ color: "var(--color-brand-white)", letterSpacing: "0.02em" }}
        >
          CHAPTER I — AWAKENING
        </h2>
        <p 
          className="hidden sm:block font-body text-sm leading-[1.6] mb-6 sm:mb-8"
          style={{ color: "var(--color-brand-stone)" }}
        >
          From the fractures, something stirs — not destruction, but rebirth. A structure built on silence, finally beginning to crack. Own the fracture.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("prev")}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border bg-transparent flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
            style={{ 
              borderColor: "var(--color-brand-charcoal)", 
              color: "var(--color-brand-white)" 
            }}
            aria-label="Previous image"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => navigate("next")}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border bg-transparent flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
            style={{ 
              borderColor: "var(--color-brand-charcoal)", 
              color: "var(--color-brand-white)" 
            }}
            aria-label="Next image"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Bottom Right CTA Link */}
      <div className="absolute bottom-6 right-4 sm:bottom-16 sm:right-16 z-[60]">
        <Link 
          href="/"
          className="flex items-center gap-3 font-mono text-sm sm:text-base font-medium uppercase transition-colors duration-300"
          style={{ color: "var(--color-brand-white)" }}
        >
          SHOP THE DROP
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
