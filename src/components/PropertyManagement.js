import React from 'react';
import './PropertyManagement.css';

const PropertyManagement = () => {
  const managementFeatures = [
    {
      icon: '👥',
      title: 'Tenant Management',
      description: 'Professional tenant screening, onboarding, and relationship management'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Repairs',
      description: '24/7 maintenance support with trusted vendors and quality assurance'
    },
    {
      icon: '💳',
      title: 'Rent Collection',
      description: 'Automated rent collection and financial reporting for peace of mind'
    },
    {
      icon: '📊',
      title: 'Transparent Reporting',
      description: 'Monthly detailed reports on property performance and financials'
    },
    {
      icon: '🛡️',
      title: 'Property Security',
      description: 'Regular property inspections and security monitoring services'
    },
    {
      icon: '📞',
      title: '7 Days Support',
      description: 'Round-the-clock customer support for all your property needs'
    }
  ];

  return (
    <section className="property-management">
      <div className="container">
        <div className="management-header">
          <div className="header-content">
            <h2 className="management-title">
              <span className="title-highlight">URBANGUEST</span> Professional Property Management
            </h2>
            <p className="management-intro">
              Looking for reliable and professional property management services in Hyderabad? 
              At URBANGUEST, our dedicated team works <strong>7 days a week</strong> to ensure your property 
              is managed efficiently, securely, and hassle-free.
            </p>
          </div>
        </div>

        <div className="management-content">
          <div className="content-text">
            <div className="value-proposition">
              <h3>Complete Peace of Mind</h3>
              <p>
                We handle everything — from tenant management and maintenance to rent collection — 
                so you can enjoy complete peace of mind.
              </p>
            </div>
            
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">✅</span>
                <span>Trusted Processes</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">💬</span>
                <span>Transparent Communication</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🏆</span>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="cta-section">
              <p className="cta-text">
                URBANGUEST is your go-to partner for stress-free property ownership.
              </p>
              <div className="rating-badge">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="rating-text">Rated among top property service providers in Hyderabad</span>
              </div>
            </div>
          </div>

          <div className="features-showcase">
            <div className="features-grid-management">
              {managementFeatures.map((feature, index) => (
                <div key={index} className="management-feature-card">
                  <div className="management-icon">
                    <span>{feature.icon}</span>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-container">
            <h3>Ready to Get Started?</h3>
            <p>Contact us today for expert property management in Hyderabad</p>
            <button className="cta-button" onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Get Expert Property Management
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
