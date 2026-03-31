"use client";

import { useState, useEffect, useCallback } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const checkDarkSection = useCallback(() => {
    const darkSections = document.querySelectorAll("[data-theme='dark']");
    const navHeight = 80;

    let isOnDark = false;
    darkSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < navHeight && rect.bottom > 0) {
        isOnDark = true;
      }
    });
    setOnDark(isOnDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      checkDarkSection();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkDarkSection]);

  const bgClass = scrolled
    ? onDark
      ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.08]"
      : "bg-white/90 backdrop-blur-md border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    : "bg-transparent";

  const textClass = onDark ? "text-white" : "text-foreground";
  const mutedTextClass = onDark ? "text-white/60 hover:text-white" : "text-muted hover:text-foreground";
  const logoBlockClass = onDark ? "bg-white" : "bg-foreground";
  const logoLetterClass = onDark ? "text-[#0a0a0a]" : "text-background";
  const hamburgerClass = onDark ? "bg-white" : "bg-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <Logo size={32} variant={onDark ? "light" : "dark"} className="transition-all duration-500" />
            <span className={`text-[15px] font-semibold tracking-[-0.02em] transition-colors duration-500 ${textClass}`}>
              Proofwrks
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors duration-500 tracking-wide uppercase ${mutedTextClass}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-[1.5px] transition-all duration-300 ${hamburgerClass} ${
                mobileOpen ? "rotate-45 translate-y-[3.75px]" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] transition-all duration-300 ${hamburgerClass} ${
                mobileOpen ? "-rotate-45 -translate-y-[3.75px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`px-6 pb-6 pt-2 backdrop-blur-md border-b ${
          onDark
            ? "bg-[#0a0a0a]/95 border-white/[0.08]"
            : "bg-white/95 border-border"
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-[13px] font-medium transition-colors uppercase tracking-wide ${mutedTextClass}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
