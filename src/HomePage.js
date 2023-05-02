import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';

const HomePage = ({ isAuthenticated }) => {
  return (
    <div className="home-page">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="about-section">
        <h2 className="about-title">About Bloxe Record Label</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum. Aliquam pellentesque odio eget
          ullamcorper. Quisque at tortor vitae quam scelerisque dignissim.
          Etiam condimentum, velit a luctus venenatis, libero libero gravida
          tellus, eget tincidunt dolor mi id orci.
        </p>
        <p>
          Mauris volutpat vehicula metus, nec tempus nisl eleifend eget. Morbi
          feugiat neque vel nibh tempus, at vulputate mauris consectetur.
          Suspendisse fringilla, purus eget condimentum rutrum, massa mauris
          eleifend sapien, non porttitor nunc ligula nec risus.
        </p>
        <div className="social-links">
          <a
            href="https://soundcloud.com" // Replace with your SoundCloud link
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            SoundCloud
          </a>
          <a
            href="https://instagram.com" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
