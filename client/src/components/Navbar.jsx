import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';


const Navbar = () => {
  //replacing state hook
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle"
            onClick={toggleMode}>

        <div

          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
