import React from "react";
import Image from "next/image";

export default function LogoTicker() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const institutions = [
    {
      name: "Stanford Medicine",
      location: "Stanford, CA",
      role: "Surgical Advisory & Clinical Validation",
      logo: "/logos/stanford-medicine.svg",
      heightClass: "h-8",
      accent: "hover:border-rose-300",
    },
    {
      name: "Georgia Tech",
      location: "Atlanta, GA",
      role: "Design Intelligence Lab & ML LoRA Research",
      logo: "/logos/georgia-tech.svg",
      heightClass: "h-7",
      accent: "hover:border-amber-300",
    },
    {
      name: "UT Health San Antonio",
      location: "San Antonio, TX",
      role: "Spine Surgery Advisory Board",
      logo: "/logos/ut-health-san-antonio.svg",
      heightClass: "h-8",
      accent: "hover:border-orange-300",
    },
    {
      name: "Polytechnique Montréal",
      location: "Montréal, QC",
      role: "Trunk Musculoskeletal Biomechanics Lab",
      logo: "/logos/polytechnique-montreal.png",
      heightClass: "h-7",
      accent: "hover:border-sky-300",
    },
    {
      name: "McGill University",
      location: "Montréal, QC",
      role: "Biomedical R&D & Sensory Technology",
      logo: "/logos/mcgill-logo.svg",
      heightClass: "h-9",
      accent: "hover:border-red-300",
    },
    {
      name: "UBC Radiology",
      location: "Vancouver, BC",
      role: "Spine Biomechanics & Medical Imaging",
      logo: "/logos/ubc.svg",
      heightClass: "h-7",
      accent: "hover:border-blue-300",
    },
    {
      name: "IRSST",
      location: "Canada",
      role: "Occupational Biomechanics & Spine Loading",
      logo: "/logos/irsst.png",
      heightClass: "h-8",
      accent: "hover:border-purple-300",
    },
    {
      name: "Torus Biomedical",
      location: "Canada",
      role: "Robotic Spine Drilling & Instrumentation",
      logo: "/logos/torus-biomedical.png",
      heightClass: "h-6",
      accent: "hover:border-indigo-300",
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-[#F8FAFC] py-12 sm:py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b] block mb-2">
          Clinical Pedigree & Research Validation
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.022em]">
          <span className="text-[#1d1d1f]">Backed by Clinical Research.</span>{" "}
          <span className="text-[#86868b]">Academic excellence across leading centers.</span>
        </h2>
      </div>

      {/* Infinite Horizontally Rolling Line */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee gap-5 py-2">
          {/* First set of institutional cards */}
          {institutions.map((item, index) => (
            <div
              key={`primary-${index}`}
              className={`flex-shrink-0 w-72 sm:w-80 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group/card ${item.accent}`}
            >
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="h-10 w-36 sm:w-40 flex items-center justify-start">
                  <Image
                    src={`${basePath}${item.logo}`}
                    alt={item.name}
                    width={160}
                    height={40}
                    className={`${item.heightClass} w-auto max-w-full object-contain filter transition-transform duration-200 group-hover/card:scale-105`}
                    unoptimized
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold whitespace-nowrap bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded-md">
                  {item.location}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover/card:text-purple-700 transition-colors">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless continuous horizontal rolling */}
          {institutions.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              aria-hidden="true"
              className={`flex-shrink-0 w-72 sm:w-80 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group/card ${item.accent}`}
            >
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="h-10 w-36 sm:w-40 flex items-center justify-start">
                  <Image
                    src={`${basePath}${item.logo}`}
                    alt=""
                    width={160}
                    height={40}
                    className={`${item.heightClass} w-auto max-w-full object-contain filter transition-transform duration-200 group-hover/card:scale-105`}
                    unoptimized
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold whitespace-nowrap bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded-md">
                  {item.location}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover/card:text-purple-700 transition-colors">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
