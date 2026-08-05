"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Sparkles,
  Shirt
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS_DATA, ProductDetail } from "@/data/products";
import { useCartStore } from "@/store/cart";

interface ProductDetailClientProps {
  product: ProductDetail;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"STORY" | "DETAILS" | "SHIPPING" | "RETURNS" | "CARE">("STORY");

  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    // Convert price string (e.g. "₹3,499") to number
    const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);
    
    addItem({
      productId: product.slug,
      name: product.name,
      price: numericPrice,
      image: product.imageSrc,
      size: selectedSize,
      quantity: quantity,
    });
    
    // Automatically open the cart drawer when adding
    openCart();
  };

  // Get other products for "YOU MAY ALSO LIKE"
  const otherProducts = Object.values(PRODUCTS_DATA).filter((p) => p.slug !== product.slug);

  const mainDisplayImage = product.thumbnails[selectedImageIndex] || product.imageSrc;

  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans antialiased relative overflow-hidden select-none">
      {/* PRODUCT SPECIFIC EXCLUSIVE FULL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src={product.bgSrc}
          alt={product.name}
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Dark vignette gradient for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/30 to-[#050505]" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#050505]/80" />
      </div>

      <Header />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-28 md:pt-36 pb-20">
        
        {/* MAIN PRODUCT GRID (THUMBNAILS, CANVAS, RIGHT DETAILS PANEL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* LEFT THUMBNAIL COLUMN (2 cols on lg) */}
          <div className="lg:col-span-1 flex lg:flex-col items-center gap-4 order-2 lg:order-1">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar max-h-[500px]">
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#0f0f0f] border transition-all duration-300 ${
                    selectedImageIndex === idx
                      ? "border-[#8B0000] shadow-[0_0_12px_rgba(139,0,0,0.5)] scale-105"
                      : "border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
            
            <button className="hidden lg:flex w-8 h-8 rounded-full border border-white/10 items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors mt-2">
              <ChevronDown size={18} />
            </button>
          </div>

          {/* CENTER PRODUCT DISPLAY CANVAS (6 cols on lg) */}
          <div className="lg:col-span-6 relative h-[480px] sm:h-[580px] md:h-[650px] flex items-center justify-center order-1 lg:order-2 group">
            
            {/* Main T-Shirt Product Render */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <Image
                src={mainDisplayImage}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 drop-shadow-[0_25px_45px_rgba(139,0,0,0.55)] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT PRODUCT DETAILS & SPECIFICATIONS (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between order-3">
            <div>
              {/* Chapter Tag */}
              <div className="inline-block bg-[#8B0000] text-white px-3 py-1 font-mono-accent tracking-[0.25em] uppercase text-[11px] mb-3">
                {product.chapter}
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-white leading-none mb-3">
                {product.name}
              </h1>

              {/* Tagline */}
              <div className="inline-block bg-[#8B0000] text-white px-3 py-1 font-mono-accent tracking-[0.25em] uppercase text-[11px] mb-6">
                {product.tagline}
              </div>

              {/* Poetic Description Lines */}
              <div className="space-y-1.5 text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-8">
                {product.descriptionLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
                  {product.price}
                </div>
                <div className="font-mono-accent text-[10px] text-gray-400 tracking-[0.15em] uppercase mt-1">
                  INCLUSIVE OF ALL TAXES
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-accent text-xs text-gray-300 tracking-[0.2em]">SIZE</span>
                  <button className="font-mono-accent text-[11px] text-gray-400 underline hover:text-white transition-colors tracking-widest">
                    SIZE GUIDE
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 rounded-lg font-mono-accent text-xs transition-all duration-300 flex items-center justify-center ${
                        selectedSize === size
                          ? "border-2 border-[#8B0000] text-white bg-[#8B0000]/20 shadow-[0_0_10px_rgba(139,0,0,0.4)]"
                          : "border border-white/10 text-gray-400 hover:border-white/30 hover:text-white bg-[#0f0f0f]/60"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="mb-8">
                <div className="font-mono-accent text-xs text-gray-300 tracking-[0.2em] mb-3">QUANTITY</div>
                <div className="inline-flex items-center border border-white/15 rounded-lg bg-[#0f0f0f]/60 px-3 py-1.5 gap-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-gray-400 hover:text-white p-1 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-mono-accent text-sm w-6 text-center text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-gray-400 hover:text-white p-1 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3.5 mb-10">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-[#8B0000] hover:bg-[#a60000] text-white py-4 rounded-xl font-mono-accent text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(139,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(139,0,0,0.6)] active:scale-[0.99] whitespace-nowrap px-2 text-center cursor-pointer"
                >
                  ADD TO BAG
                </button>

                <button 
                  onClick={() => alert(`Proceeding to checkout with ${product.name}`)}
                  className="w-full bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white py-4 rounded-xl font-mono-accent text-xs tracking-[0.2em] uppercase transition-all duration-300 active:scale-[0.99] whitespace-nowrap px-2 text-center cursor-pointer"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER SECTION: LARGE CURVED CONTENT CANVAS (Stacked Top to Bottom) */}
        <div className="mt-16 sm:mt-24 rounded-[27px] bg-[#0f0f0f]/80 border border-white/10 backdrop-blur-xl p-8 sm:p-12 shadow-2xl flex flex-col gap-10">
          
          {/* TOP SECTION: STORY & SPECIFICATIONS TABS (TALL & SPACIOUS) */}
          <div className="w-full min-h-[320px] flex flex-col justify-between">
            {/* Story Tabs Navigation Header */}
            <div className="flex items-center gap-6 sm:gap-8 border-b border-white/10 pb-4 mb-8 overflow-x-auto no-scrollbar">
              {(["STORY", "DETAILS", "SHIPPING", "RETURNS", "CARE"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative font-mono-accent text-xs tracking-[0.2em] transition-colors pb-2 whitespace-nowrap ${
                    activeTab === tab ? "text-white font-semibold" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B0000] shadow-[0_0_8px_#8B0000]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="py-2">
              <div className="space-y-4 text-gray-300 font-light text-sm sm:text-base leading-relaxed min-h-[200px] flex flex-col justify-center">
                {activeTab === "STORY" && (
                  <>
                    {product.storyText.map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed sm:leading-loose">{paragraph}</p>
                    ))}
                  </>
                )}

                {activeTab === "DETAILS" && (
                  <div className="space-y-4 font-mono-accent text-xs sm:text-sm">
                    <p><span className="text-[#8B0000]">FABRIC:</span> {product.details.gsm}</p>
                    <p><span className="text-[#8B0000]">FIT:</span> {product.details.fit}</p>
                    <p><span className="text-[#8B0000]">COMPOSITION:</span> {product.details.material}</p>
                  </div>
                )}

                {activeTab === "SHIPPING" && (
                  <p className="leading-relaxed">Free standard shipping on all domestic orders over ₹2,000. Orders dispatch within 48 hours.</p>
                )}

                {activeTab === "RETURNS" && (
                  <p className="leading-relaxed">Hassle-free 7-day return policy. Items must be unworn with original tags attached.</p>
                )}

                {activeTab === "CARE" && (
                  <p className="leading-relaxed">{product.details.care}</p>
                )}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: "YOU MAY ALSO LIKE" CAROUSEL (COMPACT HEIGHT) */}
          <div className="w-full pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-block bg-[#8B0000] text-white px-3 py-1 font-mono-accent tracking-[0.25em] uppercase text-[11px]">
                YOU MAY ALSO LIKE
              </div>

              {/* Nav buttons */}
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
                  <ChevronLeft size={14} />
                </button>
                <button className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Compact Grid Carousel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherProducts.slice(0, 3).map((item) => (
                <Link
                  key={item.slug}
                  href={`/product/${item.slug}`}
                  className="group relative bg-[#161616]/60 border border-white/10 hover:border-[#8B0000]/60 rounded-xl p-3 flex items-center gap-4 transition-all duration-300 hover:shadow-[0_6px_20px_rgba(139,0,0,0.2)]"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-[#0a0a0a]">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs sm:text-sm text-white uppercase tracking-wider truncate mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-mono-accent text-[11px] text-gray-400">
                        {item.price}
                      </span>
                      <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#8B0000] group-hover:bg-[#8B0000] text-white flex items-center justify-center transition-colors">
                        <Plus size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM TRUST BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 font-mono-accent text-[10px] sm:text-xs text-gray-400 tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Shirt size={14} className="text-[#8B0000]" />
            <span>PREMIUM HEAVYWEIGHT 240 GSM</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Sparkles size={14} className="text-[#8B0000]" />
            <span>OVERSIZED FIT</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <ShieldCheck size={14} className="text-[#8B0000]" />
            <span>100% COTTON</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Truck size={14} className="text-[#8B0000]" />
            <span>SECURE PAYMENTS</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <RotateCcw size={14} className="text-[#8B0000]" />
            <span>7 DAY EASY RETURNS</span>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
