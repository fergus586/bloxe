import React, { useState } from 'react';
import './App.css';
import PasswordPage from './PasswordPage';
import HomePage from './HomePage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <HomePage isAuthenticated={isAuthenticated} />
      ) : (
        <PasswordPage onPasswordSuccess={handlePasswordSuccess} />
      )}
    </div>
  );
};

export default App;
