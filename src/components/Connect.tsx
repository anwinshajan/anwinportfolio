import ScrollFade from "./ScrollFade";

export default function Connect() {
  return (
    <footer id="connect" className="section-padding relative overflow-hidden bg-[#0b0c10] border-t border-white/10">
      {/* Soft Gold Background Glow */}
      <div className="bg-glow-gold-subtle absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full pointer-events-none blur-3xl opacity-60" />

      <div className="mx-auto max-w-5xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">06. Connect</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent" />
          </div>
        </ScrollFade>

        <ScrollFade delay={100}>
          <div className="glass-card-premium rounded-2xl p-8 sm:p-12 border border-white/10">
            <div className="max-w-xl">
              <h3 className="font-serif text-3xl font-light text-slate-100 sm:text-4xl leading-tight">
                Let&apos;s build something <span className="text-gradient-gold">meaningful</span> together.
              </h3>
              <p className="mt-4 text-base font-light text-slate-300/80 leading-relaxed">
                Whether you want to discuss a digital venture, video production &amp; tech automation, or just say hello — I am always open to conversation.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 pt-8 border-t border-white/5">
              <a
                href="mailto:hello@anweo.com"
                className="btn-premium-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                hello@anweo.com ↗
              </a>

              <a
                href="https://www.linkedin.com/in/anwinshajan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline px-6 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/anwinshajan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline px-6 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                GitHub ↗
              </a>

              <a
                href="https://twitter.com/anwinshajan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline px-6 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                X (Twitter) ↗
              </a>

              <a
                href="https://www.youtube.com/@anwinshajan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline px-6 py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                YouTube ↗
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-xs font-light text-slate-400">
              <p>&copy; {new Date().getFullYear()} Anwin Shajan. All rights reserved.</p>
              <p className="text-[#d4af37]/80">Web Developer &amp; Founder at Anweo · Kerala, India</p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </footer>
  );
}
