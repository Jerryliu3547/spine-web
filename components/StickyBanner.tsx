"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, X, Globe } from "lucide-react";

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 bg-[#F5F3FF]/90 border-b border-purple-100 px-4 py-2 text-xs text-slate-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left / Center Announcement */}
        <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3 text-center">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-2.5 py-0.5 text-[11px] font-medium text-purple-800 border border-purple-200">
            <Sparkles className="h-3 w-3 text-purple-600" />
            <span>Foundry Announcement</span>
          </span>

          <span className="text-slate-700">
            <strong className="text-slate-900 font-semibold">Introducing Spine Agent 2.4:</strong> Autonomous multi-physics routing for surgical biomechanics.
          </span>

          <Link
            href="/product"
            className="inline-flex items-center gap-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>Explore live console</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Right utility items */}
        <div className="hidden lg:flex items-center gap-4 text-slate-500">
          <Link
            href="/contact"
            className="hover:text-slate-900 transition-colors text-[11px] font-medium"
          >
            Clinical Sign In
          </Link>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 cursor-pointer hover:text-slate-900">
            <Globe className="h-3 w-3 text-slate-500" />
            <span>Global · FDA 21 CFR Part 11</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="text-slate-400 hover:text-slate-700 transition-colors ml-2"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
