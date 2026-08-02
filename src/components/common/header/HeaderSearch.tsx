import type { FormEventHandler } from "react";
import { FiSearch } from "react-icons/fi";

interface HeaderSearchProps {
  inputText: string;
  isMobile?: boolean;
  onInputChange: (value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function HeaderSearch({
  inputText,
  isMobile = false,
  onInputChange,
  onSubmit,
}: HeaderSearchProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={
        isMobile
          ? "flex sm:hidden relative w-full h-10 items-center"
          : "hidden sm:flex relative flex-1 max-w-xl xl:max-w-2xl h-10 xl:h-11 items-center"
      }
    >
      <input
        onChange={(event) => onInputChange(event.target.value)}
        value={inputText}
        type="text"
        placeholder={isMobile ? "Tìm kiếm..." : "Tìm kiếm nội thất, không gian..."}
        className={
          isMobile
            ? "w-full h-full rounded-full border-none bg-white/95 text-gray-800 text-sm outline-none pl-4 pr-10 shadow-inner"
            : "w-full h-full rounded-full border-none bg-white/95 text-gray-800 text-sm xl:text-base outline-none pl-4 pr-12 shadow-inner focus:ring-2 focus:ring-primary transition-all"
        }
      />
      <button
        type="submit"
        className={
          isMobile
            ? "absolute right-1 h-7 w-7 rounded-full bg-primary text-white flex items-center justify-center"
            : "absolute right-1.5 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer"
        }
        aria-label="Tìm kiếm"
      >
        <FiSearch className={isMobile ? "w-3.5 h-3.5" : "w-4 h-4"} />
      </button>
    </form>
  );
}
