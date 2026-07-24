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
  publishedAt?: string; // ISO date (YYYY-MM-DD) for SEO / structured data
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "what-is-proofwrks",
    category: "Founder Story",
    title: "What exactly is Proofwrks? (The backstory)",
    excerpt:
      "'So... are we a venture studio now?' 'I think we are?' 'Us? Really? Hahaha.' Yeah, us. The honest, slightly ridiculous story of how two brothers actually got here.",
    date: "Jul 2026",
    readTime: "6 min read",
    color: "bg-blue-500/10 text-blue-600",
    author: "Shekhar",
    authorRole: "Co-founder, Proofwrks",
    coverImage: "/images/blog-what-is-proofwrks.jpg",
    publishedAt: "2026-07-24",
    content: [
      "I want to tell you how Proofwrks started, because it didn't begin as a company. It began as a conversation between two brothers.",
      "I'm Shekhar. Together with my brother Sumit, I started Proofwrks, a technology venture studio based out of Mumbai. But long before it had a name, it was just the two of us talking.",
      "For as long as I can remember, Sumit and I have circled back to the same kind of conversation. Not cricket, not movies for very long, but problems. The small, everyday frustrations people quietly put up with, and the question that always followed: could technology fix this? Could it make someone's life a little easier?",
      "Somewhere in those conversations, the question got bigger. It stopped being \"can we solve this one thing?\" and became \"how do we solve this problem in a way that helps thousands of people, maybe even lakhs of them?\" That thought never really left us. It's the reason Proofwrks exists.",
      "And the name isn't random. Proofwrks comes from two words, proof and works. To us it means the proof of an idea or a product that actually has a market, genuinely works, and makes people's lives a little easier. That's the bar we hold ourselves to. Not just building something that looks clever, but building something that earns its place by working for real people in the real world.",
      "So we decided to build a venture studio, a place where we ideate, validate, and build companies, no matter how big or small they turn out to be. Some ideas might grow into large businesses. Others might stay small and sharp. And some, maybe even many, will fail, and we've made our peace with that too, because failing is just part of building honestly. The only goal that matters to us is simple: does what we build make people's lives genuinely easier? A thousand users or a lakh, if we made their day a little better, we did our job.",
      "And I won't pretend our ambition is small. We want to start by making life easier for a few thousand people, then a few lakh, and one day, millions of them. Start small, think big, both at the same time. That's the size of the bet we're making on ourselves.",
      "Why now, and why from India? Because it feels like the right moment in the right place. Millions of people here are coming online and running their entire lives on a phone, everyday problems are everywhere if you actually look for them, and there's a whole generation of young builders who grew up living those problems. A venture studio that stays close to the ground and builds patiently for it can do a lot of good from right here.",
      "I'll be honest about where we're starting from. We're young, and we don't have capital lined up. Sometimes Sumit and I look at each other and wonder how the two of us, with big ambitions and empty pockets, get to call ourselves a venture studio. But here's what we believe: money is a by-product. It follows hard work and real value, not the other way around. So we've decided to focus on the part we can actually control, which is showing up every day, building, and solving problems people really face.",
      "For now, whatever product or idea we take on, we plan to fund ourselves, for as long as we're capable of doing it. Backing our own bets keeps us honest and keeps us close to the work. But we're realistic about scale too. As our vision grows bigger than what two brothers can carry alone, we're genuinely excited to onboard a few venture partners down the line, people who believe in what we're building and want to help fund the mission.",
      "That's the whole mission, and it's right there in our tagline: building technology the world actually uses and that makes people's lives easier. Not technology that looks impressive in a demo, but technology someone reaches for every day without even thinking about it.",
      "The two of us come at this from different sides, and I think that's our advantage. I studied Computer Science, so I tend to think in systems and code. Sumit studied Banking and Insurance, so he thinks about people, money, and how a business actually stands on its own feet. So between the two of us, one is usually asking whether we can actually build the thing, while the other is asking whether it can survive as a real business. Those two questions pull in different directions, and that tension is exactly what keeps us honest.",
      "One thing I can promise: whatever we discuss, build, break, or learn along the way, we're going to document it and share it openly, right here on this blog and across our socials. The wins and the mistakes both. If you want to follow this journey honestly, this is where it will live.",
      "We don't know exactly where this journey takes us yet, and honestly, that's part of the excitement. What I do know is that we're not trying to do it alone. If you're a founder with an idea, an engineer who loves to build, an investor or venture partner who wants to back this kind of vision early, or simply someone as restless about solving real problems as we are, reach out. You can write to us anytime at cs@proofwrks.com. Our door is always open for a conversation.",
      "Cheers :)\nShekhar",
    ],
  },
];
