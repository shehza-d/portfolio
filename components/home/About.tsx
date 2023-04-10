import Image from "next/image";
import typingSvg from "../../public/typingSkills.svg";
import dp from "../../public/dp.jpeg";
import localFont from "next/font/local";
import { aboutData } from "@/data";

const urduFont = localFont({
  src: "../../public/urduFont/Jameel-Noori-Nastaleeq-Kasheeda.ttf",
  preload: false,
  // display: "swap",
});

export default function About() {
  return (
    <section className="my-8 mt-16 flex flex-col items-center">
      <Image
        className=""
        src={typingSvg}
        alt="Typing SVG"
        width={665}
        height={55}
      />

      <Image
        className="profilePic relative z-10 my-6 w-96 scale-50 rounded-full shadow-2xl drop-shadow-lg md:w-[26.25rem]"
        src={dp}
        // title="SHEHZAD"
        alt="Shehzad in FG college uniform"
        width={1512}
        height={1512}
      />

      <blockquote
        className="animation_triggering_fade rounded-full bg-opacity-90 bg-gradient-to-r from-blue-300 via-green-500 to-[#30f711cc] py-3 px-6 opacity-0 shadow-2xl hover:bg-gradient-to-l"
        dir="rtl"
      >
        <span className={`text-lg`}>{aboutData.aayah.arabic}</span>
        <br />
        {aboutData.aayah.translation}
      </blockquote>

      <h1 className="inline text-[1px] opacity-0">
        SHEHZAD IQBAL WEB DEVELOPER SMIT PIAIC PANAVERSE SAYLANI
      </h1>
      <h1 className="inline text-[1px] opacity-0">Making Code Beneficial</h1>

      <h2 className="heading gradient self-start">Introduction</h2>

      <p className="animation_triggering_fade text-justify text-lg font-light text-slate-800 opacity-0  dark:text-slate-200 lg:text-xl">
        A young and enthusiastic individual{" "}
        <span className="gradient">Making Code Beneficial</span>{" "}
        {aboutData.para}
      </p>
      <ul className="animation_triggering_fade m-4 font-light text-slate-800 opacity-0 dark:text-slate-200">
        {aboutData.points.map((item) => (
          <li className="text-justify md:pl-4" key={item.id}>
            - {item.li}
          </li>
        ))}
      </ul>

      <blockquote
        dir="rtl"
        className={`${urduFont.className} animation_triggering_fade text-center text-2xl opacity-0`}
      >
        {aboutData.poetry.line1}
        <br />
        {aboutData.poetry.line1}
      </blockquote>
    </section>
  );
}
