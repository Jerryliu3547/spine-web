import React from "react";
import type { Metadata } from "next";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import ProductVideoPlayer from "@/components/ProductVideoPlayer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product Platform | SpineTwin Surgical AI & Multi-Physics Foundries",
  description:
    "Watch the SpineTwin platform in action: automated 2D-to-3D spine reconstruction, 552-muscle musculoskeletal dynamics, and finite element stress analysis.",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1d1d1f] flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1">
        {/* Apple Keynote Video Showcase Section */}
        <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
          {/* Subtle Ambient Studio Lighting Glows */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-tr from-blue-200/35 via-indigo-200/25 to-sky-200/30 blur-[140px] rounded-full pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Minimalist Apple Header */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="apple-eyebrow mb-3 block">
                SPINETWIN PRODUCT WALKTHROUGH
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.025em] leading-[1.08]">
                <span className="text-[#1d1d1f]">Autonomous Biomechanics.</span>{" "}
                <span className="text-[#86868b]">See it in action.</span>
              </h1>

              <p className="mt-5 text-base sm:text-[18px] text-[#86868b] leading-relaxed font-normal max-w-2xl">
                Watch how SpineTwin transforms standard 2D planar X-rays into patient-specific 3D digital twins, musculoskeletal dynamics, and finite element simulations in minutes.
              </p>
            </div>

            {/* Centerpiece Apple Keynote Video Showcase */}
            <ProductVideoPlayer />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
