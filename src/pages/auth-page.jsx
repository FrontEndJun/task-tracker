import React, { useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/auth.context";

export const AuthPage = () => {
  const { req, loading, errors } = useFetch();
  const [form, setForm] = useState({ username: "", password: "" });
  const auth = useContext(AuthContext);

  const submitHandler = async e => {
    e.preventDefault();
    const res = await req("/auth/login", "POST", { ...form }, { "Content-Type": "application/json" });
    if (res) auth.login(res.tkn, res.id, res.isAdmin);
  };

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2 className="offset-s4 col">LogIn</h2>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="input-field col s6">
              <input id="username" type="text" name="username" className="validate" onChange={changeHandler} />
              <label htmlFor="first_name" className="active">
                Username
              </label>
            </div>
            <div className="input-field col s6">
              <input id="password" type="password" name="password" onChange={changeHandler} />
              <label
                htmlFor="last_name"
                className="active
              "
              >
                Password
              </label>
            </div>

            <button type="submit" className="waves-effect waves-light btn col s4 offset-s4" disabled={loading && !errors.isErrors}>
              Sign In
            </button>
          </div>
        </form>
      </div>
      {errors && !errors.isErrors && <p className="col s12 red-text">{errors.msg}</p>}
    </div>
  );
};
