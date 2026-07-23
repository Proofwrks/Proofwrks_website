"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BrandBanner() {
  const ref = useScrollReveal();

  return (
    <section ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 lg:pt-24">
        <img
          src="/images/brand-closing.jpg"
          alt="Proofwrks — Building products that people actually use. Technology that solves real problems."
          className="reveal w-full rounded-2xl border border-border"
          loading="lazy"
        />
      </div>
    </section>
  );
}
