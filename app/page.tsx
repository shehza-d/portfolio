// "use client";
import {
  Cursor,
  Particle,
  About,
  Hero,
  Skills,
  Contact,
  Project,
  // ContactForm,
} from "@/components";
import { projects } from "@/data";

export default function Home() {
  console.log(" rerender on server");

  return (
    <main className={``}>
      {/* <Cursor /> */}
      {/* <Particle /> */}
      <Hero />
      <About />
      <Skills />
      <Project data={projects} />
      <Contact />
    </main>
  );
}
