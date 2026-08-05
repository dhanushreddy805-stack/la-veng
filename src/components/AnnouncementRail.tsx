"use client";

import { motion } from "framer-motion";

const RAIL_CONTENT = [
  "NEW IN : THE FRACTURED CORE",
  "///",
  "CHAPTER I — AWAKENING",
  "///",
  "FROM THE FRACTURES, REBIRTH",
  "///"
];

export default function AnnouncementRail() {
  return (
    <div className="w-full overflow-hidden border-y border-[#9C9A96]/30 bg-[#0B0A08] py-4 flex relative z-10">
      <motion.div
        className="flex whitespace-nowrap text-[#F1ECE3] font-display italic text-2xl lg:text-3xl uppercase tracking-widest items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        <div className="flex">
          {RAIL_CONTENT.map((text, i) => (
            <span key={i} className={`px-8 ${text === "///" ? "text-[#7E1424]" : ""}`}>
              {text}
            </span>
          ))}
        </div>
        <div className="flex">
          {RAIL_CONTENT.map((text, i) => (
            <span key={`dup-${i}`} className={`px-8 ${text === "///" ? "text-[#7E1424]" : ""}`}>
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
