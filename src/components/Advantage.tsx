"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = [
  {
    id: "engineering",
    label: "Engineering",
    heading: "Engineering",
    description:
      "We build with production-grade standards from day one. No prototypes that get rewritten, no shortcuts that create debt. Every line of code is written to last.",
    details: [
      "Production-first architecture from the start",
      "Internal platform teams that accelerate every product",
      "Rigorous code review and testing culture",
    ],
  },
  {
    id: "ownership",
    label: "Ownership",
    heading: "Ownership",
    description:
      "Every product we build, we own completely. Full equity, full control, full commitment. Our teams are not building for someone else — they're building what they believe in.",
    details: [
      "100% internally funded and owned",
      "Teams empowered to make product decisions",
      "Long-term incentive alignment for builders",
    ],
  },
  {
    id: "longevity",
    label: "Longevity",
    heading: "Longevity",
    description:
      "We think in decades, not quarters. Products are scaled when ready, not when investors demand it. This patience is our competitive advantage.",
    details: [
      "No artificial deadlines or forced pivots",
      "Sustainable growth over hypergrowth",
      "Building companies, not exits",
    ],
  },
];

export default function Advantage() {
  const [activeTab, setActiveTab] = useState("engineering");
  const ref = useScrollReveal();
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header + content */}
        <div className="reveal grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — title with accent bar */}
          <div className="flex gap-5">
            <div className="hidden md:block w-[3px] bg-gradient-to-b from-foreground/20 to-transparent rounded-full flex-shrink-0" />
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.15]">
                The Proofwrks
                <br />
                <span className="text-muted">advantage</span>
              </h2>
            </div>
          </div>

          {/* Right — active tab content */}
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em]">
              {active.heading}
            </h3>
            <p className="mt-4 text-[16px] text-muted leading-relaxed">
              {active.description}
            </p>
            <ul className="mt-6 space-y-3">
              {active.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-[14px] text-muted"
                >
                  <svg
                    className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual block */}
        <div className="reveal mt-14 relative overflow-hidden rounded-2xl bg-[#151a19] aspect-[21/9] md:aspect-[21/7]">
          {/* Engineering tab — real photo */}
          {activeTab === "engineering" && (
            <img
              src="/images/engineering.jpg"
              alt="Engineering at Proofwrks"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
          )}

          {/* Ownership tab — real photo */}
          {activeTab === "ownership" && (
            <>
              <img
                src="/images/ownership.jpg"
                alt="Ownership at Proofwrks"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/30" />
            </>
          )}

          {/* Longevity tab — real photo in B&W */}
          {activeTab === "longevity" && (
            <>
              <img
                src="/images/longevity.jpg"
                alt="Longevity at Proofwrks"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/30" />
            </>
          )}

          {/* Dark overlay on photo for text readability */}
          {activeTab === "engineering" && (
            <div className="absolute inset-0 bg-black/30" />
          )}
        </div>

        {/* Tab selector — bottom, like rdbrck */}
        <div className="reveal mt-6 flex items-center justify-center">
          {/* Progress bar */}
          <div className="flex gap-2 md:gap-0 md:inline-flex md:rounded-full md:border md:border-border md:p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
