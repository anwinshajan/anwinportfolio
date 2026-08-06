// ============================================================
//  NOTES / BLOG POSTS — edit this file to add / update posts
//
//  HOW TO ADD A NEW POST:
//  1. Copy the object structure below
//  2. Give it a unique `slug` (used in the URL: /notes/your-slug)
//  3. Add it to the `posts` array
//  4. Deploy — the new post will appear automatically
// ============================================================

export interface Post {
  /** URL-safe identifier — used as /notes/[slug] */
  slug: string;
  /** Post title */
  title: string;
  /** Short excerpt shown on the notes listing page */
  excerpt: string;
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  /** Full post body. Use double newlines for paragraph breaks. Use **bold** for bold text. */
  body: string;
}

export const posts: Post[] = [
  {
    slug: "why-i-build-multiple-ventures",
    title: "Why I Build Multiple Ventures at Once",
    excerpt:
      "Running parallel businesses isn't chaos — it's a system. Here's how Anweo funds the experiments, and why building three things at once beats betting everything on one.",
    date: "2025-12-15",
    body: `People assume running Anweo, Nwee, and Nweedu at the same time means I'm spread thin. It's the opposite — it's the only structure that actually works for how I build.

Anweo isn't just an agency. It's the engine. Client work — video ads, automation systems, web builds — generates steady cash flow, and that cash flow is what lets Nwee and Nweedu exist without needing outside funding or personal debt. I'm not choosing between "the agency" and "the startups." The agency *is* the reason the startups can take risks.

The real skill isn't multitasking — it's sequencing. Client deliverables get my mornings, because they have deadlines other people are waiting on. Product work for Nwee and Nweedu gets the hours when I have the most focus, because it needs depth, not just output. Nothing runs "in the background" — everything has a dedicated slot, and I protect those slots the way I'd protect a client deadline.

The other piece people miss: each venture teaches the others something. Running ad campaigns for Anweo clients taught me exactly how to position Nweedu's launch. Building automation systems for clients became the backbone of how Nwee's backend is structured. None of this is separate. It's one system with four surfaces.

Would it be simpler to just run one business? Sure. But simple isn't the goal — durable is. If one vertical slows down, the other three don't stop moving. That's not chaos. That's the actual point.`,
  },
  {
    slug: "what-is-anweo",
    title: "What is Anweo",
    excerpt:
      "Anweo didn't start as a company — it started as a community. Here's how it grew from that into a creative team helping brands build their digital and offline space.",
    date: "2026-01-20",
    body: `Anweo didn't start as a company. It started as a community — a space for creative-minded people who wanted to build things and figure out how the internet actually worked, without a client brief or a business plan attached to it.

The shift into a company came later, and it came from a specific instinct: the fastest way to actually get good at problem-solving is to solve real problems, for real people, with real stakes. So the community became the company — a place to take everything we were curious about and apply it to helping brands build their digital space in a world that keeps expanding faster than most businesses can keep up with.

That origin still shapes how Anweo runs today. We're not a large agency, and that's intentional — a few highly skilled employees and a specialized creative team, rather than a big generalist bench. Every project gets craft, not just throughput. It means each brand we take on gets something built specifically for them, not a template with their logo swapped in.

We're also not chasing being the most popular or the most visible agency out there. That's never been the goal. The goal is simpler and, I think, more durable: help individuals and businesses build their online and offline presence effectively — the kind of work that actually moves a business forward, whether or not it gets noticed outside of it.

That's still the same instinct from the community days, just pointed at bigger problems now — build something real, solve it properly, and let the work speak for the brand behind it.`,
  },
  {
    slug: "building-from-kerala",
    title: "Building Internet Businesses from Kerala",
    excerpt:
      "From science fairs and IoT projects in school to running Anweo, Nwee, and Nweedu — a look at where the pull to build actually came from, and why geography never got in the way.",
    date: "2026-03-10",
    body: `The interest in the digital world was never really a career decision — it was there long before I called any of this a business.

Growing up, I was genuinely introverted. I spent a lot of time in my room, and looking back, that time wasn't wasted — it's where I first started learning how things actually worked. I built science models, robotics projects, and IoT builds, and took them to science fairs, IT fairs, and IoT competitions at school, picking up top positions at several levels along the way. None of it felt like preparation for anything specific at the time. It just felt like the thing I wanted to be doing.

Somewhere in that process, I started noticing something bigger than any single project: the world was digitalizing faster than most people around me seemed to be tracking, and I wanted to be someone who built for that shift rather than caught off guard by it. That awareness is really where the pull to build something of my own started.

The first real attempt at that was an e-commerce store called **S Store** — sourcing good products at prices that actually made sense, and learning more from that one venture than any course could have taught me. It later became **Alpro Cart**, and eventually grew into what's now **Nwee**. Each rename wasn't a rebrand for its own sake — it marked a real shift in how much I understood about what I was building.

I'm not the same person who used to sit alone in a room tinkering with IoT boards — I've come a long way from that — but the instinct behind it never left. If anything, Kerala gave that instinct room to grow without needing to relocate anywhere to chase it.

I'm still expanding, still slowly managing the risk that comes with building multiple things at once. My friends like to joke that I'm unpredictable — full of twists, as they put it. Honestly, they're not wrong. But most of those "twists" turned out to be exactly what got me here.`,
  },
  {
    slug: "the-skills-school-never-taught-me",
    title: "The Skills School Never Taught Me — and Why Nweedu Exists",
    excerpt:
      "Nweedu isn't just syllabus tutoring. It's built around a simple frustration: school prepares students for exams, not for the internet economy they're about to enter.",
    date: "2026-04-14",
    body: `Every tutoring platform promises to help students pass exams. Nweedu does that too — but that was never the interesting part to build.

What actually pushed me to start Nweedu was noticing the gap between what a syllabus covers and what students actually need once they're done with it. Plenty of sharp students can ace their coursework and still have no idea how to think about building something, presenting an idea clearly, or picking up a practical skill outside a textbook. That gap doesn't show up on a report card, so nobody's incentivized to close it — except the student who eventually feels it.

So Nweedu runs on two tracks at once. One is straightforward: teach the syllabus well, the way it should be taught, without cutting corners. The other is the track that doesn't officially exist in most classrooms — the practical, extra-curricular skills that don't show up on an exam paper but end up mattering more once school is over.

Building this alongside Anweo actually helped more than it complicated things. Every system I've built for client marketing — how to explain something clearly, how to structure content so it lands — fed directly into how Nweedu's lessons are designed. Teaching, in the end, is just another form of clear communication, and that's a skill I was already sharpening every day running the agency.

The bet behind Nweedu is simple: students shouldn't have to wait until after graduation to start closing that gap. It's better to start now.`,
  },
  {
    slug: "bootstrapping-anweo",
    title: "From First Client to Cash-Flow Engine: Bootstrapping Anweo",
    excerpt:
      "Anweo didn't start with funding — it started with one client and a decision to reinvest every rupee back into building the next thing.",
    date: "2026-05-19",
    body: `There's a version of this story where I raise money, hire a team, and scale fast. That's not what happened, and honestly, I don't think it would have worked as well.

Anweo started the way most real agencies start — one client, one deliverable, no safety net. What made the difference wasn't the first project itself, it was the decision I made early on to treat every rupee of revenue as reinvestment capital rather than income to spend. Client payments didn't just cover that month's work — they funded the tooling, the systems, and eventually the runway for Nwee and Nweedu to exist without needing outside funding.

That discipline sounds obvious in hindsight, but it's genuinely uncomfortable in practice. It means saying no to upgrading things faster than the business justifies. It means every new client isn't just revenue — it's fuel for something else being built in parallel. Most people bootstrap by cutting costs. I bootstrapped by treating cash flow as infrastructure.

The compounding effect took longer to show up than I expected, but once it did, it was obvious: each new client made the agency slightly more efficient, which freed up slightly more time and cash for the product side, which made Nwee and Nweedu slightly more real. None of this happened in a single leap. It happened because the agency was never just "client work" — it was always the funding mechanism for everything else.

If there's a lesson in it, it's this: you don't need outside capital to build multiple things. You need one thing that generates cash reliably enough to fund the next.`,
  },
  {
    slug: "what-kgvyc-taught-me",
    title: "What Running a Gaming Community Taught Me About Building Products",
    excerpt:
      "KGVYC started as a way for gamers to find each other and support one another's channels. It grew into one of the clearest lessons I've had in what actually keeps people showing up.",
    date: "2026-06-23",
    body: `KGVYC — short for Kerala Gamers & Vloggers YouTube Community — didn't start as a business idea. It started because I was a gamer myself, long before any of this, and I understood the specific kind of isolation that comes with it. I'd run my own YouTube gaming channel and built up a solid subscriber base, so I knew firsthand how much of that grind happens alone, with no one around who actually gets what you're trying to build.

So together with a friend, I started KGVYC as a space for gamers and vloggers to actually find each other — to talk through ideas, support each other's channels, and not have to figure out content creation in isolation. I took on the role of managing it, and the goal from day one was simple: help the community keep growing, and keep raising the bar on what it could be.

What's stayed with me most isn't the size of the community — it's watching individual members grow. Some of our earliest members were clearly talented even back then, and it's genuinely rewarding to see where they've ended up. One member who was always a sharp, thoughtful editor is now working as a film editor. Another has grown into a proper influencer. Watching people who started out just posting in a community I manage go on to build real careers out of it is, honestly, one of the most satisfying parts of running KGVYC.

We're still in an expansion phase, and the community keeps attracting genuinely talented people making content across YouTube, Instagram, and beyond. But the lesson I keep taking from it into Anweo, Nwee, and Nweedu is the same one every time: people don't stay somewhere because of size or polish. They stay because they feel supported, and because showing up actually leads somewhere. KGVYC taught me that lesson before any of my other ventures did — I just didn't realize at the time that it was a lesson at all.`,
  },
];
