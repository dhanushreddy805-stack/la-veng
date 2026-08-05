"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

const HERO_IMG =
  "https://images.unsplash.com/photo-1634733049839-0292be607569?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxtb29keSUyMGNpbmVtYXRpYyUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODA5MjU1MTZ8MA&ixlib=rb-4.1.0&q=85";

const Hero = () => {
  const scrollToCollection = () => {
    const el = document.getElementById("collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="LA VENGEANCE — Chapter 1: Awakening"
          fill
          className="w-full h-full object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/30 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/40" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 grid md:grid-cols-12 gap-8 pt-32">
            <div className="md:col-span-8 lg:col-span-7">
              <div className="animate-fade-up inline-block bg-[#8B0000] text-white px-3 py-1 font-mono-accent tracking-[0.25em] uppercase text-[11px] mb-8">
                Chapter 1 — Awakening
              </div>
              <h1 className="animate-fade-up-delay-1 font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tighter mb-10">
                Elegance
                <br />
                <span className="italic text-white/70">refined</span>
                <br />
                through
                <br />
                <span className="text-[#8B0000]">adversity.</span>
              </h1>
              <p className="animate-fade-up-delay-2 max-w-md text-white/60 text-base leading-relaxed mb-12 font-light">
                A premium classic-wear chapter shaped by emotion, transformation,
                and the quiet defiance of becoming. Crafted in India.
              </p>
              <div className="animate-fade-up-delay-3 flex items-center gap-6">
                <button
                  data-testid="hero-cta"
                  onClick={scrollToCollection}
                  className="bg-[#8B0000] text-white px-10 py-4 font-mono-accent hover:bg-[#5c0000] transition-colors duration-500 group flex items-center gap-3"
                >
                  Enter the Collection
                  <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
                </button>
                <button
                  data-testid="hero-secondary-cta"
                  onClick={() => {
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-mono-accent text-white/70 hover:text-white link-underline transition-colors"
                >
                  Read the chapter
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full flex items-end justify-between text-white/40">
          <div className="font-mono-accent">Est. MMXXIV · Crafted In India</div>
          <div className="font-mono-accent hidden md:block">Scroll ↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
