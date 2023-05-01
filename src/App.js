import React, { useState } from 'react';
import './App.css';
import ProtectedContent from './ProtectedContent';

const App = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const correctPassword = 'TEST'; // Replace with your desired password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <ProtectedContent />
      ) : (
        <>
          <div className="blur-overlay" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="password">Enter the password to access music downloads:</label>
            <br />
            <input
              type="password"
              id="password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default App;
