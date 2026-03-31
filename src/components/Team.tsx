"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const perks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
    title: "Remote-First",
    description: "Work from anywhere. Our teams are distributed across time zones.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "Learning Budget",
    description: "Annual stipend for courses, conferences, and personal growth.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs for every team member.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Equity in What You Build",
    description: "Meaningful ownership stakes in the products you help create and scale.",
  },
];

export default function Team() {
  const ref = useScrollReveal();

  return (
    <section className="py-32 lg:py-40 bg-surface-elevated" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <span className="reveal text-[12px] font-medium text-muted tracking-[0.2em] uppercase">
              Our Team
            </span>
            <h2 className="reveal mt-4 text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.15]">
              We invest in the people
              <br />
              who build with us
            </h2>
            <p className="reveal mt-6 text-[17px] text-muted leading-relaxed max-w-lg">
              Great technology comes from great teams. We create the conditions
              for deep work, long-term thinking, and genuine ownership — so our
              builders can focus on what matters.
            </p>

            {/* Perks grid */}
            <div className="reveal mt-10 grid grid-cols-2 gap-6">
              {perks.map((perk) => (
                <div key={perk.title} className="group">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <div className="text-muted group-hover:text-foreground transition-colors">
                      {perk.icon}
                    </div>
                    <h3 className="text-[14px] font-semibold">{perk.title}</h3>
                  </div>
                  <p className="mt-1.5 text-[13px] text-muted leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/careers"
              className="reveal inline-flex items-center gap-2 mt-10 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-all duration-200 group"
            >
              See open roles
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right — team photo */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="/images/team.jpg"
                alt="The Proofwrks team"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
