import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const pagesToShow = 5;

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  return (
    <nav>
      <BootstrapPagination className="mt-5">
        <BootstrapPagination.Prev
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        />

        {pageNumbers.slice(startPage - 1, endPage).map((page) => (
          <BootstrapPagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </BootstrapPagination.Item>
        ))}

        <BootstrapPagination.Next
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        />
      </BootstrapPagination>
    </nav>
  );
};

export default Pagination;
