import React, { useState, useEffect } from 'react';
import './App.css';
import PasswordPage from './PasswordPage';
import HomePage from './HomePage';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const handlePasswordSuccess = () => {
    localStorage.setItem('isAuthenticated', 'true');
    console.log('password success');
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    console.log('authStatus', authStatus);
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? <Navigate to="/home" /> : null}
        <Routes>
          <Route path="/" element={<PasswordPage onPasswordSuccess={handlePasswordSuccess} />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
