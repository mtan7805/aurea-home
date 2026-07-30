import { FiArrowRight, FiMapPin } from "react-icons/fi";
import type { IProject } from "../../types/project";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
          {project.categoryName}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {project.name}
            </h2>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
              <FiMapPin className="w-4 h-4 text-primary" />
              <span>{project.location}</span>
            </div>
          </div>
          <span className="shrink-0 text-sm font-bold text-primary bg-amber-50 px-3 py-1 rounded-full">
            {project.year}
          </span>
        </div>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-[#faf8f5] px-3 py-2">
            <p className="text-gray-500">Diện tích</p>
            <p className="font-bold text-gray-900">{project.area} m²</p>
          </div>
          <div className="rounded-lg bg-[#faf8f5] px-3 py-2">
            <p className="text-gray-500">Phong cách</p>
            <p className="font-bold text-gray-900">{project.style}</p>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-primary font-bold hover:text-primary-hover transition-colors cursor-pointer"
        >
          <span>Xem chi tiết</span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
