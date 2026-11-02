import React from "react";
import type { Metadata } from "next";
import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book an appointment | Contact Us | SpineTwin",
  description:
    "Schedule an executive conversation, payer recovery briefing, or clinical demonstration. Direct access to our biomechanics leadership and AI architects.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <StickyBanner />
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
