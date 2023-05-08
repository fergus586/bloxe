import React, { useState } from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1>
          <span
            onMouseOver={handleMouseOver}
            className={active ? 'image-active' : ''}
          >
            BLOXE
          </span>{''}
        NOT BLOKE
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
