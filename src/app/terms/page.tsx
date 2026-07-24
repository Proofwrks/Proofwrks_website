import type { Metadata } from "next";
import InnerNavigation from "@/components/InnerNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Website Use for Proofwrks, operated by Proofworks Technologies Pvt Ltd.",
};

export default function TermsPage() {
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
              Terms of Website Use
            </h1>
          </div>
        </div>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <p className="text-[15px] text-muted leading-[1.8] mb-10">
              This website (<strong>proofwrks.com</strong>) is owned and operated by{" "}
              <strong>Proofworks Technologies Pvt Ltd</strong>, a company incorporated
              under the Companies Act, 2013, with its registered office in India
              (hereinafter referred to as &quot;Proofwrks&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              By accessing or using this website, you agree to be bound by these Terms
              of Use. If you do not agree with any part of these terms, please do not
              use this website.
            </p>

            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">1. Use of the Site</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    You must be at least 18 years of age, or the age of legal majority in
                    your jurisdiction, to use this website. By using this website, you
                    represent and warrant that you meet this requirement.
                  </p>
                  <p>
                    You agree to use this website only for lawful purposes and in a manner
                    that does not infringe upon the rights of, restrict, or inhibit the use
                    and enjoyment of this website by any third party. Prohibited conduct
                    includes, but is not limited to, harassment, transmitting obscene or
                    offensive content, or disrupting the normal flow of communication on the
                    website.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">2. Site Availability</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    We make reasonable efforts to ensure that this website is available at
                    all times. However, we do not guarantee uninterrupted or error-free
                    access. We reserve the right to suspend, withdraw, discontinue, or
                    modify the website or any content without notice. We shall not be liable
                    if for any reason the website is unavailable at any time or for any
                    period.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">3. Privacy Policy</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    Your use of this website is also governed by our{" "}
                    <Link href="/privacy" className="text-foreground underline hover:no-underline">
                      Privacy Policy
                    </Link>
                    , which is incorporated into these Terms by reference. Please review the
                    Privacy Policy to understand our practices regarding your personal data.
                  </p>
                  <p>
                    Notwithstanding the Privacy Policy, we reserve the right to access and
                    disclose any information as required by applicable Indian law, including
                    the Information Technology Act, 2000, the Digital Personal Data
                    Protection Act, 2023, and any rules or regulations made thereunder, or
                    as required by any court or governmental authority.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">4. Intellectual Property</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    All content on this website — including but not limited to text,
                    graphics, logos, icons, images, audio, video, software, and the
                    compilation thereof — is the property of Proofworks Technologies Pvt
                    Ltd or its licensors and is protected by the Copyright Act, 1957, the
                    Trade Marks Act, 1999, and other applicable intellectual property laws
                    of India.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of,
                    publicly display, publicly perform, republish, download, store, or
                    transmit any content from this website without our prior written consent,
                    except for temporary caching or as permitted by these Terms.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">5. Third-Party Links</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    This website may contain links to third-party websites or services that
                    are not owned or controlled by Proofwrks. We have no control over, and
                    assume no responsibility for, the content, privacy policies, or practices
                    of any third-party websites or services. You acknowledge and agree that
                    we are not liable for any damage or loss caused by or in connection with
                    the use of any such third-party content or services.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">6. Disclaimer of Warranties</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    THIS WEBSITE AND ALL CONTENT, MATERIALS, AND INFORMATION PROVIDED
                    HEREIN ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS
                    WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                    BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    We do not warrant that the website will be uninterrupted, timely, secure,
                    or error-free, or that any defects will be corrected. We do not warrant
                    that the results obtained from the use of this website will be accurate
                    or reliable.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">7. Limitation of Liability</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PROOFWORKS
                    TECHNOLOGIES PVT LTD, ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS
                    SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                    OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE,
                    WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, ARISING
                    FROM YOUR USE OF OR INABILITY TO USE THIS WEBSITE.
                  </p>
                  <p>
                    You agree to indemnify and hold harmless Proofworks Technologies Pvt Ltd
                    and its affiliates from any claims, losses, liabilities, damages, costs,
                    or expenses arising from your use of this website or violation of these
                    Terms.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">8. Termination</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    We reserve the right, at our sole discretion, to terminate or restrict
                    your access to this website at any time, without notice and without
                    liability, for any reason, including but not limited to breach of these
                    Terms of Use.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">9. Governing Law &amp; Jurisdiction</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    These Terms of Use shall be governed by and construed in accordance with
                    the laws of India. Any disputes arising out of or in connection with
                    these Terms shall be subject to the exclusive jurisdiction of the courts
                    in Bangalore, Karnataka, India.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">10. Amendments</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    We reserve the right to modify or replace these Terms of Use at any time
                    at our sole discretion. The most current version will always be available
                    on this page. By continuing to access or use the website after any
                    revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">11. Entire Agreement</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire
                    agreement between you and Proofworks Technologies Pvt Ltd with respect to
                    your use of this website and supersede all prior or contemporaneous
                    communications, representations, or agreements, whether oral or written.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">12. Severability</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    If any provision of these Terms is held to be invalid, illegal, or
                    unenforceable by a court of competent jurisdiction, such provision shall
                    be modified to the minimum extent necessary to make it valid, and the
                    remaining provisions shall continue in full force and effect.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 mt-6 border-t border-border">
                <h2 className="text-lg font-semibold mb-3">Contact</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-1">
                  <p>
                    For questions about these Terms of Use, please contact us:
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">Proofworks Technologies Pvt Ltd</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:cs@proofwrks.com" className="text-foreground hover:underline">
                      cs@proofwrks.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Effective date */}
              <p className="text-[13px] text-muted/60 pt-4">
                Effective Date: March 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
