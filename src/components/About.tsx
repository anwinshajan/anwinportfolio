import Image from "next/image";
import ScrollFade from "./ScrollFade";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle Gold Background Glow */}
      <div className="bg-glow-gold-subtle absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full pointer-events-none blur-3xl opacity-50" />

      <div className="mx-auto max-w-5xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">02. About the Founder</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent" />
          </div>
        </ScrollFade>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column - Gallery Portrait */}
          <div className="lg:col-span-5">
            <ScrollFade delay={100}>
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[#d4af37]/30 to-transparent blur-md opacity-30 group-hover:opacity-60 transition duration-700" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12141d] p-2 shadow-2xl">
                  <div className="relative h-[430px] w-full overflow-hidden rounded-xl bg-[#0b0c10]">
                    <Image
                      src="/images/anwin_photo_v3.png"
                      alt="Anwin Shajan"
                      fill
                      className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-base font-light text-slate-100">Anwin Shajan</h3>
                      <p className="text-[11px] text-[#d4af37]/80 font-light">Web Developer &amp; Founder at Anweo</p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase border border-white/10 px-2 py-0.5 rounded">
                      Kerala, IN
                    </span>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>

          {/* Right Column - Editorial Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <ScrollFade delay={150}>
              <div className="space-y-5 font-sans text-base leading-relaxed text-slate-300/90 font-light">
                <p>
                  I am a Web Developer, Digital Tech Lead, and Founder of <strong className="text-slate-100 font-normal border-b border-[#d4af37]/40 pb-0.5">Anweo</strong> based in Kerala, India. I specialize in designing and engineering scalable Next.js architectures, modern full-stack web applications, and digital growth engines for clients.
                </p>
                <p>
                  <strong className="text-slate-100 font-normal border-b border-[#d4af37]/40 pb-0.5">Anweo</strong> is my flagship digital agency: delivering bespoke web application architecture, video production, WhatsApp automation systems, and high-converting growth assets. From client engineering, product instincts paved the way for <strong className="text-slate-100 font-normal border-b border-[#d4af37]/40 pb-0.5">Nwee</strong> (e-commerce) and <strong className="text-slate-100 font-normal border-b border-[#d4af37]/40 pb-0.5">Nweedu</strong> (online tutoring for Kerala SSLC students).
                </p>
                <p>
                  Alongside engineering and agency leadership, I pursue a BSc in Adult Nursing — bringing healthcare-grade discipline, systems thinking, and user empathy into every web architecture I build.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={250}>
              <div className="relative rounded-xl border border-[#d4af37]/20 bg-[#12141d]/60 p-6 backdrop-blur-sm">
                <blockquote className="border-l border-[#d4af37]/60 pl-4">
                  <p className="font-serif text-lg font-light italic leading-relaxed text-slate-200/90 sm:text-xl">
                    &ldquo;Range isn&apos;t a weakness. It&apos;s the most powerful, undervalued strength a builder can have.&rdquo;
                  </p>
                </blockquote>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
}
