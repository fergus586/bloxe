import React, { useState } from 'react';
import './App.css';
import PasswordPage from './PasswordPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        // Your protected content here
        <div>Your protected content goes here</div>
      ) : (
        <PasswordPage onPasswordSuccess={handlePasswordSuccess} />
      )}
    </div>
  );
};

export default App;
