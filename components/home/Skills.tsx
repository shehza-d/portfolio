import { Icons } from "@/components";
import { skills } from "@/data";

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json());

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

export default function Skills() {
  return (
    <section className="my-8 mx-8">
      <h2 className="gradient heading inline-block">Languages and Tools ⚙</h2>
      <ul className="grid grid-cols-1 justify-items-center gap-4 font-light text-slate-800 md:grid-cols-2">
        {skills.map((item) => (
          <li
            className="flex w-5/6 items-center justify-between rounded-[20px] shadow-lg"
            key={item.id}
          >
            <h5 className="pl-8 text-2xl font-medium capitalize">
              {item.title}
            </h5>
            <Icons icon={item.icon} alt={item.additionalInfo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
