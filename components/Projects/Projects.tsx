// "use client";
import { ProjectCard } from "./ProjectCard";
import type { IProject } from "@/types";

export default function Project({ data }: { data: IProject[] }) {
  return (
    <section className="my-8">
      <div className="mx-4 flex flex-col gap-8 overflow-hidden">
        {data?.map((item) => {
          return <ProjectCard data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}
