// PaginationComponent.jsx
import React from "react";
import { PaginationComponent, PageButton } from "./styledPagination";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationComponent>
      {pages.map((pageNum) => (
        <PageButton
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          active={currentPage === pageNum}
        >
          {pageNum}
        </PageButton>
      ))}
    </PaginationComponent>
  );
};
