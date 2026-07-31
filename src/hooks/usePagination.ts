import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface PageChangeOptions {
  replace?: boolean;
  scroll?: boolean;
}

const getPageParam = (params: URLSearchParams) => {
  const page = Number(params.get("page"));
  return Number.isInteger(page) && page > 0 ? page : 1;
};

export const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() =>
    getPageParam(searchParams),
  );

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const pageFromUrl = getPageParam(searchParams);
    setCurrentPage((current) =>
      current === pageFromUrl ? current : pageFromUrl,
    );
  }, [searchParams]);

  const handlePageChange = useCallback(
    (page: number, options: PageChangeOptions = {}) => {
      const nextPage = Math.min(Math.max(page, 1), Math.max(totalPages, 1));
      const nextParams = new URLSearchParams(searchParams);

      if (nextPage > 1) {
        nextParams.set("page", String(nextPage));
      } else {
        nextParams.delete("page");
      }

      setCurrentPage(nextPage);
      setSearchParams(nextParams, { replace: options.replace ?? false });

      if (options.scroll !== false) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [searchParams, setSearchParams, totalPages],
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      handlePageChange(totalPages, { replace: true, scroll: false });
    }
  }, [currentPage, handlePageChange, totalPages]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, items, itemsPerPage]);

  const resetPage = useCallback(
    (options?: PageChangeOptions) => handlePageChange(1, options),
    [handlePageChange],
  );

  return {
    currentPage,
    totalPages,
    paginatedItems,
    handlePageChange,
    resetPage,
  };
};
