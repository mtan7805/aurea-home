import { FiMenu, FiX } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { MdOutlineAccountCircle } from "react-icons/md";
import type { AuthUser } from "../../../types/header";

interface HeaderActionsProps {
  accountMenuItems: string[];
  authUser: AuthUser | null;
  cartCount: number;
  isMobileMenuOpen: boolean;
  isShowAccount: boolean;
  onAccountMenuClick: (index: number) => void;
  onAccountToggle: () => void;
  onCartClick: () => void;
  onMobileMenuToggle: () => void;
}

export function HeaderActions({
  accountMenuItems,
  authUser,
  cartCount,
  isMobileMenuOpen,
  isShowAccount,
  onAccountMenuClick,
  onAccountToggle,
  onCartClick,
  onMobileMenuToggle,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-5 text-white">
      <button
        type="button"
        onClick={onCartClick}
        className="flex flex-col items-center cursor-pointer hover:text-amber-200 transition-colors relative group"
        aria-label="Giỏ hàng"
      >
        <div className="relative">
          <GrCart className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-xs font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </div>
        <span className="hidden sm:inline text-sm mt-1 font-semibold">
          Giỏ hàng
        </span>
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={onAccountToggle}
          className="flex flex-col items-center cursor-pointer hover:text-amber-200 transition-colors group"
        >
          <MdOutlineAccountCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-sm mt-1 font-semibold max-w-28 truncate">
            {authUser ? authUser.name : "Tài khoản"}
          </span>
        </button>

        {isShowAccount && (
          <div className="absolute right-0 top-10 sm:top-14 min-w-[140px] w-max bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 px-1 text-gray-800 text-base z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {accountMenuItems.map((item, index) => (
              <button
                type="button"
                key={item}
                onClick={() => onAccountMenuClick(index)}
                className="w-full px-4 py-2 rounded-lg text-left font-semibold hover:bg-amber-50 hover:text-primary cursor-pointer transition-colors whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onMobileMenuToggle}
        className="xl:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none transition-colors"
        aria-label="Mở menu"
      >
        {isMobileMenuOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
