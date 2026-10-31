"use client";

import React, { useState } from "react";
import {
  Scan,
  Compass,
  Bone,
  Activity,
  CheckCircle,
  Cpu,
  Sliders,
  ChevronRight
} from "lucide-react";

export default function PipelineSection() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      stageNumber: "Stages 1–5",
      stepIndex: "01",
      title: "Read the X-Ray",
      buttonText: "Read the X-Ray",
      headline: "AI finds 17 vertebrae with 8 editable corners each",
      tagline: "From raw lateral radiograph to full spinopelvic sagittal parameters in under 2 seconds.",
      engine: "YOLO v11 Landmark Network",
      icon: Scan,
      badgeColor: "text-purple-700 border-purple-200 bg-purple-50",
      keyStats: [
        { label: "Vertebrae Detected", value: "17 (T1–L5)" },
        { label: "Landmark Points", value: "136 (8 per body)" },
        { label: "Sagittal Parameters", value: "PI, PT, SS, LL, TK, SVA, GT" },
        { label: "Manual Comparison", value: "0.0° discrepancy" },
      ],
      details: [
        "Automated identification of 17 vertebrae from T1 down to L5, detecting 8 anatomical corners per vertebra.",
        "Full spinopelvic parameter calculation: Pelvic Incidence (PI 38.4°), Pelvic Tilt (PT 14.4°), Sacral Slope (SS 24.0°), Lumbar Lordosis (LL 41.7°), and Thoracic Kyphosis (TK 36.5°).",
        "Automated GAP (Global Alignment and Proportion) score calculation (5/13) and SVA global balance (-38 mm).",
        "Clinician override enabled: every corner can be dragged and fine-tuned by hand with real-time recalculation.",
      ],
      interactiveSnippet: {
        header: "Spine Landmark & Pelvic Parameter Output",
        data: [
          { name: "Pelvic Incidence (PI)", val: "38.4°", status: "anatomical base" },
          { name: "Pelvic Tilt (PT)", val: "14.4°", status: "compensated" },
          { name: "Sacral Slope (SS)", val: "24.0°", status: "normal" },
          { name: "Lumbar Lordosis (LL)", val: "41.7°", status: "target: 42.0°" },
          { name: "Thoracic Kyphosis (TK)", val: "36.5°", status: "matched check case" },
          { name: "Global Tilt (GT)", val: "8.3°", status: "aligned" },
          { name: "GAP Score", val: "5 / 13", status: "moderate risk" },
        ],
      },
    },
    {
      stageNumber: "Stages 6–8",
      stepIndex: "02",
      title: "Plan the Correction",
      buttonText: "Plan the Correction",
      headline: "A plan is a mechanism, not a 2D drawing",
      tagline: "Rigid vertebrae kinematics ensure every candidate plan is an anatomically viable spine.",
      engine: "Browser Kinematic Engine & 16k Cohort Matcher",
      icon: Compass,
      badgeColor: "text-indigo-700 border-indigo-200 bg-indigo-50",
      keyStats: [
        { label: "Candidate Plans", value: "3,800 candidate plans" },
        { label: "Optimization Time", value: "0.20 seconds" },
        { label: "Cohort Database", value: "16,807 spines" },
        { label: "PJK Check", value: "Dual ML & Biomechanics" },
      ],
      details: [
        "Rigid vertebrae constraints: only intervertebral discs and facet joints articulate, preventing unphysical deformations.",
        "Over 3,800 candidate multi-level lordosis and rod contour configurations evaluated in 200 ms in the browser.",
        "Ranked like an experienced spine surgeon: prioritizing GAP score, then SRS-Schwab alignment criteria; on ties, minimal corrective trauma wins.",
        "Strict surgical sanity rules: automatically rejects segmental angles below 0° or above 35°, or >25° change at a single operative level.",
        "Dual Proximal Junctional Kyphosis (PJK) verification: 135,000-point Neurospine ML lookup (11.5% low risk) checked against biomechanical bending moment at UIV+1 (14.3 N·m).",
      ],
      interactiveSnippet: {
        header: "Optimization Constraints & Sanity Filters",
        data: [
          { name: "Segmental Angle Limit", val: "0° – 35°", status: "enforced" },
          { name: "Max Single-Level Delta", val: "< 25.0°", status: "anti-kyphosis filter" },
          { name: "SRS-Schwab Grade", val: "Grade 0", status: "optimal lordosis" },
          { name: "Neurospine ML PJK Risk", val: "11.5%", status: "low risk bracket" },
          { name: "Bending Moment at UIV+1", val: "14.3 N·m", status: "threshold: 6.0 N·m" },
        ],
      },
    },
    {
      stageNumber: "Stage 9",
      stepIndex: "03",
      title: "Build 3D Implants",
      buttonText: "Build 3D Implants",
      headline: "Screws on the patient's own 3D reconstructed spine",
      tagline: "Statistical shape modeling coupled with 6-DOF pedicle screw trajectories and rod bending.",
      engine: "3D Statistical Shape Model (42 Spines) & STP Trajectories",
      icon: Bone,
      badgeColor: "text-sky-700 border-sky-200 bg-sky-50",
      keyStats: [
        { label: "Shape Model Fit", value: "±1.9 mm residual" },
        { label: "Screw Trajectories", value: "6 DOF STP Method" },
        { label: "Cortical Fit", value: "8 OK, 0 Breach" },
        { label: "Rod Bend Relief", value: "214° → 124° (-42%)" },
      ],
      details: [
        "A 42-spine statistical shape model dynamically morphs to match the lateral radiograph corners with ±1.9 mm surface precision.",
        "Published Straightforward Trajectory Pedicle (STP) method (Sci Rep 2025): every screw is individually editable in 6 degrees of freedom.",
        "Automated cortical bone breach calculation: identifies tight cortex or breach hazard before the patient enters the operating theatre.",
        "Titanium (Ti-6Al-4V) or Cobalt-Chrome (CoCr) rods (4.5 mm – 6.35 mm): algorithmic contour optimization cuts acute rod bend angles from 214° to 124°, minimizing notch fatigue.",
      ],
      interactiveSnippet: {
        header: "Implant Specifications & Breach Scorecard",
        data: [
          { name: "L3 Left Pedicle Screw", val: "7.5 × 40 mm", status: "OK (2.4 mm clearance)" },
          { name: "L3 Right Pedicle Screw", val: "7.5 × 40 mm", status: "OK (2.6 mm clearance)" },
          { name: "L4 Bilateral Screws", val: "7.5 × 45 mm", status: "OK (3.1 mm clearance)" },
          { name: "L5 Bilateral Screws", val: "7.5 × 45 mm", status: "OK (1.9 mm clearance)" },
          { name: "S1 Iliosacral Screws", val: "8.5 × 50 mm", status: "OK (bicortical bite)" },
          { name: "Implant Breach Count", val: "0 Breaches", status: "passed safety gate" },
        ],
      },
    },
    {
      stageNumber: "Stages 10–11",
      stepIndex: "04",
      title: "Multi-Physics Simulation",
      buttonText: "Multi-Physics Simulation",
      headline: "How the construct carries physiological loads in FEBio & OpenSim",
      tagline: "Finite element stresses and musculoskeletal muscle forces solved side-by-side.",
      engine: "FEBio 4.2 Solver + OpenSim 4.5 Static Optimization",
      icon: Activity,
      badgeColor: "text-emerald-700 border-emerald-200 bg-emerald-50",
      keyStats: [
        { label: "FEBio Mesh Morph", value: "1.3–2.5 mm precision" },
        { label: "Active Muscles", value: "552 in OpenSim" },
        { label: "Solve Runtime", value: "FE: 3–8 min | MSK: ~40s" },
        { label: "Verification Score", value: "22/22 FE checks passed" },
      ],
      details: [
        "FEBio finite element solver: validated 16-segment whole-spine mesh morphed onto patient anatomy, capturing disc pressures and bone-screw interfaces.",
        "Intact vs. instrumented comparison: solves flexion, extension, lateral bending, and axial rotation under 7.5 N·m pure moment and compressive preloads.",
        "OpenSim musculoskeletal solver: 552 trunk muscles matched against 250 Framingham CT subject-specific models by stature, mass, and spinal curvature.",
        "Pre-op vs. post-op fusion modeling: fused levels are welded into a single rigid body, predicting muscle recruitment alterations and adjacent segment compensation.",
      ],
      interactiveSnippet: {
        header: "FEBio & OpenSim Biomechanical Telemetry",
        data: [
          { name: "Fused Levels Motion (FE)", val: "-97% to -99.9%", status: "rigid stabilization" },
          { name: "Rod Peak von Mises Stress", val: "34 MPa (cages) / 62 MPa", status: "safety factor 14×–25×" },
          { name: "Adjacent Level L2–L3 Load", val: "582 N (standing)", status: "-3% extensor relief" },
          { name: "OpenSim Muscle Equilibrium", val: "Sub-maximal", status: "converged in 38s" },
          { name: "Verification Checks", val: "22 / 22 Passed", status: "analytical equilibrium verified" },
        ],
      },
    },
  ];

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section id="pipeline" className="relative py-20 md:py-28 bg-white border-t border-slate-200/80 benchling-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Apple Two-Tone Style */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b] block mb-3">
            The 11-Stage Surgical Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em]">
            <span className="text-[#1d1d1f]">One Lateral X-Ray In.</span>{" "}
            <span className="text-[#86868b]">A simulated plan out.</span>
          </h2>
          <p className="mt-4 text-base sm:text-[17px] text-[#86868b] font-normal leading-relaxed">
            A cohesive staged surgical pipeline where every intermediate parameter is surgeon-editable. Co-piloted by the graphical planner and autonomous multi-physics Spine Agent.
          </p>
        </div>

        {/* 4 Staged Cards / Stage Selector (Benchling Bento Grid) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`flex flex-col justify-between text-left rounded-2xl p-5 transition-all duration-200 border ${isSelected
                    ? "bg-white border-2 border-purple-600 shadow-lg shadow-purple-100 scale-[1.02]"
                    : "bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-xs"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-purple-700">
                      {st.stageNumber}
                    </span>
                    <span className={`p-1.5 rounded-xl border ${st.badgeColor}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3">{st.buttonText}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">{st.headline}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 truncate max-w-[140px]">{st.engine}</span>
                  <span className={isSelected ? "text-purple-700 font-bold" : "text-slate-400 hover:text-slate-600"}>
                    {isSelected ? "Active Stage" : "Inspect →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Active Stage Workbench */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Stage Overview & Deep Clinical Nuance */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="rounded-lg border border-purple-200 bg-purple-50 px-3 py-1 font-mono text-xs font-bold text-purple-800">
                  {current.stageNumber}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <CurrentIcon className="h-3.5 w-3.5 text-purple-600" />
                  <span>Powered by {current.engine}</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {current.title}: {current.headline}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* 4 Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {current.keyStats.map((k, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
                    <span className="text-[11px] text-slate-500 block font-medium">{k.label}</span>
                    <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                      {k.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Detailed Bullet Points */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold block">
                  Clinical Nuance & Verification
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {current.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Benchling Data Inspection Matrix */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono">
                <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Sliders className="h-3.5 w-3.5 text-purple-600" />
                  <span>{current.interactiveSnippet.header}</span>
                </span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium text-[10px]">
                  Synced
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {current.interactiveSnippet.data.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-200/80 px-3.5 py-2.5 text-xs font-mono"
                  >
                    <span className="text-slate-600">{row.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{row.val}</span>
                      <span className="text-[10px] rounded bg-purple-50 border border-purple-200 px-1.5 py-0.5 text-purple-700 font-medium">
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Surgeon Override: Active</span>
                <a
                  href="#booking"
                  className="text-purple-700 hover:text-purple-900 font-medium flex items-center gap-1"
                >
                  <span>Request Full Case Study</span>
                  <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
