"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Cpu, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ArrowRight,
  Layers,
  Settings2,
  Play
} from "lucide-react";

export default function ClinicalWorkbenchSection() {
  const [selectedCase, setSelectedCase] = useState<"c31" | "c42" | "c18">("c31");
  const [activeConsoleTab, setActiveConsoleTab] = useState<"views" | "parameters">("views");
  const [screwTrajToggle, setScrewTrajToggle] = useState(true);
  const [stressHeatmapToggle, setStressHeatmapToggle] = useState(true);
  const [facetToggle, setFacetToggle] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const cases = {
    c31: {
      name: "C31",
      fullTitle: "C31 · L3–S1 Fusion + Cages",
      details: "Anatomical medical visual and dynamic 3D analysis that evaluates patient-specific kinematic parameters and anterior column load sharing for dynamic biomechanical analysis.",
      stress: "34.1 MPa",
      motion: "-99.6%",
    },
    c42: {
      name: "C42",
      fullTitle: "C42 · L3–S1 Posterior Rods Only",
      details: "Multi-level posterior instrumentation without anterior interbody load support, tracking fatigue limits at the lumbosacral junction.",
      stress: "58.4 MPa",
      motion: "-97.8%",
    },
    c18: {
      name: "C18",
      fullTitle: "C18 · L4–S1 Short Construct",
      details: "Segment-sparing lumbar construct preserving L3–L4 motion while assessing compensatory proximal junctional bending moments.",
      stress: "66.2 MPa",
      motion: "-93.4%",
    },
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <section id="workbench" className="py-16 md:py-24 bg-[#FAFAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-1/3 left-1/4 w-[750px] h-[450px] bg-purple-200/30 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-indigo-200/25 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Expanded Panoramic Container: Wider than the max-w-7xl navbar */}
      <div className="mx-auto w-full max-w-[1520px] 2xl:max-w-[1680px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Top Split Section: Large Workbench Card (Left) + 2 Stacked Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          {/* Main Large Card: Interactive Clinical Workbench (7-8 Cols on wide screens) */}
          <div className="lg:col-span-7 xl:col-span-8 rounded-3xl border border-purple-100/80 bg-white p-5 sm:p-7 xl:p-8 shadow-lg shadow-purple-100/40 hover:shadow-xl transition-all flex flex-col justify-between">
            {/* The Embedded Miniature Console UI Container */}
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden text-slate-800">
              {/* Console Top Navigation Bar */}
              <div className="bg-slate-50/90 border-b border-slate-200 px-3.5 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-md bg-purple-600 flex items-center justify-center text-white text-[10px] font-bold">
                    S
                  </div>
                  <span className="text-xs font-bold text-slate-900 font-sans tracking-tight">
                    Spine Suite
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-500">
                  <span className="text-purple-700 font-semibold border-b-2 border-purple-600 pb-0.5">Solutions</span>
                  <span className="hover:text-slate-800 cursor-pointer">Simulations</span>
                  <span className="hover:text-slate-800 cursor-pointer">Biomechanical</span>
                  <span className="hover:text-slate-800 cursor-pointer">Configure</span>
                </div>

                <button
                  type="button"
                  className="rounded-lg bg-purple-600 text-white px-3 py-1 text-[11px] font-semibold shadow-xs hover:bg-purple-700 transition-colors flex items-center gap-1"
                >
                  <span>Launch Case</span>
                </button>
              </div>

              {/* Console Inner Controls & Viewport Layout */}
              <div className="p-3 sm:p-4 bg-slate-50/40">
                <div className="grid grid-cols-12 gap-3">
                  {/* Left Mini Sidebar with Toggles */}
                  <div className="col-span-12 sm:col-span-3 rounded-xl bg-white border border-slate-200/80 p-2.5 flex flex-col justify-between text-[10px] font-mono">
                    <div className="space-y-2">
                      <div className="flex gap-1 border-b border-slate-100 pb-1.5">
                        <button
                          type="button"
                          onClick={() => setActiveConsoleTab("views")}
                          className={`flex-1 py-0.5 rounded text-center font-bold ${
                            activeConsoleTab === "views" ? "bg-purple-100 text-purple-800" : "text-slate-500"
                          }`}
                        >
                          Views
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveConsoleTab("parameters")}
                          className={`flex-1 py-0.5 rounded text-center font-bold ${
                            activeConsoleTab === "parameters" ? "bg-purple-100 text-purple-800" : "text-slate-500"
                          }`}
                        >
                          Params
                        </button>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Screw Traj</span>
                          <button
                            type="button"
                            onClick={() => setScrewTrajToggle(!screwTrajToggle)}
                            className={`w-6 h-3.5 rounded-full relative transition-colors ${
                              screwTrajToggle ? "bg-purple-600" : "bg-slate-300"
                            }`}
                          >
                            <span className={`block w-2.5 h-2.5 rounded-full bg-white transition-transform ${screwTrajToggle ? "translate-x-3" : "translate-x-0.5"}`} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">FEBio Heatmap</span>
                          <button
                            type="button"
                            onClick={() => setStressHeatmapToggle(!stressHeatmapToggle)}
                            className={`w-6 h-3.5 rounded-full relative transition-colors ${
                              stressHeatmapToggle ? "bg-purple-600" : "bg-slate-300"
                            }`}
                          >
                            <span className={`block w-2.5 h-2.5 rounded-full bg-white transition-transform ${stressHeatmapToggle ? "translate-x-3" : "translate-x-0.5"}`} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Facet Release</span>
                          <button
                            type="button"
                            onClick={() => setFacetToggle(!facetToggle)}
                            className={`w-6 h-3.5 rounded-full relative transition-colors ${
                              facetToggle ? "bg-purple-600" : "bg-slate-300"
                            }`}
                          >
                            <span className={`block w-2.5 h-2.5 rounded-full bg-white transition-transform ${facetToggle ? "translate-x-3" : "translate-x-0.5"}`} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-[9px] text-slate-500 space-y-0.5">
                      <div>GAP: <strong className="text-purple-700">5 / 13</strong></div>
                      <div>PI: <strong className="text-slate-800">38.4°</strong></div>
                    </div>
                  </div>

                  {/* Center Viewports: Dual 3D Spine Simulation Screens */}
                  <div className="col-span-12 sm:col-span-9 space-y-3">
                    <div className="grid grid-cols-2 gap-2.5">
                      {/* Viewport 1: Lateral Spine Screen */}
                      <div className="rounded-xl bg-slate-950 p-2 text-white flex flex-col justify-between h-36 relative overflow-hidden border border-slate-800">
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                          <span>Lateral Kinematics</span>
                          <span className="text-emerald-400">T1–L5</span>
                        </div>
                        
                        {/* Simulation Spine Visual Representation */}
                        <div className="my-auto flex flex-col items-center">
                          <div className="w-3.5 h-4.5 rounded-xs bg-slate-600/80 my-0.5" />
                          <div className="w-4 h-5 rounded-xs bg-slate-600/80 my-0.5" />
                          <div className="w-4.5 h-6 rounded-xs bg-purple-600 my-0.5 relative">
                            {screwTrajToggle && <span className="absolute -left-2.5 top-1.5 w-2.5 h-1 bg-emerald-400 rounded-xs" />}
                          </div>
                          <div className="w-5 h-6 rounded-xs bg-rose-500 my-0.5 relative">
                            {screwTrajToggle && <span className="absolute -left-2.5 top-1.5 w-2.5 h-1 bg-emerald-400 rounded-xs" />}
                            {stressHeatmapToggle && <span className="absolute inset-0 bg-amber-400/30 animate-pulse rounded-xs" />}
                          </div>
                          <div className="w-5.5 h-7 rounded-xs bg-purple-700 my-0.5" />
                        </div>

                        <div className="text-[9px] font-mono text-slate-400 flex justify-between">
                          <span>Schwab Grade 0</span>
                          <span className="text-purple-300">0.20s</span>
                        </div>
                      </div>

                      {/* Viewport 2: Coronal / Posterior Spine Screen */}
                      <div className="rounded-xl bg-slate-900 p-2 text-white flex flex-col justify-between h-36 relative overflow-hidden border border-slate-800">
                        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                          <span>Posterior Construct</span>
                          <span className="text-purple-400">34.1 MPa</span>
                        </div>

                        {/* Bilateral Rods & Screws Visual Representation */}
                        <div className="my-auto flex flex-col items-center">
                          <div className="flex gap-1.5 my-0.5">
                            <span className="w-1.5 h-4 bg-sky-400 rounded-xs" />
                            <span className="w-4 h-4 bg-slate-700 rounded-xs" />
                            <span className="w-1.5 h-4 bg-sky-400 rounded-xs" />
                          </div>
                          <div className="flex gap-1.5 my-0.5">
                            <span className="w-1.5 h-5 bg-purple-400 rounded-xs" />
                            <span className="w-5 h-5 bg-purple-800 rounded-xs border border-purple-400" />
                            <span className="w-1.5 h-5 bg-purple-400 rounded-xs" />
                          </div>
                          <div className="flex gap-1.5 my-0.5">
                            <span className="w-1.5 h-6 bg-purple-400 rounded-xs" />
                            <span className="w-6 h-6 bg-purple-900 rounded-xs border border-purple-400" />
                            <span className="w-1.5 h-6 bg-purple-400 rounded-xs" />
                          </div>
                        </div>

                        <div className="text-[9px] font-mono text-slate-400 flex justify-between">
                          <span>Anterior Cages</span>
                          <span className="text-emerald-400">-99.6%</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Dynamic Graphs matching screenshot */}
                    <div className="grid grid-cols-2 gap-2 bg-white rounded-xl p-2 border border-slate-200/80">
                      <div>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">Correction Lordosis Angle</span>
                        <div className="h-9 mt-1 flex items-end gap-1 px-1">
                          <span className="flex-1 bg-purple-200 h-2 rounded-t-xs" />
                          <span className="flex-1 bg-purple-300 h-3.5 rounded-t-xs" />
                          <span className="flex-1 bg-purple-400 h-5.5 rounded-t-xs" />
                          <span className="flex-1 bg-purple-500 h-7 rounded-t-xs" />
                          <span className="flex-1 bg-purple-600 h-8 rounded-t-xs" />
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">Stress Attenuation Curve</span>
                        <div className="h-9 mt-1 flex items-end gap-1 px-1">
                          <span className="flex-1 bg-sky-500 h-8 rounded-t-xs" />
                          <span className="flex-1 bg-sky-400 h-6.5 rounded-t-xs" />
                          <span className="flex-1 bg-sky-300 h-4.5 rounded-t-xs" />
                          <span className="flex-1 bg-emerald-400 h-3 rounded-t-xs" />
                          <span className="flex-1 bg-emerald-500 h-2 rounded-t-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Card Bottom Footer with Caption and Arrow Buttons */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Interactive Clinical Workbench
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Miniature clinical visualization video during dynamic biomechanical analysis.
                </p>
              </div>

              {/* Navigation circle buttons matching screenshot */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous view"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next view"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors shadow-xs cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Stacked 2 Cards (5 Cols on lg, 4 Cols on xl) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
            {/* Top Right Card: AI-Driven Planning */}
            <div className="flex-1 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                {/* Purple rounded icon badge matching screenshot */}
                <div className="h-11 w-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 mb-4 shadow-xs">
                  <Cpu className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  AI-Driven Planning
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Manage medical simulation pipeline & mechanism planning during biomechanical analysis; autonomous dynamic biomechanical constraints.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-purple-700 font-semibold">
                <span>3,800 candidate plans scored in 0.20s</span>
              </div>
            </div>

            {/* Bottom Right Card: Data Results with Dropdown */}
            <div className="flex-1 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Data Results
                </h3>

                {/* Dropdown pill matching screenshot: ● C31 ∨ */}
                <div className="inline-block mb-3">
                  <div className="relative">
                    <select
                      value={selectedCase}
                      onChange={(e) => setSelectedCase(e.target.value as "c31" | "c42" | "c18")}
                      className="appearance-none rounded-xl border border-purple-200 bg-purple-50/80 pl-3 pr-8 py-1.5 text-xs font-mono font-bold text-purple-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                      <option value="c31">● C31</option>
                      <option value="c42">● C42</option>
                      <option value="c18">● C18</option>
                    </select>
                    <ChevronDown className="h-3.5 w-3.5 text-purple-700 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cases[selectedCase].details}
                </p>
              </div>

              {/* "Learn more >" link matching screenshot */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#comparison"
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 font-sans transition-colors"
                >
                  <span>Learn more</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
                <span className="text-[11px] font-mono text-slate-400 font-medium">
                  {cases[selectedCase].stress} · {cases[selectedCase].motion}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Bento Feature Cards matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: AI-Driven Planning */}
          <div className="benchling-card benchling-card-hover rounded-2xl p-6 bg-white border border-slate-200 transition-all flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">AI-Driven Planning</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Autonomous planning algorithm optimizes continuous spinal curvature and prevents kinematic collision.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-purple-700 font-medium">
              Kinematic mechanism solver
            </div>
          </div>

          {/* Card 2: Biomechanics Insights */}
          <div className="benchling-card benchling-card-hover rounded-2xl p-6 bg-white border border-slate-200 transition-all flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Biomechanics Insights</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Coupled musculoskeletal forces and non-linear finite element contact equilibrium across vertebral levels.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-sky-700 font-medium">
              552 trunk muscles solved
            </div>
          </div>

          {/* Card 3: Clinical Case Studies */}
          <div className="benchling-card benchling-card-hover rounded-2xl p-6 bg-white border border-slate-200 transition-all flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Clinical Case Studies</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Concrete operative clinical data, biomechanical comparisons for surgical planning, and risk mitigation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 font-medium">
              Stanford & UT Health cohorts
            </div>
          </div>

          {/* Card 4: Regulatory Compliance */}
          <div className="benchling-card benchling-card-hover rounded-2xl p-6 bg-white border border-slate-200 transition-all flex flex-col justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Regulatory Compliance</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Regulatory compliance and ASME V&V 40 verification procedures for medical AI decision support.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-indigo-700 font-medium">
              ASME V&V 40 & FDA 21 CFR Part 11
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
