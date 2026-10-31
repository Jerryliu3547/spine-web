"use client";

import React, { useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Sliders,
  ArrowRight,
  Layers,
  AlertCircle,
  Activity
} from "lucide-react";

export default function ComparisonTable() {
  const [selectedPlan, setSelectedPlan] = useState<number>(2); // Default to Plan C (Recommended)

  const plans = [
    {
      id: 0,
      name: "Plan A: L4–S1 · Rods Only",
      tagline: "Short construct; minimal tissue disruption",
      fusedMotion: "-93.4%",
      rodStress: "66.2 MPa",
      safetyFactor: "13.6×",
      adjacentL3L4: "648 N (+8%)",
      pjkRisk: "18.2% (Moderate)",
      recoveryEstimate: "4–6 weeks",
      status: "Acceptable",
    },
    {
      id: 1,
      name: "Plan B: L3–S1 · Rods Only",
      tagline: "Extended stabilization to restore lordosis",
      fusedMotion: "-97.8%",
      rodStress: "58.4 MPa",
      safetyFactor: "15.4×",
      adjacentL3L4: "582 N (-3%)",
      pjkRisk: "11.5% (Low)",
      recoveryEstimate: "6–8 weeks",
      status: "Balanced",
    },
    {
      id: 2,
      name: "Plan C: L3–S1 · Rods + Cages (Recommended)",
      tagline: "Interbody anterior load sharing cuts rod bending stress by 42%",
      fusedMotion: "-99.6%",
      rodStress: "34.1 MPa",
      safetyFactor: "26.4×",
      adjacentL3L4: "574 N (-4.3%)",
      pjkRisk: "9.8% (Lowest)",
      recoveryEstimate: "6–8 weeks",
      status: "Optimal Biomechanics",
    },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#FAFAFC] border-t border-slate-200/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Apple Two-Tone Style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b] block mb-3">
            Multi-Physics Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.022em]">
            <span className="text-[#1d1d1f]">Compare Candidate Constructs.</span>{" "}
            <span className="text-[#86868b]">FEBio & OpenSim verification.</span>
          </h2>
          <p className="mt-4 text-base sm:text-[17px] text-[#86868b] leading-relaxed font-normal">
            Side-by-side verification of fused motion rigidity, titanium rod fatigue safety margins, and adjacent segment stress across the three simulated plans.
          </p>
        </div>

        {/* Plan Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPlan(p.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${selectedPlan === p.id
                  ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300 shadow-2xs"
                }`}
            >
              {p.name.split(":")[0]}
            </button>
          ))}
        </div>

        {/* Benchling Scientific Data Table Card (Clean White) */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-mono text-xs">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider">Clinical Metric</th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider">Plan A (L4–S1 Rods)</th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider">Plan B (L3–S1 Rods)</th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-purple-700 bg-purple-50/50">
                    Plan C (L3–S1 + Cages) ★
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Activity className="h-4 w-4 text-purple-600" />
                    <span>Fused Segment Motion Drop</span>
                  </td>
                  <td className="py-4 px-6 font-mono text-slate-600">-93.4%</td>
                  <td className="py-4 px-6 font-mono text-slate-600">-97.8%</td>
                  <td className="py-4 px-6 font-mono text-emerald-700 font-bold bg-purple-50/30">
                    -99.6% (Solid Fusion)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-purple-600" />
                    <span>Rod Peak von Mises Stress</span>
                  </td>
                  <td className="py-4 px-6 font-mono text-slate-600">66.2 MPa</td>
                  <td className="py-4 px-6 font-mono text-slate-600">58.4 MPa</td>
                  <td className="py-4 px-6 font-mono text-emerald-700 font-bold bg-purple-50/30">
                    34.1 MPa (-42% stress)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600" />
                    <span>Yield Safety Margin</span>
                  </td>
                  <td className="py-4 px-6 font-mono text-slate-600">13.6× yield</td>
                  <td className="py-4 px-6 font-mono text-slate-600">15.4× yield</td>
                  <td className="py-4 px-6 font-mono text-purple-800 font-bold bg-purple-50/30">
                    26.4× yield (Optimal)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-amber-600" />
                    <span>Adjacent Level L2–L3 Load</span>
                  </td>
                  <td className="py-4 px-6 font-mono text-amber-700 font-medium">648 N (+8% overload)</td>
                  <td className="py-4 px-6 font-mono text-slate-600">582 N (-3%)</td>
                  <td className="py-4 px-6 font-mono text-emerald-700 font-bold bg-purple-50/30">
                    574 N (-4.3% relief)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-rose-600" />
                    <span>Neurospine ML PJK Risk</span>
                  </td>
                  <td className="py-4 px-6 font-mono text-rose-700 font-medium">18.2% (Moderate)</td>
                  <td className="py-4 px-6 font-mono text-slate-600">11.5% (Low)</td>
                  <td className="py-4 px-6 font-mono text-emerald-700 font-bold bg-purple-50/30">
                    9.8% (Lowest)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-slate-500" />
                    <span>Status & Recommendation</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-mono text-slate-700 border border-slate-200">
                      High Notch Risk
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-mono text-purple-700 border border-purple-200">
                      Standard Care
                    </span>
                  </td>
                  <td className="py-4 px-6 bg-purple-50/30">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-mono text-emerald-800 border border-emerald-200 font-semibold">
                      Biomechanically Preferred
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table Footer info banner */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Based on FEBio 4.2 von Mises analysis (pure moment 7.5 N·m + 500 N preload)</span>
            </div>
            <a
              href="#booking"
              className="text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-1"
            >
              <span>Download DICOM & FEBio Case Files</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
