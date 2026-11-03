"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    try {
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);
      formData.set("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setResult("Success! Tell us a little about you and we’ll get back to you.");
        formElement.reset();
      } else {
        setIsSuccess(false);
        setResult(data.message || "Error submitting request. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setResult("Error submitting request. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto font-sans">
      {/* Hidden SEO/Accessible heading for Contact Us */}
      <h2 className="sr-only">Contact Us.</h2>

      <div className="mb-8 text-left">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0f172a] mb-3">
          Book an appointment
        </h1>
        <p className="text-base sm:text-lg text-slate-500 font-normal">
          Tell us a little about you and we’ll get back to you.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 text-left">
        {/* Hidden access key and honeypot for Web3Forms */}
        <input
          type="hidden"
          name="access_key"
          value={accessKey}
        />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-slate-800 mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder="Full name"
              autoComplete="name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-slate-800 mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="you@hospital.org"
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Row 2: Organization & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-org"
              className="block text-sm font-medium text-slate-800 mb-2"
            >
              Organization
            </label>
            <input
              id="contact-org"
              type="text"
              name="organization"
              placeholder="Hospital, clinic or company"
              autoComplete="organization"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>

          <div>
            <label
              htmlFor="contact-date"
              className="block text-sm font-medium text-slate-800 mb-2"
            >
              Preferred date
            </label>
            <input
              id="contact-date"
              type="date"
              name="preferred_date"
              placeholder="yyyy-mm-dd"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-slate-800 mb-2"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="What would you like to discuss?"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs resize-y"
          />
        </div>

        {/* Submit Button: Apple Pill */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[#1a66ff] hover:bg-[#1554d4] active:bg-[#0f44b3] text-white font-medium px-8 py-3.5 text-sm sm:text-base transition-all shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Request appointment"}
          </button>
        </div>

        {/* Result message */}
        {result && (
          <p
            className={`text-sm font-medium transition-colors ${
              isSuccess ? "text-emerald-600" : "text-rose-600"
            }`}
            role={isSuccess ? "status" : "alert"}
            data-testid="form-result"
          >
            {result}
          </p>
        )}
      </form>
    </div>
  );
}
