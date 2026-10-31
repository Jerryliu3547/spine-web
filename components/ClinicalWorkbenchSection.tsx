"use client";

import React from "react";
import Image from "next/image";

export default function ClinicalWorkbenchSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="workbench" className="py-16 md:py-24 bg-[#F5F5F7] border-t border-[#E5E5E7] relative overflow-hidden">
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[450px] bg-blue-200/20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-indigo-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Container */}
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Apple Two-Tone Style */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[-0.022em]">
            <span className="text-[#1d1d1f]">Features.</span>{" "}
            <span className="text-[#86868b]">The Spine Suite difference.</span>
          </h2>
        </div>

        {/* 10-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          
          {/* Card 1: X-ray (Apple Dodger Blue #007aff) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col items-start min-h-[220px] lg:col-start-1 lg:row-start-1 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(0,122,255,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#007aff]/40">
            <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 border border-[#007aff]/20 flex items-center justify-center text-[#007aff] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#007aff]/15">
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="6" y="4" width="12" height="16" rx="2" />
                <path d="M12 9v6m-2.5-2.5 2.5 2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
              <span className="text-[#007aff]">X-ray.</span> Lateral view.
            </h3>
            <p className="mt-2 text-[13px] text-[#86868b] font-normal leading-snug">
              Calibrated lateral radiograph ingestion with automated scaling.
            </p>
          </div>

          {/* Card 2: Landmark detection (Apple Fire-Engine Red #ff3b30) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col items-start min-h-[220px] lg:col-start-2 lg:row-start-1 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(255,59,48,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#ff3b30]/40">
            <div className="w-10 h-10 rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center text-[#ff3b30] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#ff3b30]/15">
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 8V6a2 2 0 0 1 2-2h2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 4h2a2 2 0 0 1 2 2v2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 16v2a2 2 0 0 1-2 2h-2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 20H6a2 2 0 0 1-2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
              <span className="text-[#ff3b30]">Landmark detection.</span> YOLO model trained on 300 manually labeled images.
            </h3>
          </div>

          {/* Card 3: PATIENT-SPECIFIC FE analysis (Tall Dark Hero Card - Spans 2 Rows) */}
          <div className="group bg-[#0B0F19] text-white rounded-[26px] border border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.22)] p-6 sm:p-7 flex flex-col justify-between lg:col-start-3 lg:row-start-1 lg:row-span-2 min-h-[480px] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_-8px_rgba(0,0,0,0.55),0_0_40px_-8px_rgba(56,189,248,0.25)] hover:border-slate-700">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-[#38bdf8] font-bold uppercase">
                  PATIENT-SPECIFIC
                </span>
              </div>
              <h3 className="text-[24px] sm:text-[26px] font-semibold tracking-[-0.02em] leading-tight text-white">
                <span className="text-[#38bdf8]">FE analysis.</span> T1–S1 non-linear spine finite element model.
              </h3>
              <p className="mt-2 text-[13px] text-slate-300 leading-snug font-normal">
                Patient-specific multi-physics simulation calibrated to physiological boundary conditions.
              </p>
            </div>

            {/* 3D Translucent Spine Model Render */}
            <div className="relative my-4 w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-slate-800/80 shadow-inner">
              <Image
                src={`${basePath}/features/fe-analysis-spine.jpg`}
                alt="T1–S1 non-linear spine FE model"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>

            {/* Bullet Points */}
            <div className="space-y-2 text-[13px] text-slate-300 font-normal pt-1">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <span>Disc + rod stress</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <span>Intact vs fused</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <span>PLIF cages, Ti / PEEK</span>
              </div>
            </div>
          </div>

          {/* Card 4: 3D visualization (Apple Violet / Purple #af52de) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col items-start min-h-[220px] lg:col-start-4 lg:row-start-1 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(175,82,222,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#af52de]/40">
            <div className="w-10 h-10 rounded-xl bg-[#af52de]/10 border border-[#af52de]/20 flex items-center justify-center text-[#af52de] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#af52de]/15">
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m3.3 7.8 8.7 5.2 8.7-5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 13v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
              <span className="text-[#af52de]">3D visualization.</span> Interactive vertebrae, fixation rods, and stress.
            </h3>
            <p className="mt-2 text-[13px] text-[#86868b] font-normal leading-snug">
              Interactive vertebrae, fixation rods, screws, stress and displacement.
            </p>
          </div>

          {/* Card 5: Agentic AI interface (Spans 2 columns - Apple Blue #007aff) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between min-h-[220px] md:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-2 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(0,122,255,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#007aff]/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 border border-[#007aff]/20 flex items-center justify-center text-[#007aff] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#007aff]/15">
                <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="4" y="8" width="16" height="12" rx="3" />
                  <path d="M12 4v4m-4 8v.01m8-.01v.01M9 13h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
                <span className="text-[#007aff]">Agentic AI interface.</span> Automates surgical planning and clinical reports.
              </h3>
              <p className="mt-2 text-[13px] text-[#86868b] font-normal leading-snug max-w-lg">
                Automates surgical planning, generates clinical reports and supports case investigation.
              </p>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#007aff] hover:bg-[#0066d6] text-white text-[13px] font-medium shadow-sm shadow-[#007aff]/25 transition-all duration-200 group-hover:shadow-md group-hover:shadow-[#007aff]/35 group-hover:scale-[1.02] cursor-pointer select-none">
                &ldquo;Fuse L4–S1 and compare the loads&rdquo;
              </span>
            </div>
          </div>

          {/* Card 6: Fixation rod design (Apple Forest Green #34c759) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col items-start min-h-[220px] lg:col-start-4 lg:row-start-2 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(52,199,89,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#34c759]/40">
            <div className="w-10 h-10 rounded-xl bg-[#34c759]/10 border border-[#34c759]/20 flex items-center justify-center text-[#34c759] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#34c759]/15">
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6.5 17.5 C 10 17.5, 14 6.5, 17.5 6.5" strokeLinecap="round" />
                <circle cx="6.5" cy="17.5" r="1.75" />
                <circle cx="17.5" cy="6.5" r="1.75" />
              </svg>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
              <span className="text-[#34c759]">Fixation rod design.</span> Patient-specific multi-planar curvature.
            </h3>
            <p className="mt-2 text-[13px] text-[#86868b] font-normal leading-snug">
              Patient-specific rods with optimized multi-planar curvature.
            </p>
          </div>

          {/* Card 7: PJK risk estimation (Apple Persimmon / Red-Orange #ea5418) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col items-start min-h-[220px] lg:col-start-1 lg:row-start-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(234,84,24,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#ea5418]/40">
            <div className="w-10 h-10 rounded-xl bg-[#ea5418]/10 border border-[#ea5418]/20 flex items-center justify-center text-[#ea5418] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#ea5418]/15">
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" />
                <circle cx="12" cy="17" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
              <span className="text-[#ea5418]">PJK risk estimation.</span> Machine learning prediction.
            </h3>
            <p className="mt-2 text-[13px] text-[#86868b] font-normal leading-snug">
              Predicts proximal junctional kyphosis risk with machine learning.
            </p>
          </div>

          {/* Card 8: Alignment (Apple Steel Teal #08827c) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between min-h-[220px] lg:col-start-2 lg:row-start-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(8,130,124,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#08827c]/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#08827c]/10 border border-[#08827c]/20 flex items-center justify-center text-[#08827c] mb-6 font-semibold text-base font-serif transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#08827c]/15">
                Å
              </div>
              <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
                <span className="text-[#08827c]">Alignment.</span> Spino-pelvic parameters.
              </h3>
              <p className="mt-2 text-[13px] text-[#86868b] font-normal leading-snug">
                Real-time pelvic incidence, lumbar lordosis, and sagittal balance calculations.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full border border-[#08827c]/25 bg-[#08827c]/10 text-[11px] font-semibold text-[#08827c] shadow-2xs transition-transform duration-200 group-hover:scale-105">
                PI
              </span>
              <span className="px-3 py-1 rounded-full border border-[#08827c]/25 bg-[#08827c]/10 text-[11px] font-semibold text-[#08827c] shadow-2xs transition-transform duration-200 group-hover:scale-105">
                LL
              </span>
              <span className="px-3 py-1 rounded-full border border-[#08827c]/25 bg-[#08827c]/10 text-[11px] font-semibold text-[#08827c] shadow-2xs transition-transform duration-200 group-hover:scale-105">
                SVA
              </span>
            </div>
          </div>

          {/* Card 9: Planning score (Apple Saffron Amber #d97706) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col items-start min-h-[220px] lg:col-start-3 lg:row-start-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(217,119,6,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#d97706]/40">
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[#d97706] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#f59e0b]/15">
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 16 A 8.5 8.5 0 1 1 19 16" strokeLinecap="round" />
                <path d="m12 12 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
              <span className="text-[#d97706]">Planning score.</span> Biomechanical safety verification.
            </h3>
            <p className="mt-2 text-[13px] text-[#86868b] font-normal leading-snug">
              Verifies the plan&apos;s biomechanical safety and alignment.
            </p>
          </div>

          {/* Card 10: Musculoskeletal model (Apple Deep Cerise / Rose #ec348c) */}
          <div className="group bg-white rounded-[26px] border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between min-h-[220px] lg:col-start-4 lg:row-start-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_38px_-6px_rgba(236,52,140,0.16),0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#ec348c]/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ec348c]/10 border border-[#ec348c]/20 flex items-center justify-center text-[#ec348c] mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xs group-hover:bg-[#ec348c]/15">
                <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v7m0 0-3 6m3-6 3 6M7 10h10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-snug text-[#1d1d1f]">
                <span className="text-[#ec348c]">Musculoskeletal model.</span> Thoracolumbar dynamics.
              </h3>
              <p className="mt-1 text-[13px] text-[#86868b] font-normal leading-snug">
                Thoracolumbar model, 500+ muscles, 51 DoF.
              </p>
            </div>

            {/* Compression Chart (matching screenshot) */}
            <div className="mt-4 rounded-xl bg-[#0B0F19] p-3 border border-slate-800 text-[8px] font-mono shadow-xs">
              <div className="text-slate-200 font-bold mb-0.5">Compression</div>
              <div className="text-[7.5px] text-slate-400 mb-2 leading-tight">
                Along each vertebra&apos;s own axis, reaction on the upper vertebra.
              </div>
              <div className="space-y-0.5">
                {[
                  { level: "T1–T2", blue: 40, orange: 28 },
                  { level: "T2–T3", blue: 46, orange: 34 },
                  { level: "T3–T4", blue: 53, orange: 42 },
                  { level: "T4–T5", blue: 61, orange: 50 },
                  { level: "T5–T6", blue: 68, orange: 58 },
                  { level: "T6–T7", blue: 75, orange: 66 },
                  { level: "T7–T8", blue: 82, orange: 74 },
                  { level: "T8–T9", blue: 88, orange: 80 },
                  { level: "T9–T10", blue: 93, orange: 86 },
                  { level: "T10–T11", blue: 98, orange: 92 },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-7 text-[7px] text-slate-400 font-mono shrink-0">{row.level}</span>
                    <div className="flex-1 flex flex-col gap-0.5">
                      <div className="h-0.5 rounded-full bg-[#38BDF8]" style={{ width: `${row.blue}%` }} />
                      <div className="h-0.5 rounded-full bg-[#F59E0B]" style={{ width: `${row.orange}%` }} />
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
