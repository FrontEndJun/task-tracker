import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const NavBar = () => {
  const auth = useContext(AuthContext);

  const logoutHandler = e => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Task Tracker
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/tasks/1">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              {auth.isAuth ? (
                <a href="/logout" onClick={logoutHandler}>
                  Log out
                </a>
              ) : (
                <NavLink to="/auth">Log In</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
