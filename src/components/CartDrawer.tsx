"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/store/cart";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeCart]);

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-serif text-2xl">YOUR CART</h2>
              <button
                onClick={closeCart}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/50 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-mono-accent text-sm">Your cart is empty.</p>
                  <button
                    onClick={closeCart}
                    className="mt-4 px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono-accent text-xs uppercase tracking-widest"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    {/* Item Image */}
                    <div className="relative w-24 h-32 bg-[#161616] rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                          <p className="text-white/50 text-sm mt-1">Size: {item.size}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-white/40 hover:text-[#8B0000] transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="mt-auto flex items-end justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 border border-white/20 rounded-full px-3 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-white/60 hover:text-white"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-mono-accent text-sm w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-white/60 hover:text-white"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="font-serif text-lg">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-white/10 p-6 bg-[#050505]">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono-accent text-white/60 text-sm uppercase tracking-widest">
                    Subtotal
                  </span>
                  <span className="font-serif text-2xl">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-white/40 text-xs mb-6 font-mono-accent">
                  Taxes and shipping calculated at checkout.
                </p>
                <button
                  onClick={() => alert("Checkout flow will be connected to Shopify/Gateway here.")}
                  className="w-full bg-white text-black py-4 font-mono-accent text-sm tracking-[0.2em] uppercase hover:bg-[#8B0000] hover:text-white transition-colors duration-300"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
