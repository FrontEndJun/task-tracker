import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const TaskCreator = () => {
  const [form, setForm] = useState({ username: "", email: "" });
  const { req } = useFetch();
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = async e => {
    e.preventDefault();
    await req("/tasks/create", "POST", { ...form }, { "Content-Type": "application/json" });
  };
  return (
    <form onSubmit={submitHandler} className="row valign-wrapper">
      <div className="col s2">
        <input id="username" placeholder="Username" type="text" className="validate" name="username" onChange={changeHandler} />
      </div>
      <div className="col s3">
        <input id="email" placeholder="Email" type="email" className="validate" name="email" onChange={changeHandler} />
      </div>
      <div className="col s6">
        <textarea id="text" placeholder="Task Text" className="materialize-textarea" name="text" onChange={changeHandler}></textarea>
      </div>
      <div className="col s1">
        <button type="submit" className="waves-effect waves-light btn">
          Add Task
        </button>
      </div>
    </form>
  );
};
