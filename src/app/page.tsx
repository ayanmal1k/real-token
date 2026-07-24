"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import EcosystemSection from "@/components/EcosystemSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home", active: true },
    { name: "ABOUT", href: "#about" },
    { name: "TOKENOMICS", href: "#tokenomics" },
    { name: "ROADMAP", href: "#roadmap" },
    { name: "COMMUNITY", href: "#community" },
    { name: "GALLERY", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="w-full bg-[#060608] text-white overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* Dynamic Hero Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Desktop Background Image */}
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-right-top bg-no-repeat"
            style={{ backgroundImage: "url('/PC%20BG.png')" }}
          />
          {/* Mobile Background Image */}
          <div
            className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-mobile.png')" }}
          />

          {/* 10% Dark Background Overlay */}
          <div className="absolute inset-0 bg-[#060608]/10 z-10 pointer-events-none" />

          {/* Soft Vignette Top for Navbar Integration */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#060608]/70 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Top Navbar */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#060608]/60 border-b border-amber-500/10 transition-all duration-300">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-amber-500/50 p-0.5 bg-gradient-to-b from-amber-400/40 to-amber-950/60 group-hover:border-amber-400 transition-colors">
                <Image
                  src="/logo.png"
                  alt="$REAL Logo"
                  fill
                  className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#FFEAA8] via-[#D49E24] to-[#785204]">
                  $REAL
                </span>
                <span className="text-[10px] font-heading font-medium tracking-[0.25em] text-amber-300/80 uppercase -mt-1">
                  REAL IBEX—
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative font-heading text-sm tracking-widest transition-colors duration-200 py-1 ${
                    link.active
                      ? "text-amber-400 font-semibold"
                      : "text-zinc-200 hover:text-amber-300"
                  }`}
                >
                  {link.name}
                  {link.active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 rounded-full"
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Right Action Button (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex items-center"
            >
              <a
                href="#join"
                className="px-6 py-2.5 rounded-full font-heading text-sm font-bold text-[#080501] bg-gradient-to-b from-[#F0BA33] via-[#D49E24] to-[#A37210] hover:from-[#FFE38B] hover:to-[#B88414] transition-all duration-300 shadow-[0_0_20px_rgba(212,158,36,0.4)] hover:shadow-[0_0_30px_rgba(212,158,36,0.7)] hover:scale-105 active:scale-95 tracking-wider uppercase"
              >
                JOIN $REAL
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden sticky top-20 z-40 bg-[#060608]/95 backdrop-blur-xl border-b border-amber-500/20 px-6 py-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-heading text-lg tracking-widest transition-colors py-2 border-b border-zinc-800/60 ${
                      link.active ? "text-amber-400 font-bold" : "text-zinc-300 hover:text-amber-300"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 w-full text-center py-3 rounded-full font-heading font-bold text-[#080501] bg-gradient-to-b from-[#F0BA33] via-[#D49E24] to-[#A37210] shadow-[0_0_20px_rgba(212,158,36,0.5)] tracking-widest uppercase"
                >
                  JOIN $REAL
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section Main Content */}
        <main className="relative z-20 flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:pl-16 xl:pl-24 2xl:pl-32 flex items-start md:items-center justify-start pt-4 sm:pt-8 md:py-24 lg:py-32 pb-12">
          <div className="w-full max-w-xl lg:max-w-2xl text-left space-y-5 sm:space-y-6 md:space-y-8">

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-1"
            >
              <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight uppercase">
                <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  THIS IS NOT
                </span>
                <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  JUST A COIN.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#E0A726] via-45% to-[#8C6008] drop-shadow-[0_4px_30px_rgba(212,158,36,0.6)]">
                  THIS IS $REAL
                </span>
              </h1>
            </motion.div>

            {/* Subheadline Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-0.5 sm:pt-1"
            >
              <p className="font-heading text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.18em] text-[#E0A726] uppercase flex flex-wrap items-center gap-x-2.5 gap-y-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span>REAL VISION.</span>
                <span className="text-amber-600/70">•</span>
                <span>REAL COMMUNITY.</span>
                <span className="text-amber-600/70">•</span>
                <span>REAL FUTURE.</span>
              </p>
            </motion.div>

            {/* Body Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-xl text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
            >
              In a space full of memecoins, we choose to focus on real value, real use cases &amp; real community. <span className="text-amber-300 font-medium">$REAL</span> is built different.
            </motion.p>

            {/* Main CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-2 sm:pt-4"
            >
              <a
                href="#republic"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading text-base sm:text-lg font-bold text-[#080501] bg-gradient-to-b from-[#F0BA33] via-[#D49E24] to-[#A37210] hover:from-[#FFE899] hover:to-[#B88414] transition-all duration-300 shadow-[0_0_25px_rgba(212,158,36,0.5)] hover:shadow-[0_0_45px_rgba(212,158,36,0.8)] hover:scale-105 active:scale-95 tracking-widest uppercase group"
              >
                <span>JOIN THE REPUBLIC</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
              </a>
            </motion.div>
          </div>
        </main>
      </section>

      {/* Infinite Marquee Ticker Banner */}
      <section className="relative z-30 w-full bg-[#050507] border-y border-amber-500/25 py-4 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.9)]">
        <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-16 select-none">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 whitespace-nowrap shrink-0 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/golden-goat.png"
                  alt="Golden Goat Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-lg sm:text-2xl md:text-3xl tracking-widest text-white uppercase drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
                $REAL TO THE MOON
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* $REAL Ecosystem Section */}
      <div id="about" className="relative z-30">
        <EcosystemSection />
      </div>

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Community Movement Section */}
      <CommunitySection />

      {/* Meme Gallery Section (Pinned GSAP Horizontal Scroll) */}
      <GallerySection />

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
