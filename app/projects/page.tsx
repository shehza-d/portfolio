import { Project } from "@/components";
import { allProjects } from "@/data";

export default function Page() {
  return <Project data={allProjects} />;
}
