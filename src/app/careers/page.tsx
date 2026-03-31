import Link from "next/link";
import type { Metadata } from "next";
import InnerNavigation from "@/components/InnerNavigation";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Careers — Proofwrks",
  description:
    "Join the team building technology the world actually uses. Open roles at Proofwrks.",
};

export default function CareersPage() {
  return (
    <>
      <InnerNavigation />
      <main>
        <PageHeader
          label="Careers"
          title="Build with us"
          description="We're looking for exceptional engineers, designers, and operators who think in decades, not quarters. Every role comes with real ownership in what you build."
        />

        {/* Culture highlights */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Remote-First", desc: "Work from anywhere. Our teams span every time zone." },
                { title: "Equity Ownership", desc: "Meaningful stakes in the products you help build." },
                { title: "Learning Budget", desc: "Annual stipend for courses, books, and conferences." },
                { title: "Health & Wellness", desc: "Comprehensive health coverage for every team member." },
              ].map((perk) => (
                <div key={perk.title}>
                  <h3 className="text-base font-semibold">{perk.title}</h3>
                  <p className="mt-1.5 text-[14px] text-muted leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job listings */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] mb-2">
              Open Roles
            </h2>

            {jobs.length > 0 ? (
              <>
                <p className="text-[15px] text-muted mb-10">
                  {jobs.length} position{jobs.length !== 1 ? "s" : ""} across our product teams
                </p>
                <div className="divide-y divide-border border-y border-border">
                  {jobs.map((job) => (
                    <Link
                      key={job.slug}
                      href={`/careers/${job.slug}`}
                      className="group flex items-center justify-between py-5 hover:px-4 transition-all duration-200"
                    >
                      <div>
                        <h3 className="text-base font-semibold group-hover:text-foreground transition-colors">
                          {job.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-3 text-[13px] text-muted">
                          <span>{job.team}</span>
                          <span className="text-muted/30">&middot;</span>
                          <span>{job.location}</span>
                          <span className="text-muted/30">&middot;</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-4 p-8 rounded-xl border border-border bg-surface text-center">
                <p className="text-[15px] text-muted">
                  There are no open positions at the moment. Check back soon, or send us
                  a general application below — we&apos;re always interested in hearing
                  from talented people.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* General application form */}
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-2xl px-6 lg:px-12">
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <h3 className="text-xl font-semibold">General Application</h3>
              <p className="mt-2 text-[15px] text-muted">
                Don&apos;t see a specific role? Tell us about yourself and what you&apos;d
                like to build. We&apos;ll reach out when something aligns.
              </p>
              <ApplicationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
