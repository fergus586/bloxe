import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink
            to="/releases"
            className="navbar-link"
            activeClassName="active"
          >
            Releases
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/submissions"
            className="navbar-link"
            activeClassName="active"
          >
            Submissions
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/artists"
            className="navbar-link"
            activeClassName="active"
          >
            Artists
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/about"
            className="navbar-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/contact-us"
            className="navbar-link"
            activeClassName="active"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
