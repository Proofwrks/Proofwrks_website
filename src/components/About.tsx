"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const logos = [
  { name: "Aether", letter: "A" },
  { name: "Veritas", letter: "V" },
  { name: "Nexus", letter: "N" },
  { name: "Sentinel", letter: "S" },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref}>
      {/* Impact statement — dark split section like rdbrck */}
      <div data-theme="dark" className="bg-[#1a1f1e] text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
            {/* Left — stat & narrative */}
            <div className="flex flex-col justify-center px-6 lg:px-12 py-20 lg:py-28">
              <h2 className="reveal text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
                Every day, thousands of
                <br className="hidden md:block" />
                users rely on products
                <br className="hidden md:block" />
                we built from scratch
              </h2>
              <p className="reveal mt-8 text-[17px] text-white/60 leading-relaxed max-w-lg">
                What started as a single engineering team with a conviction has
                grown into a portfolio of technology companies — each solving
                problems the market overlooked.
              </p>

              {/* Inline stats */}
              <div className="reveal mt-12 flex flex-wrap gap-x-12 gap-y-6">
                <div>
                  <div className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                    4
                  </div>
                  <div className="mt-1 text-[13px] text-white/40 font-medium tracking-wide">
                    Products Built
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                    30+
                  </div>
                  <div className="mt-1 text-[13px] text-white/40 font-medium tracking-wide">
                    Engineers &amp; Builders
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                    100%
                  </div>
                  <div className="mt-1 text-[13px] text-white/40 font-medium tracking-wide">
                    Internally Owned
                  </div>
                </div>
              </div>
            </div>

            {/* Right — visual block */}
            <div className="relative overflow-hidden bg-[#151a19] flex items-center justify-center">
              {/* Abstract grid/workspace visual */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                  }}
                />
              </div>

              {/* Glowing product logos */}
              <div className="reveal relative z-10 flex items-center gap-6 md:gap-8 px-8 py-20 lg:py-0">
                {logos.map((logo, i) => (
                  <div key={logo.name} className="flex flex-col items-center gap-3 group">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 group-hover:scale-105"
                      style={{
                        background: `rgba(255, 255, 255, 0.06)`,
                        border: `1px solid rgba(255, 255, 255, 0.08)`,
                        boxShadow:
                          i === 0
                            ? "0 0 40px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
                            : i === 1
                            ? "0 0 40px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
                            : i === 2
                            ? "0 0 40px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
                            : "0 0 40px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                        color:
                          i === 0
                            ? "rgba(96, 165, 250, 0.8)"
                            : i === 1
                            ? "rgba(52, 211, 153, 0.8)"
                            : i === 2
                            ? "rgba(167, 139, 250, 0.8)"
                            : "rgba(251, 191, 36, 0.8)",
                      }}
                    >
                      {logo.letter}
                    </div>
                    <span className="text-[11px] text-white/30 font-medium tracking-wider uppercase">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-8 right-8 w-24 h-24 border border-white/[0.04] rounded-full" />
              <div className="absolute bottom-12 left-12 w-16 h-16 border border-white/[0.04] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Principles strip — clean, below the impact section */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="reveal py-10 md:py-14 md:pr-10">
              <h3 className="text-base font-semibold tracking-[-0.01em]">
                Build, Don&apos;t Service
              </h3>
              <p className="mt-2 text-[14px] text-muted leading-relaxed">
                We conceive, architect, and build our own technology products
                from the ground up. No consulting. No contracting.
              </p>
            </div>
            <div className="reveal py-10 md:py-14 md:px-10">
              <h3 className="text-base font-semibold tracking-[-0.01em]">
                Own the Outcome
              </h3>
              <p className="mt-2 text-[14px] text-muted leading-relaxed">
                Full equity, full responsibility. Every product we build,
                we own — and we commit to making it succeed.
              </p>
            </div>
            <div className="reveal py-10 md:py-14 md:pl-10">
              <h3 className="text-base font-semibold tracking-[-0.01em]">
                Scale with Discipline
              </h3>
              <p className="mt-2 text-[14px] text-muted leading-relaxed">
                Products graduate to independent companies when ready — not when
                hype demands it. Fundamentals over timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
