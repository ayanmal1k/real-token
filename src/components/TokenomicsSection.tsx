"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function TokenomicsSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "EVNWDT4QtZv4tBGMaFpygGq8bxEEcZMUZxMmhtaspump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { val: "100%", sub: "COMMUNITY OWNED" },
    { val: "0%", sub: "TAX" },
    { val: "LP", sub: "LOCKED" },
    { val: "CA", sub: "RENOUNCED" },
  ];

  return (
    <section id="tokenomics" className="relative w-full bg-[#060608] text-white py-14 md:py-20 lg:py-24 border-t border-amber-500/20 overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* LEFT SIDE: TOKENOMIC GOAT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex items-center justify-center relative"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
              {/* Radial Golden Backlight Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent blur-xl z-0" />
              
              {/* Tokenomic Goat Image */}
              <Image
                src="/tokenomic-goat.png"
                alt="Tokenomic Goat Artwork"
                fill
                className="object-contain relative z-10 filter drop-shadow-[0_12px_28px_rgba(243,197,68,0.3)] hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

          {/* VERTICAL GLOWING DIVIDER LINE */}
          <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-amber-500/40 via-50% to-transparent self-stretch my-2 shrink-0" />

          {/* RIGHT SIDE: BUILT FOR GROWTH & STAT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-6/12 flex flex-col justify-between space-y-8 text-left"
          >
            {/* Main Headline */}
            <div className="space-y-1 text-left">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
                BUILT FOR GROWTH.
              </h2>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#E0A726] to-[#8C6008] drop-shadow-[0_4px_25px_rgba(212,158,36,0.4)]">
                DESIGNED TO LAST.
              </h2>
            </div>

            {/* 4 Stat Cards in Rounded Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.sub}
                  className="bg-[#0B0B0E] border border-amber-500/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-1.5 hover:border-amber-400/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,158,36,0.25)] group"
                >
                  <span className="font-heading font-bold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#E0A726] to-[#A37210] group-hover:scale-105 transition-transform">
                    {stat.val}
                  </span>
                  <span className="font-heading font-semibold text-xs tracking-widest text-zinc-300 uppercase leading-tight">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Contract Address Bar with Copy Action */}
            <div className="bg-[#0B0B0E] border border-amber-500/35 rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-3 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 sm:gap-3 pl-3 overflow-hidden min-w-0">
                <span className="font-heading font-bold text-base sm:text-lg text-[#E0A726] shrink-0">
                  CA:
                </span>
                <span className="font-mono text-xs sm:text-sm md:text-base text-zinc-300 truncate tracking-wide">
                  {contractAddress}
                </span>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="px-4 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-[#080501] bg-gradient-to-b from-[#F0BA33] via-[#D49E24] to-[#A37210] hover:from-[#FFE38B] hover:to-[#B88414] transition-all duration-300 shadow-[0_0_15px_rgba(212,158,36,0.4)] flex items-center gap-2 shrink-0 uppercase tracking-wider active:scale-95"
                title="Copy Contract Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950 stroke-[3]" />
                    <span className="hidden sm:inline">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#080501] stroke-[2.5]" />
                    <span className="hidden sm:inline">COPY</span>
                  </>
                )}
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
