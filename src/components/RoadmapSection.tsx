"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the connecting line scale
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate each roadmap phase sequentially on scroll
      phasesRef.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50, scale: 0.85 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: index * 0.25,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const phases = [
    {
      num: "PHASE 1",
      title: "LAUNCH & BUILD",
      desc: "Establish the foundation. Build the initial community and awareness.",
      icon: "rocket_launch",
    },
    {
      num: "PHASE 2",
      title: "GROW & ENGAGE",
      desc: "Expand the community. Strategic partnerships and utilities.",
      icon: "groups",
    },
    {
      num: "PHASE 3",
      title: "DOMINATE & SCALE",
      desc: "Take over the space. Mass adoption and ecosystem expansion.",
      icon: "public",
    },
    {
      num: "PHASE 4",
      title: "$REAL TO THE MOON",
      desc: "One trajectory: $REAL TO THE MOON.",
      icon: "trophy",
    },
  ];

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="relative w-full bg-[#E5B537] text-[#0A0A06] pt-14 md:pt-20 lg:py-24 pb-0 overflow-hidden border-t-2 border-amber-400/50"
    >
      {/* Absolute Mountain Image - Attached flush to Bottom and Right end on both PC & Mobile */}
      <div className="absolute right-0 bottom-0 pointer-events-none z-0 w-[280px] h-[300px] sm:w-[380px] sm:h-[420px] lg:w-[540px] lg:h-[580px] xl:w-[620px] xl:h-[660px]">
        <Image
          src="/mountain.png"
          alt="Mountain Peak with Goat Flag"
          fill
          className="object-contain object-right-bottom filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
          priority
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pb-16 lg:pb-12">
        
        {/* Header */}
        <div className="mb-10 lg:mb-16 text-left">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-[#0A0A06] tracking-tight">
            ROADMAP
          </h2>
        </div>

        {/* Roadmap Phases Grid with Horizontal Connecting Line */}
        <div className="w-full lg:w-10/12 relative z-10">
          
          {/* Horizontal Connecting Line behind icons (Desktop) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-[44px] left-[5%] right-[5%] h-[3px] bg-[#0A0A06] z-0"
          />

          {/* Phases Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {phases.map((phase, i) => (
              <div
                key={phase.num}
                ref={(el) => { phasesRef.current[i] = el; }}
                className="flex flex-col items-center text-center group space-y-3"
              >
                {/* Black Circular Icon Circle */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0A0A06] text-[#E5B537] flex items-center justify-center border-4 border-[#E5B537] shadow-[0_8px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="material-symbols-outlined text-4xl sm:text-5xl font-bold">
                    {phase.icon}
                  </span>
                </div>

                {/* Phase Number & Title */}
                <div className="space-y-1 pt-1">
                  <span className="font-heading font-semibold text-xs tracking-widest text-[#0A0A06]/70 uppercase block">
                    {phase.num}
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl tracking-wider text-[#0A0A06] uppercase leading-snug">
                    {phase.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm font-medium leading-relaxed text-[#0A0A06]/85 max-w-[220px]">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
