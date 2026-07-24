import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import InnerNavigation from "@/components/InnerNavigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <InnerNavigation />
      <main>
        {/* Hero */}
        <div className="pt-32 lg:pt-40 pb-16 lg:pb-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              All Products
            </Link>

            <div className="flex items-start gap-4 mb-4">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase ${product.color}`}>
                {product.category}
              </span>
              <span className={`flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase ${product.status === "Active" ? "text-emerald-600" : product.status === "Coming Soon" ? "text-blue-600" : "text-muted"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${product.status === "Active" ? "bg-emerald-500" : product.status === "Coming Soon" ? "bg-blue-500" : "bg-muted/40"}`} />
                {product.status}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05]">
              {product.name}
            </h1>
            <p className="mt-4 text-xl text-muted leading-relaxed max-w-2xl">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-6">
                  Overview
                </h2>
                <p className="text-[17px] text-muted leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <h2 className="text-2xl font-semibold tracking-[-0.02em] mt-16 mb-6">
                  Key Capabilities
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-[15px] text-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Use Cases */}
                <h2 className="text-2xl font-semibold tracking-[-0.02em] mt-16 mb-6">
                  Built For
                </h2>
                <div className="space-y-4">
                  {product.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="p-5 rounded-xl border border-border bg-surface"
                    >
                      <p className="text-[15px] text-muted leading-relaxed">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-28 space-y-8">
                  {/* Tech Stack */}
                  <div className="p-6 rounded-xl border border-border bg-surface">
                    <h3 className="text-[12px] font-medium text-muted tracking-[0.15em] uppercase mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex px-3 py-1.5 rounded-md bg-foreground/[0.04] border border-border text-[13px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 rounded-xl border border-border bg-surface">
                    <h3 className="text-base font-semibold mb-2">
                      Interested in {product.name}?
                    </h3>
                    <p className="text-[14px] text-muted mb-4">
                      Get in touch to learn more or request early access.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-all"
                    >
                      Contact Us
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Related: Careers */}
                  <div className="p-6 rounded-xl border border-border bg-surface">
                    <h3 className="text-base font-semibold mb-2">
                      Join the {product.name} team
                    </h3>
                    <p className="text-[14px] text-muted mb-4">
                      We&apos;re hiring engineers to build {product.name}.
                    </p>
                    <Link
                      href="/careers"
                      className="text-[13px] font-medium text-foreground hover:underline"
                    >
                      View open roles &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
