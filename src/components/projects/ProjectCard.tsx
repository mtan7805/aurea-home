import { FiMapPin } from "react-icons/fi";
import ContentCard from "../common/ContentCard";
import type { IProject } from "../../types/project";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ContentCard
      image={project.image}
      imageAlt={project.name}
      badge={project.categoryName}
      title={project.name}
      description={project.description}
      ctaLabel="Xem chi tiết"
      footer={
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <FiMapPin className="w-4 h-4 text-primary" />
          {project.location}
        </span>
      }
    >
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-[#faf8f5] px-3 py-2">
          <p className="text-gray-500">Diện tích</p>
          <p className="font-bold text-gray-900">{project.area} m²</p>
        </div>
        <div className="rounded-lg bg-[#faf8f5] px-3 py-2">
          <p className="text-gray-500">Phong cách</p>
          <p className="font-bold text-gray-900">{project.style}</p>
        </div>
        <div className="col-span-2 flex items-center justify-between rounded-lg bg-amber-50 px-3 py-2">
          <p className="text-gray-500">Hoàn thiện</p>
          <p className="font-bold text-primary">{project.year}</p>
        </div>
      </div>
    </ContentCard>
  );
}
