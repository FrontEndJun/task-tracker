import React, { useEffect, useRef, useContext } from "react";
import { TasksContext } from "../context/tasks.context";

export const Filter = () => {
  const select = useRef(null);
  const select1 = useRef(null);
  const { state, dispatch } = useContext(TasksContext);
  useEffect(() => {
    window.M.FormSelect.init(select.current);
    window.M.FormSelect.init(select1.current);
  }, []);

  const toggleButton = () => (state.filterDir === "ASC" ? "DESC" : "ASC");

  const ch = e => {
    dispatch({ type: "CHANGE_TASKS_PER_PAGE", payload: e.target.value });
  };

  return (
    <div className="row valign-wrapper">
      <div className="input-field col">
        <select ref={select} onChange={e => dispatch({ type: "CHANGE_FILTER_NAME", payload: e.target.value })} value={""}>
          <option value="" disabled>
            Sort By:
          </option>
          <option value="email">Email</option>
          <option value="username">Username</option>
          <option value="completed">Status</option>
        </select>
        <label></label>
      </div>
      <button
        className={`btn-floating btn-large waves-effect waves-light teal lighten-2 ${state.filterDir === "DESC" ? "rotate180" : ""}`}
        onClick={e => dispatch({ type: "CHANGE_FILTER_DIRECTION", payload: toggleButton() })}
      >
        <i className="material-icons dp48">arrow_upward</i>
      </button>
      <div className="input-field col">
        <select ref={select1} onChange={ch} value={state.perPage}>
          <option value="3">3</option>
          <option value="5">5</option>
        </select>
        <label>Показывать по:</label>
      </div>
    </div>
  );
};
