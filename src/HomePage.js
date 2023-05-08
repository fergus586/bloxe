import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1><span>BLOXE</span>NOT BLOKE</h1>
      </div>
    </div>
  );
};

export default HomePage;
