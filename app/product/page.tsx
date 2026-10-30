import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import PipelineSection from "@/components/PipelineSection";
import ComparisonTable from "@/components/ComparisonTable";
import ValidationSection from "@/components/ValidationSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Activity, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Platform | Spine Suite Surgical AI & Multi-Physics Foundries",
  description: "Explore the Spine Suite platform: automated 2D-to-3D spine reconstruction, 552-muscle OpenSim dynamics, and FEBio finite element stress analysis.",
};

export default function ProductPage() {
  const productPillars = [
    {
      icon: Layers,
      title: "Automated 2D-to-3D Reconstruction",
      subtitle: "Stages 1–8 · Real-Time Inference",
      description:
        "Deep learning landmark detection (YOLO v11) maps 17 vertebrae with 136 anatomical corner landmarks from standard lateral X-rays to reconstruct millimeter-accurate 3D spinal geometries.",
      metric: "< 0.85 mm",
      metricLabel: "CT residual accuracy",
    },
    {
      icon: Activity,
      title: "Musculoskeletal Dynamics",
      subtitle: "Stage 10 · OpenSim Trunk Engine",
      description:
        "Solves 552 individual muscle actuators and kinematic force vectors during upright standing, flexion, and complex occupational lifting tasks to calculate physiological loading.",
      metric: "552 Muscles",
      metricLabel: "Actuators resolved",
    },
    {
      icon: Cpu,
      title: "FEBio Finite Element Stress",
      subtitle: "Stage 11 · Non-Linear Solvers",
      description:
        "Automatically meshes hexahedral solid volumes and performs non-linear contact analysis across instrumented pedicle screws, rods, and adjacent intervertebral discs.",
      metric: "62 MPa",
      metricLabel: "14× yield margin safety",
    },
    {
      icon: ShieldCheck,
      title: "Autonomous Agentic Orchestration",
      subtitle: "Full Stack · Multi-Agent Router",
      description:
        "Natural language prompt interpretation, zero-shot Python calculation authoring, and intelligent solver dispatch across cloud or on-premise compute clusters.",
      metric: "100%",
      metricLabel: "FDA 21 CFR Part 11 audit trail",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1">
        {/* Product Page Hero Header */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-white benchling-grid-bg border-b border-slate-200/80">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-200/40 via-indigo-100/30 to-sky-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono text-purple-800 mb-6 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-purple-600" />
                <span>SPINE SUITE MULTI-PHYSICS PLATFORM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Autonomous Biomechanics for{" "}
                <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  Surgical R&D
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                A single unified software suite transforming standard 2D lateral radiographs into patient-specific 3D digital twins, 552-muscle neuromuscular dynamics, and non-linear FEBio finite element simulations in minutes.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#pipeline"
                  className="benchling-cta-purple inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-purple-600/25"
                >
                  <span>Explore 11-Stage Workflow</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
                >
                  <span>Request Clinical Demo</span>
                </Link>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="benchling-card benchling-card-hover rounded-2xl p-6 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 border border-purple-200 text-purple-700">
                          <Icon className="h-5 w-5 text-purple-600" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 bg-purple-50/70 border border-purple-200/60 px-2 py-0.5 rounded-full font-semibold">
                          {pillar.subtitle}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                      <span className="text-lg font-bold font-mono text-purple-700">
                        {pillar.metric}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {pillar.metricLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11-Stage Pipeline Section */}
        <PipelineSection />

        {/* Validation Section */}
        <ValidationSection />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Booking CTA */}
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
}
