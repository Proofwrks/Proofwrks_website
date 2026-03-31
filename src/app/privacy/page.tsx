import type { Metadata } from "next";
import InnerNavigation from "@/components/InnerNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Proofwrks",
  description: "Privacy Policy for Proofwrks, operated by Proofworks Technologies Pvt Ltd.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </div>
        </div>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <p className="text-[15px] text-muted leading-[1.8] mb-10">
              This Privacy Policy describes how <strong>Proofworks Technologies Pvt Ltd</strong>{" "}
              (&quot;Proofwrks&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated under the
              Companies Act, 2013, collects, uses, and protects information when you visit
              our website <strong>proofwrks.com</strong>. By accessing or using our website,
              you consent to the practices described in this policy, in accordance with the
              Information Technology Act, 2000, the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011,
              and the Digital Personal Data Protection Act, 2023.
            </p>

            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">1. Lawful Basis for Processing</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    We process personal data on one or more of the following lawful bases, as
                    applicable under Indian law and the Digital Personal Data Protection Act,
                    2023:
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>
                      <strong className="text-foreground">Consent</strong> — You have given us
                      clear consent to process your personal data for a specific purpose.
                    </li>
                    <li>
                      <strong className="text-foreground">Legitimate Use</strong> — Processing
                      is necessary for a legitimate purpose, such as responding to your
                      inquiries or improving our website.
                    </li>
                    <li>
                      <strong className="text-foreground">Legal Obligation</strong> — Processing
                      is necessary for compliance with a legal obligation under Indian law.
                    </li>
                    <li>
                      <strong className="text-foreground">Contractual Necessity</strong> — Processing
                      is necessary for the performance of a contract to which you are a party, such
                      as processing a job application.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">2. Information We Collect</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>We collect the following types of information:</p>
                  <p>
                    <strong className="text-foreground">Personal Data:</strong> Information that can
                    identify you as an individual, including but not limited to your name, email
                    address, phone number, IP address, browser type, and device information. This
                    data is collected when you:
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>Fill out a contact form on our website</li>
                    <li>Apply for a position through our careers page</li>
                    <li>Send us an email or communicate with us directly</li>
                    <li>Browse our website (certain data is collected automatically)</li>
                  </ul>
                  <p>
                    <strong className="text-foreground">Non-Personal Data:</strong> Anonymised or
                    aggregated information that cannot directly identify you, including website
                    usage statistics, page views, referral sources, and general demographic
                    information.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">3. How We Use Your Information</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>We use collected information to:</p>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>Respond to your inquiries and provide requested information</li>
                    <li>Process job applications submitted through our website</li>
                    <li>Improve our website, products, and user experience</li>
                    <li>Analyse website traffic and usage patterns</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                    <li>Send communications you have opted in to receive</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">4. Sharing &amp; Disclosure</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    <strong className="text-foreground">
                      We will never sell, trade, or rent your personal data to any third party.
                    </strong>
                  </p>
                  <p>We may disclose your information in the following limited circumstances:</p>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>
                      To trusted service providers who assist in operating our website and
                      conducting our business, bound by confidentiality obligations
                    </li>
                    <li>
                      When required by law, regulation, legal process, or governmental request
                      under Indian law, including under the Information Technology Act, 2000
                    </li>
                    <li>
                      To protect the rights, property, or safety of Proofworks Technologies
                      Pvt Ltd, our users, or the public
                    </li>
                    <li>
                      In connection with a merger, acquisition, or sale of all or a portion
                      of our assets, with appropriate notice
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">5. Cookies &amp; Tracking Technologies</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    Our website may use cookies and similar tracking technologies to enhance
                    your browsing experience and collect usage data. Cookies are small text
                    files placed on your device that help us:
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you interact with our website</li>
                    <li>Analyse traffic and improve website performance</li>
                  </ul>
                  <p>
                    You can manage or disable cookies through your browser settings. Please
                    note that disabling cookies may affect certain functionality of the
                    website. We respect &quot;Do Not Track&quot; signals sent by your browser.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">6. Third-Party Services</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    Our website may integrate with or contain links to third-party services,
                    including analytics providers and social media platforms. These third
                    parties have their own privacy policies governing the collection and use
                    of your information. We encourage you to review their policies. Third-party
                    services we may use include:
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>Website analytics services (for traffic and usage analysis)</li>
                    <li>Cloud hosting and infrastructure providers</li>
                    <li>Email communication services</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">7. Data Security</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    We implement reasonable security practices and procedures, as required
                    under the Information Technology (Reasonable Security Practices and
                    Procedures and Sensitive Personal Data or Information) Rules, 2011, to
                    protect your personal data against unauthorised access, alteration,
                    disclosure, or destruction. These measures include encryption, access
                    controls, and regular security assessments.
                  </p>
                  <p>
                    However, no method of transmission over the internet or electronic
                    storage is completely secure. While we strive to protect your personal
                    data, we cannot guarantee its absolute security.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">8. Data Retention</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    We retain your personal data only for as long as necessary to fulfil the
                    purposes for which it was collected, including to satisfy any legal,
                    accounting, or reporting requirements. When personal data is no longer
                    needed, it will be securely deleted or anonymised.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">9. Your Rights</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    Under the Digital Personal Data Protection Act, 2023 and applicable
                    Indian law, you have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-1">
                    <li>
                      <strong className="text-foreground">Right to Access</strong> — Request
                      a summary of the personal data we hold about you
                    </li>
                    <li>
                      <strong className="text-foreground">Right to Correction</strong> — Request
                      correction of inaccurate or incomplete personal data
                    </li>
                    <li>
                      <strong className="text-foreground">Right to Erasure</strong> — Request
                      deletion of your personal data, subject to legal obligations
                    </li>
                    <li>
                      <strong className="text-foreground">Right to Withdraw Consent</strong> — Withdraw
                      your consent at any time for data processing based on consent
                    </li>
                    <li>
                      <strong className="text-foreground">Right to Grievance Redressal</strong> — Lodge
                      a complaint with us or with the Data Protection Board of India
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the details
                    provided below.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">10. Children&apos;s Privacy</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    Our website is not intended for individuals under the age of 18. We do
                    not knowingly collect personal data from children. If we become aware
                    that we have collected personal data from a child without appropriate
                    consent, we will take steps to delete that information promptly.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">11. Changes to This Policy</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    We reserve the right to update or modify this Privacy Policy at any time.
                    Any changes will be posted on this page with an updated effective date.
                    We encourage you to review this policy periodically. Your continued use
                    of the website after changes are posted constitutes your acceptance of
                    the revised policy.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-lg font-semibold mb-3">12. Grievance Officer</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-3">
                  <p>
                    In accordance with the Information Technology Act, 2000 and rules made
                    thereunder, the name and contact details of the Grievance Officer are
                    provided below. Any grievances or complaints relating to the processing
                    of personal data can be directed to:
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 mt-6 border-t border-border">
                <h2 className="text-lg font-semibold mb-3">Contact &amp; Grievance Officer</h2>
                <div className="text-[15px] text-muted leading-[1.8] space-y-1">
                  <p>
                    <strong className="text-foreground">Proofworks Technologies Pvt Ltd</strong>
                  </p>
                  <p>Grievance Officer: The Data Protection Officer</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:cs@proofwrks.com" className="text-foreground hover:underline">
                      cs@proofwrks.com
                    </a>
                  </p>
                  <p className="mt-3 text-[14px]">
                    We will acknowledge your grievance within 24 hours and endeavour to
                    resolve it within 30 days from the date of receipt.
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
