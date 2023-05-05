import React, { useState } from 'react';
import './App.css';
import PasswordPage from './PasswordPage';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? (
          <HomePage isAuthenticated={isAuthenticated} />
        ) : (
          <PasswordPage onPasswordSuccess={handlePasswordSuccess} />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
