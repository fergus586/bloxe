import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const artists = [
    { name: 'Artist 1', image: '/image1.png' },
    { name: 'Artist 2', image: '/image2.png' },
    { name: 'Artist 3', image: '/image3.png' },
    { name: 'Artist 4', image: '/image4.png' },
  ];

  const handleClick = (artist) => {
    navigate('/artist/' + artist.name);
  };

  return (
    <nav className="navbar">
      <div className="artist-links">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="artist-item"
            onClick={() => handleClick(artist)}
          >
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <span className="artist-name">{artist.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
