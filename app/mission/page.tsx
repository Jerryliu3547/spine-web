import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import LogoTicker from "@/components/LogoTicker";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { 
  Target, 
  ShieldAlert, 
  Cpu, 
  Bone, 
  HeartHandshake, 
  ArrowRight, 
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mission | Spine Suite - Computational Certainty for Spine Surgery",
  description: "Our mission: Eradicating surgical implant failures, PJK, and mechanical complications through autonomous patient-specific biomechanics.",
};

export default function MissionPage() {
  const missionPillars = [
    {
      icon: ShieldAlert,
      title: "Eliminating Mechanical Complications & PJK",
      tagline: "Preventing revision surgeries before incision",
      description:
        "15% to 20% of adult spinal deformity patients suffer from Proximal Junctional Kyphosis (PJK), rod fractures, or adjacent segment mechanical failure. Spine Suite simulates post-operative musculoskeletal loading across adjacent levels before the patient enters the operating room.",
      impact: "Predictive mechanical risk index derived from 135,000+ simulated spinal points.",
    },
    {
      icon: Cpu,
      title: "Democratizing Academic Multi-Physics",
      tagline: "From 6 weeks on a supercomputer to 2 minutes in-browser",
      description:
        "Finite element analysis (FEBio) and comprehensive musculoskeletal optimization (OpenSim) previously required dedicated PhD biomechanists and weeks of manual CAD surface meshing. We automate this entire pipeline into an autonomous, instantaneous agentic workflow.",
      impact: "Autonomous hexahedral meshing with 1.8 mm landmark residual accuracy.",
    },
    {
      icon: Bone,
      title: "Radiation-Conscious 3D Precision",
      tagline: "Full 3D anatomical fidelity from standard 2D lateral X-rays",
      description:
        "Repeated full-spine CT scans deliver substantial radiation doses to patients. Spine Suite extracts 136 anatomical corner landmarks from standard low-dose 2D lateral radiographs, morphing a validated statistical shape model into patient-specific 3D vertebrae.",
      impact: "Sub-millimeter (< 0.85 mm) surface agreement against ground-truth CT scans.",
    },
    {
      icon: HeartHandshake,
      title: "Transparent & FDA 21 CFR Part 11 Compliant",
      tagline: "Verifiable science, deterministic code, reproducible results",
      description:
        "Clinical software must never be a black box. Spine Suite provides deterministic code generation, verifiable mathematical equilibrium equations, and step-by-step audit logs designed for FDA 21 CFR Part 11 medical device software compliance.",
      impact: "Benchmarked across 22 peer-reviewed cadaveric and in-vitro kinematic studies.",
    },
  ];

  const milestones = [
    { label: "Plans Evaluated In-Browser", value: "3,800+", detail: "Ranked in 0.20 seconds per case" },
    { label: "Muscles Dynamically Solved", value: "552", detail: "Full-trunk static optimization" },
    { label: "FEBio Validation Cases", value: "22 / 22", detail: "100% kinematic agreement" },
    { label: "Titanium Rod Safety Margin", value: "14×", detail: "Yield stress margin verified" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1">
        {/* Mission Hero Header */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-white benchling-grid-bg border-b border-slate-200/80">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-200/40 via-indigo-100/30 to-sky-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono text-purple-800 mb-6 shadow-xs">
                <Target className="h-3.5 w-3.5 text-purple-600" />
                <span>OUR SCIENTIFIC & CLINICAL MISSION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Engineering Zero-Failure{" "}
                <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  Spine Surgery
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Bridging the fatal divide between surgical intuition and computational mechanics. We replace weeks of manual biomechanical meshing with seconds of clinical certainty to protect patients from post-operative mechanical failure.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="benchling-cta-purple inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-purple-600/25"
                >
                  <span>Join Our Research Coalition</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/product"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
                >
                  <span>Explore the Technology</span>
                </a>
              </div>
            </div>

            {/* Impact Metric Bar */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="benchling-card rounded-2xl p-5 sm:p-6 text-center border border-slate-200 bg-white shadow-xs"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-700 block">
                    {m.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1 block">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Core Mission Pillars */}
        <section className="py-20 md:py-28 bg-slate-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Four Pillars of the Spine Suite Standard
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Why we are building the world&apos;s first autonomous multi-physics foundries for surgical spine planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="benchling-card benchling-card-hover rounded-2xl p-7 sm:p-8 transition-all flex flex-col justify-between bg-white border border-slate-200"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 border border-purple-200 text-purple-700 shrink-0">
                          <Icon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 font-bold block">
                            Pillar 0{idx + 1}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {pillar.tagline}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs font-mono text-purple-900 bg-purple-50/60 p-3 rounded-xl border border-purple-100">
                      <Sparkles className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{pillar.impact}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Academic & Clinical Pedigree */}
        <LogoTicker />

        {/* Direct Booking Section */}
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
}
