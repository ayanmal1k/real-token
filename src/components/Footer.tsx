"use client";

import Image from "next/image";
import { Send, ShoppingCart } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Community", href: "#community" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="w-full bg-[#060608] text-white border-t border-amber-500/20 pt-12 md:pt-16 pb-0 overflow-hidden relative">
      
      {/* Top Footer Content Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          
          {/* LEFT COLUMN: LOGO & BRAND NAME */}
          <div className="flex items-center justify-center md:justify-start gap-4 pb-6 md:pb-0">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-amber-500/50 p-0.5 bg-gradient-to-b from-amber-400/40 to-amber-950/60 shadow-[0_0_20px_rgba(212,158,36,0.3)]">
              <Image
                src="/logo.png"
                alt="$REAL Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#FFEAA8] via-[#D49E24] to-[#785204]">
                $REAL
              </span>
              <span className="text-xs font-heading font-medium tracking-[0.25em] text-amber-300/80 uppercase -mt-1">
                REPUBLIC
              </span>
            </div>
          </div>

          {/* CENTER COLUMN: SOCIAL LINKS & BUY NOW */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 pt-6 md:pt-0 px-4">
            <h4 className="font-heading font-bold text-base sm:text-lg tracking-widest text-amber-400 uppercase">
              JOIN THE REPUBLIC
            </h4>
            
            {/* Action Buttons: X, Telegram, Buy Now */}
            <div className="flex items-center justify-center gap-4">
              
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#F0BA33] text-[#080501] flex items-center justify-center hover:bg-[#FFE38B] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(240,186,51,0.4)]"
                aria-label="X Twitter"
                title="X (Twitter)"
              >
                <svg className="w-5 h-5 fill-[#080501]" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#F0BA33] text-[#080501] flex items-center justify-center hover:bg-[#FFE38B] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(240,186,51,0.4)]"
                aria-label="Telegram"
                title="Telegram"
              >
                <Send className="w-5 h-5 text-[#080501] fill-[#080501]" />
              </a>

              {/* BUY NOW Button */}
              <a
                href="#buy"
                className="px-5 py-3 rounded-full font-heading text-xs sm:text-sm font-bold text-[#080501] bg-gradient-to-r from-[#F0BA33] to-[#D49E24] hover:from-[#FFE38B] hover:to-[#B88414] transition-all duration-300 flex items-center gap-2 tracking-wider uppercase shadow-[0_0_15px_rgba(240,186,51,0.4)] hover:scale-105 active:scale-95"
                title="Buy Now"
              >
                <ShoppingCart className="w-4 h-4 text-[#080501] stroke-[2.5]" />
                <span>BUY NOW</span>
              </a>

            </div>
          </div>

          {/* RIGHT COLUMN: USEFUL LINKS */}
          <div className="flex flex-col items-center md:items-end justify-center pt-6 md:pt-0 md:pl-8 text-center md:text-right">
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base sm:text-lg tracking-widest text-amber-400 uppercase">
                USEFUL LINKS
              </h4>
              <ul className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-1 font-sans text-sm font-medium text-zinc-300">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-amber-300 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM GOLDEN MARQUEE TICKER BANNER */}
      <div className="w-full bg-[#E5B537] text-[#0A0A06] py-3.5 border-t-2 border-amber-400 overflow-hidden select-none">
        <div className="animate-marquee-infinite flex items-center gap-12 whitespace-nowrap">
          {[...Array(16)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <div className="relative w-6 h-6 shrink-0">
                <Image
                  src="/golden-goat.png"
                  alt="Goat Icon"
                  fill
                  className="object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                />
              </div>
              <span className="font-heading font-bold text-sm sm:text-base md:text-lg tracking-widest uppercase">
                $REAL REPUBLIC — REAL VISION. REAL COMMUNITY. REAL FUTURE.
              </span>
            </div>
          ))}
        </div>
      </div>

    </footer>
  );
}
