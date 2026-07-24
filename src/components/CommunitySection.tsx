"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Send, ShoppingCart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CommunitySection() {
  const pumpFunUrl = "https://pump.fun/coin/EVNWDT4QtZv4tBGMaFpygGq8bxEEcZMUZxMmhtaspump";
  const telegramUrl = "https://t.me/Realibexcoin";
  const twitterUrl = "https://x.com/Realibexcoin";

  const sectionRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Left Text & Action Buttons Reveal (Re-triggers on scroll up & down)
      if (leftTextRef.current) {
        gsap.fromTo(
          leftTextRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 20%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      }

      // 2. 4 Feature Cards Sequential Pop-In (Re-triggers on scroll up & down)
      cardsRef.current.forEach((el, idx) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 45, scale: 0.88 },
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

  const cards = [
    { title: "ACTIVE COMMUNITY", icon: "groups" },
    { title: "DAILY UPDATES", icon: "campaign" },
    { title: "STRONG HOLDERS", icon: "diamond" },
    { title: "REAL UTILITY", icon: "bolt" },
  ];

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative w-full min-h-screen lg:min-h-[85vh] flex items-center justify-center overflow-hidden border-t-2 border-amber-500/20 bg-[#060608]"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Desktop Background Image */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: "url('/community-bg.png')" }}
        />
        {/* Mobile Background Image */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: "url('/community-bg-mobile.png')" }}
        />

        {/* Ambient Overlay for High Contrast Text Readability */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#060608]/95 via-[#060608]/80 to-[#060608]/40 z-10" />
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#060608]/90 via-[#060608]/75 to-[#060608]/95 z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Text Content & Actions */}
          <div
            ref={leftTextRef}
            className="w-full lg:w-6/12 text-left space-y-6 md:space-y-8"
          >
            {/* Headline */}
            <div className="space-y-1">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                MORE THAN A COIN.
              </h2>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#E0A726] to-[#8C6008] drop-shadow-[0_4px_30px_rgba(212,158,36,0.6)]">
                A MOVEMENT OF GOATS.
              </h2>
            </div>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg md:text-xl font-medium text-zinc-200 leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Join the elite. Hold the asset. Build the future.
            </p>

            {/* Primary Action Button -> Pump.fun */}
            <div>
              <a
                href={pumpFunUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading text-base sm:text-lg font-bold text-[#080501] bg-gradient-to-b from-[#F0BA33] via-[#D49E24] to-[#A37210] hover:from-[#FFE38B] hover:to-[#B88414] transition-all duration-300 shadow-[0_0_25px_rgba(212,158,36,0.5)] hover:shadow-[0_0_40px_rgba(212,158,36,0.8)] hover:scale-105 active:scale-95 tracking-widest uppercase group"
              >
                <span>JOIN $REAL REPUBLIC</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
              </a>
            </div>

            {/* Social Links & Buy Now Bar */}
            <div className="pt-4 border-t border-amber-500/20 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Telegram Button */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full font-heading text-xs sm:text-sm font-bold text-amber-300 bg-[#0F0E14]/80 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 transition-all duration-300 flex items-center gap-2 tracking-wider uppercase backdrop-blur-md hover:scale-105"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>TELEGRAM</span>
              </a>

              {/* X / Twitter Button */}
              <a
                href={twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full font-heading text-xs sm:text-sm font-bold text-amber-300 bg-[#0F0E14]/80 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 transition-all duration-300 flex items-center gap-2 tracking-wider uppercase backdrop-blur-md hover:scale-105"
              >
                <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X / TWITTER</span>
              </a>

              {/* BUY NOW Button -> Pump.fun */}
              <a
                href={pumpFunUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full font-heading text-xs sm:text-sm font-bold text-[#080501] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 flex items-center gap-2 tracking-wider uppercase shadow-[0_0_15px_rgba(243,197,68,0.4)] hover:scale-105 active:scale-95"
              >
                <ShoppingCart className="w-4 h-4 text-[#080501] stroke-[2.5]" />
                <span>BUY NOW</span>
              </a>

            </div>
          </div>

          {/* Right Side: 4 Dark Feature Cards */}
          <div className="w-full lg:w-6/12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cards.map((card, idx) => (
              <div
                key={card.title}
                ref={(el) => { cardsRef.current[idx] = el; }}
                className="bg-[#0B0B0E]/90 border border-amber-500/30 backdrop-blur-md rounded-2xl p-6 sm:p-5 flex flex-col items-center justify-center text-center space-y-3 hover:border-amber-400/80 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,158,36,0.3)] group"
              >
                <span className="material-symbols-outlined text-4xl sm:text-5xl text-[#F3C544] group-hover:scale-110 transition-transform">
                  {card.icon}
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-white uppercase leading-snug">
                  {card.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
