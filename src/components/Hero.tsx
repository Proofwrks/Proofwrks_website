"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Tag */}
        <div className="animate-fade-in-up opacity-0 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/[0.04] border border-border text-[12px] font-medium text-muted tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Technology Holding Company
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up opacity-0 delay-100 text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground max-w-4xl mx-auto">
          Building technology
          <br />
          <span className="text-muted">the world actually uses</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up opacity-0 delay-200 mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
          We build technology products that solve real problems people face
          on the ground. Long-term thinking. Disciplined engineering.
          Real-world impact.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up opacity-0 delay-300 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-all duration-200"
          >
            Our Portfolio
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
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-muted hover:text-foreground border border-border rounded-lg hover:border-foreground/20 transition-all duration-200"
          >
            Learn More
          </a>
        </div>

      </div>

      {/* Scroll indicator — positioned from section bottom */}
      <div className="animate-fade-in-up opacity-0 delay-500 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] text-muted/50 uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-muted/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
