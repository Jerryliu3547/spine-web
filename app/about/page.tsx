import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import LogoTicker from "@/components/LogoTicker";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import {
  Users,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Spine Suite - Scientific Leadership & Advisory",
  description: "Meet the scientists, biomechanists, and AI architects behind Spine Suite, with roots across Polytechnique Montréal, McGill, UBC, and Stanford.",
};

export default function AboutPage() {
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
        {/* Mission Section (Designed to match reference UI screenshot with Apple theme) */}
        <MissionSection />

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
