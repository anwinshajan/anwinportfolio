import ScrollFade from "./ScrollFade";

const pillars = [
  {
    number: "01",
    title: "Anweo Digital Agency",
    description:
      "Full-service digital agency delivering video advertising, WhatsApp automation workflows, and custom web & app development.",
    badge: "Agency & Media",
    href: "#ventures",
  },
  {
    number: "02",
    title: "Nwee E-Commerce",
    description:
      "High-performance e-commerce platform built for speed, inventory automation, and frictionless checkout experiences.",
    badge: "E-Commerce",
    href: "#ventures",
  },
  {
    number: "03",
    title: "Nweedu Learning",
    description:
      "Online learning platform for students at every level — delivering curriculum plus essential life skills, money management, and interest-driven learning.",
    badge: "EdTech Platform",
    href: "#ventures",
  },
  {
    number: "04",
    title: "KGVYC Gaming",
    description:
      "A gaming community that brings together players, organises tournaments, and builds competitive culture in Kerala and beyond.",
    badge: "Community",
    href: "#ventures",
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="section-padding relative overflow-hidden bg-[#FAF7F2]"
      style={{ borderTop: "1px solid var(--color-cream-border)" }}
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-14">
            <span className="section-label">Core Pillars</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4521A]/25 to-transparent" />
          </div>
        </ScrollFade>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <ScrollFade key={pillar.number} delay={i * 90}>
              <a
                href={pillar.href}
                className="glass-card-warm group relative flex flex-col rounded-2xl p-6 h-full hover:no-underline"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-3xl font-light text-[#D4521A]/30 group-hover:text-[#D4521A]/60 transition-colors duration-500 leading-none"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                  <span className="rounded-full border border-[#E5DDD5] bg-white/70 px-3 py-0.5 text-[10px] font-semibold tracking-wide text-[#7A746E] uppercase">
                    {pillar.badge}
                  </span>
                </div>

                {/* Coral rule */}
                <div className="h-px w-6 bg-[#D4521A]/40 mb-4 transition-all duration-500 group-hover:w-10 group-hover:bg-[#D4521A]" />

                <h3
                  className="text-lg font-light text-[#1A1A1A] group-hover:text-[#D4521A] transition-colors duration-300 leading-snug"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#7A746E] font-light flex-1">
                  {pillar.description}
                </p>

                <div className="mt-5 flex items-center justify-between text-xs font-medium text-[#D4521A] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </a>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
