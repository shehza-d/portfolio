import { Icons } from "@/components";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section className="my-8">
      <h2 className="gradient heading inline-block">Languages and Tools ⚙</h2>
      <ul className="grid grid-cols-1 justify-items-center gap-4 overflow-hidden py-5 font-light text-slate-800 md:grid-cols-2">
        {skills.map((item) => (
          <li
            className="animation_skillDivs flex w-5/6 translate-x-[62%] items-center justify-between rounded-[20px] border-2 border-lightSlate opacity-5 shadow-lg dark:border-lightestNavy md:odd:translate-x-[62%] md:even:translate-x-[-62%]"
            key={item.id}
          >
            <h5 className="pl-4 text-xl font-medium capitalize text-navy dark:text-slate-100 md:pl-8 md:text-2xl">
              {item.title}
            </h5>
            <div className="relative">
              <span className="absolute top-[35%] right-[4.7rem] text-slate-800 dark:text-slate-100 md:right-[5.5rem]">
                {item.percent}%
              </span>
              <Icons icon={item.icon} alt={item.additionalInfo} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
