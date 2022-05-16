import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navmenu">
      <div className="nav-wrapper">
        <Link to="#" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
