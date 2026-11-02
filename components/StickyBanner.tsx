"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X, Globe } from "lucide-react";

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 bg-[#F5F5F7] border-b border-[#E5E5E7] px-4 py-2 text-xs text-[#1d1d1f]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left / Center Announcement */}
        <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3 text-center">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#007aff]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#0071e3] border border-[#007aff]/20">
            <Sparkles className="h-3 w-3 text-[#0071e3]" />
            <span>Foundry Announcement</span>
          </span>

          <span className="text-[#424245]">
            <strong className="text-[#1d1d1f] font-semibold">Introducing Spine Agent 2.4:</strong> Autonomous multi-physics routing for surgical biomechanics.
          </span>

          <Link
            href="/product"
            className="inline-flex items-center gap-1 font-semibold text-[#0071e3] hover:text-[#0077ed] hover:underline transition-colors group"
          >
            <span>Explore live console</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Right utility items */}
        <div className="hidden lg:flex items-center gap-4 text-[#86868b]">
          <Link
            href="/contact"
            className="hover:text-[#1d1d1f] transition-colors text-[11px] font-medium"
          >
            Clinical Sign In
          </Link>
          <span className="text-[#d2d2d7]">|</span>
          <div className="flex items-center gap-1 text-[11px] text-[#6e6e73] hover:text-[#1d1d1f] cursor-pointer transition-colors">
            <Globe className="h-3 w-3 text-[#86868b]" />
            <span>Global · FDA 21 CFR Part 11</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="text-[#86868b] hover:text-[#1d1d1f] transition-colors ml-2 p-0.5 rounded hover:bg-black/5"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
