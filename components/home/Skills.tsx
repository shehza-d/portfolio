import { Icons } from "@/components";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section className="my-8">
      <h2 className="gradient heading inline-block">Languages and Tools ⚙</h2>
      <ul className="py-5 grid grid-cols-1 justify-items-center overflow-hidden gap-4 font-light text-slate-800 md:grid-cols-2">
        {skills.map((item) => (
          <li
            className="border-2 border-gray-300 dark:border-gray-600 animation_skillDivs opacity-5 flex w-5/6 items-center justify-between rounded-[20px] shadow-lg md:odd:translate-x-[62%] translate-x-[62%] md:even:translate-x-[-62%]"
            key={item.id}
          >
            <h5 className="pl-8 bdr2 text-2xl font-medium capitalize dark:text-slate-100">
              {item.title}
            </h5>
            <span>{item.percent}%</span>
            <Icons icon={item.icon} alt={item.additionalInfo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
