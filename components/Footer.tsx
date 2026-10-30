"use client";

import React from "react";
import Link from "next/link";
import { Activity, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFC] text-slate-600 text-xs font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 border border-purple-200 text-purple-700">
                <Activity className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-purple-700 font-bold uppercase">
                  Esklash Labs
                </span>
                <span className="text-sm font-bold tracking-tight text-slate-900">
                  SPINE SUITE
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-6 font-normal">
              The autonomous biomechanical foundry for spine surgery. Transforming lateral radiographs into validated FEBio and OpenSim multi-physics simulations in minutes.
            </p>
            <div className="flex items-center gap-3 text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>FEBio & OpenSim Live</span>
              </span>
              <span className="text-[11px] text-slate-500 font-mono">FDA 21 CFR Part 11 Architecture</span>
            </div>
          </div>

          {/* Col 1: Platform & Foundry */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/product" className="hover:text-purple-700 transition-colors">Product Overview</Link></li>
              <li><Link href="/product#pipeline" className="hover:text-purple-700 transition-colors">11-Stage Pipeline</Link></li>
              <li><Link href="/product#comparison" className="hover:text-purple-700 transition-colors">Platform Comparison</Link></li>
              <li><Link href="/product#validation" className="hover:text-purple-700 transition-colors">FEBio Finite Element</Link></li>
              <li><Link href="/product#validation" className="hover:text-purple-700 transition-colors">OpenSim 552 Muscles</Link></li>
            </ul>
          </div>

          {/* Col 2: Mission & Science */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Mission
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/mission" className="hover:text-purple-700 transition-colors">Our Mission</Link></li>
              <li><Link href="/mission" className="hover:text-purple-700 transition-colors">Zero-Failure Surgery</Link></li>
              <li><Link href="/product#validation" className="hover:text-purple-700 transition-colors">22/22 FEBio Benchmarks</Link></li>
              <li><Link href="/product#validation" className="hover:text-purple-700 transition-colors">Cadaver Motion Verification</Link></li>
              <li><Link href="/mission" className="hover:text-purple-700 transition-colors">FDA 21 CFR Part 11</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Team */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Team & Booking
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/team" className="hover:text-purple-700 transition-colors">Founding Scientists</Link></li>
              <li><Link href="/team" className="hover:text-purple-700 transition-colors">Academic Institutions</Link></li>
              <li><Link href="/#booking" className="hover:text-purple-700 transition-colors">Schedule Clinical Demo</Link></li>
              <li><a href="mailto:contact@esklashlabs.ai" className="hover:text-purple-700 transition-colors">contact@esklashlabs.ai</a></li>
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
