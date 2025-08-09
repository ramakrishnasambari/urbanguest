import React from 'react';
import './RentalExperience.css';

const RentalExperience = () => {
  const features = [
    {
      icon: '💰',
      title: 'Unbeatable Deals',
      description: 'We negotiate directly with property owners to secure the lowest rents for you.',
      gradient: 'linear-gradient(135deg, #f39c12, #e67e22)'
    },
    {
      icon: '🏙️',
      title: 'Exclusive Hyderabad Network',
      description: 'Access to properties you won\'t find on public listings.',
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)'
    },
    {
      icon: '⚡',
      title: 'Zero Hassle Process',
      description: 'From search to move-in, we handle the heavy lifting.',
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)'
    },
    {
      icon: '✨',
      title: 'No Hidden Costs',
      description: 'Transparent pricing with no last-minute surprises.',
      gradient: 'linear-gradient(135deg, #27ae60, #2ecc71)'
    }
  ];

  return (
    <section className="rental-experience">
      <div className="container">
        <div className="rental-hero">
          <div className="rental-content">
            <h1 className="rental-title">
              At <span className="brand-highlight">URBANGUEST</span>, we redefine the rental experience in Hyderabad.
            </h1>
            <p className="rental-subtitle">
              From luxurious apartments, villas and cozy studios to spacious family homes, we bring you 
              <strong> exclusive rental deals you won't find anywhere else.</strong>
            </p>
            <div className="unique-value">
              <div className="unique-badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">We're not just another rental agency</span>
              </div>
              <p className="unique-description">
                We're the <strong>only service in Hyderabad</strong> dedicated to giving you the best deals, every single time.
              </p>
            </div>
          </div>
        </div>

        <div className="why-choose-section">
          <h2 className="section-title">Why Choose URBANGUEST?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{'--gradient': feature.gradient}}>
                <div className="feature-icon-container">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalExperience;
