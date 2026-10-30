"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Terminal, 
  Activity, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Play, 
  FileText, 
  Zap, 
  Bone, 
  Clock, 
  DollarSign,
  Compass,
  ChevronRight
} from "lucide-react";

type TabKey = "xray" | "biomechanics" | "agentic";

interface TabData {
  id: TabKey;
  label: string;
  badge: string;
  prompt: string;
  engine: string;
  duration: string;
  cost: string;
  response: string;
  stats: { label: string; value: string; detail: string }[];
  codeOrLog: string[];
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabKey>("xray");
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      try {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } catch {
        // Ignored in test environments like JSDOM
      }
    }
  }, []);

  const tabs: Record<TabKey, TabData> = {
    xray: {
      id: "xray",
      label: "1. Automatically Reading X-Ray to 3D Reconstruction",
      badge: "Highlight 1 · Automated 2D-to-3D Reconstruction",
      prompt: "[Placeholder: Ingest lateral radiograph, detect T1–L5 anatomical landmarks, and reconstruct patient-specific 3D spine geometry in real time.]",
      engine: "YOLO v11 Landmark Detection + 3D Biomechanical Morphing Engine",
      duration: "0.20 sec",
      cost: "< 0.1¢",
      response: "[Placeholder Text: Automatically Reading X-Ray to 3D Reconstruction] Ingests a single 2D lateral X-ray radiograph, autonomously identifies 17 vertebrae with 136 anatomical corner landmarks, and reconstructs patient-specific 3D spinal column geometries with calibrated pelvic incidence (PI: 38.4°) and sagittal vertical axis in sub-second inference.",
      stats: [
        { label: "Vertebrae Detected", value: "17 / 17", detail: "[Placeholder: T1 to L5 landmark coverage]" },
        { label: "3D Reconstruction", value: "0.20s", detail: "[Placeholder: In-browser GPU inference]" },
        { label: "Surface Accuracy", value: "< 0.85 mm", detail: "[Placeholder: Ground truth CT residual]" },
        { label: "Lordosis Restored", value: "41.7°", detail: "[Placeholder: Schwab Grade 0 target met]" },
      ],
      codeOrLog: [
        "→ [AI-VISION] [Placeholder: Ingesting lateral radiograph & detecting T1–L5 vertebral boundaries...]",
        "→ [LANDMARKS] [Placeholder: Localizing 136 anatomical corner coordinates with 99.4% confidence...]",
        "→ [3D-RECON] [Placeholder: Morphing statistical shape model into patient 3D spine geometry...]",
        "✓ [SUCCESS] [Placeholder: Patient-specific 3D spinal mesh reconstructed in 0.20s.]",
      ],
    },
    biomechanics: {
      id: "biomechanics",
      label: "2. Musculoskeletal & Finite Element Analysis",
      badge: "Highlight 2 · Multi-Physics Simulation",
      prompt: "[Placeholder: Couple OpenSim full-trunk musculoskeletal dynamics with FEBio non-linear finite element stress simulation for pre-op vs. post-op fusion.]",
      engine: "OpenSim 4.5 (552 Muscles) + FEBio 4.2 Non-Linear FE Solver",
      duration: "2 min 18 s",
      cost: "0.64¢",
      response: "[Placeholder Text: Musculoskeletal & Finite Element Analysis] Computes dynamic muscular recruitment across 552 trunk muscles in OpenSim, then autonomously maps resultant spinal joint loads onto 16-segment hexahedral finite element meshes in FEBio to evaluate adjacent level compression (582 N), peak rod stress (62 MPa, 14× yield margin), and bone-screw stability.",
      stats: [
        { label: "Muscles Solved", value: "552", detail: "[Placeholder: Dynamic muscle load distribution]" },
        { label: "Rod Peak Stress", value: "62 MPa", detail: "[Placeholder: 14× titanium yield margin safety]" },
        { label: "Adjacent Level Load", value: "582 N", detail: "[Placeholder: L2–L3 compressive force reduction]" },
        { label: "FEBio Convergence", value: "100%", detail: "[Placeholder: Non-linear contact equilibrium]" },
      ],
      codeOrLog: [
        "→ [MSK-SIM] [Placeholder: OpenSim solves 552 trunk muscles; dynamic equilibrium established]",
        "→ [BOUNDARY-MAP] [Placeholder: Mapping resultant joint moments to FEBio hexahedral mesh (1.8mm residual)]",
        "→ [FEBIO-FEA] [Placeholder: Simulating non-linear contact stress across instrumented vertebrae levels]",
        "✓ [COMPLETE] [Placeholder: Multi-physics stress tensor & adjacent segment biomechanical risk quantified]",
      ],
    },
    agentic: {
      id: "agentic",
      label: "4. Agentic System",
      badge: "Highlight 4 · Autonomous Multi-Physics Router",
      prompt: "[Placeholder: Autonomous agentic routing across surgical planning, parametric PCSA muscle sensitivity sweeps, and multi-solver FEBio/OpenSim execution.]",
      engine: "Autonomous Multi-Agent Router + Zero-Shot Python Synthesizer",
      duration: "45 sec",
      cost: "0.51¢",
      response: "[Placeholder Text: Agentic System] Autonomous multi-agent orchestration architecture that understands natural language surgical objectives, synthesizes custom Python calculation scripts on the fly, and routes multi-physics solvers without requiring manual engineering intervention.",
      stats: [
        { label: "Agent Roles", value: "6 Autonomous", detail: "[Placeholder: Planner, Router, Coder, QA]" },
        { label: "Code Synthesis", value: "Zero-Shot", detail: "[Placeholder: Authors Python scripts on the fly]" },
        { label: "Solver Routing", value: "Autonomous", detail: "[Placeholder: Intelligent multi-physics dispatch]" },
        { label: "Audit Trail", value: "100% Logged", detail: "[Placeholder: FDA 21 CFR Part 11 compliant trace]" },
      ],
      codeOrLog: [
        "→ [AGENT-CORE] [Placeholder: Agent parses natural language surgical R&D query & plans execution tree]",
        "→ [SYNTHESIS] [Placeholder: Emitting custom execution script solve_parametric_biomechanics.py...]",
        "→ [DISPATCH] [Placeholder: Launching parallel headless solver jobs across FEBio & OpenSim instances]",
        "✓ [SYNTHESIS] [Placeholder: Multi-agent synthesis complete; interactive clinical report generated]",
      ],
    },
  };

  const tabKeys: TabKey[] = ["xray", "biomechanics", "agentic"];
  const current = tabs[activeTab];

  return (
    <section id="overview" className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-white benchling-grid-bg">
      {/* Looping medical simulation background video */}
      <div className="absolute top-0 left-0 right-0 h-[520px] md:h-[580px] z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75 filter brightness-105 contrast-105"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/gemini_generated_video_95288b1c.mp4" type="video/mp4" />
        </video>
        {/* Soft gradient masks to blend cleanly into white background with rich contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />
      </div>

      {/* Benchling Ambient Glow Blurs (Light Palette) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-purple-500/20 via-indigo-500/15 to-sky-400/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-purple-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center relative">
          {/* Subtle localized dark halo behind hero text for guaranteed legibility across all video frames */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[280px] bg-slate-950/25 blur-3xl rounded-full pointer-events-none -z-10" />

          {/* High-Contrast Hero Title */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            From One Lateral X-Ray to a{" "}
            <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(168,85,247,0.45)]">
              Simulated Spine Surgery
            </span>
          </h1>

          {/* Subheadline with high contrast against the video */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-100 leading-relaxed font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            An infinite biomechanics program team for surgical R&D. Autonomous multi-physics routing across FEBio finite element stress and OpenSim musculoskeletal loading in seconds.
          </p>

          {/* Benchling Signature CTA */}
          <div className="mt-8 flex items-center justify-center">
            <a
              href="#booking"
              className="benchling-cta-purple inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35 hover:-translate-y-0.5"
            >
              <span>Request Clinical Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Benchling Signature Hero Prompt Switcher Card (Comfortable Elevated White Design) */}
        <div id="agent" className="mt-16 rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
          {/* Pill Tabs Row */}
          <div className="border-b border-slate-200 bg-slate-50/70 px-4 sm:px-6 py-3.5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {tabKeys.map((key) => {
                const tab = tabs[key];
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={`relative rounded-xl px-4 py-2 text-xs font-semibold transition-all flex flex-col items-center justify-center ${
                      isActive
                        ? "bg-white text-purple-700 border border-slate-300 shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-purple-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Benchling Natural Language Prompt Box */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50/50">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm relative">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 font-bold">
                      Natural Language Clinical Prompt
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-[11px] font-mono text-slate-500">{current.badge}</span>
                  </div>
                  <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed font-sans">
                    "{current.prompt}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
