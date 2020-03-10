import React, { useEffect, useRef } from "react";
import { useFilter } from "../hooks/useFilter";

export const Filter = () => {
  const select = useRef(null);
  const { filterDir, changeDir, changeFilter } = useFilter();
  useEffect(() => {
    window.M.FormSelect.init(select.current);
  }, []);

  return (
    <div className="row valign-wrapper">
      <div className="input-field col s6 offset-s3">
        <select ref={select} onChange={e => changeFilter(e.target.value)} value={"default"}>
          <option value="default" disabled>
            Sort By:
          </option>
          <option value="email">Email</option>
          <option value="username">Username</option>
          <option value="completed">Status</option>
        </select>
        <label></label>
      </div>
      <button className={`btn-floating btn-large waves-effect waves-light teal lighten-2 ${filterDir && "rotate180"}`} onClick={e => changeDir()}>
        <i className="material-icons dp48">arrow_upward</i>
      </button>
    </div>
  );
};
