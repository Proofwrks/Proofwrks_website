"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { articles } from "@/data/articles";

export default function News() {
  const ref = useScrollReveal();

  return (
    <section className="py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-end justify-between">
          <div>
            <span className="text-[12px] font-medium text-muted tracking-[0.2em] uppercase">
              What&apos;s New
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
              Latest from Proofwrks
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors"
          >
            View all
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="reveal group rounded-xl border border-border bg-surface overflow-hidden hover:border-foreground/10 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-surface-elevated to-border relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>
                {/* Category pill on image */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase backdrop-blur-sm ${article.color}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-semibold tracking-[-0.01em] leading-snug group-hover:text-foreground transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2.5 text-[14px] text-muted leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[12px] text-muted/60 font-medium">
                    {article.date}
                  </span>
                  <span className="text-[13px] font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    Read
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors"
          >
            View all updates
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
