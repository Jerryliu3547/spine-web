"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  stationary: {
    top: string;
    sub: string;
  };
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "xray-sagittal",
    title: "X-Ray Sagittal Analysis",
    description: "Automated landmark localization and spinopelvic sagittal parameter calculation from a single lateral radiograph.",
    image: "/features/xray-sagittal.jpg",
    stationary: {
      top: "X-Ray",
      sub: "Sagittal",
    },
  },
  {
    id: "shape-registration",
    title: "3D Spine Shape Model",
    description: "Reconstructing patient-specific 3D spine shape models and vertebral morphometry from planar imaging.",
    image: "/features/spine-shape-model.jpg",
    stationary: {
      top: "Shape Registration",
      sub: "spine shape model",
    },
  },
  {
    id: "plan-screws",
    title: "Plan + Screws Construct",
    description: "Patient-specific pedicle screw trajectory optimization, lordosis restoration, and PJK risk mitigation.",
    image: "/features/plan-screws.jpg",
    stationary: {
      top: "Plan +Screws",
      sub: "Alignment, PJK risk",
    },
  },
  {
    id: "febio-stress",
    title: "Finite Element Stress",
    description: "Autonomous FEBio multi-physics routing to evaluate anterior column load sharing and rod fatigue limits.",
    image: "/features/febio-stress.jpg",
    stationary: {
      top: "Finite Element Analysis",
      sub: "Rod strain & cage fatigue",
    },
  },
  {
    id: "vertebral-kinematics",
    title: "Musculoskeletal Dynamics",
    description: "Coupled OpenSim dynamic simulation tracking multi-level spine kinematics under physiological daily loads.",
    image: "/features/msk-dynamics.jpg",
    stationary: {
      top: "MSK Dynamics",
      sub: "Kinematics & trunk muscle forces",
    },
  },
];

// Double array for seamless infinite circular loop
const DISPLAY_CARDS = [...FEATURE_CARDS, ...FEATURE_CARDS];
const TOTAL_CARDS = FEATURE_CARDS.length; // 5 rotational cards
const ROTATION_INTERVAL_MS = 2800; // Auto-rolling tempo (2.8 seconds)

export default function FeatureCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isResettingRef = useRef(false);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Pause auto-rolling when section is scrolled out of view to avoid affecting users reading other sections
  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Helper to scroll strictly within the horizontal container without affecting window scrolling
  const scrollToVirtual = useCallback((targetIndex: number, smooth = true) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[targetIndex] as HTMLElement;
    if (!card) return;

    // Use container.scrollTo to isolate scrolling to the horizontal carousel container
    const targetLeft = card.offsetLeft - container.offsetLeft;

    if (smooth) {
      if (typeof container.scrollTo === "function") {
        container.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });
      } else {
        container.scrollLeft = targetLeft;
      }
    } else {
      if (typeof container.scrollTo === "function") {
        container.scrollTo({
          left: targetLeft,
          behavior: "instant",
        });
      } else {
        container.scrollLeft = targetLeft;
      }
    }

    setVirtualIndex(targetIndex);
    setActiveIndex(targetIndex % TOTAL_CARDS);
  }, []);

  // Smoothly scroll to a specific base card index (from pagination dots)
  const scrollToIndex = useCallback((targetIndex: number) => {
    scrollToVirtual(targetIndex, true);
  }, [scrollToVirtual]);

  // Advance forward in a continuous circle
  const handleNext = useCallback(() => {
    const nextVirtual = virtualIndex + 1;

    if (nextVirtual >= TOTAL_CARDS) {
      // Scroll into the cloned element for seamless forward animation
      scrollToVirtual(nextVirtual, true);

      // After the smooth transition completes, silently snap back to base index
      setTimeout(() => {
        isResettingRef.current = true;
        const normalized = nextVirtual % TOTAL_CARDS;
        scrollToVirtual(normalized, false);
        setTimeout(() => {
          isResettingRef.current = false;
        }, 50);
      }, 500);
    } else {
      scrollToVirtual(nextVirtual, true);
    }
  }, [virtualIndex, scrollToVirtual]);

  // Move backward in a continuous circle
  const handlePrev = useCallback(() => {
    if (virtualIndex <= 0) {
      // Instantly jump to cloned end, then smoothly scroll to previous card
      scrollToVirtual(TOTAL_CARDS, false);
      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToVirtual(TOTAL_CARDS - 1, true);
        }, 30);
      });
    } else {
      scrollToVirtual(virtualIndex - 1, true);
    }
  }, [virtualIndex, scrollToVirtual]);

  // Sync active index based on user scrolling
  const handleScroll = () => {
    if (isResettingRef.current || !scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      if (idx >= DISPLAY_CARDS.length) return;
      const diff = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    const normalizedIndex = closestIndex % TOTAL_CARDS;
    if (normalizedIndex !== activeIndex) {
      setActiveIndex(normalizedIndex);
    }
    setVirtualIndex(closestIndex);

    // Pause auto-rolling while user is actively interacting
    isUserInteractingRef.current = true;
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 3500);
  };

  // Auto-rolling in a continuous circle (every 2.8 seconds) only when visible on screen
  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      if (isUserInteractingRef.current) return;
      handleNext();
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused, isInView, handleNext]);

  const activeCard = FEATURE_CARDS[activeIndex] || FEATURE_CARDS[0];

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-20 md:py-28 overflow-hidden border-b border-slate-200/80">
      {/* Panoramic container matching lower Clinical Workbench bounding line */}
      <div className="mx-auto w-full max-w-[1520px] 2xl:max-w-[1680px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">

          {/* ================= LEFT STATION CARD (Desktop only) ================= */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between h-full min-h-[460px] sm:min-h-[500px] md:min-h-[530px] lg:sticky lg:top-28 pt-2">
            <div>
              {/* Main Headline: Apple Two-Tone Typography */}
              <h2 className="text-4xl sm:text-5xl lg:text-[46px] leading-[1.08] font-semibold tracking-[-0.025em]">
                <span className="text-[#1d1d1f]">X-Ray in,</span><br />
                <span className="text-[#86868b]">Finite Element &<br />MSK out.</span>
              </h2>

              {/* Dynamic Display Area: Apple Eyebrow + Bold Title + Gray Subtext */}
              <div className="mt-10 sm:mt-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                  >
                    <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-[0.06em]">
                      {activeCard.stationary.top}
                    </span>
                    <span className="mt-1.5 text-3xl sm:text-4xl lg:text-[40px] text-[#1d1d1f] font-semibold tracking-tight leading-tight">
                      {activeCard.title}
                    </span>
                    <span className="mt-2 text-sm sm:text-base text-[#86868b] font-normal leading-relaxed">
                      {activeCard.stationary.sub}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination Dots & Navigation Controls (5 dots for 5 rotational cards) */}
            <div className="mt-8 sm:mt-12 flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {FEATURE_CARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Go to feature card ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${activeIndex === idx
                      ? "w-7 h-1.5 bg-slate-900"
                      : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-400"
                      }`}
                  />
                ))}
              </div>

              {/* Next / Prev Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous card"
                  className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next card"
                  className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? "Resume auto roll" : "Pause auto roll"}
                  className="p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title={isPaused ? "Resume auto-roll" : "Pause auto-roll"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT HORIZONTAL ROLLING CARDS ================= */}
          <div
            className="w-full lg:col-span-8 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 scrollbar-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {DISPLAY_CARDS.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  onClick={() => scrollToVirtual(idx, true)}
                  className={`snap-center lg:snap-start shrink-0 w-full min-w-full lg:min-w-[400px] lg:w-[400px] xl:min-w-[430px] xl:w-[430px] h-[480px] sm:h-[510px] md:h-[530px] rounded-[32px] bg-[#F4F6F9] border transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between cursor-pointer select-none group shadow-xs ${activeIndex === (idx % TOTAL_CARDS)
                    ? "border-slate-300/90 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5"
                    : "border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                    }`}
                >
                  {/* 3D Visual Asset Container with soft feathered blend */}
                  <div
                    className="relative w-full h-[250px] sm:h-[280px] md:h-[300px] flex items-center justify-center overflow-hidden rounded-2xl"
                    style={{
                      maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)",
                      WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)",
                    }}
                  >
                    <Image
                      src={`${basePath}${card.image}`}
                      alt={card.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 430px"
                      className="object-contain p-1 transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={idx < 2}
                    />
                  </div>

                  {/* Card Bottom Details - Apple Card Typography */}
                  <div className="mt-6 flex flex-col">
                    <h3 className="text-xl sm:text-[22px] font-semibold text-[#1d1d1f] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-[#86868b] leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Extra spacing for end of scroll on desktop */}
              <div className="hidden lg:block shrink-0 w-8" />
            </div>

            {/* Mobile Pagination Dots & Controls (only visible on small screens < lg) */}
            <div className="flex lg:hidden items-center justify-between mt-4 px-1">
              <div className="flex items-center gap-2">
                {FEATURE_CARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${activeIndex === idx
                      ? "w-7 h-1.5 bg-slate-900"
                      : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-400"
                      }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
