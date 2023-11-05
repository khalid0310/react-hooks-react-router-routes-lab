import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  marginRight: '15px',
};

function NavBar() {
  return (
    <div className="navbar">
     <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" style={linkStyle}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={linkStyle}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={linkStyle}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;