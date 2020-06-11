import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };
  return (
    <header>
      <div className="img">
        <h1 className="site-title">Houchens' Kandy Korner</h1>
        <nav>
          <ul className="container">
            <li>
              <NavLink
                exact
                className="nav-link"
                to="/"
                activeClassName="selected"
              >
                {" "}
                Login{" "}
              </NavLink>
            </li>

            {props.hasUser ? (
              <li>
                <NavLink
                  exact
                  className="nav-link"
                  to="/productTypes"
                  activeClassName="selected"
                >
                  {" "}
                  Product Types{" "}
                </NavLink>
              </li>
            ) : null}
            {props.hasUser ? (
              <li>
                <NavLink
                  exact
                  className="nav-link"
                  to="/products"
                  activeClassName="selected"
                >
                  {" "}
                  All Products{" "}
                </NavLink>
              </li>
            ) : null}
            {props.hasUser ? (
              <li>
                <NavLink
                  exact
                  className="nav-link"
                  to="/locations"
                  activeClassName="selected"
                >
                  {" "}
                  Locations{" "}
                </NavLink>
              </li>
            ) : null}
            {props.hasUser ? (
              <li>
                <NavLink
                  className="nav-link"
                  to="/employees"
                  activeClassName="selected"
                >
                  {" "}
                  Employees{" "}
                </NavLink>
              </li>
            ) : null}
            {props.hasUser ? (
              <li>
                <span className="nav-link" onClick={handleLogout}>
                  {" "}
                  Logout{" "}
                </span>
              </li>
            ) : (
              <li>
                <NavLink className="nav-link" to="/" activeClassName="selected">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(NavBar);
