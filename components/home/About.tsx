import Image from "next/image";
import typingSvg from "../../public/typingSkills.svg";
import dp from "../../public/dp.jpeg";

export default function About() {
  return (
    <section className="my-8 mx-8 mt-16 flex flex-col items-center">
      <Image
        className=""
        src={typingSvg}
        alt="Typing SVG"
        width={665}
        height={55}
      />
      <Image
        className="relative z-10 my-4 w-[26.25rem] rounded-full"
        src={dp}
        title="SHEHZAD"
        alt="Shehzad in FG college uniform"
        width={1512}
        height={1512}
      />
      <blockquote
        className="rounded-full bg-opacity-90 bg-gradient-to-r from-blue-300 via-green-500 to-[#30f711cc] py-3 px-6 "
        dir="rtl"
      >
        وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ
        <br />
        💚Man gets whatever he strives for
      </blockquote>

      <h1 className="text-[1px] opacity-0">
        SHEHZAD IQBAL WEB DEVELOPER SMIT PIAIC PANAVERSE SAYLANI
      </h1>
      <h2 className="heading_gradient self-start text-4xl font-bold">
        Introduction
      </h2>
      <p className="text-justify text-lg font-light lg:text-xl">
        A young and enthusiastic individual Making Code Beneficial who also
        likes to Develop, Design, Innovate, Experiment and take up new
        challenges with long exited journey to go. He thinks in a pragmatic way
        and is always learning new skills and applying those skills in practical
        life is a great delight. Keeps a strong eye for clean, efficient and
        secure coding practices and has keen understanding of Logic Building.
        Unlikely loves BackEnd Technicalities and Competitive Programming(C++)
        is his Hobby. He also loves meeting new people, exchanging ideas and
        spreading knowledge and positivity other than that he could be found
        helping others learn Programming. Seeks to join a dynamic and
        progressive organization offering ample opportunities and diversified
        exposure where he could enhance his experience.
      </p>
    </section>
  );
}
