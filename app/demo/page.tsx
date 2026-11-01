import React from "react";
import type { Metadata } from "next";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalBookingWidget from "@/components/CalBookingWidget";
import { ShieldCheck, Cpu, Database, Activity, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo | SpineTwin - Executive & Clinical Review",
  description:
    "Schedule an executive conversation and clinical walkthrough with SpineTwin. Live 2D-to-3D X-ray reconstruction, finite element routing, and musculoskeletal simulations.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-purple-100 selection:text-purple-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Activity className="h-3.5 w-3.5" />
            <span>Executive & Clinical Demonstration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Schedule a Technical Demo
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connect directly with our founding biomechanics scientists and ML leadership. Select a convenient time on the calendar below for a live walkthrough, or{" "}
            <a
              href="https://calendar.app.google/xuDw7PomLrF6Y6BW7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold underline underline-offset-4 hover:text-purple-900 inline-flex items-center gap-1"
            >
              <span>open our Google Calendar directly</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            .
          </p>
        </div>

        {/* Cal.com Style Booking Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <CalBookingWidget />
        </div>

        {/* Demo Expectations / Value Props */}
        <div className="max-w-5xl mx-auto pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-4">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Live Multi-Physics Sweep</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Watch Spine Agent ingest raw X-rays and run coupled finite element stress tests and musculoskeletal muscle load optimizations in under 45 seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Custom Center Validation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluate machine learning landmark detection and statistical shape modeling accuracy on your institution&apos;s anonymized pilot case series or implants catalog.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Enterprise & Regulatory</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review FDA 21 CFR Part 11 audit trails, ASME V&V 40 verification certificates, and SOC 2 Type II compliance architectures for clinical deployment.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
