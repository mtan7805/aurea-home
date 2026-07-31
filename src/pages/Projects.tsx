import { useMemo, useState } from "react";
import Pagination from "../components/common/Pagination";
import ProjectList from "../components/projects/ProjectList";
import { projectCategories, projectData } from "../data/projectData";
import { usePagination } from "../hooks/usePagination";
import type { ProjectCategory } from "../types/project";

const PROJECTS_PER_PAGE = 6;

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projectData;
    return projectData.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const { currentPage, totalPages, paginatedItems, handlePageChange, resetPage } =
    usePagination(filteredProjects, PROJECTS_PER_PAGE);

  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
    resetPage();
  };

  return (
    <div className="w-full min-h-screen bg-[#faf8f5] pt-44 pb-24 px-5 md:px-[50px] lg:px-[130px]">
      <section className="w-full flex flex-col items-center text-center gap-3 mb-10">
        <span className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest px-4 py-1.5 bg-amber-50 rounded-full border border-amber-300/60">
          Aurea Home Projects
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Dự án đã thi công
        </h1>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
          Những không gian sống được Aurea Home kiến tạo với chất lượng thi
          công chỉn chu, vật liệu hài hòa và thẩm mỹ bền vững theo thời gian.
        </p>
      </section>

      <div className="w-full flex items-center justify-center mb-10">
        <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm border border-gray-100 scrollbar-none">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <ProjectList projects={paginatedItems} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
