import Image from "next/image";
import typingSvg from "../../public/typingSkills.svg";
import dp from "../../public/shehzad_dp_low.jpeg";
// import localFont from "next/font/local";
import { aboutData } from "@/data";

// const urduFont = localFont({
//   src: "../../public/urduFont/Jameel-Noori-Nastaleeq-Kasheeda.ttf",
//   preload: false,
//   // display: "swap",
// });

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
        alt="Shehzad photo in google dev fest"
        width={1460}
        height={1460}
      />

      <blockquote
        className="animation_triggering_fade rounded-full bg-opacity-90 bg-gradient-to-r from-blue-300 via-green-500 to-[#30f711cc] py-3 px-6 opacity-0 shadow-2xl hover:bg-gradient-to-l"
        dir="rtl"
      >
        <span className={`text-lg`}>{aboutData.aayah.arabic}</span>
        <br />
        {aboutData.aayah.translation}
      </blockquote>

      <h1 className="sr-only">
        SHEHZAD IQBAL Full Stack Chatbot DEVELOPER SMIT PIAIC PANAVERSE SAYLANI
      </h1>
      <h1 className="sr-only">
        Natural Language Processing NLP Chatbot and Conversational AI Developer
        and expert also Best Chatbot Developer of Pakistan Karachi{" "}
      </h1>
      <h2 className="sr-only">Making Code Beneficial OpenAI Generative AI</h2>
      <p className="sr-only">
        I am a dedicated and passionate chatbot developer with a strong focus on
        Natural Language Processing (NLP). With a deep understanding of how
        language works and an innate curiosity for human-computer interaction, I
        craft intelligent and conversational chatbots that engage and assist
        users effectively. My journey into the world of NLP began with a
        fascination for the way humans communicate, which led me to explore the
        intricacies of language processing and machine learning. Over the years,
        I&apos;ve honed my skills in designing and implementing chatbots that
        not only understand and respond to natural language but also adapt and
        learn from user interactions. In my work, I prioritize user-centric
        design, ensuring that the chatbots I create offer seamless and intuitive
        experiences. Whether it&apos;s enhancing customer support, automating
        tasks, or providing personalized recommendations, I&apos;m committed to
        leveraging NLP to make interactions between humans and technology more
        efficient and enjoyable. As a lifelong learner, I stay at the forefront
        of NLP advancements, experimenting with the latest techniques and
        technologies. This allows me to deliver innovative solutions tailored to
        your specific needs, whether you&apos;re looking to streamline
        operations, boost engagement, or simply provide a delightful chatbot
        experience. I believe in the power of conversation to transform digital
        interactions, and I&apos;m excited to collaborate with you on your next
        chatbot project. Let&apos;s explore the limitless possibilities of NLP
        together. Feel free to reach out to me to discuss how we can leverage
        the capabilities of chatbots and NLP to enhance your business or
        project.
      </p>

      <h2 className="heading gradient self-start">Introduction</h2>

      <p className="animation_triggering_fade text-justify text-lg font-light text-slate-800 opacity-0  dark:text-slate-200 lg:text-xl">
        A young and enthusiastic individual{" "}
        <span className="gradient">Making Code Beneficial</span>{" "}
        {aboutData.para}
      </p>
      <ul className="animation_triggering_fade m-4 text-left font-light text-slate-800 opacity-0 dark:text-slate-200">
        {aboutData.points.map((item) => (
          <li className="text-justify md:pl-4" key={item.id}>
            - {item.li}
          </li>
        ))}
      </ul>

      {/* <blockquote
        dir="rtl"
        className={`${urduFont.className} animation_triggering_fade text-center text-2xl opacity-0`}
      >
        {aboutData.poetry.line1}
        <br />
        {aboutData.poetry.line2}
      </blockquote> */}
    </section>
  );
}
