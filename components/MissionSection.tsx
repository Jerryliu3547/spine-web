"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

export default function MissionSection() {
  const [metricTab, setMetricTab] = useState<"clinical" | "foundry">("clinical");

  const clinicalMetrics = [
    {
      value: "22%+",
      label: "Higher sagittal alignment restoration accuracy compared to traditional manual templating",
      tag: "Clinical Precision",
    },
    {
      value: "50%+",
      label: "Lower computational solve time for patient-specific nonlinear finite element meshing",
      tag: "Solver Throughput",
    },
    {
      value: "60%+",
      label: "Reduction in post-operative junctional mechanical risk and revision probability",
      tag: "Patient Safety",
    },
    {
      value: "500k+",
      label: "Biomechanical stress iterations simulated across validated anatomical spine models",
      tag: "In-Silico Scale",
    },
  ];

  const foundryMetrics = [
    {
      value: "552",
      label: "Dynamically solved trunk muscle groups in real-time static optimization",
      tag: "Musculoskeletal",
    },
    {
      value: "14×",
      label: "Titanium rod yield stress safety margin verified before incision",
      tag: "Hardware Stability",
    },
    {
      value: "0.20s",
      label: "Rapid in-browser surgical plan evaluation and deformity correction ranking",
      tag: "Zero-Latency AI",
    },
    {
      value: "22 / 22",
      label: "Peer-reviewed FEBio and in-vitro cadaveric kinematic validation cases",
      tag: "Scientific Pedigree",
    },
  ];

  const activeMetrics = metricTab === "clinical" ? clinicalMetrics : foundryMetrics;

  return (
    <section
      id="mission"
      aria-label="Our Mission"
      className="relative overflow-hidden bg-white text-[#1d1d1f] pt-14 pb-24 sm:pt-20 sm:pb-32 md:pt-24 md:pb-36 border-b border-slate-200/80"
    >
      {/* Visual Accent: Torn Paper Collage on Right Edge (matches user reference screenshot) */}
      <div
        className="absolute top-0 right-0 h-full w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-[460px] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src="/mission/torn-paper-right.jpg"
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
          src="/mission/torn-paper-bottom-left.jpg"
          alt=""
          className="w-full h-auto object-cover opacity-95 mix-blend-multiply filter contrast-110"
        />
      </div>

      {/* Subtle Apple Ambient Glow in Center */}
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-100/25 via-indigo-50/15 to-sky-100/20 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top-Left Script Calligraphy Label: "Our Mission" */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex flex-col items-start select-none">
            <span className="font-mission-script text-3xl sm:text-4xl md:text-[48px] text-[#2c1d18] -rotate-3 tracking-wide leading-none font-medium">
              Our
            </span>
            <span className="font-mission-script text-3xl sm:text-4xl md:text-[48px] text-[#2c1d18] -rotate-3 -mt-1 sm:-mt-2 ml-4 sm:ml-5 tracking-wide leading-none font-medium">
              Mission
            </span>
          </div>

          {/* Apple SF Pro Eyebrow / Scientific Pedigree */}
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider text-[#007aff] bg-blue-50/80 border border-blue-200/60 shadow-2xs">
              <Sparkles className="h-3 w-3 text-[#007aff]" />
              <span>Pioneering Computational Surgical Intelligence</span>
            </span>
          </div>
        </div>

        {/* Main Editorial Mission Statement (High-Contrast Editorial Serif matching screenshot) */}
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-4xl pr-4 sm:pr-8">
          <h1 className="font-apple-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.18] sm:leading-[1.22] md:leading-[1.24] text-[#1d1d1f] tracking-tight">
            <span>
              Biomechanical guesswork shouldn’t stand between spine surgeons and the care they deliver.
            </span>
            <span className="block mt-6 sm:mt-8 text-[#1d1d1f]">
              Spine Suite exists to help healthcare teams eliminate mechanical failure with computational certainty.
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            We bridge the gap between surgical intuition and computational mechanics—replacing manual guesswork with patient-specific AI and finite element simulations to protect every patient from implant failure.
          </p>

          {/* Action CTAs in Apple Signature Styling */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#team"
              className="apple-cta-blue bg-[#007aff] hover:bg-[#0066d6] inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-[#007aff]/30 active:scale-95 transition-all"
            >
              <span>Meet the Founding Team</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-2xs"
            >
              <Calendar className="h-4 w-4 text-[#007aff]" />
              <span>Book 30-min Technical Review</span>
            </Link>
          </div>
        </div>

        {/* Bottom Section: "Spine Suite in numbers" + Tabular Metrics Rows */}
        <div className="mt-20 sm:mt-28 md:mt-36 pt-10 sm:pt-14 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-4 pl-0 sm:pl-2">
              <h2 className="font-apple-serif text-2xl sm:text-3xl md:text-[34px] font-normal text-[#1d1d1f] leading-snug">
                Spine Suite in<br />numbers
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xs">
                Empirical clinical validation and biomechanical scale across North American research hospitals.
              </p>

              {/* Apple Segmented Capsule Tab Toggle */}
              <div className="mt-6 inline-flex p-1 rounded-full bg-slate-100 border border-slate-200/80 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setMetricTab("clinical")}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    metricTab === "clinical"
                      ? "bg-white text-[#1d1d1f] shadow-xs ring-1 ring-black/[0.06]"
                      : "text-slate-600 hover:text-[#1d1d1f]"
                  }`}
                >
                  Clinical Impact
                </button>
                <button
                  type="button"
                  onClick={() => setMetricTab("foundry")}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    metricTab === "foundry"
                      ? "bg-white text-[#1d1d1f] shadow-xs ring-1 ring-black/[0.06]"
                      : "text-slate-600 hover:text-[#1d1d1f]"
                  }`}
                >
                  Foundry Scale
                </button>
              </div>
            </div>

            {/* Right Metrics Rows Column (Exact match to reference screenshot: [Number] | [Description]) */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-slate-200/90 border-t border-b border-slate-200/90">
                {activeMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-baseline justify-start gap-4 sm:gap-12 md:gap-16 group transition-colors duration-200 hover:bg-slate-50/70 -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-xl"
                  >
                    {/* Big Metric Number */}
                    <div className="shrink-0 min-w-[140px] sm:min-w-[180px] lg:min-w-[200px]">
                      <span className="font-apple-serif text-4xl sm:text-5xl md:text-[56px] font-light sm:font-normal text-[#1d1d1f] tracking-tight leading-none group-hover:text-[#007aff] transition-colors">
                        {item.value}
                      </span>
                    </div>

                    {/* Metric Description */}
                    <div className="flex-1 max-w-lg">
                      <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-900 font-normal leading-relaxed transition-colors">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
