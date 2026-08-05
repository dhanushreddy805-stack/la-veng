"use client";

import Image from "next/image";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwwfHx8fDE3ODA5MjU1MTZ8MA&ixlib=rb-4.1.0&q=85";

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-transparent py-24 md:py-40 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-6 lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#161616]/40 backdrop-blur-md">
            <Image
              src={ABOUT_IMG}
              alt="LA VENGEANCE — Woven Into Elegance"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/40 via-transparent to-[#8B0000]/10" />
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-7">
          <div className="font-mono-accent text-[#8B0000] mb-8">
            About The Brand
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.05] mb-10">
            Woven into
            <br />
            <span className="italic text-white/70">elegance.</span>
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed max-w-xl">
            <p>
              LA VENGEANCE is a premium classic-wear brand shaped
              by emotion, transformation, and timeless identity —
              a quiet rebellion against the disposable.
            </p>
            <p>
              Every chapter is built around a single feeling. Every
              piece is constructed to last beyond trends — refined,
              intentional, and quietly powerful.
            </p>
            <p className="text-white/50 italic font-serif text-lg">
              &ldquo;Healing itself is a form of vengeance.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg p-6 rounded-2xl border border-white/10 bg-[#0f0f0f]/50 backdrop-blur-md">
            <div>
              <div className="font-serif text-3xl text-[#8B0000]">240</div>
              <div className="font-mono-accent text-white/40 mt-2">GSM Fabric</div>
            </div>
            <div>
              <div className="font-serif text-3xl">100%</div>
              <div className="font-mono-accent text-white/40 mt-2">Classic Cotton</div>
            </div>
            <div>
              <div className="font-serif text-3xl">5–7</div>
              <div className="font-mono-accent text-white/40 mt-2">Day Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
