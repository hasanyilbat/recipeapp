import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-between">
        <div className="navbar-brand ">
          <Link to="/home" className="navbar-link">
            <span className="text-dark">&lt;HASAN/&gt;</span> RECIPE{" "}
          </Link>
        </div>
        <div>
          <NavLink to="/about" className="navbar-brand">
            ABOUT
          </NavLink>
          <a className="navbar-brand" href="https://github.com/hasanyilbat">
            GITHUP
          </a>
          <Link to="/" className="navbar-brand">
            LOGOUT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
