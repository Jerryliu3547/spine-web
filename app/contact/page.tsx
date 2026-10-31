import React from "react";
import type { Metadata } from "next";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalBookingWidget from "@/components/CalBookingWidget";
import { 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Stethoscope, 
  Phone,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Spine Suite & Cesara Executive Consultation",
  description:
    "Schedule an executive conversation, payer recovery briefing, or clinical demonstration. Direct access to our biomechanics leadership and AI architects.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-purple-100 selection:text-purple-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* Page Header: Apple Two-Tone Style */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b] mb-4 block">
            Executive & Clinical Engagement
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.025em]">
            <span className="text-[#1d1d1f]">Contact Us.</span>{" "}
            <span className="text-[#86868b]">Schedule an executive review.</span>
          </h1>
          <p className="mt-4 text-base sm:text-[17px] text-[#86868b] max-w-2xl mx-auto leading-relaxed font-normal">
            Connect directly with our leadership and founding biomechanics team. Pick a convenient time on the calendar below for a live walkthrough, or{" "}
            <a
              href="https://calendar.app.google/xuDw7PomLrF6Y6BW7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold underline underline-offset-4 hover:text-purple-900 inline-flex items-center gap-1"
            >
              <span>schedule directly on Google Calendar</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            .
          </p>
        </div>

        {/* Live Booking Widget matching user design */}
        <div className="max-w-5xl mx-auto mb-16">
          <CalBookingWidget />
        </div>

        {/* Institutional Inquiries & Direct Channels */}
        <div className="max-w-5xl mx-auto pt-12 border-t border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Direct Institutional Contact Channels
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              For enterprise hospital systems, academic research alliances, and regulatory compliance reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700 mb-4">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Clinical Deployments</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Request pilot evaluations on your hospital&apos;s anonymized lateral radiographs or surgical telemetry series.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono space-y-1.5">
                <a
                  href="mailto:clinical@spinesuite.com"
                  className="flex items-center gap-2 text-purple-700 hover:text-purple-900 font-semibold transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>clinical@spinesuite.com</span>
                </a>
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Response within 4 hours</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-4">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Executive & Payer Partnerships</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Inquire regarding health system underpayment recovery, surgical reimbursement accuracy, and payer analytics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono space-y-1.5">
                <a
                  href="mailto:executive@cesara.health"
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>executive@cesara.health</span>
                </a>
                <div className="flex items-center gap-2 text-slate-500">
                  <Phone className="h-3.5 w-3.5" />
                  <span>Direct executive briefing line</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Regulatory & Compliance</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Access FDA 21 CFR Part 11 audit trails, ASME V&amp;V 40 validation packages, and HIPAA BAA execution.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono space-y-1.5">
                <a
                  href="mailto:compliance@spinesuite.com"
                  className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>compliance@spinesuite.com</span>
                </a>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>San Francisco · Montreal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
