"use client";

import React from "react";
import { Users, GraduationCap, Stethoscope, BookOpen } from "lucide-react";

export default function TeamSection() {
  const founders = [
    {
      name: "Farshid Ghezelbash, PhD",
      role: "Co-Founder · Biomechanics & AI",
      affiliations: "Polytechnique Montréal · McGill · Georgia Tech",
      metrics: "h-index 19 · 40+ Peer-Reviewed Publications",
      bio: "Pioneered computational trunk musculoskeletal modeling, personalized spinal finite element simulations, and multi-physics solver integrations.",
      tag: "Founding Scientist",
    },
    {
      name: "Amir Hossein Eskandari, PhD",
      role: "Co-Founder · Medical Imaging & Biomechanics",
      affiliations: "UBC Radiology · IRSST · Torus Biomedical",
      metrics: "h-index 14 · STP Pedicle Screw Trajectory Lead",
      bio: "Expert in deep learning radiograph segmentation, statistical shape modeling, and robot-assisted cortical bone breach prevention algorithms.",
      tag: "Founding Engineer",
    },
    {
      name: "Dianze Liu",
      role: "Co-Founder · Machine Learning & Software",
      affiliations: "Georgia Tech Design Intelligence Lab · WCB 2026",
      metrics: "First Author WCB 2026 · LoRA Initializations",
      bio: "Specialist in autonomous agent architectures, zero-shot biomechanical parameter sweeps, and web-scale in-browser kinematic solvers.",
      tag: "AI Architecture",
    },
  ];

  const advisors = [
    {
      name: "Michael P. Kelly, MD",
      title: "Spine Surgeon",
      institution: "Stanford University School of Medicine",
      focus: "Complex Adult Spinal Deformity & Surgical Kinematics",
    },
    {
      name: "Jeff Hills, MD",
      title: "Spine Surgeon",
      institution: "UT Health San Antonio",
      focus: "Clinical Surgical Planning & Construct Failure Prevention",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-[#FAFAFC] border-t border-slate-200/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono text-purple-800 mb-4">
            <Users className="h-3.5 w-3.5 text-purple-600" />
            <span>The Pioneers Behind Spine Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Built by Leaders in Biomechanics,{" "}
            <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Medical Imaging & AI
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Combining world-class academic pedigree across Stanford, Georgia Tech, and McGill with practicing orthopedic spine surgeons.
          </p>
        </div>

        {/* Founders Grid (Clean White Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {founders.map((member, idx) => (
            <div
              key={idx}
              className="benchling-card benchling-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                    {member.tag}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    <BookOpen className="h-3 w-3" />
                    <span>{member.metrics.split("·")[0]}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs font-medium text-purple-700 mt-1 font-mono">{member.role}</p>
                <p className="text-xs text-slate-500 mt-2 font-mono flex items-center gap-1.5">
                  <GraduationCap className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span>{member.affiliations}</span>
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
                {member.metrics}
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Advisory Board Sub-section (Clean White) */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="text-center mb-6">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-700">
              Clinical Advisory Board
            </h4>
            <p className="text-xs text-slate-500 mt-1">Guiding surgical sanity rules and cadaver verification</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advisors.map((adv, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-200/80 p-4.5 hover:border-slate-300 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 border border-purple-200 text-purple-700 shrink-0">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="text-base font-bold text-slate-900">{adv.name}</h5>
                  <p className="text-xs text-purple-700 font-mono font-medium">{adv.title} · {adv.institution}</p>
                  <p className="text-xs text-slate-500 mt-1">{adv.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
