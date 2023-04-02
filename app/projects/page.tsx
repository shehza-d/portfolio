import { Cursor, Project } from "@/components";
import { allProjects } from "@/data";

export default function Page() {
  return (
    <>
      <Cursor />
      <Project data={allProjects} />;
    </>
  );
}
