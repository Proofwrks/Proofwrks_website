import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proofwrks.com"),
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  title: {
    default: "Proofwrks — Building technology the world actually uses",
    template: "%s | Proofwrks",
  },
  description:
    "Proofwrks (Proofworks Technologies Pvt Ltd) is a technology venture studio based in Mumbai, India. We ideate, validate, and build new technology startups and products that solve real problems and make everyday life easier.",
  keywords: [
    "Proofwrks",
    "Proofworks",
    "Proofworks Technologies",
    "Proofworks Technologies Pvt Ltd",
    "technology venture studio",
    "venture studio Mumbai",
    "venture studio India",
    "startup studio",
    "venture builder",
    "tech startups",
    "building products",
    "technology company Mumbai",
    "proofwrks.com",
  ],
  authors: [{ name: "Proofworks Technologies Pvt Ltd" }],
  creator: "Proofworks Technologies Pvt Ltd",
  publisher: "Proofworks Technologies Pvt Ltd",
  openGraph: {
    title: "Proofwrks — Building technology the world actually uses",
    description:
      "A Mumbai-based technology venture studio. We ideate, validate, and build new technology startups and products that solve real problems and make people's lives easier.",
    url: "https://proofwrks.com",
    siteName: "Proofwrks",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proofwrks — Building technology the world actually uses",
    description:
      "A Mumbai-based technology venture studio. We ideate, validate, and build new technology startups and products that solve real problems and make people's lives easier.",
  },
  alternates: {
    canonical: "https://proofwrks.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Proofwrks",
  legalName: "Proofworks Technologies Pvt Ltd",
  url: "https://proofwrks.com",
  logo: "https://proofwrks.com/logo.svg",
  description:
    "Proofwrks is a technology venture studio based in Mumbai, India, that ideates, validates, and builds new technology startups and products solving real problems that make people's lives easier.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "cs@proofwrks.com",
    telephone: "+918766951144",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
};

// JSON-LD for WebSite with SearchAction (helps Google show sitelinks)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Proofwrks",
  alternateName: ["Proofworks", "Proofworks Technologies", "Proofworks Technologies Pvt Ltd"],
  url: "https://proofwrks.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
