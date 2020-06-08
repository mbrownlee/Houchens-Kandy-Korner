import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import "./NavBar.css";

const NavBar = props => {
  // const handleLogout = () => {
  //   props.clearUser();
  //   props.history.push('/');
  // }
  return (
    <header>
      <h1 className="site-title">
        Houchens' Kandy Korner
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink exact className="nav-link" to="/productTypes" activeClassName="selected"> Product Type </NavLink>
          </li>
          <li>
            <NavLink exact className="nav-link" to="/locations" activeClassName="selected"> Locations </NavLink>
          </li>
          <li>
                <NavLink className="nav-link" to="/employees" activeClassName="selected"> Employees </NavLink>
              </li>
          {/* {props.hasUser
            ? <li>
                <NavLink className="nav-link" to="/animals" activeClassName="selected"> Animals </NavLink>
              </li>
            : null}
          <li>
            <NavLink className="nav-link" to="/location" activeClassName="selected"> Locations </NavLink>
          </li>
          {props.hasUser
            ? <li>
                <NavLink className="nav-link" to="/employees" activeClassName="selected"> Employees </NavLink>
              </li>
            : null}
          {props.hasUser
            ? <li>
                <NavLink className="nav-link" to="/owner" activeClassName="selected"> Owners </NavLink>
              </li>
            : null}
            {props.hasUser
            ? <li>
                <span className="nav-link" onClick={handleLogout}> Logout </span>
              </li>
            : <li>
                <NavLink className="nav-link" to="/login" activeClassName="selected">Login</NavLink>
              </li>} */}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);