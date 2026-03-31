import type { Metadata } from "next";
import InnerNavigation from "@/components/InnerNavigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Proofwrks",
  description: "Get in touch with the Proofwrks team.",
};

export default function ContactPage() {
  return (
    <>
      <InnerNavigation />
      <main>
        <div className="pt-32 lg:pt-40 pb-12 lg:pb-16 border-b border-border">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12]">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Have a question, partnership inquiry, or just want to learn more
              about what we&apos;re building? We&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Sidebar info */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[12px] font-medium text-muted tracking-[0.15em] uppercase mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:cs@proofwrks.com"
                      className="text-[15px] text-foreground hover:underline"
                    >
                      cs@proofwrks.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-[12px] font-medium text-muted tracking-[0.15em] uppercase mb-3">
                      For Careers
                    </h3>
                    <Link
                      href="/careers"
                      className="text-[15px] text-foreground hover:underline"
                    >
                      View open roles &rarr;
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-[12px] font-medium text-muted tracking-[0.15em] uppercase mb-3">
                      Response Time
                    </h3>
                    <p className="text-[15px] text-muted">
                      We typically respond within 1–2 business days.
                    </p>
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
