import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import React, { useEffect, useState } from "react";

const Pagination = React.memo(({ total, currentPage, setCurrentPage }) => {
  total = total || 10;
  let perPage = DEFAULT_ROW;
  currentPage = currentPage || DEFAULT_PAGE_NUMBER;
  const totalPageNumbers = Math.ceil(total / perPage);
  const [numberPage, setNumberPage] = useState(0);

  return (
    <div className="overflow-hidden ">
      <ul className="flex flex-row overflow-x-auto justify-center">
        <li>
          <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">
            {"<"}
          </span>
        </li>
        {Array.from(
          Array(totalPageNumbers > 10 ? 10 : totalPageNumbers),
          (_, x) =>
            totalPageNumbers <= 10 || currentPage < 7
              ? x + 1
              : totalPageNumbers - currentPage >= 4
              ? currentPage - 5 + x
              : totalPageNumbers - 9 + x
        ).map((pageNo, idx) => (
          <span
            key={idx}
            className={`page-link active  border border-secondary-background rounded-full ${
              pageNo === currentPage
                ? "bg-secondary-background"
                : "pagination-inactive-small"
            }`}
            onClick={() =>
              pageNo === currentPage ? undefined : setCurrentPage(pageNo)
            }
          >
            {pageNo}
          </span>
        ))}

        <li>
          <span className="page-link text-other-muted border border-other-borderPagination rounded-full ">
            {">"}
          </span>
        </li>
      </ul>
    </div>
  );
});
export default Pagination;
