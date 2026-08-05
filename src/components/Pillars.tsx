import ScrollFade from "./ScrollFade";

const pillars = [
  {
    number: "01",
    title: "Anweo Digital Agency",
    description:
      "Full-service digital agency delivering video advertising, WhatsApp automation workflows, and custom web & app development.",
    badge: "Agency & Media",
  },
  {
    number: "02",
    title: "Nwee E-Commerce",
    description:
      "High-performance e-commerce platform built for speed, inventory automation, and frictionless checkout experiences.",
    badge: "E-Commerce Platform",
  },
  {
    number: "03",
    title: "Nweedu Online Tutoring",
    description:
      "Dedicated online tutoring platform empowering Kerala SSLC students with structured state-syllabus video courses.",
    badge: "Kerala EdTech",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="section-padding relative overflow-hidden bg-[#0b0c10]">
      <div className="mx-auto max-w-5xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">01. Core Pillars</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent" />
          </div>
        </ScrollFade>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollFade key={pillar.number} delay={i * 100}>
              <div className="glass-card-premium group relative flex flex-col justify-between rounded-2xl p-7 h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-light text-[#d4af37]">
                      {pillar.number}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[11px] font-light text-slate-400">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-light text-slate-100 transition-colors duration-300 group-hover:text-[#d4af37]">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80 font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-light text-[#d4af37]/80">
                  <span>Explore pillar</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
