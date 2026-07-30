import type { IProject } from "../../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: IProject[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
