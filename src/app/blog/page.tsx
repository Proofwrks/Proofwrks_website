import Link from "next/link";
import type { Metadata } from "next";
import InnerNavigation from "@/components/InnerNavigation";
import PageHeader from "@/components/PageHeader";
import BrandBanner from "@/components/BrandBanner";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates, insights, and stories from the Proofwrks team.",
};

export default function BlogPage() {
  return (
    <>
      <InnerNavigation />
      <main>
        <PageHeader
          label="Blog"
          title="Latest from Proofwrks"
          description="Updates, insights, and engineering stories from our team."
        />

        <BrandBanner />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-foreground/10 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  {/* Cover image (falls back to a subtle pattern when absent) */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-surface-elevated to-border relative overflow-hidden">
                    {article.coverImage ? (
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-[0.04]">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                          }}
                        />
                      </div>
                    )}
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
                      <div className="flex items-center gap-3 text-[12px] text-muted/60 font-medium">
                        <span>{article.date}</span>
                        <span>&middot;</span>
                        <span>{article.readTime}</span>
                      </div>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
