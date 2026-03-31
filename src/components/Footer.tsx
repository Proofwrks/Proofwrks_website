import Link from "next/link";
import Logo from "@/components/Logo";

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={28} />
              <span className="text-[15px] font-semibold tracking-[-0.02em]">
                Proofwrks
              </span>
            </Link>
            <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-sm">
              Building technology the world actually uses. Solving real problems
              through disciplined engineering.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[12px] font-medium text-muted tracking-[0.15em] uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-medium text-muted tracking-[0.15em] uppercase">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:cs@proofwrks.com"
                  className="text-[14px] text-muted hover:text-foreground transition-colors duration-200"
                >
                  cs@proofwrks.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918766951144"
                  className="text-[14px] text-muted hover:text-foreground transition-colors duration-200"
                >
                  +91 87669 51144
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-muted/60">
            &copy; {new Date().getFullYear()} Proofworks Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[13px] text-muted/60 hover:text-muted transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] text-muted/60 hover:text-muted transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
