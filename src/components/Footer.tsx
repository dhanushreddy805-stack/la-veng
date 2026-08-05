"use client";

import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

const FOOTER_SECTIONS: Record<string, { title: string; content: string }> = {
  returns: {
    title: "Returns & Exchanges",
    content: "Returns are accepted only for damaged or incorrect products within 48 hours of delivery. Items must be unworn, with all original tags intact.",
  },
  refund: {
    title: "Refund Policy",
    content: "Approved refunds are processed within 7–10 business days after inspection. Refunds are issued to the original payment method.",
  },
  track: {
    title: "Track Your Order",
    content: "Tracking details are shared via SMS and email after dispatch. You can also reach our Client Services team for live updates.",
  },
  shipping: {
    title: "Shipping Policy",
    content: "Orders are processed within 1–2 working days and delivered within 5–7 business days across India. International shipping arrives in 10–14 days.",
  },
  faq: {
    title: "FAQ & Support",
    content: "Client Services assists with orders, shipping, exchanges, and any support inquiries. Reach us via WhatsApp or email — we typically reply within 12 hours.",
  },
  terms: {
    title: "Terms of Service",
    content: "By purchasing from LA VENGEANCE, you agree to our terms regarding payments, product availability, and intellectual property rights.",
  },
  india: {
    title: "Crafted In India",
    content: "LA VENGEANCE is proudly crafted in India with attention to timeless craftsmanship, ethically sourced fabrics, and premium construction.",
  },
  collab: {
    title: "Collaborations",
    content: "We selectively collaborate with creatives and visionaries aligned with our philosophy of refinement and transformation. Reach us at collab@lavengeance.com",
  },
  careers: {
    title: "Careers",
    content: "Future opportunities with LA VENGEANCE will be announced officially through this page and our Instagram channel.",
  },
  privacy: {
    title: "Privacy Policy",
    content: "Your data and transactions are handled securely with complete privacy responsibility. We never sell or share your information.",
  },
  blogs: {
    title: "Editorial & Blogs",
    content: "Explore chapter narratives, creative philosophy, and editorial storytelling from LA VENGEANCE — coming soon.",
  },
};

interface FooterLinkProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
}

const FooterLinkButton = ({ id, label, onClick }: FooterLinkProps) => (
  <button
    onClick={() => onClick(id)}
    className="text-left text-white/50 hover:text-[#8B0000] transition-colors duration-300 text-sm"
  >
    {label}
  </button>
);

export default function Footer() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const activeSection = activeModalId ? FOOTER_SECTIONS[activeModalId] : null;

  return (
    <footer className="relative bg-[#050505] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Column 1: Connect With Us */}
          <div className="md:col-span-4">
            <div className="font-mono-accent text-[#8B0000] mb-6">Connect With Us</div>
            <div className="space-y-3">
              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone size={14} strokeWidth={1.4} /> Call Client Services
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <MessageCircle size={14} strokeWidth={1.4} /> Text (WhatsApp)
              </a>
              <a
                href="https://instagram.com/lavengeance"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com/@lavengeance"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
              <a
                href="https://linkedin.com/company/lavengeance"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 2: Order Support */}
          <div className="md:col-span-4">
            <div className="font-mono-accent text-[#8B0000] mb-6">Order Support</div>
            <div className="flex flex-col gap-3">
              <FooterLinkButton id="returns" label="Returns & Exchanges Within 48 Hours" onClick={setActiveModalId} />
              <FooterLinkButton id="refund" label="Refund / Exchange Policy" onClick={setActiveModalId} />
              <FooterLinkButton id="track" label="Track Your Order" onClick={setActiveModalId} />
              <FooterLinkButton id="shipping" label="Shipping Policy • 5–7 Business Days" onClick={setActiveModalId} />
              <FooterLinkButton id="faq" label="FAQ's & Client Services" onClick={setActiveModalId} />
              <FooterLinkButton id="terms" label="Terms" onClick={setActiveModalId} />
            </div>
          </div>

          {/* Column 3: We Are LA VENGEANCE */}
          <div className="md:col-span-4">
            <div className="font-mono-accent text-[#8B0000] mb-6">We Are LA VENGEANCE</div>
            <div className="flex flex-col gap-3">
              <FooterLinkButton id="india" label="Crafted In India" onClick={setActiveModalId} />
              <FooterLinkButton id="collab" label="Collaborations" onClick={setActiveModalId} />
              <FooterLinkButton id="careers" label="Careers" onClick={setActiveModalId} />
              <FooterLinkButton id="privacy" label="Terms & Privacy" onClick={setActiveModalId} />
              <FooterLinkButton id="blogs" label="Blogs" onClick={setActiveModalId} />
            </div>
          </div>
        </div>

        {/* GIANT WATERMARK BRANDING */}
        <div className="border-t border-white/10 pt-16 pb-4">
          <h3 className="font-serif text-6xl sm:text-8xl lg:text-[10rem] tracking-tighter text-center leading-none text-white/80 select-none">
            LA VENGEANCE
          </h3>
          <p className="text-center font-mono-accent text-white/40 mt-8">
            Chapter 1 — Awakening · Designed to last beyond trends.
          </p>
          <p className="text-center text-white/30 text-xs mt-3">
            © {new Date().getFullYear()} LA VENGEANCE. All rights reserved. www.lavengeance.com
          </p>
        </div>
      </div>

      {/* Interactive Policy Modal */}
      {activeSection && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm px-6"
          onClick={() => setActiveModalId(null)}
        >
          <div
            className="relative bg-[#0f0f0f] border border-white/10 max-w-xl w-full p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalId(null)}
              className="absolute top-5 right-5 text-white/40 hover:text-[#8B0000] transition-colors"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>
            <div className="font-mono-accent text-[#8B0000] mb-2">LA Vengeance</div>
            <h4 className="font-serif text-xl text-white mb-4">{activeSection.title}</h4>
            <p className="text-white/80 leading-relaxed text-sm font-light">{activeSection.content}</p>
          </div>
        </div>
      )}
    </footer>
  );
}
