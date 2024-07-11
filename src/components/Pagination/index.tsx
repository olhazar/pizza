import React from "react";

import ReactPaginate from "react-paginate";

import s from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"

    />
  );
};
