import { type FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import { navLinks } from "../../constants/navLinks";
import { useCartStore } from "../../stores/cartStore";
import type {
  HeaderDropdownType,
  NavClickHandler,
} from "../../types/header";
import {
  clearStoredAuthUser,
  getStoredAuthUser,
} from "../../utils/authStorage";
import { DesktopNav } from "./header/DesktopNav";
import { HeaderActions } from "./header/HeaderActions";
import { HeaderSearch } from "./header/HeaderSearch";
import { MobileNav } from "./header/MobileNav";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartCount = useCartStore((state) => state.items.length);
  const [inputText, setInputText] = useState("");
  const [isShowAccount, setIsShowAccount] = useState(false);
  const [authUser, setAuthUser] = useState(getStoredAuthUser);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<HeaderDropdownType | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    if (location.pathname !== "/products") return;

    const params = new URLSearchParams(location.search);
    setInputText(params.get("search") ?? "");
  }, [location.pathname, location.search]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (key: HeaderDropdownType) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const keyword = inputText.trim();

    closeMenus();

    if (!keyword) {
      navigate("/products");
      return;
    }

    navigate(`/products?search=${encodeURIComponent(keyword)}`);
  };

  const handleAccountMenuClick = (index: number) => {
    setIsShowAccount(false);

    if (!authUser) {
      navigate(index === 1 ? "/register" : "/login");
      return;
    }

    if (index === 1) {
      clearStoredAuthUser();
      setAuthUser(null);
      return;
    }

    navigate("/");
  };

  const handleNavClick: NavClickHandler = (event, item) => {
    event.preventDefault();
    closeMenus();

    if (item.path) {
      navigate(item.path);
      return;
    }

    if (!item.targetId) return;

    if (location.pathname !== "/") {
      navigate(`/#${item.targetId}`);
      return;
    }

    document
      .getElementById(item.targetId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateProducts = () => {
    navigate("/products");
    closeMenus();
  };

  const handleNavigateProjects = () => {
    navigate("/projects");
    closeMenus();
  };

  const accountMenuItems = !authUser
    ? ["Đăng nhập", "Đăng ký"]
    : ["Trang cá nhân", "Đăng xuất"];

  return (
    <header
      className={`w-full ${
        location.pathname === "/"
          ? "bg-[#0a0400]/40 backdrop-blur-md border-b border-white/10"
          : "bg-[#885e45]"
      } px-4 md:px-8 xl:px-[130px] py-2 shadow-md fixed top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <button
            type="button"
            onClick={handleLogoClick}
            className="w-[88px] h-[64px] sm:w-[100px] sm:h-[76px] xl:w-[110px] xl:h-[85px] cursor-pointer flex items-center justify-center shrink-0"
            aria-label="Về trang chủ"
          >
            <Logo />
          </button>

          <HeaderSearch
            inputText={inputText}
            onInputChange={setInputText}
            onSubmit={handleSearchSubmit}
          />

          <HeaderActions
            accountMenuItems={accountMenuItems}
            authUser={authUser}
            cartCount={cartCount}
            isMobileMenuOpen={isMobileMenuOpen}
            isShowAccount={isShowAccount}
            onAccountMenuClick={handleAccountMenuClick}
            onAccountToggle={() => setIsShowAccount((current) => !current)}
            onMobileMenuToggle={() =>
              setIsMobileMenuOpen((current) => !current)
            }
          />
        </div>

        <HeaderSearch
          inputText={inputText}
          isMobile
          onInputChange={setInputText}
          onSubmit={handleSearchSubmit}
        />

        <DesktopNav
          activeDropdown={activeDropdown}
          navLinks={navLinks}
          onDropdownChange={setActiveDropdown}
          onNavClick={handleNavClick}
          onProductsMenuClick={handleNavigateProducts}
          onProjectsMenuClick={handleNavigateProjects}
        />

        {isMobileMenuOpen && (
          <MobileNav
            mobileExpanded={mobileExpanded}
            navLinks={navLinks}
            onMobileMenuClose={() => setIsMobileMenuOpen(false)}
            onNavClick={handleNavClick}
            onNavigateProducts={handleNavigateProducts}
            onNavigateProjects={handleNavigateProjects}
            onToggleSubmenu={toggleMobileSubmenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
