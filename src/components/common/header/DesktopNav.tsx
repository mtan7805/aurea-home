import { FiChevronDown } from "react-icons/fi";
import { menuListProduct, menuProjects } from "../../../data/menuData";
import type {
  HeaderDropdownType,
  NavClickHandler,
  NavLinkItem,
} from "../../../types/header";

interface DesktopNavProps {
  activeDropdown: HeaderDropdownType | null;
  navLinks: NavLinkItem[];
  onDropdownChange: (dropdown: HeaderDropdownType | null) => void;
  onNavClick: NavClickHandler;
  onProductsMenuClick: () => void;
  onProjectsMenuClick: () => void;
}

export function DesktopNav({
  activeDropdown,
  navLinks,
  onDropdownChange,
  onNavClick,
  onProductsMenuClick,
  onProjectsMenuClick,
}: DesktopNavProps) {
  return (
    <nav className="hidden xl:flex items-center justify-between gap-5 pt-1 border-t border-white/10 text-white text-base font-bold relative">
      {navLinks.map((link) => (
        <div
          key={link.name}
          className="relative group py-1"
          onMouseEnter={() =>
            link.dropdownType && onDropdownChange(link.dropdownType)
          }
          onMouseLeave={() => onDropdownChange(null)}
        >
          <a
            href={link.path || `#${link.targetId}`}
            onClick={(event) => onNavClick(event, link)}
            className="hover:text-amber-200 transition-colors py-1 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            {link.name}
            {link.dropdownType && (
              <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            )}
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full" />

          {link.dropdownType === "products" &&
            activeDropdown === "products" && (
              <div className="absolute top-full -left-20 w-[min(920px,calc(100vw-2rem))] bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-4 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {menuListProduct.map((cat) => (
                  <div key={cat.id} className="flex flex-col gap-2">
                    <h4 className="font-extrabold text-primary text-base md:text-lg border-b border-amber-200/80 pb-2 flex items-center gap-2 tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {cat.title}
                    </h4>
                    <ul className="flex flex-col gap-2 text-sm md:text-base text-gray-700 font-medium mt-1">
                      {cat.childrens.map((sub) => (
                        <li
                          key={sub.id}
                          onClick={onProductsMenuClick}
                          className="hover:text-primary hover:translate-x-1 transition-all cursor-pointer py-0.5"
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

          {link.dropdownType === "projects" &&
            activeDropdown === "projects" && (
              <div className="absolute top-full left-0 w-72 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col gap-1.5">
                  {menuProjects.map((proj) => (
                    <button
                      type="button"
                      key={proj.id}
                      onClick={onProjectsMenuClick}
                      className="px-4 py-3 rounded-lg hover:bg-amber-50 hover:text-primary transition-colors text-base md:text-lg font-bold cursor-pointer flex items-center justify-between group/proj"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary/60 group-hover/proj:bg-primary" />
                        <span>{proj.name}</span>
                      </span>
                      <span className="text-primary text-sm opacity-0 group-hover/proj:opacity-100 transition-opacity">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
        </div>
      ))}
    </nav>
  );
}
