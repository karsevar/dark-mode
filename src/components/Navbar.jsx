import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode, darkModeHandle] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    darkModeHandle(!darkMode);
    console.log(darkMode);
  };
  
  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (darkMode) {
      bodyElement.className = 'dark-mode';
    } else {
      bodyElement.className = '';
    }
    //console.log(bodyElement);
  }, [darkMode])

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
