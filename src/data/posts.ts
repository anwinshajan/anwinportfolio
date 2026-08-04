export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string;
}

export const posts: Post[] = [
  {
    slug: "why-i-build-multiple-ventures",
    title: "Why I Build Multiple Ventures at Once",
    excerpt:
      "Running parallel businesses isn't chaos — it's a system. Here's how I think about building Anweo, Nwee, and Nweedu simultaneously.",
    date: "2025-12-15",
    body: `Most people advise founders to focus on one thing. That advice isn't wrong — but it's incomplete.

When I started Anweo as a digital marketing agency, I quickly realized that the skills I was building — web development, video production, automation — had applications far beyond client work. Nwee grew out of wanting to build a product, not just services. Nweedu came from seeing a gap in how Kerala SSLC students access quality tutoring online.

These aren't random side projects. They share infrastructure, share learnings, and most importantly, share a builder's instinct: if you see a problem clearly enough, you should solve it.

The key is systems. Each venture has its own rhythm, its own metrics, its own team dynamics. But the underlying stack — Next.js, Supabase, Razorpay — is shared. The design language is shared. The operational playbook is shared.

Building multiple ventures is not about spreading thin. It's about compounding what you know across multiple surfaces.`,
  },
  {
    slug: "the-stack-behind-anweo",
    title: "The Stack Behind Anweo",
    excerpt:
      "A look inside the technical infrastructure powering Anweo's video ads, automation systems, and client delivery.",
    date: "2026-01-20",
    body: `Anweo isn't just a creative agency — it's a technical operation. Every video ad, every WhatsApp automation flow, every digital invitation we deliver is built on a stack I've chosen deliberately.

**Frontend & Web:** Next.js is the foundation. It gives us server-side rendering for SEO-critical pages, static generation for speed, and React's component model for building complex UIs fast. Every client project starts here.

**Backend & Data:** Supabase handles authentication, database, and real-time features. It's PostgreSQL under the hood, which means we get the reliability of a battle-tested database with the developer experience of a modern platform.

**Video Production:** FFmpeg is the engine behind our video processing pipeline. We use it for transcoding, format conversion, and automated video assembly. Combined with Blender for 3D and cinematic content, we can produce work that most agencies outsource.

**Automation:** WhatsApp Business API powers our automation systems. We build flows that handle everything from lead capture to appointment booking to post-purchase follow-ups — all automated, all measurable.

**Payments:** Razorpay handles transactions across our ventures. It's reliable, well-documented, and handles the complexity of Indian payment methods without friction.

This stack isn't flashy. It's chosen for reliability, speed, and the ability to move fast without breaking things.`,
  },
  {
    slug: "from-kerala-to-the-internet",
    title: "From Kerala to the Internet",
    excerpt:
      "On building digital ventures from Kerala, pursuing nursing alongside entrepreneurship, and why range matters more than labels.",
    date: "2026-03-10",
    body: `I'm from Kerala. I'm building internet businesses. I'm also studying for a BSc in Adult Nursing.

People find this combination confusing. I find it clarifying.

Kerala has a deep tradition of valuing education and hard work. The internet has made it possible to build globally relevant businesses from anywhere — including a small town in Kerala. These two facts together mean that the only thing limiting what you can build is your willingness to learn and execute.

Nursing might seem disconnected from tech entrepreneurship. It isn't. Healthcare teaches you about systems, about the cost of errors, about empathy at scale. These are exactly the instincts you need when building products that real people use.

I don't see my life as split between "tech founder" and "nursing student." I see it as one continuous practice of building, learning, and solving problems — whether those problems involve code, commerce, or care.

Range isn't a weakness. It's the most undervalued strength a builder can have.`,
  },
];
