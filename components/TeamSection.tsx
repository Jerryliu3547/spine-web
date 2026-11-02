"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, Minus, X, Quote } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  affiliations: string;
  metrics: string;
  tag: string;
  image: string;
  quote: string;
  bioParagraph1: string;
  bioParagraph2: string;
  linkedin: string;
}

export default function TeamSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>("farshid");
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: "farshid",
      name: "Farshid Ghezelbash, PhD",
      role: "Co-Founder · Biomechanics & AI",
      affiliations: "Polytechnique Montréal · McGill · Georgia Tech",
      metrics: "h-index 19 · 40+ Peer-Reviewed Publications",
      tag: "Founding Scientist",
      image: `${basePath}/team/farshid.jpg`,
      quote: "Physics-based simulation brings mathematical certainty to the operating room.",
      bioParagraph1:
        "Dr. Farshid Ghezelbash has spent over a decade advancing computational biomechanics, trunk musculoskeletal modeling, and patient-specific spinal finite element simulations. Holding a PhD from Polytechnique Montréal and having conducted advanced research across McGill University and Georgia Tech, his work bridges theoretical solid mechanics and direct clinical translation.",
      bioParagraph2:
        "With an h-index of 19 and more than 40 peer-reviewed journal publications, Farshid pioneered nonlinear multi-physics solvers that simulate internal spinal stresses, disc kinematics, and load-sharing dynamics in real time. At SpineTwin, he leads the biomechanical engine that converts patient radiological scans into validated digital twins before incision.",
      linkedin: "https://www.linkedin.com",
    },
    {
      id: "amir",
      name: "Amir Hossein Eskandari, PhD",
      role: "Co-Founder · Medical Imaging & Biomechanics",
      affiliations: "UBC Radiology · IRSST · Torus Biomedical",
      metrics: "h-index 14 · STP Pedicle Screw Trajectory Lead",
      tag: "Founding Engineer",
      image: `${basePath}/team/amir.jpg`,
      quote: "Precise anatomical landmark detection transforms 2D X-rays into 3D surgical confidence.",
      bioParagraph1:
        "Dr. Amir Hossein Eskandari specializes in the intersection of deep learning computer vision, statistical shape modeling, and robot-assisted orthopedic instrumentation. Having completed advanced research fellowships at UBC Radiology and IRSST, Amir led algorithm development for automated landmark extraction and cortical bone breach prevention at Torus Biomedical.",
      bioParagraph2:
        "His research encompasses automated 2D-to-3D spine reconstruction, pedicle screw trajectory optimization, and automated sagittal balance profiling. At SpineTwin, Amir directs our medical imaging pipelines, ensuring sub-millimeter precision in anatomical segmentation and implant placement planning.",
      linkedin: "https://www.linkedin.com",
    },
    {
      id: "dianze",
      name: "Dianze Liu",
      role: "Co-Founder · Machine Learning & Software",
      affiliations: "Georgia Tech Design Intelligence Lab · WCB 2026",
      metrics: "First Author WCB 2026 · LoRA Initializations",
      tag: "AI Architecture",
      image: `${basePath}/team/dianze.jpg`,
      quote: "Autonomous AI agents and browser-scale kinematics make complex biomechanics instantaneous.",
      bioParagraph1:
        "Dianze Liu is an AI architect and systems engineer from the Georgia Tech Design Intelligence Lab. A specialist in autonomous agent architectures, zero-shot parameter sweeps, and distributed kinematic solvers, Dianze is the first author on cutting-edge spine mechanics simulation research presented at the World Congress of Biomechanics (WCB 2026).",
      bioParagraph2:
        "At SpineTwin, Dianze architects the zero-latency web simulation infrastructure, orchestrating high-performance WebAssembly solvers, multi-agent clinical Sanity Check LLMs, and hospital EHR integration pipelines that bring finite-element precision directly to surgeon browsers.",
      linkedin: "https://www.linkedin.com",
    },
    {
      id: "kelly",
      name: "Michael P. Kelly, MD",
      role: "Clinical Advisor · Spine Surgeon",
      affiliations: "Stanford University School of Medicine",
      metrics: "Stanford Medicine · Adult Spinal Deformity",
      tag: "Clinical Advisory",
      image: `${basePath}/team/kelly.jpg`,
      quote: "Restoring sagittal balance requires aligning biological anatomy with mechanical reality.",
      bioParagraph1:
        "Dr. Michael P. Kelly is an internationally recognized orthopedic spine surgeon and faculty member at the Stanford University School of Medicine. Specializing in complex adult spinal deformity, scoliosis reconstruction, and revision surgery, Dr. Kelly has treated thousands of patients with severe structural spinal disorders.",
      bioParagraph2:
        "His clinical research focuses on proximal junctional kyphosis (PJK), mechanical construct failure, and SRS-Schwab sagittal restoration targets. As a clinical advisor to SpineTwin, Dr. Kelly guides the surgical sanity rules and verification protocols that ensure our computational outputs align with operative reality.",
      linkedin: "https://www.linkedin.com",
    },
    {
      id: "hills",
      name: "Jeff Hills, MD",
      role: "Clinical Advisor · Spine Surgeon",
      affiliations: "UT Health San Antonio",
      metrics: "UT Health · Construct Failure Prevention",
      tag: "Clinical Advisory",
      image: `${basePath}/team/hills.jpg`,
      quote: "Pre-operative simulation prevents revision surgeries before the first cut is made.",
      bioParagraph1:
        "Dr. Jeff Hills is a practicing orthopedic spine surgeon and clinical investigator at UT Health San Antonio. His surgical expertise spans minimally invasive spine surgery, cervical spine trauma, and complex lumbar fusion procedures.",
      bioParagraph2:
        "Dr. Hills's research investigates biomechanical failure modes in pedicle screw constructs and bone-screw interface longevity. At SpineTwin, Dr. Hills provides continuous clinical feedback on surgical workflow integration, ensuring our planning tools deliver actionable insights that surgeons trust in the OR.",
      linkedin: "https://www.linkedin.com",
    },
  ];

  const institutionalLogos = [
    { name: "Stanford Medicine", src: "/logos/stanford-medicine.svg", height: "h-7 sm:h-8" },
    { name: "Georgia Tech", src: "/logos/georgia-tech.svg", height: "h-6 sm:h-7" },
    { name: "Polytechnique Montréal", src: "/logos/polytechnique-montreal.png", height: "h-7 sm:h-8" },
    { name: "McGill University", src: "/logos/mcgill-logo.svg", height: "h-8 sm:h-9" },
    { name: "UBC Radiology", src: "/logos/ubc.svg", height: "h-6 sm:h-7" },
    { name: "UT Health San Antonio", src: "/logos/ut-health-san-antonio.svg", height: "h-7 sm:h-8" },
    { name: "IRSST", src: "/logos/irsst.png", height: "h-7 sm:h-8" },
    { name: "Torus Biomedical", src: "/logos/torus-biomedical.png", height: "h-6 sm:h-7" },
  ];

  const selectedMember = teamMembers.find((m) => m.id === selectedMemberId);

  const handleMemberClick = (memberId: string) => {
    if (selectedMemberId === memberId) {
      // Toggle off if already selected
      setSelectedMemberId(null);
    } else {
      setSelectedMemberId(memberId);
      // Smooth scroll to showcase
      setTimeout(() => {
        showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }
  };

  return (
    <section id="team" className="py-20 md:py-28 bg-[#FAFAFC] border-t border-slate-200/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Exact "Meet the Team" & reference explanation in Apple typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-0.025em] text-[#1d1d1f] leading-tight">
            Meet the Team
          </h2>
          <p className="mt-4 text-base sm:text-[17px] text-[#86868b] font-normal leading-relaxed">
            Built by doctors, clinicians, engineers, and operators who believe behavioral healthcare is broken by design—and ready to be rebuilt around the people who deliver care.
          </p>
        </div>

        {/* Rolling Screen with ONLY the institutional logos (as in reference image) */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-slate-500 whitespace-nowrap">
              With a team from
            </span>
            <div className="h-px bg-slate-200/80 flex-1" />
          </div>

          {/* Marquee with edge fade gradients */}
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10" />

            <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16 py-2">
              {/* Primary list */}
              {institutionalLogos.map((item, idx) => (
                <div
                  key={`logo-primary-${idx}`}
                  className="h-9 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={`${basePath}${item.src}`}
                    alt={item.name}
                    width={150}
                    height={38}
                    className={`${item.height} w-auto max-w-[140px] object-contain`}
                    unoptimized
                  />
                </div>
              ))}

              {/* Duplicate list for continuous infinite rolling */}
              {institutionalLogos.map((item, idx) => (
                <div
                  key={`logo-dup-${idx}`}
                  aria-hidden="true"
                  className="h-9 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={`${basePath}${item.src}`}
                    alt=""
                    width={150}
                    height={38}
                    className={`${item.height} w-auto max-w-[140px] object-contain`}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expanded Profile Detail View (Directly on page, as in Image 2) */}
        {selectedMember && (
          <div
            ref={showcaseRef}
            className="mb-14 sm:mb-18 rounded-3xl bg-[#F0F6FA] border border-[#d2e2ef] p-5 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(12,47,79,0.06)] relative transition-all duration-300"
          >
            {/* Inner White Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e1edf7] shadow-xs relative">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMemberId(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
                aria-label="Close expanded profile"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Large Monochrome Portrait with Quote Speech Bubble */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* Speech bubble overlay at bottom (as shown in Image 2) */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 shadow-lg border border-slate-200/80">
                      <p className="text-[11px] sm:text-xs text-slate-700 italic leading-snug">
                        &ldquo;{selectedMember.quote}&rdquo;
                      </p>
                      {/* Speech bubble tail */}
                      <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-b border-r border-slate-200/80 rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Right Column: Narrative Profile Bio */}
                <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-4">
                  <div>
                    {/* Member Name */}
                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight">
                      {selectedMember.name}
                    </h3>

                    {/* Role & Affiliations in Naval Blue */}
                    <p className="text-sm sm:text-base font-semibold text-[#0c2f4f] mt-1.5">
                      {selectedMember.role}
                    </p>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      {selectedMember.affiliations}
                    </p>

                    {/* LinkedIn badge in matching naval blue */}
                    <div className="mt-3.5">
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c2f4f] hover:text-[#1b4975] bg-[#eaf2f8] hover:bg-[#d9ebf7] px-3 py-1.5 rounded-lg border border-[#cfe0ee] transition-colors"
                        aria-label={`LinkedIn profile for ${selectedMember.name}`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </div>

                    {/* Pull Quote */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs sm:text-sm font-medium text-slate-800 italic">
                        &ldquo;{selectedMember.quote}&rdquo;
                      </p>
                    </div>

                    {/* Full Bio Paragraphs */}
                    <div className="mt-4 space-y-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
                      <p>{selectedMember.bioParagraph1}</p>
                      <p>{selectedMember.bioParagraph2}</p>
                    </div>
                  </div>

                  {/* Footnote tags in naval style */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-[#0c2f4f] bg-[#eaf2f8] border border-[#cfe0ee] px-2.5 py-0.5 rounded-full font-medium">
                      {selectedMember.metrics}
                    </span>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full">
                      {selectedMember.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Members Grid (as in Image 1) */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {teamMembers.map((member) => {
              const isSelected = selectedMemberId === member.id;
              const isHovered = hoveredMemberId === member.id;

              return (
                <div
                  key={member.id}
                  className="group relative flex flex-col items-start cursor-pointer text-left"
                  onClick={() => handleMemberClick(member.id)}
                  onMouseEnter={() => setHoveredMemberId(member.id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                >
                  {/* Floating speech bubble quote tooltip (matches Image 1 hover/selected callout) */}
                  {isHovered && !isSelected && (
                    <div className="absolute -top-18 left-1/2 -translate-x-1/2 z-30 w-56 p-2.5 bg-white rounded-xl shadow-xl border border-[#cfe0ee] pointer-events-none transition-all duration-200 animate-fadeIn">
                      <p className="text-[10.5px] text-slate-700 italic leading-snug">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                      {/* Tail */}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#cfe0ee] rotate-45" />
                    </div>
                  )}

                  {/* Portrait photo with rounded-2xl corners */}
                  <div
                    className={`relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 transition-all duration-300 ${
                      isSelected
                        ? "ring-2 ring-[#0c2f4f] ring-offset-2 shadow-md"
                        : "border border-slate-200 group-hover:border-[#0c2f4f]/40 group-hover:shadow-md"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>

                  {/* Member Name (Apple headline styling) */}
                  <h3
                    className={`mt-3 text-sm sm:text-[15px] font-bold tracking-tight transition-colors ${
                      isSelected ? "text-[#0c2f4f]" : "text-slate-900 group-hover:text-[#0c2f4f]"
                    }`}
                  >
                    {member.name}
                  </h3>

                  {/* Role Subtitle */}
                  <p className="text-[11.5px] sm:text-xs text-slate-500 font-normal mt-0.5 leading-snug">
                    {member.role}
                  </p>

                  {/* Circular action button (+ / -) in lighter naval blue */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMemberClick(member.id);
                    }}
                    className={`mt-2.5 inline-flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0c2f4f] border-[#0c2f4f] text-white shadow-xs"
                        : "border-slate-300 bg-white text-slate-500 group-hover:border-[#0c2f4f] group-hover:text-[#0c2f4f]"
                    }`}
                    aria-label={`Toggle profile for ${member.name}`}
                  >
                    {isSelected ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
