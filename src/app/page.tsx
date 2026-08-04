import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Capabilities from "@/components/Capabilities";
import Notes from "@/components/Notes";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Ventures />
      <Capabilities />
      <Notes />
      <Connect />
    </main>
  );
}
