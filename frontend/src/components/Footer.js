import React from 'react';
import "../scss/Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} PremiumBrand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
