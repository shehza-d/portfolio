import {
  Cursor,
  Particle,
  About,
  Hero,
  Skills,
  Contact,
  Project,
  Observer,
} from "@/components";
import { topProjects } from "@/data";
import Link from "next/link";

export default function Home() {



  return (
    <main className={`dark:bg-[#0A192F]`}>
      {/* <Cursor /> */}
      {/* <Particle /> */}
      <Observer />
      <Hero />

      <div className="mx-6 mm:mx-10 md:mx-16 lg:mx-20 xl:mx-28">
        <About />
        <Skills />
        <Project data={topProjects} />
        <div className="flex justify-center">
          <Link
            className="relative z-10 rounded-full bg-gradient-to-r from-cyan-300 via-green-400 to-[#30f711cc] py-3 px-6 shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-l"
            href="/projects"
            prefetch={true}
          >
            {/* <MdMailOutline className="pr-1 text-3xl" /> */}
            See more Projects
          </Link>
        </div>
        {/* <Contact /> */}
      </div>

    </main>
  );
}
