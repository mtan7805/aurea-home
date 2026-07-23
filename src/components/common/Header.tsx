import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { menuListProduct, menuProjects } from "../../data/menuData";
import { AUTH_USER_STORAGE_KEY } from "../../data/authData";

interface NavLinkItem {
  name: string;
  targetId?: string;
  path?: string;
  dropdownType?: "products" | "projects";
}

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const storedUser = localStorage.getItem(AUTH_USER_STORAGE_KEY);
  const initialUser = storedUser
    ? (JSON.parse(storedUser) as { name: string; email: string })
    : null;

  const [inputText, setInputText] = useState("");
  const [isShowAccount, setIsShowAccount] = useState(false);
  const [authUser, setAuthUser] = useState(initialUser);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"products" | "projects" | null>(null);

  // State mở sub-menu trên Mobile
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleMobileSubmenu = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAccountMenuClick = (index: number) => {
    setIsShowAccount(false);

    if (!authUser) {
      navigate(index === 1 ? "/register" : "/login");
      return;
    }

    if (index === 1) {
      localStorage.removeItem(AUTH_USER_STORAGE_KEY);
      setAuthUser(null);
      return;
    }

    navigate("/");
  };

  // Menu links
  const navLinks: NavLinkItem[] = [
    { name: "Trang chủ", targetId: "banner" },
    { name: "Sản phẩm", path: "/products", dropdownType: "products" },
    { name: "Dự án", path: "/projects", dropdownType: "projects" },
    { name: "Tin tức", path: "/news" },
    { name: "Ước tính chi phí", path: "/calculator" },
    { name: "Khuyến mãi", targetId: "discount" },
    { name: "Quy trình", targetId: "process" },
    { name: "FAQ", targetId: "faq" },
    { name: "Liên hệ", targetId: "footer" },
  ];

  // Cuộn mượt hoặc chuyển trang
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavLinkItem
  ) => {
    e.preventDefault();

    if (item.targetId) {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
      if (location.pathname !== "/") {
        navigate(`/#${item.targetId}`);
      } else {
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`w-full ${
        location.pathname === "/"
          ? "bg-[#0a0400]/40 backdrop-blur-md border-b border-white/10"
          : "bg-[#885e45]"
      } px-5 md:px-[50px] lg:px-[130px] py-2 shadow-md fixed top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="w-full flex flex-col gap-2">
        {/* Header top row */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div
            onClick={() => {
              navigate("/");
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-[110px] h-[85px] cursor-pointer flex items-center justify-center shrink-0"
          >
            <Logo />
          </div>

          {/* Search bar */}
          <div className="hidden sm:flex relative flex-1 max-w-xl lg:max-w-2xl h-11 items-center">
            <input
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              type="text"
              placeholder="Tìm kiếm nội thất, không gian..."
              className="w-full h-full rounded-full border-none bg-white/95 text-gray-800 text-base outline-none pl-4 pr-12 shadow-inner focus:ring-2 focus:ring-primary transition-all"
            />
            <button className="absolute right-1.5 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer">
              <FiSearch className="w-4 h-4" />
            </button>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-4 sm:gap-6 text-white">
            {/* Giỏ hàng */}
            <div className="flex flex-col items-center cursor-pointer hover:text-amber-200 transition-colors relative group">
              <div className="relative">
                <GrCart className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="hidden sm:inline text-sm mt-1 font-semibold">Giỏ hàng</span>
            </div>

            {/* Tài khoản */}
            <div className="relative">
              <div
                onClick={() => setIsShowAccount(!isShowAccount)}
                className="flex flex-col items-center cursor-pointer hover:text-amber-200 transition-colors group"
              >
                <MdOutlineAccountCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-sm mt-1 font-semibold">
                  {authUser ? authUser.name : "Tài khoản"}
                </span>
              </div>

              {/* Dropdown Tài khoản */}
              {isShowAccount && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-14 min-w-[140px] w-max bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 px-1 text-gray-800 text-base z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {(!authUser
                    ? ["Đăng nhập", "Đăng ký"]
                    : ["Trang cá nhân", "Đăng xuất"]
                  ).map((item, index) => (
                    <p
                      key={item}
                      onClick={() => handleAccountMenuClick(index)}
                      className="px-4 py-2 rounded-lg text-left font-semibold hover:bg-amber-50 hover:text-primary cursor-pointer transition-colors whitespace-nowrap"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar mobile */}
        <div className="flex sm:hidden relative w-full h-10 items-center">
          <input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full h-full rounded-full border-none bg-white/95 text-gray-800 text-sm outline-none pl-4 pr-10 shadow-inner"
          />
          <button className="absolute right-1 h-7 w-7 rounded-full bg-primary text-white flex items-center justify-center">
            <FiSearch className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Desktop Navbar with Mega Dropdowns */}
        <nav className="hidden lg:flex items-center justify-between gap-6 xl:gap-8 pt-1 border-t border-white/10 text-white text-base xl:text-[17px] font-bold relative">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group py-1"
              onMouseEnter={() => link.dropdownType && setActiveDropdown(link.dropdownType)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.path || `#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link)}
                className="hover:text-amber-200 transition-colors py-1 flex items-center gap-1 shrink-0 cursor-pointer"
              >
                {link.name}
                {link.dropdownType && (
                  <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full" />

              {/* Mega Menu Sản phẩm (8 danh mục với sub-items) */}
              {link.dropdownType === "products" && activeDropdown === "products" && (
                <div className="absolute top-full -left-20 w-[920px] bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-4 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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
                            onClick={() => {
                              navigate("/products");
                              setActiveDropdown(null);
                            }}
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

              {/* Dropdown Menu Dự án (7 loại hình công trình) */}
              {link.dropdownType === "projects" && activeDropdown === "projects" && (
                <div className="absolute top-full left-0 w-72 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col gap-1.5">
                    {menuProjects.map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => {
                          setActiveDropdown(null);
                        }}
                        className="px-4 py-3 rounded-lg hover:bg-amber-50 hover:text-primary transition-colors text-base md:text-lg font-bold cursor-pointer flex items-center justify-between group/proj"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-primary/60 group-hover/proj:bg-primary" />
                          <span>{proj.name}</span>
                        </div>
                        <span className="text-primary text-sm opacity-0 group-hover/proj:opacity-100 transition-opacity">→</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile drawer menu với Accordion Submenu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col gap-3 pt-3 pb-2 border-t border-white/10 text-white animate-in slide-in-from-top-3 duration-300 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10">
                    <a
                      href={link.path || `#${link.targetId}`}
                      onClick={(e) => {
                        if (!link.dropdownType) handleNavClick(e, link);
                      }}
                      className="text-sm font-medium flex-1 cursor-pointer"
                    >
                      {link.name}
                    </a>
                    {link.dropdownType && (
                      <button
                        onClick={() => toggleMobileSubmenu(link.dropdownType!)}
                        className="p-1 text-white hover:text-amber-200"
                      >
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileExpanded[link.dropdownType] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu Mobile Sản phẩm */}
                  {link.dropdownType === "products" && mobileExpanded["products"] && (
                    <div className="pl-4 pr-2 py-2 flex flex-col gap-3 bg-black/20 rounded-lg my-1">
                      {menuListProduct.map((cat) => (
                        <div key={cat.id} className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-amber-200">
                            {cat.title}
                          </span>
                          {cat.childrens.map((sub) => (
                            <span
                              key={sub.id}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                              }}
                              className="text-xs text-gray-300 hover:text-white py-0.5 cursor-pointer pl-2"
                            >
                              • {sub.name}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Submenu Mobile Dự án */}
                  {link.dropdownType === "projects" && mobileExpanded["projects"] && (
                    <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 bg-black/20 rounded-lg my-1 text-xs text-gray-300">
                      {menuProjects.map((proj) => (
                        <span
                          key={proj.id}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                          }}
                          className="hover:text-white py-1 cursor-pointer"
                        >
                          • {proj.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
