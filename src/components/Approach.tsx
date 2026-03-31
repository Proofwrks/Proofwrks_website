"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stages = [
  {
    phase: "Identify",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    description:
      "We identify real, underserved problems in markets where technology can create lasting structural advantage.",
  },
  {
    phase: "Build",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    description:
      "Internal teams architect and engineer each product with production-grade standards from day one.",
  },
  {
    phase: "Validate",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    description:
      "Products are tested against real users and real markets. We measure traction, not vanity metrics.",
  },
  {
    phase: "Scale",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    description:
      "Proven products receive dedicated resources and leadership, graduating into independent companies.",
  },
];

export default function Approach() {
  const ref = useScrollReveal();

  return (
    <section id="approach" data-theme="dark" className="py-32 lg:py-40 bg-foreground text-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl">
          <span className="reveal text-[12px] font-medium text-background/40 tracking-[0.2em] uppercase">
            Our Approach
          </span>
          <h2 className="reveal mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.15]">
            From concept to company.
            <br />
            <span className="text-background/50">Methodically.</span>
          </h2>
          <p className="reveal mt-6 text-lg text-background/60 leading-relaxed max-w-2xl">
            Every product follows a disciplined journey through four phases.
            No shortcuts, no hype cycles — just rigorous execution and
            patient scaling.
          </p>
        </div>

        {/* Stages */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stages.map((stage, i) => (
            <div key={stage.phase} className="reveal group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-background/[0.08] flex items-center justify-center text-background/60 group-hover:bg-background/[0.12] transition-colors duration-300">
                  {stage.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{stage.phase}</h3>
                    {i < stages.length - 1 && (
                      <div className="hidden lg:block w-8 h-[1px] bg-background/20" />
                    )}
                  </div>
                  <p className="mt-2 text-[15px] text-background/50 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
