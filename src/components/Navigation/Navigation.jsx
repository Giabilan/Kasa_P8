import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="containerNavigation">
      <ul className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navActive" : "")}
        >
          <li className="listLink">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "navActive" : "")}
        >
          <li className="listLink">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
