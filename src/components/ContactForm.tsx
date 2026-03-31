"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or email us directly at cs@proofwrks.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <svg
          className="w-8 h-8 text-emerald-500 mb-4"
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
        <h3 className="text-lg font-semibold text-foreground">
          Message Sent
        </h3>
        <p className="mt-2 text-[15px] text-muted">
          Thank you for reaching out. We&apos;ve sent a confirmation to your
          email and will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[13px] font-medium text-foreground hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 text-[14px] text-red-600">
          {errorMessage}
        </div>
      )}

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
            placeholder="Your name"
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
            placeholder="you@company.com"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-[13px] font-medium text-foreground mb-1.5"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="e.g. General Inquiry, Partnership, Investment"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-medium text-foreground mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us how we can help..."
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === "sending" ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
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
          </>
        )}
      </button>
    </form>
  );
}
