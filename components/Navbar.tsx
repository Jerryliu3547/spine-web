"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Activity, 
  Menu, 
  X, 
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Product", href: "/product" },
    { label: "Mission", href: "/mission" },
    { label: "Team", href: "/team" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 border border-purple-200 text-purple-700 group-hover:border-purple-300 group-hover:scale-105 transition-all shadow-xs">
            <Activity className="h-5 w-5 text-purple-600" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
            Spine Suite
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
                  isActive
                    ? "text-purple-700 font-bold"
                    : "text-slate-600 hover:text-purple-700"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-purple-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Benchling style) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#booking"
            className="benchling-cta-purple inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white active:scale-95 transition-all"
          >
            <span>Request Demo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 text-sm font-medium text-slate-700 hover:text-purple-700 border-b border-slate-100"
            >
              <span>{link.label}</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>
          ))}
          <div className="pt-3">
            <a
              href="/#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="benchling-cta-purple flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-md shadow-purple-600/20"
            >
              <span>Request Clinical Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
