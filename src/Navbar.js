import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink to="/releases" activeClassName="active" className="navbar-link">
            Releases
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/submissions" activeClassName="active" className="navbar-link">
            Submissions
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/artists" activeClassName="active" className="navbar-link">
            Artists
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" activeClassName="active" className="navbar-link">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact-us" activeClassName="active" className="navbar-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
