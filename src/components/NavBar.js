import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar" className="row">
      <NavLink to="/" className="navBarHome">
        Home
      </NavLink>
      <NavLink to="/products" className="navBarProducts">
        Products
      </NavLink>
      <NavLink to="/categories" className="active">
        Categories
      </NavLink>
      <NavLink to="/login" className="active">
        Login/Register
      </NavLink>
    </div>
  );
};

export default NavBar;
