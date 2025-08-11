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

  const openWhatsApp = () => {
    const phoneNumber = '+919848499299';
    const message = `Hello! I'm interested in your real estate services. Can you please provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo_resized.png`} alt="Urban Guest" />
        </div>
        
        <nav className="navigation desktop-nav">
          <ul>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('property-management')}>Property Management</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </nav>

        <div className="contact-info desktop-only">
          <button onClick={openWhatsApp} className="desktop-phone">
            <span className="phone-icon-desktop">📞</span>
            <span className="phone-number">+91 98484 99299</span>
          </button>
        </div>

        <div className="mobile-actions">
          <button onClick={openWhatsApp} className="mobile-phone-icon">
            <span className="phone-icon-mobile-header">📞</span>
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        
        <nav className={`navigation mobile-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('property-management')}>Property Management</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
          <div className="mobile-contact">
            <button onClick={openWhatsApp} className="mobile-phone">
              <span className="phone-icon-mobile">📞</span>
              <span className="phone-number">+91 98484 99299</span>
            </button>
          </div>
        </nav>
        
        {isMobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
