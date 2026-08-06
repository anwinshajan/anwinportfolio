// ============================================================
//  CAPABILITIES CONTENT — edit this file to add / update capabilities
//  Each capability renders as a row in the Capabilities section.
// ============================================================

export interface Capability {
  /** Short title (e.g. "Web & App Development") */
  title: string;
  /** 1-2 sentence description */
  description: string;
  /** Display number — shown as a large decorative numeral */
  index: string;
}

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Web & App Development",
    description:
      "End-to-end digital solutions built for modern web and mobile. From engaging marketing sites to complex web applications — engineered for high performance, seamless user experiences, and scalable growth.",
  },
  {
    index: "02",
    title: "Graphic & Visual Design",
    description:
      "Strategic visual design that defines and elevates brand presence. High-impact marketing collateral, digital assets, publication layouts, and cohesive aesthetic systems.",
  },
  {
    index: "03",
    title: "Business & Tech Consultation",
    description:
      "Strategic advisory to align business goals with modern technical infrastructure. Digital transformation planning, workflow optimization, technology roadmap design, and growth strategy.",
  },
  {
    index: "04",
    title: "Custom System Building & Automation",
    description:
      "Tailored operational infrastructure and automated workflow pipelines. Connecting backend services, streamlining internal business processes, and building scalable enterprise tools.",
  },
  {
    index: "05",
    title: "Video Production & Editing",
    description:
      "End-to-end visual storytelling — concept development, scripting, filming, and post-production editing engineered to captivate audiences and deliver high-impact content.",
  },
  {
    index: "06",
    title: "3D & Cinematic Content",
    description:
      "High-end 3D visualization and motion design. Photorealistic product renders, cinematic visual effects, and immersive brand experiences tailored for high engagement.",
  },
  {
    index: "07",
    title: "Digital Marketing Systems",
    description:
      "Data-driven growth infrastructure — multi-channel acquisition, automated messaging workflows, lead capture engines, and real-time performance analytics.",
  },
  {
    index: "08",
    title: "E-Commerce Integrations",
    description:
      "Comprehensive digital storefront ecosystems — secure payment processing, automated inventory tracking, order management, and seamless fulfillment integrations.",
  },
];
