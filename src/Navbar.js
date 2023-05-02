import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const artistNames = ['SKOPEZ', 'SPICE MERCHANTS', '---', '----']; // Add or replace with your desired artist names

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {artistNames.map((name, index) => (
          <li key={index} className="navbar-item">
            {name}
          </li>
        ))}
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
