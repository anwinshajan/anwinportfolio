import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Capabilities from "@/components/Capabilities";
import Testimonials from "@/components/Testimonials";
import Notes from "@/components/Notes";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Ventures />
        <Capabilities />
        <Testimonials />
        <Notes />
        <Connect />
      </main>
    </>
  );
}
