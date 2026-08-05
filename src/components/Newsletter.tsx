"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    setLoading(true);
    try {
      // simulate API call
      await new Promise((res) => setTimeout(res, 800));
      alert("You've entered The Private Circle.");
      setEmail("");
    } catch (err) {
      alert("Subscription failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      data-testid="newsletter-section"
      className="relative bg-transparent py-24 md:py-36 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#8B0000] blur-[120px]" />
      </div>
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <div className="rounded-3xl border border-white/10 bg-[#0f0f0f]/60 backdrop-blur-md p-10 sm:p-14 md:p-20 shadow-2xl">
          <div className="font-mono-accent text-[#8B0000] mb-8">Stay Connected</div>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[1.05] mb-8">
            Enter the
            <br />
            <span className="italic">Private Circle.</span>
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-14 leading-relaxed">
            First access to chapters, drops, and private journals. Once a chapter — never more.
          </p>

          <form
            onSubmit={onSubmit}
            data-testid="newsletter-form"
            className="max-w-lg mx-auto flex items-center gap-4 border-b border-white/20 focus-within:border-[#8B0000] transition-colors duration-500"
          >
            <input
              data-testid="newsletter-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent py-4 outline-none text-white font-light tracking-widest placeholder:text-white/30 placeholder:uppercase placeholder:text-xs placeholder:tracking-[0.2em]"
            />
            <button
              type="submit"
              data-testid="newsletter-submit"
              disabled={loading}
              className="font-mono-accent text-white/70 hover:text-[#8B0000] transition-colors flex items-center gap-2 py-4 cursor-pointer"
            >
              {loading ? "..." : "Subscribe"}
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
