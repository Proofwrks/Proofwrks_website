"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { products } from "@/data/products";

export default function Portfolio() {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between">
          <div className="max-w-3xl">
            <span className="reveal text-[12px] font-medium text-muted tracking-[0.2em] uppercase">
              Portfolio
            </span>
            <h2 className="reveal mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.15]">
              Products we&apos;re building
            </h2>
            <p className="reveal mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Each product addresses a real gap in how technology serves
              businesses today. We build for durability, not trends.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors"
          >
            View all
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Product grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {products.map((product) => (
            <Link
              key={product.name}
              href={`/portfolio/${product.slug}`}
              className="reveal bg-surface p-8 lg:p-10 group hover:bg-surface-elevated transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase ${product.color}`}
                  >
                    {product.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] group-hover:text-foreground transition-colors">
                    {product.name}
                  </h3>
                </div>
                <span
                  className={`mt-1 flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase ${
                    product.status === "Active"
                      ? "text-emerald-600"
                      : product.status === "Coming Soon"
                      ? "text-blue-600"
                      : "text-muted"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      product.status === "Active"
                        ? "bg-emerald-500"
                        : product.status === "Coming Soon"
                        ? "bg-blue-500"
                        : "bg-muted/40"
                    }`}
                  />
                  {product.status}
                </span>
              </div>
              <p className="mt-3 text-[15px] text-muted leading-relaxed">
                {product.tagline}
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-[13px] font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg
                  className="w-3.5 h-3.5"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
