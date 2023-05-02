import React, { useState } from 'react';
import './PasswordPage.css';

const PasswordPage = ({ onPasswordSuccess }) => {
  const [clickSequence, setClickSequence] = useState([]);
  const correctSequence = [1, 2, 3, 4]; // Define the correct sequence of image clicks

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

  return (
    <div className="password-page">
      <div className="images-container">
        {Array.from({ length: 4 }, (_, index) => (
          <img
            key={index}
            src={`/image${index + 1}.png`}
            alt={`Image ${index + 1}`}
            className="password-image"
            onClick={() => handleClick(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default PasswordPage;
