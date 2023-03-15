import Link from "next/link";
// import Image from "next/image";
import { Icons } from "@/components";
import { contactData } from "@/data";

export default function Contact() {
  return (
    <section>
      <h2 className="heading gradient  self-start ">Connect with me on 🔗</h2>
      <div className="flex grid-cols-5 gap-5 py-10">
        {contactData.map((item) => {
          return (
            <Link
              className="relative z-10 rounded-[20px] shadow-lg drop-shadow-md transition-transform duration-500 hover:scale-110"
              key={item.id}
              prefetch={false}
              //   className="py-1 px-3 underline-offset-4 hover:underline"
              href={item.link}
              target="_blank"
            >
              {/* <h6>{item.title}</h6> */}
              <Icons icon={item.icon} alt={item.alt} iconType={item.iconType} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
