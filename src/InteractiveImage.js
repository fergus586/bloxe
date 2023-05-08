import React from 'react';
import './InteractiveImage.css';

const InteractiveImage = ({ src, alt, isComingSoon }) => {
  return (
    <div className="interactive-image">
      {isComingSoon ? (
        <div className="coming-soon">Coming Soon</div>
      ) : (
        <img src={src} alt={alt} />
      )}
    </div>
  );
};

export default InteractiveImage;
