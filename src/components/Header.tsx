"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingBag, Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Nav Links */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          <button
            onClick={() => scrollTo("collections")}
            className="font-mono-accent text-white/70 link-underline hover:text-white transition-colors"
          >
            Collection
          </button>
          <button
            onClick={() => scrollTo("story")}
            className="font-mono-accent text-white/70 link-underline hover:text-white transition-colors"
          >
            The Brand
          </button>
          <button
            onClick={() => scrollTo("newsletter")}
            className="font-mono-accent text-white/70 link-underline hover:text-white transition-colors"
          >
            Journal
          </button>
        </nav>

        {/* Center Brand Logo with Winged V Emblem */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 font-serif text-lg md:text-xl tracking-[0.3em] text-white hover:text-[#8B0000] transition-colors duration-500 uppercase font-semibold"
          >
            <div className="relative w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/logo.svg"
                alt="LA VENGEANCE"
                fill
                className="object-contain"
              />
            </div>
            <span>LA VENGEANCE</span>
          </button>
        </div>

        {/* Right Cart & Action trigger */}
        <div className="flex items-center justify-end gap-4 flex-1">
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => scrollTo("collections")}
            aria-label="Mobile Menu"
          >
            <Menu size={20} />
          </button>
          <button
            onClick={() => alert("Cart feature active")}
            className="relative group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={1.2} />
            <span className="font-mono-accent text-[10px] hidden md:inline">
              Cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#8B0000] text-white text-[10px] font-mono w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
