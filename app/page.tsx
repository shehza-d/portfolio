// "use client";
import {
  Cursor,
  Particle,
  About,
  Hero,
  Skills,
  Contact,
  // ContactForm,
} from "@/components";

export default function Home() {
  return (
    <main className={``}>
      <Cursor />
      {/* <Particle /> */}
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
