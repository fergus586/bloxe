import React, { useState } from 'react';
import './PasswordPage.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const PasswordPage = ({ onPasswordSuccess }) => {
  const [clickSequence, setClickSequence] = useState([]);
  const correctSequence = [1, 2, 3, 4];

  const handleClick = (imageNumber) => {
    setClickSequence((prevSequence) => [...prevSequence, imageNumber]);

    if (clickSequence.length === correctSequence.length - 1) {
      const newSequence = [...clickSequence, imageNumber];
      if (newSequence.toString() === correctSequence.toString()) {
        onPasswordSuccess();
      } else {
        alert('Incorrect sequence. Please try again.');
        setClickSequence([]);
      }
    }
  };

  const images = [image1, image2, image3, image4];

  return (
    <div className="password-page">
      <div className="images-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${index + 1}`}
            className="password-image"
            onClick={() => handleClick(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default PasswordPage;
