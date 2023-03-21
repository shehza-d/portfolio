import Link from "next/link";
import { Icons } from "@/components";
import { contactData } from "@/data";
import { MdMailOutline, MdEditDocument } from "react-icons/md";

export default function Contact() {
  // const newLetterSubmit = (e: any) => {
  //   e.preventDefault();
  // };

  return (
    <section className="my-8 mx-8">
      <h2 className="heading gradient inline-block">Connect with me🔗</h2>

      <div className="flex flex-wrap justify-evenly pt-4">
        <Link
          className="relative z-10 flex items-center justify-between rounded-full bg-gradient-to-r from-cyan-300 via-green-400 to-[#30f711cc] p-3 py-3 px-6 shadow-xl hover:bg-gradient-to-l"
          href="mailto:shehzad.dev@pm.me"
          target="_blank"
        >
          <MdMailOutline className="pr-1 text-3xl" />
          shehzad.dev@pm.me
        </Link>
        <Link
          className="relative z-10 flex items-center justify-between rounded-full bg-gradient-to-r from-cyan-300 via-green-400 to-[#30f711cc] p-3 py-3 px-6 shadow-xl hover:bg-gradient-to-l"
          href="https://firebasestorage.googleapis.com/v0/b/shehza-d.appspot.com/o/Shehzad-MERN-Resume.pdf?alt=media&token=5c1b3446-67ec-4a07-aac1-ef95504b3cd6"
          target="_blank"
        >
          <MdEditDocument className="pr-1 text-2xl" />
          Download CV
        </Link>
      </div>

      <div className="flex items-center justify-center gap-3 py-10 min-[500px]:gap-8 lg:gap-12">
        {contactData.map((item) => {
          return (
            <Link
              className="relative z-10 rounded-[20px] shadow-xl drop-shadow-md transition-transform duration-500 hover:scale-125"
              key={item.id}
              prefetch={false}
              href={item.link}
              target="_blank"
            >
              <Icons icon={item.icon} alt={item.alt} iconType={item.iconType} />
            </Link>
          );
        })}
      </div>
      <form className="text-accent ml:p-8 lg:p-1">
        <label className="text-2xl font-semibold" htmlFor="newsLetter">
          News Letter
        </label>
        <div className="flex items-center">
          <input
            className={`my-6 h-16 flex-1 rounded-l-lg border-0 p-4 text-2xl text-gray-800 shadow-xl outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent dark:text-gray-100 sm:text-sm sm:leading-6`}
            type="email"
            name="newsLetter"
            autoComplete="email"
            required
            placeholder="Your Email here"
          />
          <button
            className="h-16 rounded-r-lg bg-accent py-2 px-6 text-lg font-semibold text-slate-100 shadow-xl hover:opacity-80 active:bg-accentLow"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
}
