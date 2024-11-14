import React, { useState } from 'react';
import '../scss/Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">GetRecipe</div>

      {/* Navbar Links */}
      <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/favorites">Favorites</a></li>
        <li><a href="/login">Login</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
