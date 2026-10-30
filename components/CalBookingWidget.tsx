"use client";

import React, { useState } from "react";
import {
  Clock,
  Globe,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Calendar as CalendarIcon,
  User,
  Mail,
  Building,
  Sparkles,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

function GoogleMeetIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 87.5 72" fill="none" aria-label="Google Meet">
      <path d="M49 36l13.5-10.5v21L49 36z" fill="#00ac47" />
      <path d="M62.5 25.5L78 13.5v45L62.5 46.5v-21z" fill="#00aa46" />
      <path d="M49 13.5v22.5L26.5 13.5H49z" fill="#00832d" />
      <path d="M26.5 13.5h-13C6.05 13.5.5 19.05.5 26.5v19c0 7.45 5.55 13 13 13h13V13.5z" fill="#2684fc" />
      <path d="M26.5 58.5H49V36L26.5 58.5z" fill="#ea4335" />
      <path d="M49 13.5H26.5v45H49c7.45 0 13.5-6.05 13.5-13.5v-18c0-7.45-6.05-13.5-13.5-13.5z" fill="#ffba00" />
    </svg>
  );
}

interface CalBookingWidgetProps {
  brandLogo?: string;
  defaultHost?: string;
  defaultTitle?: string;
  defaultDescription?: string;
  calendarUrl?: string;
}

export default function CalBookingWidget({
  brandLogo = "Spine Suite",
  defaultHost = "Jerry Liu",
  defaultTitle = "Executive conversation with Spine Suite (Spinal Consultation)",
  defaultDescription = "Interactive clinical walkthrough of YOLO v11 2D-to-3D X-ray reconstruction, OpenSim trunk dynamics, and FEBio finite element simulations.",
  calendarUrl = "https://calendar.app.google/xuDw7PomLrF6Y6BW7",
}: CalBookingWidgetProps) {
  // Calendar state
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(9); // 0-indexed: 9 = October
  const [selectedDay, setSelectedDay] = useState<number>(30); // 30th
  const [selectedMonth, setSelectedMonth] = useState<number>(9); // October
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState<string>("America/Los_Angeles");
  const [showTzDropdown, setShowTzDropdown] = useState<boolean>(false);

  // Booking step: "select" -> "form" -> "confirmed"
  const [step, setStep] = useState<"select" | "form" | "confirmed">("select");

  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    notes: "",
  });

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const timezones = [
    { label: "America/Los Angeles (PT)", value: "America/Los_Angeles" },
    { label: "America/Denver (MT)", value: "America/Denver" },
    { label: "America/Chicago (CT)", value: "America/Chicago" },
    { label: "America/New York (ET)", value: "America/New_York" },
    { label: "Europe/London (GMT)", value: "Europe/London" },
    { label: "Europe/Zurich (CET)", value: "Europe/Zurich" },
    { label: "Asia/Tokyo (JST)", value: "Asia/Tokyo" },
  ];

  const rawSlots12 = [
    "6:00am", "6:30am", "7:00am", "7:30am",
    "8:00am", "8:30am", "9:00am", "9:30am",
    "11:30am", "12:30pm", "1:30pm", "2:30pm",
    "3:30pm", "4:30pm"
  ];

  const rawSlots24 = [
    "06:00", "06:30", "07:00", "07:30",
    "08:00", "08:30", "09:00", "09:30",
    "11:30", "12:30", "13:30", "14:30",
    "15:30", "16:30"
  ];

  const slots = timeFormat === "12h" ? rawSlots12 : rawSlots24;

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonthIndex((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonthIndex((m) => m + 1);
    }
  };

  // Helper to format day with ordinal
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  // Days in month calculation
  const daysInCurrentMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonthIndex, 1).getDay(); // 0 = Sun

  // Days array for current month
  const monthDays = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

  // Selected date display
  const selectedDateObj = new Date(currentYear, selectedMonth, selectedDay);
  const dayNameShort = selectedDateObj.toLocaleDateString("en-US", { weekday: "short" });
  const selectedDateLabel = `${dayNameShort} ${getOrdinal(selectedDay)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStep("confirmed");
    if (typeof window !== "undefined") {
      window.open(calendarUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden font-sans">
      {step === "confirmed" ? (
        <div className="p-8 sm:p-16 text-center max-w-xl mx-auto space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
            <Check className="h-8 w-8 stroke-[3]" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Demo Confirmed
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              You are scheduled!
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A calendar invitation with Google Meet details has been prepared for{" "}
              <strong className="text-slate-900 font-semibold">{formData.email}</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left space-y-3 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-3">
              <CalendarIcon className="h-4 w-4 text-purple-600" />
              <span>
                {selectedDateLabel}, {monthNames[selectedMonth]} {currentYear} at {selectedSlot}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-purple-600" />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <GoogleMeetIcon className="h-4 w-4 shrink-0" />
              <span className="text-slate-800 font-semibold">
                Google Meet · Link included in invite
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-purple-600" />
              <span>{selectedTimezone}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-xs font-semibold text-white transition-colors inline-flex items-center justify-center gap-2 shadow-md shadow-purple-600/20"
            >
              <span>Confirm on Google Calendar</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => {
                setStep("select");
                setSelectedSlot(null);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
            >
              Schedule Another Demo
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      ) : step === "form" ? (
        <div className="p-8 sm:p-12 max-w-xl mx-auto">
          <button
            onClick={() => setStep("select")}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to calendar</span>
          </button>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-700 font-bold uppercase tracking-wider mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Executive Briefing Details</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              Confirm your reservation
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Booking with <strong className="text-slate-800">{defaultHost}</strong> for{" "}
              <strong className="text-slate-800">
                {selectedDateLabel} at {selectedSlot} ({selectedTimezone.split("/")[1]?.replace("_", " ")})
              </strong>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="name@hospital.org or name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Hospital / Institution / Organization
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Stanford Health Care / HCA Healthcare"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Focus Areas / Recovery Priorities
              </label>
              <textarea
                rows={3}
                placeholder="What specific payer issues, simulation needs, or underpayment recovery topics would you like to focus on?"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 text-xs transition-colors shadow-md shadow-purple-600/20 active:scale-[0.99]"
              >
                Confirm & Schedule Google Meet
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* Column 1: Host and Meeting Details (Exact screenshot match) */}
          <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between bg-white relative">
            <div className="space-y-6">
              {/* Top row: Avatar on left, Brand Logo on right */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="h-10 w-10 rounded-full bg-[#5b21b6] text-white flex items-center justify-center font-bold text-base tracking-wide shadow-xs">
                    {defaultHost ? defaultHost.charAt(0) : "J"}
                  </div>
                  <span className="text-sm font-medium text-slate-600 block mt-3">
                    {defaultHost}
                  </span>
                </div>
                {/* Brand text */}
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-300 font-sans select-none pt-1">
                  {brandLogo}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                  {defaultTitle}
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  {defaultDescription}
                </p>
              </div>

              {/* Meeting Meta Items */}
              <div className="space-y-3.5 pt-2 text-sm font-medium text-slate-700">
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="h-4 w-4 text-slate-600 shrink-0" />
                  <span>30m</span>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <GoogleMeetIcon className="h-4 w-4 shrink-0" />
                  <span>Google Meet</span>
                </div>

                {/* Timezone Selector */}
                <div className="relative pt-1">
                  <button
                    type="button"
                    onClick={() => setShowTzDropdown(!showTzDropdown)}
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 font-medium py-1 px-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Globe className="h-4 w-4 text-slate-600 shrink-0" />
                    <span className="truncate max-w-[200px]">{selectedTimezone.replace("_", " ")}</span>
                    <ChevronDown className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                  </button>

                  {showTzDropdown && (
                    <div className="absolute z-20 left-0 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl text-xs space-y-1">
                      {timezones.map((tz) => (
                        <button
                          key={tz.value}
                          type="button"
                          onClick={() => {
                            setSelectedTimezone(tz.value);
                            setShowTzDropdown(false);
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${selectedTimezone === tz.value
                              ? "bg-purple-50 text-purple-700 font-semibold"
                              : "text-slate-700 hover:bg-slate-50"
                            }`}
                        >
                          <span className="truncate">{tz.label}</span>
                          {selectedTimezone === tz.value && (
                            <Check className="h-3.5 w-3.5 text-purple-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Google Calendar Link */}
                <div className="pt-2">
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200/80 px-3.5 py-2 text-xs font-semibold text-purple-700 transition-colors shadow-2xs group"
                  >
                    <CalendarIcon className="h-3.5 w-3.5 text-purple-600" />
                    <span>Open in Google Calendar</span>
                    <ExternalLink className="h-3 w-3 text-purple-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="pt-8 mt-auto border-t border-slate-100 text-[11px] text-slate-400 font-mono">
              HIPAA & SOC 2 Compliant Infrastructure
            </div>
          </div>

          {/* Column 2: Calendar Month View */}
          <div className="lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white flex flex-col justify-between">
            <div>
              {/* Month Header with Navigation */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-base font-bold text-slate-900">
                  {monthNames[currentMonthIndex]} <span className="font-normal text-slate-500">{currentYear}</span>
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Days of Week Row */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold tracking-wider text-slate-700 uppercase mb-4">
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {/* Empty leading padding slots */}
                {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                  <div key={`empty-${idx}`} className="h-10 w-10" />
                ))}

                {/* Days in Month */}
                {monthDays.map((day) => {
                  const isSelected = selectedDay === day && selectedMonth === currentMonthIndex;
                  const hasGreenDot = day === 29 && currentMonthIndex === 9; // Cal.com indicator matching the screenshot
                  const isAvailable = day >= 8 && day <= 31; // Days active in screenshot

                  return (
                    <button
                      key={`day-${day}`}
                      type="button"
                      onClick={() => {
                        setSelectedDay(day);
                        setSelectedMonth(currentMonthIndex);
                        setSelectedSlot(null);
                      }}
                      className={`h-10 w-10 mx-auto rounded-xl flex flex-col items-center justify-center relative font-medium transition-all ${isSelected
                          ? "bg-[#00875a] text-white font-bold shadow-sm"
                          : isAvailable
                            ? "text-slate-800 hover:bg-slate-100 cursor-pointer font-medium"
                            : "text-slate-300 cursor-not-allowed"
                        }`}
                    >
                      <span>{day}</span>
                      {hasGreenDot && !isSelected && (
                        <span className="h-1 w-1 rounded-full bg-[#00875a] absolute bottom-1"></span>
                      )}
                    </button>
                  );
                })}

                {/* Next Month Overflow Pill Days (Matching Nov 1-7 in user photo) */}
                {currentMonthIndex === 9 && (
                  <>
                    {/* Sun Nov 1 with NOV badge */}
                    <div className="h-10 w-10 mx-auto flex flex-col items-center justify-center relative">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-bold block -mt-1 leading-none">
                        NOV
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDay(1);
                          setSelectedMonth(10);
                          setSelectedSlot(null);
                        }}
                        className={`text-sm font-medium mt-0.5 ${selectedDay === 1 && selectedMonth === 10
                            ? "bg-[#00875a] text-white px-2 rounded-lg font-bold"
                            : "text-slate-800 hover:text-slate-900"
                          }`}
                      >
                        1
                      </button>
                    </div>

                    {/* Mon-Fri Nov 2, 3, 4, 5, 6 in light gray rounded pills */}
                    {[2, 3, 4, 5, 6].map((novDay) => (
                      <button
                        key={`nov-${novDay}`}
                        type="button"
                        onClick={() => {
                          setSelectedDay(novDay);
                          setSelectedMonth(10);
                          setSelectedSlot(null);
                        }}
                        className={`h-10 w-10 mx-auto rounded-xl flex items-center justify-center text-sm font-bold transition-all ${selectedDay === novDay && selectedMonth === 10
                            ? "bg-[#00875a] text-white shadow-sm"
                            : "bg-[#e5e7eb] hover:bg-[#d8dbdf] text-slate-800"
                          }`}
                      >
                        {novDay}
                      </button>
                    ))}

                    {/* Sat Nov 7 regular text */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDay(7);
                        setSelectedMonth(10);
                        setSelectedSlot(null);
                      }}
                      className={`h-10 w-10 mx-auto rounded-xl flex items-center justify-center text-sm font-medium transition-all ${selectedDay === 7 && selectedMonth === 10
                          ? "bg-[#00875a] text-white shadow-sm font-bold"
                          : "text-slate-800 hover:bg-slate-100"
                        }`}
                    >
                      7
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="pt-4 text-xs text-slate-400 font-mono text-center">
              Click a highlighted date to view available meeting slots
            </div>
          </div>

          {/* Column 3: Time Slots (Matching user photo) */}
          <div className="lg:col-span-3 p-8 bg-white flex flex-col">
            {/* Header: Date + 12h/24h toggle */}
            <div className="flex items-center justify-between mb-5 pb-3">
              <h4 className="text-base font-bold text-slate-900">
                {selectedDateLabel}
              </h4>
              <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setTimeFormat("12h")}
                  className={`px-2 py-0.5 rounded-md transition-colors ${timeFormat === "12h"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  12h
                </button>
                <button
                  type="button"
                  onClick={() => setTimeFormat("24h")}
                  className={`px-2 py-0.5 rounded-md transition-colors ${timeFormat === "24h"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  24h
                </button>
              </div>
            </div>

            {/* Scrollable Slots List */}
            <div className="space-y-2.5 overflow-y-auto max-h-[400px] pr-1 scrollbar-thin">
              {slots.map((slot) => {
                const isSlotSelected = selectedSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full py-3 px-3 rounded-2xl border text-sm font-medium text-center transition-all ${isSlotSelected
                        ? "border-[#00875a] bg-emerald-50 text-[#00875a] shadow-xs ring-1 ring-[#00875a] font-semibold"
                        : "border-slate-200 hover:border-slate-400 text-slate-800 hover:bg-slate-50"
                      }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>

            {/* Action Button after slot selected */}
            {selectedSlot ? (
              <div className="pt-4 mt-auto space-y-2">
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-colors shadow-md shadow-purple-600/20 active:scale-[0.99] flex items-center justify-center gap-1.5"
                >
                  <span>Next: Confirm Details</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Direct Google Calendar</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </div>
            ) : (
              <div className="pt-4 mt-auto">
                <div className="text-xs text-center text-slate-400 font-mono mb-2">
                  Select a time slot
                </div>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book on Google Calendar</span>
                  <ExternalLink className="h-3 w-3 text-purple-600" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
