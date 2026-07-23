import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";

interface NavLinkItem {
  name: string;
  targetId?: string;
  path?: string;
  hasDropdown?: boolean;
}

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [inputText, setInputText] = useState("");
  const [isShowAccount, setIsShowAccount] = useState(false);
  const [isLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Danh sách đường dẫn điều hướng của Header
  const navLinks: NavLinkItem[] = [
    { name: "Trang chủ", targetId: "banner" },
    { name: "Sản phẩm", path: "/products", hasDropdown: true },
    { name: "Dự án", path: "/projects", hasDropdown: true },
    { name: "Tin tức", path: "/news", hasDropdown: true },
    { name: "Ước tính chi phí", path: "/calculator" },
    { name: "Khuyến mãi", targetId: "discount" },
    { name: "Quy trình", targetId: "process" },
    { name: "FAQ", targetId: "faq" },
    { name: "Liên hệ", targetId: "footer" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavLinkItem,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.targetId) {
      if (location.pathname !== "/") {
        navigate(`/#${item.targetId}`);
      } else {
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <header
      className={`w-full ${
        location.pathname === "/"
          ? "bg-[#0a0400]/40 backdrop-blur-md border-b border-white/10"
          : "bg-[#885e45]"
      } px-4 md:px-10 lg:px-28 py-2 shadow-md fixed top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          {/* LOGO  */}
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

          {/* Thanh tìm kiếm*/}
          <div className="hidden sm:flex relative flex-1 max-w-md md:max-w-lg h-11 items-center">
            <input
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              type="text"
              placeholder="Tìm kiếm nội thất, không gian..."
              className="w-full h-full rounded-full border-none bg-white/95 text-gray-800 text-sm outline-none pl-4 pr-12 shadow-inner focus:ring-2 focus:ring-primary transition-all"
            />
            <button className="absolute right-1.5 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer">
              <FiSearch className="w-4 h-4" />
            </button>
          </div>

          {/* Icon */}
          <div className="hidden lg:flex items-center gap-7 text-white">
            <div className="flex flex-col items-center cursor-pointer hover:text-amber-200 transition-colors group">
              <AiOutlineHeart className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <span className="text-xs mt-1 font-medium">Yêu thích</span>
            </div>

            <div className="flex flex-col items-center cursor-pointer hover:text-amber-200 transition-colors relative group">
              <div className="relative">
                <GrCart className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="text-xs mt-1 font-medium">Giỏ hàng</span>
            </div>

            {/* Menu Tài khoản */}
            <div className="relative">
              <div
                onClick={() => setIsShowAccount(!isShowAccount)}
                className="flex flex-col items-center cursor-pointer hover:text-amber-200 transition-colors group"
              >
                <MdOutlineAccountCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <span className="text-xs mt-1 font-medium">Tài khoản</span>
              </div>

              {/* Dropdown Menu Tài khoản */}
              {isShowAccount && (
                <div className="absolute left-1/2 -translate-x-1/2 top-14 min-w-[130px] w-max bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 px-1 text-gray-800 text-sm z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {(!isLogin
                    ? ["Đăng nhập", "Đăng ký"]
                    : ["Trang cá nhân", "Đăng xuất"]
                  ).map((item) => (
                    <p
                      key={item}
                      className="px-3.5 py-2 rounded-lg text-left font-medium hover:bg-amber-50 hover:text-primary cursor-pointer transition-colors whitespace-nowrap"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Giỏ hàng & Nút Hamburger Menu) */}
          <div className="flex lg:hidden items-center gap-3 text-white">
            <div className="relative p-1.5 cursor-pointer">
              <GrCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Thanh tìm kiếm  */}
        <div className="flex sm:hidden relative w-full h-10 items-center">
          <input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full h-full rounded-full border-none bg-white/95 text-gray-800 text-xs outline-none pl-4 pr-10 shadow-inner"
          />
          <button className="absolute right-1 h-7 w-7 rounded-full bg-primary text-white flex items-center justify-center">
            <FiSearch className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Thanh Menu điều hướng */}
        <nav className="hidden lg:flex items-center justify-between gap-6 xl:gap-8 pt-1 border-t border-white/10 text-white text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path || `#${link.targetId}`}
              onClick={(e) => handleNavClick(e, link)}
              className="hover:text-amber-200 transition-colors py-1 relative group cursor-pointer flex items-center gap-1 shrink-0"
            >
              {link.name}
              {link.hasDropdown && (
                <FiChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Toggle */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col gap-3 pt-3 pb-2 border-t border-white/10 text-white animate-in slide-in-from-top-3 duration-300">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path || `#${link.targetId}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <FiChevronDown className="w-4 h-4 opacity-70" />
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-white/10 flex items-center justify-around text-xs">
              <span className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/10 cursor-pointer">
                <AiOutlineHeart className="w-4 h-4" /> Yêu thích
              </span>
              <span className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/10 cursor-pointer">
                <MdOutlineAccountCircle className="w-4 h-4" /> Tài khoản
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
