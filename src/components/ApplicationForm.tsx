"use client";

import { useState, type FormEvent } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this up to an API route or service like
    // Formspree, Resend, or your own backend.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-center">
        <svg
          className="w-8 h-8 text-emerald-500 mx-auto mb-3"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
        <h4 className="text-base font-semibold text-foreground">
          Application Received
        </h4>
        <p className="mt-1 text-[14px] text-muted">
          Thank you for your interest. We&apos;ll review your application and
          get back to you if there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[13px] font-medium text-foreground mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[13px] font-medium text-foreground mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-[13px] font-medium text-foreground mb-1.5"
        >
          What kind of role are you interested in?
        </label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="e.g. Backend Engineer, Product Designer, etc."
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="portfolio"
          className="block text-[13px] font-medium text-foreground mb-1.5"
        >
          Portfolio / LinkedIn / GitHub
        </label>
        <input
          id="portfolio"
          name="portfolio"
          type="url"
          placeholder="https://"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-medium text-foreground mb-1.5"
        >
          Tell us about yourself <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What excites you about Proofwrks? What would you like to build?"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-all duration-200"
      >
        Submit Application
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </form>
  );
}
