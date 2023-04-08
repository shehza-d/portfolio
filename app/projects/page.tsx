import { Cursor, ObserverProject, Project } from "@/components";
import { allProjects } from "@/data";

export default function Page() {
  return (
    <>
      <Cursor />
      <ObserverProject />
      <Project data={allProjects} />;
    </>
  );
}
