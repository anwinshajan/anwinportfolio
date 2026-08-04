import ScrollFade from "./ScrollFade";

export default function Connect() {
  return (
    <footer id="connect" className="section-padding border-t border-cream/8">
      <div className="mx-auto max-w-4xl">
        <ScrollFade>
          <h2 className="section-heading">Connect</h2>
        </ScrollFade>

        <ScrollFade delay={100}>
          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            {/* Links */}
            <nav className="flex flex-col gap-4" aria-label="Contact links">
              <a
                href="https://linkedin.com/in/anwinshajan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-base font-light text-cream/60 transition-colors duration-300 hover:text-accent"
              >
                <span className="h-px w-4 bg-cream/20 transition-all duration-300 group-hover:w-6 group-hover:bg-accent" />
                LinkedIn
              </a>
              <a
                href="mailto:hello@anweo.com"
                className="group inline-flex items-center gap-2 text-base font-light text-cream/60 transition-colors duration-300 hover:text-accent"
              >
                <span className="h-px w-4 bg-cream/20 transition-all duration-300 group-hover:w-6 group-hover:bg-accent" />
                Email
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-base font-light text-cream/60 transition-colors duration-300 hover:text-accent"
              >
                <span className="h-px w-4 bg-cream/20 transition-all duration-300 group-hover:w-6 group-hover:bg-accent" />
                WhatsApp
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-xs font-light text-cream/20">
              &copy; {new Date().getFullYear()} Anwin Shajan
            </p>
          </div>
        </ScrollFade>
      </div>
    </footer>
  );
}
