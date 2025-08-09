import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Urban Guest" />
        </div>
        
        <div className="contact-info">
          <span className="call-today">Call Today</span>
          <span className="phone-number">+919739731119</span>
        </div>
        
        <nav className="navigation">
          <ul>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
