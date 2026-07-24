import Link from "next/link";
import type { Metadata } from "next";
import InnerNavigation from "@/components/InnerNavigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "The products we build, own, and scale at Proofwrks.",
};

export default function PortfolioPage() {
  return (
    <>
      <InnerNavigation />
      <main>
        <PageHeader
          label="Portfolio"
          title="Products we're building"
          description="Each product addresses a real gap in how technology serves businesses today. We build for durability, not trends."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/portfolio/${product.slug}`}
                  className="group rounded-xl border border-border bg-surface p-8 lg:p-10 hover:border-foreground/10 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase ${product.color}`}
                      >
                        {product.category}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em]">
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
      </main>
      <Footer />
    </>
  );
}
