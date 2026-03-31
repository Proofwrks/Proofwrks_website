"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Culture() {
  const ref = useScrollReveal();

  return (
    <section className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <h2 className="reveal text-center text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.15]">
          Take a look inside
          <br />
          <span className="text-muted">Proofwrks</span>
        </h2>

        {/* Video placeholder */}
        <div className="reveal mt-14 relative overflow-hidden rounded-2xl bg-[#151a19] aspect-video max-w-4xl mx-auto group cursor-pointer">
          {/* Gradient overlay simulating video thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#1a1f1e] to-[#1e1a2e]" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Abstract visual elements suggesting workspace/engineering */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Terminal-style lines */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 space-y-2 opacity-20">
              <div className="h-[2px] w-24 md:w-32 bg-blue-400/60 rounded-full" />
              <div className="h-[2px] w-16 md:w-20 bg-emerald-400/60 rounded-full" />
              <div className="h-[2px] w-28 md:w-40 bg-violet-400/60 rounded-full" />
              <div className="h-[2px] w-12 md:w-16 bg-blue-400/40 rounded-full" />
            </div>
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 space-y-2 opacity-20">
              <div className="h-[2px] w-20 md:w-28 bg-amber-400/60 rounded-full ml-auto" />
              <div className="h-[2px] w-28 md:w-36 bg-emerald-400/60 rounded-full ml-auto" />
              <div className="h-[2px] w-16 md:w-20 bg-blue-400/40 rounded-full ml-auto" />
            </div>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white/80 text-sm md:text-base font-medium">
              How we build products that last
            </p>
            <p className="text-white/40 text-xs md:text-sm mt-1">2:34</p>
          </div>
        </div>
      </div>
    </section>
  );
}
