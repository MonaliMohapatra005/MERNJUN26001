import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Navbar() {

    const activeLink = ({ isActive }) =>
  isActive ? "text-blue-300 font-bold" : "text-white";


  return (
    <nav className="flex justify-between item-center  p-4 bg-blue-900 text-white">
        <div>logo</div>
    <div className="flex item-center gap-8">

       <NavLink to="/" className={activeLink}>
    Home
  </NavLink>

  <NavLink to="/about" className={activeLink}>
    About
  </NavLink>

  <NavLink to="/services" className={activeLink}>
    Services
  </NavLink>

  <NavLink to="/contact" className={activeLink}>
    Contact
  </NavLink>
    </div>
      <button>login</button>
    </nav>
  );
}

export default Navbar;