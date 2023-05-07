import React, { useState } from 'react';
import './App.css';
import PasswordPage from './PasswordPage';
import HomePage from './HomePage';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? (
          <Navigate to="/home" />
        ) : null}
        <Routes>
          <Route path="/" element={<PasswordPage onPasswordSuccess={handlePasswordSuccess} />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
