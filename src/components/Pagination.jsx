import React, { useContext } from "react";
import classNames from "classnames";
import { TasksContext } from "../context/tasks.context";

export const Pagination = () => {
  const { state, dispatch } = useContext(TasksContext);
  const pages = Math.ceil(state.task.all / state.perPage) || 1;
  const isFirst = state.currentPage === 1;
  const isLast = state.currentPage === pages;

  return (
    <ul className="pagination">
      <li className={classNames("waves-effect", { disabled: isFirst })}>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "PREV_PAGE" });
          }}
          className={classNames({ disabled: isFirst })}
        >
          <i className="material-icons">chevron_left</i>
        </a>
      </li>

      {new Array(pages).fill(0).map((_, i) => {
        const index = i + 1;

        return (
          <li key={index} className={classNames({ active: index === state.currentPage })}>
            <a href="#!" onClick={() => dispatch({ type: "SET_PAGE", payload: index })}>
              {index}
            </a>
          </li>
        );
      })}

      <li className={classNames("waves-effect", { disabled: isLast })}>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "NEXT_PAGE" });
          }}
          className={classNames({ disabled: isLast })}
        >
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};
