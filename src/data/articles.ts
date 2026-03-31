export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  color: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "aether-1000-deployments",
    category: "Product",
    title: "Aether reaches 1,000 active deployments",
    excerpt:
      "Our infrastructure management platform crosses a major milestone as distributed teams adopt cloud-native workflows.",
    date: "Mar 2026",
    readTime: "4 min read",
    color: "bg-blue-500/10 text-blue-600",
    content: [
      "When we started building Aether two years ago, we had a simple thesis: managing cloud infrastructure shouldn't require a dedicated platform team of ten engineers. Today, we're proud to announce that Aether has crossed 1,000 active deployments — a milestone that validates everything we believed about how infrastructure management should work.",
      "The teams using Aether span from early-stage startups running on a single cloud provider to enterprises managing multi-cloud environments across AWS, GCP, and Azure. What they share is a refusal to accept that infrastructure has to be this hard.",
      "Our unified control plane approach means teams can provision, monitor, and scale their infrastructure from a single interface. No more context-switching between cloud consoles. No more tribal knowledge about which Terraform modules to use. No more 3 AM pages because someone forgot to set up monitoring.",
      "This milestone is just the beginning. Over the next quarter, we're rolling out our new cost optimization engine — an intelligent system that analyzes usage patterns and automatically recommends right-sizing decisions that can reduce cloud spend by 20-40% without compromising performance.",
      "We're grateful to every team that trusted Aether with their infrastructure. Building technology the world actually uses means building technology that earns trust through reliability, and 1,000 deployments running smoothly is the kind of proof we care about.",
    ],
  },
  {
    slug: "building-products-that-outlast-hype",
    category: "Engineering",
    title: "How we build products that outlast their hype cycle",
    excerpt:
      "A look at the engineering principles and product discipline that guide every Proofwrks venture from conception to scale.",
    date: "Feb 2026",
    readTime: "7 min read",
    color: "bg-emerald-500/10 text-emerald-600",
    content: [
      "In an industry obsessed with moving fast and breaking things, Proofwrks takes a deliberately different approach. We build products designed to outlast their hype cycle — technology that's as relevant in year five as it was on launch day. Here's how we do it.",
      "First, we start with the problem, not the technology. It's tempting to build around the latest framework or paradigm, but trends come and go. The problems we solve — infrastructure complexity, data quality, API management, compliance automation — are structural challenges that won't disappear with the next wave of innovation.",
      "Second, we invest in architecture before features. Every Proofwrks product begins with months of architectural exploration before a single feature is shipped. We model failure modes, plan for scale, and make deliberate choices about what not to build. This patience pays compound interest over the lifetime of the product.",
      "Third, we hire builders who think in systems, not sprints. Our engineering culture rewards people who consider second-order effects, who document their decisions, and who treat code as a long-lived asset rather than a disposable artifact. We pair senior architects with junior engineers so knowledge transfers naturally.",
      "Fourth, we measure what matters. We track adoption, retention, and the problems our users stop having. We don't optimize for vanity metrics like signups or page views. If a product is solving a real problem well, the numbers follow.",
      "Finally, we give products time. In a world where startups are expected to find product-market fit in twelve weeks, we allow twelve months. This isn't slow — it's thorough. And the results speak for themselves: every product we've shipped is still running, still growing, and still solving the problem it was built for.",
    ],
  },
  {
    slug: "nexus-private-beta",
    category: "Company",
    title: "Nexus enters private beta with early partners",
    excerpt:
      "Our unified API gateway begins testing with select enterprise partners ahead of a broader rollout later this year.",
    date: "Jan 2026",
    readTime: "3 min read",
    color: "bg-violet-500/10 text-violet-600",
    content: [
      "Today we're announcing that Nexus, our unified API gateway and service mesh, has entered private beta with a select group of enterprise partners. This marks a significant milestone in Nexus's journey from internal prototype to production-grade platform.",
      "Nexus was born from a frustration we experienced firsthand: as microservice architectures grow, the complexity of managing APIs grows exponentially. Authentication, rate limiting, routing, observability — each concern requires its own tool, its own configuration, and its own operational burden.",
      "Our private beta partners include three mid-to-large enterprise engineering organizations, each managing between 50 and 300 microservices. They were chosen not just for their technical sophistication, but for the diversity of their use cases — from financial services to healthcare to e-commerce.",
      "The initial feedback has been encouraging. One partner's platform team reported reducing their API management overhead by 60% within the first two weeks of integration. Another noted that the automatic API discovery feature alone saved them a month of documentation work.",
      "We expect the private beta to run through Q2 2026, during which we'll be working closely with partners to refine the product before opening access more broadly. If you're interested in joining the beta waitlist, reach out to our team.",
    ],
  },
];
