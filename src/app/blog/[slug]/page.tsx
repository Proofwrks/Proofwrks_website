import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import InnerNavigation from "@/components/InnerNavigation";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { articles } from "@/data/articles";

const SITE_URL = "https://proofwrks.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };

  const path = `/blog/${article.slug}`;
  const image = article.coverImage ?? "/logo.svg";

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: path },
    authors: article.author ? [{ name: article.author }] : undefined,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: path,
      siteName: "Proofwrks",
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author] : undefined,
      images: [{ url: image, width: 2000, height: 1333, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== slug);

  const shareUrl = `${SITE_URL}/blog/${article.slug}`;
  const imageUrl = `${SITE_URL}${article.coverImage ?? "/logo.svg"}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: imageUrl,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author ?? "Proofwrks",
    },
    publisher: {
      "@type": "Organization",
      name: "Proofwrks",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InnerNavigation />
      <main>
        {/* Article header */}
        <div className="pt-32 lg:pt-40 pb-12 lg:pb-16 border-b border-border">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Link
              href="/blog"
              className="flex w-fit items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              All Posts
            </Link>

            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase ${article.color}`}>
              {article.category}
            </span>

            <h1 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12]">
              {article.title}
            </h1>

            {article.author && (
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background text-[15px] font-semibold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-foreground leading-tight">
                    {article.author}
                  </p>
                  {article.authorRole && (
                    <p className="text-[13px] text-muted leading-tight">
                      {article.authorRole}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-4 text-[14px] text-muted">
              <span>{article.date}</span>
              <span className="text-muted/30">&middot;</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Cover image */}
        {article.coverImage && (
          <div className="mx-auto max-w-4xl px-6 lg:px-12 pt-12 lg:pt-16">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full rounded-2xl border border-border"
            />
          </div>
        )}

        {/* Article content */}
        <article className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="space-y-6">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-[17px] leading-[1.8] whitespace-pre-line ${i === 0 ? "text-foreground" : "text-muted"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <ShareButtons url={shareUrl} title={article.title} />
            </div>
          </div>
        </article>

        {/* More articles */}
        {otherArticles.length > 0 && (
          <section className="py-16 lg:py-20 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-10">
                More from Proofwrks
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group p-6 rounded-xl border border-border hover:border-foreground/10 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
                  >
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase ${a.color}`}>
                      {a.category}
                    </span>
                    <h3 className="mt-3 text-base font-semibold tracking-[-0.01em] leading-snug">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-muted leading-relaxed line-clamp-2">
                      {a.excerpt}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Read &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
