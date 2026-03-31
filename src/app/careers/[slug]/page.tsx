import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import InnerNavigation from "@/components/InnerNavigation";
import Footer from "@/components/Footer";
import { jobs } from "@/data/jobs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Not Found" };
  return {
    title: `${job.title} — Careers — Proofwrks`,
    description: job.description,
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <InnerNavigation />
      <main>
        {/* Header */}
        <div className="pt-32 lg:pt-40 pb-12 lg:pb-16 border-b border-border">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              All Roles
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12]">
              {job.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-foreground/[0.04] border border-border text-[13px] font-medium">
                {job.team}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-foreground/[0.04] border border-border text-[13px] font-medium">
                {job.location}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-foreground/[0.04] border border-border text-[13px] font-medium">
                {job.type}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            {/* Description */}
            <p className="text-[17px] text-muted leading-[1.8]">
              {job.description}
            </p>

            {/* Responsibilities */}
            <h2 className="text-xl font-semibold mt-12 mb-5">What You&apos;ll Do</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[15px] text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>

            {/* Requirements */}
            <h2 className="text-xl font-semibold mt-12 mb-5">What We&apos;re Looking For</h2>
            <ul className="space-y-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[15px] text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>

            {/* Apply CTA */}
            <div className="mt-16 p-8 rounded-xl border border-border bg-surface">
              <h3 className="text-xl font-semibold">Apply for this role</h3>
              <p className="mt-2 text-[15px] text-muted">
                Send us your resume and a brief note about why you&apos;re interested.
              </p>
              <a
                href={`mailto:careers@proofwrks.com?subject=Application: ${job.title}`}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-all"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
