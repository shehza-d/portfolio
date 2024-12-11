import Link from "next/link";
import { Icons } from "@/components";
import { contactData } from "@/data";
import { MdMailOutline, MdEditDocument } from "react-icons/md";
import NewsLetterForm from "./NewsLetter";

export default function Contact() {
  return (
    <section className="my-8">
      <h2 className="heading gradient inline-block">Connect with me</h2>

      <div className="flex flex-wrap justify-evenly pt-4">
        <Link
          className="relative z-10 my-2 flex items-center justify-between rounded-full bg-gradient-to-r from-cyan-300 via-green-400 to-[#30f711cc] p-3 py-3 px-6 shadow-xl hover:bg-gradient-to-l"
          href="mailto:shehzad.dev@pm.me"
          target="_blank"
        >
          <MdMailOutline className="pr-1 text-3xl" />
          shehzad.dev@pm.me
        </Link>
        <Link
          className="relative z-10 my-2 flex items-center justify-between rounded-full bg-gradient-to-r from-cyan-300 via-green-400 to-[#30f711cc] p-3 py-3 px-6 shadow-xl hover:bg-gradient-to-l"
          href="https://firebasestorage.googleapis.com/v0/b/shehza-d.appspot.com/o/Shehzad-MERN-Resume.pdf?alt=media&token=5c1b3446-67ec-4a07-aac1-ef95504b3cd6"
          target="_blank"
        >
          <MdEditDocument className="pr-1 text-2xl" />
          Download CV
        </Link>
      </div>

      <div className="grid grid-cols-4 justify-items-center gap-3 py-10 min-[500px]:gap-8 md:px-20 lg:gap-12 lg:px-44">
        {contactData.map((item) => (
          <Link
            className="relative z-10 rounded-[20px] shadow-xl drop-shadow-md transition-transform duration-500 hover:scale-125"
            //  h-14 w-14
            key={item.id}
            prefetch={false}
            href={item.link}
            target="_blank"
          >
            <Icons icon={item.icon} alt={item.alt} iconType={item.iconType} />
          </Link>
        ))}
      </div>
      <NewsLetterForm />
    </section>
  );
}
