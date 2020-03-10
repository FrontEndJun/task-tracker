import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ currentPage, pages }) => {
  const isFirst = currentPage == 1;
  const isLast = currentPage == pages;

  return (
    <ul className="pagination">
      <li key="1" className={`waves-effect ${isFirst ? "disabled" : ""}`}>
        <Link to={`/tasks/${currentPage - 1}`} className={isFirst ? "disabled" : ""}>
          <i className="material-icons">chevron_left</i>
        </Link>
      </li>
      <li key="2" className="active">
        <a href="#!">{currentPage}</a>
      </li>
      <li key="3" className={`waves-effect ${isLast ? "disabled" : ""}`}>
        <Link to={`/tasks/${currentPage + 1}`} className={isLast ? "disabled" : ""}>
          <i className="material-icons">chevron_right</i>
        </Link>
      </li>
    </ul>
  );
};
