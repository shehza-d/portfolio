import Image from "next/image";
import typingSvg from "../../public/typingSkills.svg";
import dp from "../../public/dp.jpeg";
import localFont from "next/font/local";

const urduFont = localFont({
  src: "../../public/urduFont/Jameel-Noori-Nastaleeq-Kasheeda.ttf",
  preload: false,
  // display: "swap",
});

const data = [
  { id: 1, li: "🏆 Currently learning Web 3 Development" },
  {
    id: 2,
    li: "💞️ Always looking forward to collaborate on projects",
  },
  { id: 3, li: "💻 Dedicated to Work and seeking Experiences" },
  { id: 4, li: "⛳️ MY 2023 Goal is Mastering NEXT JS" },
  { id: 5, li: "🌱 Learning from Saylani SMIT and PIAIC" },
  {
    id: 6,
    li: "👀 I am interested in Programming, Cyber Security, BlockChain(smart contracts), LeetCode, Photo/Video Editing and in Bug Bounty and Hackathons",
  },
  { id: 7, li: "🇵🇰 A passionate Full-Stack Developer from Karachi, Pakistan" },
];

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
        className="profilePic relative z-10 my-6 w-[26.25rem] scale-50 rounded-full shadow-2xl drop-shadow-lg"
        src={dp}
        // title="SHEHZAD"
        alt="Shehzad in FG college uniform"
        width={1512}
        height={1512}
      />

      <blockquote
        className="animation_triggering_left rounded-full bg-opacity-90 bg-gradient-to-r from-blue-300 via-green-500 to-[#30f711cc] py-3 px-6 shadow-2xl hover:bg-gradient-to-l"
        dir="rtl"
      >
        <span className={`text-lg`}>
          وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ
        </span>
        <br />
        💚Man gets whatever he strives for
      </blockquote>

      <h1 className="inline text-[1px] opacity-0">
        SHEHZAD IQBAL WEB DEVELOPER SMIT PIAIC PANAVERSE SAYLANI
      </h1>
      <h1 className="inline text-[1px] opacity-0">Making Code Beneficial</h1>
      <h2 className="heading gradient self-start">Introduction</h2>

      <p className="animation_triggering_left text-justify text-lg font-light text-slate-800 dark:text-slate-200 lg:text-xl">
        A young and enthusiastic individual{" "}
        <span className="heading_gradient inline">Making Code Beneficial</span>{" "}
        who also likes to Develop, Design, Innovate, Experiment and take up new
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
      <ul className="animation_triggering_left m-4 font-light text-slate-800 dark:text-slate-200">
        {data.map((item) => (
          <li className="pl-4 text-justify" key={item.id}>
            - {item.li}
          </li>
        ))}
      </ul>

      <blockquote
        dir="rtl"
        className={`${urduFont.className} text-center text-2xl`}
      >
        جو جنوں کی ره پر چل پڑے ، اُنھیں منزلوں نے پناہ دی
        <br />
        جنہیں وسوسوں نے بہکا دیا، وہ قدم قدم پر بھٹک گئے
      </blockquote>
    </section>
  );
}
