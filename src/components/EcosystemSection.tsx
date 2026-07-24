"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EcosystemSection() {
  const pillars = [
    {
      title: "POWERFUL COMMUNITY",
      iconName: "groups",
    },
    {
      title: "TRANSPARENCY FIRST",
      iconName: "verified_user",
    },
    {
      title: "LONG-TERM VISION",
      iconName: "visibility",
    },
    {
      title: "DECENTRALIZED FREEDOM",
      iconName: "public",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#F0BA33] via-[#D49E24] to-[#A37210] text-[#0A0A06] pt-12 md:pt-16 lg:py-24 pb-0 overflow-hidden border-t-2 border-amber-400/40">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive Container: Mobile = Text top, Image bottom (flex-col-reverse); Desktop = Side-by-side (lg:flex-row) */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Side: Goat Image (Attached flush to the bottom on mobile viewports, bigger image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex justify-center items-end relative mt-4 lg:mt-0 self-end"
          >
            {/* Bigger Goat Graphic Wrapper with Circular Accent */}
            <div className="relative w-[340px] h-[380px] sm:w-[450px] sm:h-[490px] lg:w-[520px] lg:h-[560px] flex items-end justify-center">
              
              {/* Circular Background Brush Ring Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border-[14px] border-[#0A0A06]/15 bg-gradient-to-tr from-amber-600/30 to-amber-300/40 shadow-inner z-0" />
              
              {/* Goat Image - Attached to bottom */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/goat.png"
                  alt="Cool Ibex Goat in Suit"
                  fill
                  className="object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Section Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12 flex flex-col justify-center space-y-6 sm:space-y-8 text-left pb-8 lg:pb-0"
          >
            {/* Main Title */}
            <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-[#0A0A06]">
              WELCOME TO THE <br className="hidden sm:block" />
              <span className="text-[#0A0A06]">$REAL ECOSYSTEM</span>
            </h2>

            {/* Paragraph Description */}
            <div className="space-y-3 font-sans text-base sm:text-lg md:text-xl font-medium leading-relaxed text-[#0A0A06]/90 max-w-2xl">
              <p className="font-semibold text-lg sm:text-xl text-[#0A0A06]">
                Step into the inner sanctum of true wealth.
              </p>
              <p>
                Where power, vision, and relentless growth converge.
              </p>
              <p className="font-normal text-[#0A0A06]/85">
                We are building the new standard of value. Domination is not a goal; it&apos;s our foundation.
              </p>
            </div>

            {/* 4 Pillar Grid with Google Material Icons and Vertical Dividers */}
            <div className="pt-6 border-t-2 border-[#0A0A06]/20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`flex flex-col items-center text-center space-y-2.5 px-2 ${
                    index !== pillars.length - 1 ? "md:border-r-2 md:border-[#0A0A06]/20" : ""
                  }`}
                >
                  {/* Google Material Symbol Icon */}
                  <span className="material-symbols-outlined text-4xl sm:text-5xl text-[#0A0A06] font-bold">
                    {pillar.iconName}
                  </span>
                  
                  {/* Pillar Label */}
                  <span className="font-heading font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase text-[#0A0A06] leading-tight">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
