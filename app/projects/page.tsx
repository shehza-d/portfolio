import { Cursor, ObserverProject, Project } from "@/components";
import { allProjects } from "@/data";

export default function Page() {
  return (
    <>
      <div className="mb-6 mt-11">
        <h2 className="heading gradient mx-6 inline-block mm:mx-10 md:mx-16 lg:mx-20 xl:mx-28">
          Projects
        </h2>
      </div>
      <Cursor />
      <ObserverProject />
      <Project data={allProjects} />;
    </>
  );
}
