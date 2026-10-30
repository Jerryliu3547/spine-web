"use client";

import React, { useState } from "react";
import {
  Calendar,
  Mail,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Send,
  Sparkles
} from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    role: "Surgeon",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const bookingContacts = [
    {
      name: "Farshid Ghezelbash, PhD",
      role: "Biomechanics & Modeling Review",
      description: "Discuss FEBio mesh morphing, cadaver kinematics validation, and OpenSim trunk model calibrations.",
      email: "farshid@esklashlabs.ai",
      calText: "Schedule 30-min Clinical Biomechanics Deep Dive",
    },
    {
      name: "Amir Hossein Eskandari, PhD",
      role: "Clinical Imaging & STP Screws",
      description: "Evaluate YOLO landmark detection on your center's X-ray films and cortical bone breach safety algorithms.",
      email: "amir@esklashlabs.ai",
      calText: "Schedule 30-min Imaging & Implant Trajectory Review",
    },
    {
      name: "Dianze Liu",
      role: "AI Architecture & Foundry Integration",
      description: "Explore agent zero-shot parameter sweeps, custom Python solver automation, and Medtronic POC workflows.",
      email: "dianze@esklashlabs.ai",
      calText: "Schedule 30-min AI Architecture & Code Walkthrough",
    },
  ];

  return (
    <section id="booking" className="py-20 md:py-28 bg-white border-t border-slate-200/80 benchling-grid-bg relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-mono text-purple-800 mb-4">
            <Calendar className="h-3.5 w-3.5 text-purple-600" />
            <span>Direct Clinical Calendar Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Schedule a Clinical Review &{" "}
            <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Technical Demo
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Book directly with the founding scientists or submit your institution&apos;s specific surgical simulation requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 3 Direct Calendar Booking Cards */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold block mb-2">
              Select a Team Member to Book Directly:
            </span>

            {bookingContacts.map((contact, idx) => (
              <div
                key={idx}
                className="benchling-card benchling-card-hover rounded-2xl p-5 sm:p-6 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-slate-900">{contact.name}</h4>
                  <span className="text-xs font-mono text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full font-medium">
                    {contact.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {contact.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                  <a
                    href={`mailto:${contact.email}?subject=Spine%20Suite%20Clinical%20Demo`}
                    className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors font-mono"
                  >
                    <Mail className="h-3.5 w-3.5 text-purple-600" />
                    <span>{contact.email}</span>
                  </a>

                  <a
                    href={`mailto:${contact.email}?subject=Book%20Clinical%20Demo%20with%20${encodeURIComponent(contact.name)}`}
                    className="benchling-cta-purple inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-semibold text-white shadow-xs"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Book 30-Min Call</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Benchling-Style Consultation Request Form (Clean Light Theme) */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">General Clinical Inquiries</h3>
                <p className="text-xs text-slate-500 mt-0.5">Custom pilot datasets & device integrations</p>
              </div>
              <span className="p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
                <Sparkles className="h-5 w-5" />
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Inquiry Received</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you. A founding engineer will review your inquiry and follow up within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Sarah Jenkins"
                    className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Institution / Company</label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. Stanford Medicine / Medtronic"
                    className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Role / Perspective</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors shadow-2xs"
                  >
                    <option value="Surgeon">Orthopedic / Neuro Spine Surgeon</option>
                    <option value="Device Manufacturer">Medical Device Manufacturer (e.g. Medtronic)</option>
                    <option value="Researcher">Biomechanics / ML Researcher</option>
                    <option value="Investor">Healthcare & DeepTech Investor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@hospital.org"
                    className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">Simulation Needs / Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target pathology, patient cohorts, or validation questions..."
                    className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="benchling-cta-purple w-full mt-2 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-purple-600/20"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Clinical Inquiry</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>HIPAA & SOC 2 Type II Ready</span>
              </span>
              <span>24h Response SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
