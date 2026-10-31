"use client";

import React from "react";
import Link from "next/link";
import { Activity, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFC] text-slate-600 text-xs font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-[#007aff]">
                <Activity className="h-5 w-5 text-[#007aff]" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-[#007aff] font-bold uppercase">
                  Esklash Labs
                </span>
                <span className="text-sm font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                  SPINE SUITE
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-6 font-normal">
              The autonomous biomechanical foundry for spine surgery. Transforming lateral radiographs into validated FEBio and OpenSim multi-physics simulations in minutes.
            </p>

          </div>

          {/* Col 1: Platform & Foundry */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#86868b]">
              <li><Link href="/product" className="hover:text-[#1d1d1f] transition-colors">Product Overview</Link></li>
              <li><Link href="/product#pipeline" className="hover:text-[#1d1d1f] transition-colors">11-Stage Pipeline</Link></li>
              <li><Link href="/product#comparison" className="hover:text-[#1d1d1f] transition-colors">Platform Comparison</Link></li>
              <li><Link href="/product#validation" className="hover:text-[#1d1d1f] transition-colors">FEBio Finite Element</Link></li>
              <li><Link href="/product#validation" className="hover:text-[#1d1d1f] transition-colors">OpenSim 552 Muscles</Link></li>
            </ul>
          </div>

          {/* Col 2: Science & Validation */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b] mb-4">
              Science
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#86868b]">
              <li><Link href="/product#validation" className="hover:text-[#1d1d1f] transition-colors">Zero-Failure Biomechanics</Link></li>
              <li><Link href="/product#validation" className="hover:text-[#1d1d1f] transition-colors">22/22 FEBio Benchmarks</Link></li>
              <li><Link href="/product#validation" className="hover:text-[#1d1d1f] transition-colors">Cadaver Motion Verification</Link></li>
              <li><Link href="/product#validation" className="hover:text-[#1d1d1f] transition-colors">ASME V&V 40 Compliance</Link></li>
              <li><Link href="/product#validation" className="hover:text-[#1d1d1f] transition-colors">FDA 21 CFR Part 11</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Team */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#86868b] mb-4">
              About & Booking
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#86868b]">
              <li><Link href="/about" className="hover:text-[#007aff] transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="hover:text-[#007aff] transition-colors">Founding Scientists</Link></li>
              <li><Link href="/about" className="hover:text-[#007aff] transition-colors">Academic Institutions</Link></li>
              <li><Link href="/contact" className="hover:text-[#007aff] transition-colors">Contact Us & Review</Link></li>
              <li>
                <a
                  href="https://calendar.app.google/xuDw7PomLrF6Y6BW7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0066d6] transition-colors inline-flex items-center gap-1 font-semibold text-[#007aff]"
                >
                  <span>Request Live Demo</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li><a href="mailto:contact@esklashlabs.ai" className="hover:text-[#007aff] transition-colors">contact@esklashlabs.ai</a></li>
            </ul>
          </div>
        </div>

        {/* Benchling Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Esklash Labs, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Security & Privacy</span>
            <span className="hover:text-slate-800 cursor-pointer">ASME V&V 40 Compliance</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
