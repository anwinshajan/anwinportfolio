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
    <section id="capabilities" className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">04. Capabilities</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent" />
          </div>
        </ScrollFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <ScrollFade key={cap.title} delay={i * 80}>
              <div className="glass-card-premium group flex h-full flex-col rounded-2xl p-7 justify-between">
                <div>
                  <div className="mb-4 h-px w-8 bg-[#d4af37]/40 transition-all duration-400 group-hover:w-12 group-hover:bg-[#d4af37]" />
                  <h3 className="font-serif text-lg font-light text-slate-100 transition-colors duration-300 group-hover:text-[#d4af37]">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80 font-light">
                    {cap.description}
                  </p>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
