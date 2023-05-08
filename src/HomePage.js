import React from 'react';
import Navbar from './Navbar';
import InteractiveImage from './InteractiveImage';
import './HomePage.css';

const HomePage = () => {
  const images = [
    {
      src: '/ReleaseArt/release1.png',
      alt: 'Release 1',
    },
    ...Array(8).fill({ isComingSoon: true }),
  ];

  return (
    <div>
      <Navbar />
      <div className="home-grid">
        {images.map((image, index) => (
          <InteractiveImage
            key={index}
            src={image.src}
            alt={image.alt}
            isComingSoon={image.isComingSoon}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
