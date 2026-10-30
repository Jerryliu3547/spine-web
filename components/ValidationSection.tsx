"use client";

import React from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FlaskConical, 
  Database
} from "lucide-react";

export default function ValidationSection() {
  return (
    <section id="validation" className="py-20 md:py-28 bg-white border-t border-slate-200/80 benchling-grid-bg relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono text-purple-800 mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-purple-600" />
            <span>Benchling-Grade Scientific Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Transparent Validation &{" "}
            <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Honest Platform Status
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            We hold computational surgical models to the highest standard of verification, cadaver validation, and transparent limitations.
          </p>
        </div>

        {/* 3 Core Scientific Trust Cards (Clean White Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: FEBio V&V */}
          <div className="benchling-card benchling-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  22/22 Checks Passed
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">FEBio Verification & Validation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Subjected to 22 analytical benchmark equilibrium tests (beam bending, linear elasticity, contact mechanics) and 85 cadaver kinematic benchmarks.
              </p>
              
              <div className="mt-5 space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center justify-between font-mono">
                  <span>Analytical Equilibrium:</span>
                  <strong className="text-emerald-700 font-bold">22 / 22 (100%)</strong>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Cadaver Checks Passed:</span>
                  <strong className="text-slate-900 font-bold">55 / 85 (65%)</strong>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Thoracic Flexibility Margin:</span>
                  <strong className="text-amber-700 font-bold">±12% variance</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>Conforms to ASME V&V 40 medical device standards</span>
            </div>
          </div>

          {/* Card 2: OpenSim MSK Base */}
          <div className="benchling-card benchling-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700">
                  <FlaskConical className="h-6 w-6" />
                </span>
                <span className="text-xs font-mono font-bold text-purple-800 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                  r = 0.91 In Vivo
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">OpenSim Musculoskeletal Engine</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Powered by the Bruno et al. Anderson Lab model. Correlated against in vivo telemetry sensors (Wilke et al.) with 552 calibrated muscle lines.
              </p>
              
              <div className="mt-5 space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center justify-between font-mono">
                  <span>Disc Pressure Fit:</span>
                  <strong className="text-emerald-700 font-bold">r = 0.91 (5 in vivo studies)</strong>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Framingham CT Cohorts:</span>
                  <strong className="text-slate-900 font-bold">250 subjects</strong>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span>Spinal Segments:</span>
                  <strong className="text-purple-700 font-bold">T1 to S1 articulate</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="h-3.5 w-3.5 text-purple-600 shrink-0" />
              <span>Published peer-reviewed musculoskeletal kinematics</span>
            </div>
          </div>

          {/* Card 3: Honest Breakdown */}
          <div className="benchling-card benchling-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
                  <Database className="h-6 w-6" />
                </span>
                <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
                  Transparent Status
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Capabilities & Roadmap</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full transparency on clinical readiness: automated X-ray analysis and static simulation work today; 3D true patient geometry in beta.
              </p>
              
              <div className="mt-5 space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-800 font-medium">End-to-end 11-stage pipeline (Production)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-800 font-medium">Autonomous parameter sweeping (Active)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span className="text-slate-500">Biplanar CT 3D registration (Q2 2026)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span className="text-slate-500">Dynamic gait musculoskeletal loops (Q3 2026)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
              <Clock className="h-3.5 w-3.5 text-purple-600 shrink-0" />
              <span>Regular peer review updates committed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
