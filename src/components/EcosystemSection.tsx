"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const goatRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Goat Image & Ring Reveal (Re-animates on scroll up & down)
      if (goatRef.current) {
        gsap.fromTo(
          goatRef.current,
          { opacity: 0, y: 70, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 20%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      }

      if (ringRef.current) {
        gsap.fromTo(
          ringRef.current,
          { scale: 0.6, rotation: -15, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 20%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      }

      // 2. Text Content Reveal (Re-animates on scroll up & down)
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      }

      // 3. 4 Ecosystem Pillars Staggered Pop-In (Re-animates on scroll up & down)
      pillarsRef.current.forEach((el, idx) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: idx * 0.12,
              ease: "back.out(1.6)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%",
                end: "bottom 15%",
                toggleActions: "restart reverse restart reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#F0BA33] via-[#D49E24] to-[#A37210] text-[#0A0A06] pt-12 md:pt-16 lg:py-24 pb-0 overflow-hidden border-t-2 border-amber-400/40"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive Container: Mobile = Text top, Image bottom (flex-col-reverse); Desktop = Side-by-side (lg:flex-row) */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Side: Goat Image (Attached flush to bottom on mobile viewports) */}
          <div
            ref={goatRef}
            className="w-full lg:w-5/12 flex justify-center items-end relative mt-4 lg:mt-0 self-end"
          >
            {/* Goat Graphic Wrapper with Circular Accent */}
            <div className="relative w-[340px] h-[380px] sm:w-[450px] sm:h-[490px] lg:w-[520px] lg:h-[560px] flex items-end justify-center">
              
              {/* Circular Background Brush Ring Effect with GSAP Animation */}
              <div
                ref={ringRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border-[14px] border-[#0A0A06]/15 bg-gradient-to-tr from-amber-600/30 to-amber-300/40 shadow-inner z-0"
              />
              
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
          </div>

          {/* Right Side: Section Content */}
          <div
            ref={textRef}
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
                  ref={(el) => { pillarsRef.current[index] = el; }}
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
          </div>

        </div>
      </div>
    </section>
  );
}
