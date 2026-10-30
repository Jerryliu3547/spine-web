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
  metric: {
    stackedTop: string;
    stackedBottom: string;
    suffix: string;
    label: string;
  };
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "cost-to-collect",
    title: "Lower cost to collect",
    description: "Reduce the operational burden of repetitive collections work through automation.",
    image: "/features/metronome.jpg",
    metric: {
      stackedTop: "4",
      stackedBottom: "5",
      suffix: "7%+",
      label: "Reduction in AR backlog",
    },
  },
  {
    id: "collections-visibility",
    title: "Gain full collections visibility",
    description: "Track activity, progress, and outcomes entire claims pipeline.",
    image: "/features/prism.jpg",
    metric: {
      stackedTop: "8",
      stackedBottom: "9",
      suffix: "4%+",
      label: "First-pass resolution rate",
    },
  },
  {
    id: "automated-routing",
    title: "Eliminate repetitive manual touches",
    description: "Reclaim clinical and administrative bandwidth with end-to-end autonomous routing.",
    image: "/features/balance.jpg",
    metric: {
      stackedTop: "3",
      stackedBottom: "4",
      suffix: "2%",
      label: "Reduction in operational overhead",
    },
  },
  {
    id: "autonomous-accuracy",
    title: "Accelerate autonomous resolution",
    description: "Identify root-cause variance instantly with continuous biomechanical feedback loops.",
    image: "/features/sphere.jpg",
    metric: {
      stackedTop: "9",
      stackedBottom: "9",
      suffix: ".2%",
      label: "Autonomous touchless accuracy",
    },
  },
];

export default function FeatureCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Smoothly scroll the container to a specific card index
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      if (typeof card.scrollIntoView === "function") {
        card.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      } else if (typeof container.scrollTo === "function") {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: "smooth",
        });
      }
      setActiveIndex(index);
    }
  }, []);

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % FEATURE_CARDS.length;
    scrollToIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + FEATURE_CARDS.length) % FEATURE_CARDS.length;
    scrollToIndex(prevIdx);
  };

  // Sync active index based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      if (idx >= FEATURE_CARDS.length) return;
      const diff = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }

    // Flag user interaction to temporarily pause auto-rolling
    isUserInteractingRef.current = true;
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 4000);
  };

  // Gentle auto-roll every 5 seconds when not hovered or actively scrolled
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (isUserInteractingRef.current) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % FEATURE_CARDS.length;
        if (scrollRef.current) {
          const container = scrollRef.current;
          const targetCard = container.children[next] as HTMLElement;
          if (targetCard) {
            if (typeof targetCard.scrollIntoView === "function") {
              targetCard.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
              });
            } else if (typeof container.scrollTo === "function") {
              container.scrollTo({
                left: targetCard.offsetLeft - container.offsetLeft,
                behavior: "smooth",
              });
            }
          }
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeMetric = FEATURE_CARDS[activeIndex].metric;

  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden border-b border-stone-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ================= LEFT STATION CARD ================= */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[460px] sm:min-h-[500px] md:min-h-[530px] lg:sticky lg:top-28 pt-2">
            <div>
              {/* Main Headline with Serif Typography matching the screenshot */}
              <h2
                style={{ fontFamily: "'Newsreader', Georgia, ui-serif, Cambria, 'Times New Roman', serif" }}
                className="text-4xl sm:text-5xl lg:text-[46px] leading-[1.12] text-[#1A1615] font-normal tracking-tight"
              >
                The rules of<br />
                revenue cycle,<br />
                rewritten
              </h2>

              {/* Dynamic Metric Display matching the screenshot's stacked design */}
              <div className="mt-12 sm:mt-16">
                <div
                  style={{ fontFamily: "'Newsreader', Georgia, ui-serif, Cambria, 'Times New Roman', serif" }}
                  className="flex items-center gap-1.5"
                >
                  {/* Stacked Digits Reel */}
                  <div className="relative inline-flex flex-col items-center justify-between h-[68px] w-9 overflow-hidden py-0.5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center justify-between h-full leading-none"
                      >
                        <span className="text-xl sm:text-2xl text-stone-400 select-none">
                          {activeMetric.stackedTop}
                        </span>
                        <span className="text-3xl sm:text-4xl text-[#1A1615] font-normal select-none">
                          {activeMetric.stackedBottom}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Suffix Number and % */}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeMetric.suffix}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="text-5xl sm:text-6xl lg:text-7xl text-[#1A1615] font-normal tracking-tight leading-none"
                    >
                      {activeMetric.suffix}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Subtitle / Stat Label */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeMetric.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2.5 text-sm sm:text-base text-stone-700 font-medium"
                  >
                    {activeMetric.label}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination Dots & Navigation Controls */}
            <div className="mt-8 sm:mt-12 flex items-center justify-between">
              {/* Pagination Dots matching screenshot */}
              <div className="flex items-center gap-2">
                {FEATURE_CARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Go to feature card ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === idx
                        ? "w-7 h-1.5 bg-[#1A1615]"
                        : "w-1.5 h-1.5 bg-stone-300 hover:bg-stone-500"
                    }`}
                  />
                ))}
              </div>

              {/* Next / Prev Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous card"
                  className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next card"
                  className="p-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? "Resume auto roll" : "Pause auto roll"}
                  className="p-2 rounded-full border border-stone-200 text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                  title={isPaused ? "Resume auto-roll" : "Pause auto-roll"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT HORIZONTAL ROLLING CARDS ================= */}
          <div
            className="lg:col-span-8 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {FEATURE_CARDS.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => scrollToIndex(idx)}
                  className={`snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[380px] lg:w-[410px] h-[480px] sm:h-[510px] md:h-[530px] rounded-[32px] bg-[#FAF8F5] border transition-all duration-300 p-8 sm:p-9 flex flex-col justify-between cursor-pointer select-none group ${
                    activeIndex === idx
                      ? "border-stone-300/90 shadow-lg shadow-stone-900/5 ring-1 ring-stone-900/5"
                      : "border-stone-200/70 hover:border-stone-300 hover:shadow-md"
                  }`}
                >
                  {/* 3D Visual Asset Container */}
                  <div className="relative w-full h-[250px] sm:h-[280px] md:h-[300px] flex items-center justify-center overflow-hidden rounded-2xl">
                    <Image
                      src={`${basePath}${card.image}`}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 290px, (max-width: 1024px) 380px, 410px"
                      className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={idx < 2}
                    />
                  </div>

                  {/* Card Bottom Details */}
                  <div className="mt-6 flex flex-col">
                    <h3 className="text-xl sm:text-[22px] font-semibold text-[#1A1615] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Extra spacing for end of scroll */}
              <div className="shrink-0 w-8" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
