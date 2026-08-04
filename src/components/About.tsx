import ScrollFade from "./ScrollFade";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <ScrollFade>
          <h2 className="section-heading">About</h2>
        </ScrollFade>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Main bio */}
          <div className="md:col-span-3">
            <ScrollFade delay={100}>
              <div className="space-y-6 text-base leading-relaxed text-cream/70">
                <p>
                  I build things on the internet. From digital marketing systems
                  to e-commerce platforms to online education — each venture is a
                  response to a problem I saw clearly enough to solve.
                </p>
                <p>
                  <strong className="text-cream/90">Anweo</strong> is where it
                  started: a full-service digital agency handling video
                  production, WhatsApp automation, and web development.{" "}
                  <strong className="text-cream/90">Nwee</strong> grew from the
                  product instinct that client work sharpened.{" "}
                  <strong className="text-cream/90">Nweedu</strong> was born
                  from watching Kerala SSLC students struggle with access to
                  quality online tutoring.
                </p>
                <p>
                  Alongside all of this, I&apos;m pursuing a BSc in Adult
                  Nursing. Healthcare teaches systems thinking, the weight of
                  precision, and empathy at scale — instincts that make
                  everything I build better. Range isn&apos;t a distraction.
                  It&apos;s how I work.
                </p>
              </div>
            </ScrollFade>
          </div>

          {/* Pull quote */}
          <div className="flex items-start md:col-span-2">
            <ScrollFade delay={250}>
              <blockquote className="border-l-2 border-accent/40 pl-6">
                <p className="font-serif text-xl font-light italic leading-relaxed text-cream/50 md:text-2xl">
                  &ldquo;Range isn&apos;t a weakness. It&apos;s the most
                  undervalued strength a builder can have.&rdquo;
                </p>
              </blockquote>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
}
