// Pagination.js
import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav>
      <BootstrapPagination>
        {pageNumbers.map((page) => (
          <BootstrapPagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </BootstrapPagination.Item>
        ))}
      </BootstrapPagination>
    </nav>
  );
};

export default Pagination;
