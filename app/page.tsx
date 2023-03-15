// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
import {
  About,
  Particle,
  Hero,
  Skills,
  Contact,
  // ContactForm,
} from "@/components";

export default function Home() {
  return (
    <main className={``}>
      {/* <Particle /> */}
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
