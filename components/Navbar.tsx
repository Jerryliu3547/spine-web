"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const navLinks = [
    { label: "Product", href: "/product" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center group py-0.5" aria-label="SpineTwin Home">
          <Image
            src={`${basePath}/logos/spinetwin-horizontal.png`}
            alt="SpineTwin"
            width={240}
            height={109}
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Navigation Tabs (Apple Segmented Capsule Style) */}
        <nav className="hidden md:flex items-center p-1 rounded-full bg-slate-100/95 border border-slate-200/90 shadow-xs backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/about" && pathname === "/team");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#1d1d1f] font-semibold shadow-xs ring-1 ring-black/[0.08]"
                    : "text-slate-800 hover:text-[#1d1d1f] hover:bg-white/90 active:scale-98"
                }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Apple Trade In Blue style) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://calendar.app.google/xuDw7PomLrF6Y6BW7"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-cta-blue bg-[#007aff] hover:bg-[#0066d6] inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white active:scale-95 transition-all shadow-sm shadow-[#007aff]/30"
          >
            <span>Request Demo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
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
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="p-1 rounded-2xl bg-slate-100/90 border border-slate-200/90 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/about" && pathname === "/team");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-[#1d1d1f] font-semibold shadow-xs"
                      : "text-slate-800 hover:text-[#1d1d1f] hover:bg-white/90"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`h-4 w-4 ${isActive ? "text-[#007aff]" : "text-slate-400"}`} />
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <a
              href="https://calendar.app.google/xuDw7PomLrF6Y6BW7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="apple-cta-blue bg-[#007aff] hover:bg-[#0066d6] flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-md shadow-[#007aff]/30"
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
