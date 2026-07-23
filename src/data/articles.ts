export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  color: string;
  author?: string;
  authorRole?: string;
  coverImage?: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "what-is-proofwrks",
    category: "Founder Story",
    title: "What exactly is Proofwrks? (The backstory)",
    excerpt:
      "The story of how two brothers from Mumbai turned late-night conversations about problems worth solving into a technology venture studio.",
    date: "Jul 2026",
    readTime: "4 min read",
    color: "bg-blue-500/10 text-blue-600",
    author: "Shekhar",
    authorRole: "Co-founder, Proofwrks",
    coverImage: "/images/blog-what-is-proofwrks.jpg",
    content: [
      "I want to tell you how Proofwrks started, because it didn't begin as a company. It began as a conversation between two brothers.",
      "I'm Shekhar. Together with my brother Sumit, I started Proofwrks, a technology venture studio based out of Mumbai. But long before it had a name, it was just the two of us talking.",
      "For as long as I can remember, Sumit and I have circled back to the same kind of conversation. Not cricket, not movies for very long, but problems. The small, everyday frustrations people quietly put up with, and the question that always followed: could technology fix this? Could it make someone's life a little easier?",
      "Somewhere in those conversations, the question got bigger. It stopped being \"can we solve this one thing\" and became \"how do we reach thousands of people, maybe lakhs of them?\" That thought never really left us. It's the reason Proofwrks exists.",
      "So we decided to build a venture studio, a place where we ideate, validate, and build companies, no matter how big or small they turn out to be. Some ideas might grow into large businesses. Others might stay small and sharp. Honestly, we don't mind either way. The only goal that matters to us is simple: does what we build make people's lives genuinely easier? A thousand users or a lakh, if we made their day a little better, we did our job.",
      "I'll be honest about where we're starting from. We're young, and we don't have capital lined up. Sometimes Sumit and I look at each other and wonder how two brothers with big ambitions and empty pockets get to call themselves a venture studio. But here's what we believe: money is a by-product. It follows hard work and real value, not the other way around. So we've decided to focus on the part we can actually control, which is showing up every day, building, and solving problems people really face.",
      "That's the whole mission, and it's right there in our tagline: building technology the world actually uses and that makes people's lives easier. Not technology that looks impressive in a demo, but technology someone reaches for every day without even thinking about it.",
      "The two of us come at this from different sides, and I think that's our advantage. I studied Computer Science, so I tend to think in systems and code. Sumit studied Banking and Insurance, so he thinks about people, money, and how a business actually stands on its own feet. Between us, we get to argue about both \"how do we build it\" and \"will it last.\" It works better than you'd expect.",
      "One thing I can promise: whatever we discuss, build, break, or learn along the way, we're going to document it and share it openly, right here on this blog and across our socials. The wins and the mistakes both. If you want to follow this journey honestly, without the polished highlight reel, this is where it will live.",
      "We don't know exactly where this journey takes us yet, and honestly, that's part of the excitement. What I do know is that we're not trying to do it alone. If you're a founder with an idea, an engineer who loves to build, a partner looking for the right team, or simply someone as restless about solving real problems as we are, reach out. Our door is always open for a conversation.",
      "— Shekhar",
    ],
  },
];
