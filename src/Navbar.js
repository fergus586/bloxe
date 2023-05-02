import React from 'react';
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  const history = useHistory();
  const artists = [
    { name: 'Artist 1', image: '/image1.png' },
    { name: 'Artist 2', image: '/image2.png' },
    { name: 'Artist 3', image: '/image3.png' },
    { name: 'Artist 4', image: '/image4.png' },
  ];

  const handleArtistClick = (artistName) => {
    history.push(`/artist/${artistName}`);
  };

  return (
    <nav className="navbar">
      <img
        src="/logo.png"
        alt="Logo"
        className="navbar-logo"
        style={isAuthenticated ? { animation: 'fadeIn 2s' } : {}}
      />
      <div className="artist-links">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="artist-item"
            onClick={() => handleArtistClick(artist.name)}
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
