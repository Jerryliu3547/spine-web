"use client";

import React from "react";

export default function MissionSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      id="mission"
      aria-label="Our Mission"
      className="relative overflow-hidden bg-white text-[#1d1d1f] pt-14 pb-20 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 border-b border-slate-200/80"
    >
      {/* Visual Accent: Torn Paper Collage on Right Edge (matches user reference screenshot) */}
      <div
        className="absolute top-0 right-0 h-full w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-[460px] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src={`${basePath}/mission/torn-paper-right.jpg`}
          alt=""
          className="w-full h-full object-cover object-left opacity-85 sm:opacity-90 md:opacity-95 mix-blend-multiply filter contrast-105"
        />
        {/* Soft edge gradient to blend seamlessly into white canvas */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/50 to-transparent" />
      </div>

      {/* Visual Accent: Torn Paper Collage in Bottom-Left Corner (matches user reference screenshot) */}
      <div
        className="absolute bottom-0 left-0 w-[200px] sm:w-[280px] md:w-[360px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <img
          src={`${basePath}/mission/torn-paper-bottom-left.jpg`}
          alt=""
          className="w-full h-auto object-cover opacity-95 mix-blend-multiply filter contrast-110"
        />
      </div>

      {/* Subtle Natural Warm Linen Ambient Glow in Center */}
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-stone-100/35 via-amber-50/15 to-transparent blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title: "Our Mission" */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#1d1d1f]">
            <span>Our</span> <span>Mission</span>
          </h1>
        </div>

        {/* Main Editorial Mission Statement (Apple Two-Tone Typography with Balanced Rag & Fluid Leading) */}
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-4xl xl:max-w-5xl pr-4 sm:pr-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-semibold tracking-[-0.022em] leading-[1.26] sm:leading-[1.28] md:leading-[1.3] text-balance">
            <span className="text-[#1d1d1f]">
              Biomechanical Analysis shouldn’t stand between spine surgeons and the care they deliver.
            </span>
            <span className="block mt-4 sm:mt-5 text-[#86868b] font-medium">
              SpineTwin exists to help healthcare teams eliminate mechanical failure with computational certainty.
            </span>
          </h2>

          <p className="mt-8 sm:mt-10 text-[17px] sm:text-[19px] md:text-[20px] text-[#6e6e73] font-normal leading-[1.58] tracking-[-0.012em] max-w-3xl text-pretty">
            We bridge the gap between surgical intuition and computational mechanics, replacing manual guesswork with patient-specific AI and finite element simulations to protect every patient from implant failure.
          </p>
        </div>
      </div>
    </section>
  );
}
