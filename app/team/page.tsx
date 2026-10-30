import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import LogoTicker from "@/components/LogoTicker";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import {
  Users,
  ArrowRight,
  Building2,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Team | Spine Suite - Scientific Leadership & Advisory",
  description: "Meet the scientists, biomechanists, and AI architects behind Spine Suite, with roots across Polytechnique Montréal, McGill, UBC, and Stanford.",
};

export default function TeamPage() {
  const academicInstitutions = [
    {
      institution: "Polytechnique Montréal",
      department: "Trunk Musculoskeletal Biomechanics Lab",
      location: "Montréal, QC",
      contribution: "Decades of in-vitro cadaveric testing, non-linear disc calibrations, and 552-muscle static trunk models.",
    },
    {
      institution: "McGill University",
      department: "Biomedical R&D & Sensory Technology",
      location: "Montréal, QC",
      contribution: "Pre-clinical implant validation, sensory kinematics, and bone-screw interface mechanics.",
    },
    {
      institution: "UBC Radiology",
      department: "Spine Biomechanics & Medical Imaging",
      location: "Vancouver, BC",
      contribution: "2D-to-3D deep learning landmark detection and automated radiological sagittal alignment verification.",
    },
    {
      institution: "Stanford Medicine",
      department: "Surgical Advisory & Clinical Validation",
      location: "Stanford, CA",
      contribution: "Clinical alignment targets, SRS-Schwab grade 0 restoration protocols, and post-op mechanical stability criteria.",
    },
    {
      institution: "Georgia Tech",
      department: "Design Intelligence Lab & ML LoRA Research",
      location: "Atlanta, GA",
      contribution: "Multi-agent autonomous solver orchestration and zero-shot computational code synthesis.",
    },
    {
      institution: "IRSST",
      department: "Occupational Biomechanics & Spine Loading",
      location: "Montréal, QC",
      contribution: "Ergonomic lifting dynamics, NIOSH lifting equation boundary modeling, and disc compressive stress profiles.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1">
        {/* Team Hero Header */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-white benchling-grid-bg border-b border-slate-200/80">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-200/40 via-indigo-100/30 to-sky-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono text-purple-800 mb-6 shadow-xs">
                <Users className="h-3.5 w-3.5 text-purple-600" />
                <span>FOUNDING SCIENTISTS & CLINICAL ADVISORY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Pioneering Computational{" "}
                <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  Surgical Intelligence
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Spine Suite unites world-renowned spine biomechanists, medical imaging scientists, and AI systems architects from North America&apos;s top research hospitals and engineering institutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#team"
                  className="benchling-cta-purple inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-purple-600/25"
                >
                  <span>Meet the Founding Team</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
                >
                  <Calendar className="h-4 w-4 text-purple-600" />
                  <span>Book 30-min Technical Review</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Scientists & Core Leadership */}
        <TeamSection />

        {/* Partner Research Centers & Academic Foundations */}
        <section className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono text-purple-800 mb-4">
                <Building2 className="h-3.5 w-3.5 text-purple-600" />
                <span>CLINICAL & ACADEMIC PEDIGREE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Validated Across Leading Research Institutions
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Our models and simulation algorithms are built upon decades of peer-reviewed research and validated biomechanical datasets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicInstitutions.map((item, idx) => (
                <div
                  key={idx}
                  className="benchling-card benchling-card-hover rounded-2xl p-6 bg-white border border-slate-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full font-bold border border-purple-200">
                        {item.location}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.institution}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1 mb-3">
                      {item.department}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.contribution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutional Logo Ticker */}
        <LogoTicker />

        {/* Booking Calendar Access */}
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
}
