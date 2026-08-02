import { FiChevronDown } from "react-icons/fi";
import { menuListProduct, menuProjects } from "../../../data/menuData";
import type {
  HeaderDropdownType,
  NavClickHandler,
  NavLinkItem,
} from "../../../types/header";

interface MobileNavProps {
  mobileExpanded: Record<string, boolean>;
  navLinks: NavLinkItem[];
  onMobileMenuClose: () => void;
  onNavClick: NavClickHandler;
  onNavigateProjects: () => void;
  onNavigateProducts: () => void;
  onToggleSubmenu: (key: HeaderDropdownType) => void;
}

export function MobileNav({
  mobileExpanded,
  navLinks,
  onMobileMenuClose,
  onNavClick,
  onNavigateProjects,
  onNavigateProducts,
  onToggleSubmenu,
}: MobileNavProps) {
  return (
    <div className="xl:hidden flex flex-col gap-3 pt-3 pb-2 border-t border-white/10 text-white animate-in slide-in-from-top-3 duration-300 max-h-[80vh] overflow-y-auto scrollbar-none">
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <div key={link.name} className="flex flex-col">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10">
              <a
                href={link.path || `#${link.targetId}`}
                onClick={(event) => {
                  onMobileMenuClose();
                  onNavClick(event, link);
                }}
                className="text-sm font-medium flex-1 cursor-pointer"
              >
                {link.name}
              </a>
              {link.dropdownType && (
                <button
                  type="button"
                  onClick={() => onToggleSubmenu(link.dropdownType!)}
                  className="p-1 text-white hover:text-amber-200"
                  aria-label={`Mở ${link.name}`}
                >
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded[link.dropdownType] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {link.dropdownType === "products" && mobileExpanded.products && (
              <div className="pl-4 pr-2 py-2 flex flex-col gap-3 bg-black/20 rounded-lg my-1">
                {menuListProduct.map((cat) => (
                  <div key={cat.id} className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-amber-200">
                      {cat.title}
                    </span>
                    {cat.childrens.map((sub) => (
                      <button
                        type="button"
                        key={sub.id}
                        onClick={onNavigateProducts}
                        className="text-xs text-left text-gray-300 hover:text-white py-0.5 cursor-pointer pl-2"
                      >
                        • {sub.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {link.dropdownType === "projects" && mobileExpanded.projects && (
              <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 bg-black/20 rounded-lg my-1 text-xs text-gray-300">
                {menuProjects.map((proj) => (
                  <button
                    type="button"
                    key={proj.id}
                    onClick={onNavigateProjects}
                    className="text-left hover:text-white py-1 cursor-pointer"
                  >
                    • {proj.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
