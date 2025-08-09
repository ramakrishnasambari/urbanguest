import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Urban Guest" />
        </div>
        
        <div className="contact-info desktop-only">
          <a href="tel:+919739731119" className="desktop-phone">
            <span className="phone-icon-desktop">📞</span>
            <span className="phone-number">+919739731119</span>
          </a>
        </div>
        
        <div className="mobile-contact">
          <a href="tel:+919739731119" className="phone-icon">
            📞
          </a>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        
        <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
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
        
        {isMobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
