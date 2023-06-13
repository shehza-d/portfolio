import { Cursor, ObserverProject, Projects } from "@/components";
import { allProjects } from "@/data";

export default function Page() {
  return (
    <>
      <div className="mx-6 mb-6 mt-11 mm:mx-10 md:mx-16 lg:mx-20 xl:mx-28">
        <h2 className="heading gradient inline-block ">Projects</h2>
        <h3>Useless is not worthless</h3>
        <p>
          Here&apos;s a collection of side projects. Most of them are built for
          the purpose of exploring the field of human-computer interaction using
          web technologies.
        </p>
      </div>
      <Cursor />
      <ObserverProject />
      <Projects data={allProjects} />;
    </>
  );
}
