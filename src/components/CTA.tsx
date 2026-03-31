"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal relative overflow-hidden rounded-2xl bg-foreground text-background px-8 py-20 md:px-16 md:py-28">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.15]">
              Interested in what
              <br />
              we&apos;re building?
            </h2>
            <p className="mt-6 text-lg text-background/60 leading-relaxed">
              We&apos;re always looking for exceptional engineers, operators,
              and partners who think in decades, not quarters.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground text-sm font-medium rounded-lg hover:bg-background/90 transition-all duration-200"
              >
                Get in Touch
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
              </a>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-background/60 hover:text-background border border-background/20 rounded-lg hover:border-background/40 transition-all duration-200"
              >
                View Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
