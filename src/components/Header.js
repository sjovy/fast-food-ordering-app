import React from 'react';
import logo from '../logo.jpg'; // Ensure the logo file is in the src directory
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="QuickBite Logo" className="logo" />
      <ThemeToggle />
    </header>
  );
};

export default Header;
