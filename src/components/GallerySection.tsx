"use client";

import { useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Raw 61 Gallery Images from public/Real gallery
  const rawImages = [
    "IMG_20260724_180517_606.jpg",
    "IMG_20260724_180518_644.jpg",
    "IMG_20260724_180519_835.jpg",
    "IMG_20260724_180522_755.jpg",
    "IMG_20260724_180523_794.jpg",
    "IMG_20260724_180524_568.jpg",
    "IMG_20260724_180526_581.jpg",
    "IMG_20260724_180527_326.jpg",
    "IMG_20260724_180528_689.jpg",
    "IMG_20260724_180530_429.jpg",
    "IMG_20260724_180531_882.jpg",
    "IMG_20260724_180532_917.jpg",
    "IMG_20260724_180533_803.jpg",
    "IMG_20260724_180535_205.jpg",
    "IMG_20260724_180536_561.jpg",
    "IMG_20260724_180537_958.jpg",
    "IMG_20260724_180539_577.jpg",
    "IMG_20260724_180540_795.jpg",
    "IMG_20260724_180541_519.jpg",
    "IMG_20260724_180543_093.jpg",
    "IMG_20260724_180544_446.jpg",
    "IMG_20260724_180546_024.jpg",
    "IMG_20260724_180547_035.jpg",
    "IMG_20260724_180548_729.jpg",
    "IMG_20260724_180548_927.jpg",
    "IMG_20260724_180551_151.jpg",
    "IMG_20260724_180551_850.jpg",
    "IMG_20260724_180553_693.jpg",
    "IMG_20260724_180555_369.jpg",
    "IMG_20260724_180555_947.jpg",
    "IMG_20260724_180557_870.jpg",
    "IMG_20260724_180558_586.jpg",
    "IMG_20260724_180600_126.jpg",
    "IMG_20260724_180601_828.jpg",
    "IMG_20260724_180602_494.jpg",
    "IMG_20260724_180603_903.jpg",
    "IMG_20260724_180605_206.jpg",
    "IMG_20260724_180606_385.jpg",
    "IMG_20260724_180607_637.jpg",
    "IMG_20260724_180608_747.jpg",
    "IMG_20260724_180610_294.jpg",
    "IMG_20260724_180611_135.jpg",
    "IMG_20260724_180611_832.jpg",
    "IMG_20260724_180613_630.jpg",
    "IMG_20260724_180614_519.jpg",
    "IMG_20260724_180615_624.jpg",
    "IMG_20260724_180616_865.jpg",
    "IMG_20260724_180618_429.jpg",
    "IMG_20260724_180619_645.jpg",
    "IMG_20260724_180620_480.jpg",
    "IMG_20260724_180621_883.jpg",
    "IMG_20260724_180624_101.jpg",
    "IMG_20260724_180625_478.jpg",
    "IMG_20260724_180627_182.jpg",
    "IMG_20260724_180627_657.jpg",
    "IMG_20260724_180629_652.jpg",
    "IMG_20260724_180630_814.jpg",
    "IMG_20260724_180631_576.jpg",
    "IMG_20260724_180634_077.jpg",
    "IMG_20260724_180634_979.jpg",
    "IMG_20260724_180641_207.jpg",
  ];

  // Jumbled / Shuffled order using deterministic seed algorithm
  const shuffledImages = useMemo(() => {
    const list = [...rawImages];
    let seed = 42;
    const pseudoRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(pseudoRandom() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, []);

  // Preset comic panel variations (dimensions, rotations, offsets)
  const panelStyles = [
    { size: "w-[240px] h-[300px]", rotate: "rotate-2", offset: "mt-0" },
    { size: "w-[300px] h-[220px]", rotate: "-rotate-1", offset: "mt-4" },
    { size: "w-[260px] h-[340px]", rotate: "-rotate-2", offset: "mt-2" },
    { size: "w-[320px] h-[240px]", rotate: "rotate-1", offset: "mt-6" },
    { size: "w-[220px] h-[280px]", rotate: "-rotate-3", offset: "mt-1" },
    { size: "w-[290px] h-[310px]", rotate: "rotate-2", offset: "mt-3" },
  ];

  // Group images into multi-row vertical columns for horizontal scrolling
  const columns = useMemo(() => {
    const cols: string[][] = [];
    const chunkSize = 2; // 2 images per vertical column inside horizontal track
    for (let i = 0; i < shuffledImages.length; i += chunkSize) {
      cols.push(shuffledImages.slice(i, i + chunkSize));
    }
    return cols;
  }, [shuffledImages]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Pin section and animate horizontal scroll scrub on desktop/tablet
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 640px)", () => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      const anim = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        anim.kill();
      };
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#060608] text-white py-12 lg:py-16 overflow-hidden border-t-2 border-amber-500/20"
    >
      {/* Background Graphic Layer */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-cover bg-center" style={{ backgroundImage: "url('/meme-gallery-bg.png')" }} />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between h-full">
        
        {/* Gallery Title & Banner Section Header (Title Aligned on the Right) */}
        <div className="flex items-center justify-end mb-8 border-b border-amber-500/30 pb-6">
          
          {/* Banner Title on the Right */}
          <div className="relative flex items-center justify-end">
            <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F0BA33] via-[#D49E24] to-[#A37210] border-2 border-amber-300 shadow-[0_0_30px_rgba(212,158,36,0.5)] transform -rotate-1">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-wider text-[#080501] uppercase drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                MEME GALLERY
              </h2>
            </div>
          </div>

        </div>

        {/* Horizontal Scroll Track Container (Pinned on Scroll) */}
        <div className="w-full overflow-x-auto sm:overflow-x-visible scrollbar-none py-4">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-8 min-w-max pr-12"
          >
            {columns.map((colImages, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6 sm:gap-8 justify-center shrink-0">
                {colImages.map((imgName, imgIdx) => {
                  const globalIdx = colIdx * 2 + imgIdx;
                  const styleIndex = globalIdx % panelStyles.length;
                  const style = panelStyles[styleIndex];
                  const isEager = globalIdx < 6; // Eagerly load initial visible items for instant render

                  return (
                    <div
                      key={imgName}
                      className={`relative group rounded-2xl overflow-hidden border-2 border-[#E5B537] bg-[#0A0A0E] shadow-[6px_6px_0px_#E5B537] hover:shadow-[10px_10px_0px_#FFE38B] hover:-translate-y-2 hover:scale-105 transition-all duration-300 ${style.size} ${style.rotate} ${style.offset}`}
                    >
                      <Image
                        src={`/Real gallery/${imgName}`}
                        alt={`$REAL Gallery Meme ${globalIdx + 1}`}
                        fill
                        sizes="(max-width: 768px) 260px, 340px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading={isEager ? undefined : "lazy"}
                        priority={isEager}
                      />
                      
                      {/* Comic Overlay Accent */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
                        <span className="font-heading font-bold text-xs text-amber-300 tracking-widest uppercase">
                          $REAL #{globalIdx + 1}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
