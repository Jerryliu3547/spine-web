"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from "lucide-react";

/**
 * Placeholder video configuration.
 * Replace `primarySrc` with your new demo video path (e.g. "/product-demo.mp4") inside `public/`.
 */
export const DEMO_VIDEO_CONFIG = {
  primarySrc: "/hero-video.mp4",
  fallbackSrc: "/gemini_generated_video_95288b1c.mp4",
  title: "SpineTwin Autonomous Clinical Workflow",
  durationLabel: "Product Walkthrough",
};

export default function ProductVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    try {
      const playPromise = video.play();
      if (playPromise !== undefined && typeof playPromise.catch === "function") {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } catch {
      // Ignored in test environments (JSDOM)
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying((prev) => !prev);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setProgress(0);
    try {
      const playPromise = video.play();
      if (playPromise !== undefined && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
      setIsPlaying(true);
    } catch {
      // Ignored in JSDOM
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = percentage * video.duration;
    setProgress(percentage * 100);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = containerRef.current || videoRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      el.requestFullscreen?.().catch(() => {});
    }
  };

  return (
    <div className="w-full max-w-[1160px] mx-auto">
      {/* Apple Studio Display / Keynote Bezel Container */}
      <div
        ref={containerRef}
        onClick={togglePlay}
        className="group relative rounded-[28px] sm:rounded-[36px] bg-[#0B0F19] p-2 sm:p-3 shadow-[0_32px_80px_-16px_rgba(15,23,42,0.28),0_4px_20px_rgba(15,23,42,0.08)] ring-1 ring-black/10 border-t border-white/15 cursor-pointer select-none overflow-hidden transition-transform duration-500 ease-out"
      >
        {/* Inner 16:9 Cinema Viewport */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[20px] sm:rounded-[26px] bg-black">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            aria-label={DEMO_VIDEO_CONFIG.title}
            className="h-full w-full object-cover"
          >
            <source src={`${basePath}${DEMO_VIDEO_CONFIG.primarySrc}`} type="video/mp4" />
            <source src={`${basePath}${DEMO_VIDEO_CONFIG.fallbackSrc}`} type="video/mp4" />
          </video>

          {/* Subtle Top & Bottom Cinematic Vignettes */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/65 via-black/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Top-Left Floating Apple Glass Badge */}
          <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/15 px-3.5 py-1.5 text-white shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-medium tracking-tight text-white/90">
              {DEMO_VIDEO_CONFIG.durationLabel}
            </span>
          </div>

          {/* Center Frosted Glass Play Overlay (Visible when paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[2px] transition-opacity duration-300">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label="Play demo video"
                className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-2xl border border-white/35 text-white shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:bg-white/30 active:scale-95"
              >
                <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-white text-white ml-1" />
              </button>
            </div>
          )}

          {/* Bottom Floating Apple Liquid-Glass Control Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-3 bottom-3 sm:inset-x-6 sm:bottom-5 flex items-center gap-3 sm:gap-4 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 px-4 py-2.5 sm:px-5 sm:py-3 text-white shadow-lg transition-opacity duration-300"
          >
            {/* Play / Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-white text-white" />
              ) : (
                <Play className="h-4 w-4 fill-white text-white ml-0.5" />
              )}
            </button>

            {/* Restart Button */}
            <button
              type="button"
              onClick={handleRestart}
              aria-label="Restart video"
              title="Restart video"
              className="hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/75 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>

            {/* Interactive Scrubbing Timeline */}
            <div
              onClick={handleSeek}
              role="progressbar"
              aria-label="Video progress"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              className="group/bar relative flex-1 h-5 flex items-center cursor-pointer"
            >
              <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden transition-all group-hover/bar:h-2">
                <div
                  className="h-full rounded-full bg-[#007aff] transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Mute / Unmute Toggle */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Fullscreen video"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
