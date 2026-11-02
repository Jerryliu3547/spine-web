import React from "react";
import type { Metadata } from "next";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | SpineTwin - Scientific Leadership & Advisory",
  description: "Meet the scientists, biomechanists, and AI architects behind SpineTwin, with roots across Polytechnique Montréal, McGill, UBC, and Stanford.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1">
        {/* Mission Section (Designed to match reference UI screenshot with Apple theme) */}
        <MissionSection />

        {/* Founding Scientists & Core Leadership */}
        <TeamSection />

      </main>

      <Footer />
    </div>
  );
}
