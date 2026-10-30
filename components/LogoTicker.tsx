import React from "react";
import { GraduationCap, Building2, Stethoscope, Award } from "lucide-react";

export default function LogoTicker() {
  const institutions = [
    {
      name: "Stanford Medicine",
      location: "Stanford, CA",
      role: "Surgical Advisory & Clinical Validation",
      icon: Stethoscope,
      accent: "text-rose-600",
      border: "hover:border-rose-300",
      bg: "bg-rose-50",
    },
    {
      name: "Georgia Tech",
      location: "Atlanta, GA",
      role: "Design Intelligence Lab & ML LoRA Research",
      icon: GraduationCap,
      accent: "text-amber-600",
      border: "hover:border-amber-300",
      bg: "bg-amber-50",
    },
    {
      name: "UT Health San Antonio",
      location: "San Antonio, TX",
      role: "Spine Surgery Advisory Board",
      icon: Stethoscope,
      accent: "text-orange-600",
      border: "hover:border-orange-300",
      bg: "bg-orange-50",
    },
    {
      name: "Polytechnique Montréal",
      location: "Montréal, QC",
      role: "Trunk Musculoskeletal Biomechanics Lab",
      icon: Building2,
      accent: "text-sky-600",
      border: "hover:border-sky-300",
      bg: "bg-sky-50",
    },
    {
      name: "McGill University",
      location: "Montréal, QC",
      role: "Biomedical R&D & Sensory Technology",
      icon: Award,
      accent: "text-red-600",
      border: "hover:border-red-300",
      bg: "bg-red-50",
    },
    {
      name: "UBC Radiology",
      location: "Vancouver, BC",
      role: "Spine Biomechanics & Medical Imaging",
      icon: GraduationCap,
      accent: "text-blue-600",
      border: "hover:border-blue-300",
      bg: "bg-blue-50",
    },
    {
      name: "IRSST",
      location: "Canada",
      role: "Occupational Biomechanics & Spine Loading",
      icon: Building2,
      accent: "text-purple-600",
      border: "hover:border-purple-300",
      bg: "bg-purple-50",
    },
    {
      name: "Torus Biomedical",
      location: "Canada",
      role: "Robotic Spine Drilling & Instrumentation",
      icon: Award,
      accent: "text-indigo-600",
      border: "hover:border-indigo-300",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-[#F8FAFC] py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-purple-700 mb-2">
            Clinical Pedigree & Research Validation
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Backed by Clinical Research & Academic Excellence Across Leading Centers
          </h2>
        </div>

        {/* Benchling-Style Institutional Cards Grid (Clean White Cards) */}
        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-4">
          {institutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4.5 transition-all duration-200 hover:bg-white hover:shadow-md ${item.border}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.bg} border border-slate-100 transition-colors`}>
                    <Icon className={`h-4.5 w-4.5 ${item.accent}`} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    {item.location}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-snug line-clamp-2">
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
