import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: Array<number | "..."> = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let page = startPage; page <= endPage; page += 1) {
      pages.push(page);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getVisiblePages();

  return (
    <nav
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
      aria-label="Phân trang"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-10 min-w-10 rounded-lg border border-gray-200 bg-white px-3 text-gray-700 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors cursor-pointer"
        aria-label="Trang trước"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="h-10 min-w-10 px-2 flex items-center justify-center text-gray-400 font-bold"
          >
            ...
          </span>
        ) : (
          <button
            type="button"
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 min-w-10 rounded-lg px-3 text-sm font-bold transition-colors cursor-pointer ${
              currentPage === page
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "border border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-10 min-w-10 rounded-lg border border-gray-200 bg-white px-3 text-gray-700 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors cursor-pointer"
        aria-label="Trang sau"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
