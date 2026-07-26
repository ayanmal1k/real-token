"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Gamepad2, Coins, Trophy, Sparkles, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GameSection() {
  const gameUrl = "https://real-mountainclimber.netlify.app/";

  const sectionRef = useRef<HTMLDivElement>(null);
  const goatImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Goat Image Animated Reveal (Scroll Up & Down)
      if (goatImageRef.current) {
        gsap.fromTo(
          goatImageRef.current,
          { opacity: 0, x: -50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      }

      // 2. Content Column Reveal (Scroll Up & Down)
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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

      // 3. Feature Cards Stagger (Scroll Up & Down)
      cardsRef.current.forEach((el, idx) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: 0.15 + idx * 0.12,
              ease: "back.out(1.5)",
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

  const features = [
    {
      title: "COLLECT COINS & EARN $REAL",
      desc: "Gather gold coins as you climb treacherous peaks and exchange them directly for $REAL tokens in our P2E economy.",
      icon: Coins,
      badge: "P2E REWARDS",
    },
    {
      title: "COMPETE IN CONTESTS & WIN PRIZES",
      desc: "Climb leaderboard rankings in competitive tournaments to win real prizes, token pools, and legendary glory.",
      icon: Trophy,
      badge: "LIVE TOURNAMENTS",
    },
  ];

  return (
    <section
      id="game"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#F0BA33] via-[#D49E24] to-[#A37210] text-[#0A0A06] py-10 sm:py-14 md:py-16 overflow-hidden border-t-2 border-b-2 border-amber-300/40"
    >
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Dark Radial Vignette for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A06]/10 via-transparent to-[#0A0A06]/15" />
        
        {/* Subtle Pattern Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(#0A0A06 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main Content Grid Container */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Goat Game Image (Centered Vertically in Middle, Compact Height) */}
        <div
          ref={goatImageRef}
          className="w-full lg:w-5/12 flex items-center justify-center shrink-0"
        >
          <div className="relative w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] aspect-[4/3] flex items-center justify-center">
            <Image
              src="/game-goat.png"
              alt="$REAL Mountain Climber Goat Game"
              fill
              className="object-contain filter drop-shadow-[0_12px_28px_rgba(10,10,6,0.4)] hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Section Details & Copy */}
        <div
          ref={contentRef}
          className="w-full lg:w-7/12 text-left space-y-4 sm:space-y-6"
        >
          {/* Section Tag Badge (Dark pill styled for Golden BG) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A06] text-[#F0BA33] text-xs sm:text-sm font-heading font-bold tracking-widest uppercase shadow-[0_4px_14px_rgba(0,0,0,0.25)] border border-[#0A0A06]/30">
            <Gamepad2 className="w-4 h-4 text-[#F0BA33] animate-pulse" />
            <span>P2E GAME ECOSYSTEM</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F0BA33]" />
          </div>

          {/* Main Headline (Dark text matching Roadmap section) */}
          <div className="space-y-0.5">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight uppercase text-[#0A0A06] drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
              $REAL MOUNTAIN CLIMBER
            </h2>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wider text-[#0A0A06]/90 uppercase">
              COLLECT COINS. COMPETE. WIN PRIZES.
            </h3>
          </div>

          {/* Description Paragraph */}
          <p className="font-sans text-sm sm:text-base md:text-lg font-medium text-[#0A0A06]/85 leading-relaxed max-w-2xl">
            Conquer mountain peaks, collect coins on your climb, and exchange them directly for <span className="font-bold text-[#0A0A06] underline decoration-2 decoration-[#0A0A06]/40">$REAL tokens</span>. Join competitive leaderboard contests to win exclusive prizes and rewards!
          </p>

          {/* 2 Feature Cards (Sleek dark cards styled for contrast on Golden BG) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.title}
                  ref={(el) => { cardsRef.current[idx] = el; }}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-[#0A0A06] text-white border border-[#0A0A06]/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#F0BA33] text-[#0A0A06] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-heading tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-[#F0BA33] border border-amber-400/30">
                      {feat.badge}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#F0BA33] mb-1 tracking-wider uppercase">
                    {feat.title}
                  </h4>
                  <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Play Game CTA Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={gameUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-heading text-sm sm:text-base font-bold text-[#F0BA33] bg-[#0A0A06] hover:bg-[#181620] hover:text-[#FFE799] border-2 border-[#0A0A06] transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 tracking-widest uppercase group"
            >
              <Gamepad2 className="w-5 h-5 text-[#F0BA33] group-hover:rotate-12 transition-transform duration-300" />
              <span>PLAY MOUNTAIN CLIMBER</span>
              <ExternalLink className="w-4 h-4 text-[#F0BA33] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 stroke-[2.5]" />
            </a>

            <div className="text-xs font-heading font-bold tracking-wider text-[#0A0A06]/90 flex items-center gap-2 bg-[#0A0A06]/10 px-3.5 py-2 rounded-full border border-[#0A0A06]/15">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <span>LIVE GAME AVAILABLE NOW</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
