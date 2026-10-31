"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      try {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined && typeof playPromise.catch === "function") {
          playPromise.catch(() => { });
        }
      } catch {
        // Ignored in test environments like JSDOM
      }
    }
  }, []);

  return (
    <section id="overview" className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32 bg-white benchling-grid-bg">
      {/* Looping medical simulation background video */}
      <div className="absolute top-0 left-0 right-0 h-[560px] md:h-[640px] z-0 overflow-hidden pointer-events-none">
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
          <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero-video.mp4`} type="video/mp4" />
          <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/gemini_generated_video_95288b1c.mp4`} type="video/mp4" />
        </video>
        {/* Soft gradient masks to blend cleanly into white background with rich contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />
      </div>

      {/* Benchling Ambient Glow Blurs (Light Palette) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-purple-500/20 via-indigo-500/15 to-sky-400/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-purple-500/20 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center relative max-w-4xl mx-auto">
          {/* Subtle localized dark halo behind hero text for guaranteed legibility across all video frames */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[280px] bg-slate-950/25 blur-3xl rounded-full pointer-events-none -z-10" />

          {/* Apple Typography Hero Title */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] text-white leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            From One Lateral X-Ray to a{" "}
            <span className="text-slate-300/95 font-semibold">
              Simulated Spine Surgery.
            </span>
          </h1>

          {/* Subheadline with clean Apple body tracking */}
          <p className="mt-6 max-w-2xl text-base sm:text-[19px] text-slate-200/90 leading-relaxed font-normal tracking-[-0.01em] drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            An infinite biomechanics program team for surgical R&D. Autonomous multi-physics routing across finite element stress and musculoskeletal loading in seconds.
          </p>

          {/* Apple Trade In Blue CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/xuDw7PomLrF6Y6BW7"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-cta-blue bg-[#007aff] hover:bg-[#0066d6] inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-md shadow-[#007aff]/35 hover:shadow-lg hover:shadow-[#007aff]/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request Clinical Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
