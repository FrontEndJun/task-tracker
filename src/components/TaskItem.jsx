import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useFetch } from "../hooks/useFetch";

export const TaskItem = ({ id, email, text, completed, username, edited }) => {
  const [hasChanges, setHasChages] = useState(false);
  const [values, setValues] = useState({ text, completed });
  const { admin, token } = useContext(AuthContext);
  const { req } = useFetch();
  const inputChangeHandler = e => {
    setValues({ ...values, text: e.target.value });
    setHasChages(true);
  };
  const checkboxChangeHandler = e => {
    setValues({ ...values, completed: !completed });
    setHasChages(true);
  };

  const clickHandler = async e => {
    setHasChages(false);
    const res = await req(`/tasks/${id}`, "PUT", { ...values }, { "Content-Type": "application/json", Authorization: `Bearer ${token}` });
  };
  return (
    <tr className="row valign-wrapper">
      <td className="col s3">{email}</td>
      <td className="col s2">{username}</td>
      <td className="col s4">
        <textarea id="id" name="text" disabled={!admin} className="materialize-textarea" value={values.text} onChange={inputChangeHandler}></textarea>
      </td>
      <td className="col s1 valign-wrapper">
        <label className="">
          <input type="checkbox" name="completed" className="filled-in" defaultChecked={values.completed} disabled={!admin} onChange={checkboxChangeHandler} />
          <span> </span>
        </label>
      </td>
      <td className="col s2">
        <button className={`btn waves-effect waves-light  ${hasChanges ? "" : "none"}`} type="submit" name="action" onClick={clickHandler}>
          Save
          <i className="material-icons dp48">autorenew</i>
        </button>
        {edited ? "Отредактировано Администратором" : ""}
      </td>
    </tr>
  );
};
