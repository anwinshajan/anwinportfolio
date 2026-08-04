import ScrollFade from "./ScrollFade";

const capabilities = [
  {
    title: "Web & App Development",
    description:
      "Full-stack applications built with Next.js, React, and Supabase. From marketing sites to complex SaaS platforms.",
  },
  {
    title: "Video Production & Editing",
    description:
      "End-to-end video production — scripting, shooting, editing, and post-production using professional-grade tooling and FFmpeg pipelines.",
  },
  {
    title: "3D & Cinematic Content",
    description:
      "Cinematic visuals and 3D content created with Blender. Product renders, motion graphics, and immersive brand experiences.",
  },
  {
    title: "Digital Marketing Systems",
    description:
      "Performance marketing, WhatsApp automation flows, lead generation systems, and analytics-driven campaign management.",
  },
  {
    title: "E-Commerce Integrations",
    description:
      "Complete e-commerce infrastructure — Razorpay payments, inventory systems, order management, and logistics integration.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <ScrollFade>
          <h2 className="section-heading">Capabilities</h2>
        </ScrollFade>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-cream/8 bg-cream/5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <ScrollFade key={cap.title} delay={i * 80}>
              <div className="group flex h-full flex-col bg-dark p-8 transition-colors duration-500 hover:bg-cream/[0.03]">
                <div className="mb-4 h-px w-8 bg-accent/40 transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />
                <h3 className="font-serif text-lg font-light text-cream">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">
                  {cap.description}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
