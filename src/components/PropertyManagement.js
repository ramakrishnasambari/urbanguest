import React from 'react';
import './PropertyManagement.css';

const PropertyManagement = () => {
  const managementFeatures = [
    {
      image: 'propertycare.jpg',
      title: 'Property Care',
      description: 'Comprehensive property maintenance and regular inspections to keep your investment in top condition'
    },
    {
      image: 'tenantexcellence.jpg',
      title: 'Tenant Excellence',
      description: 'Professional tenant screening, onboarding, and ongoing relationship management'
    },
    {
      image: 'smartrentcollection.jpg',
      title: 'Smart Rent Collection',
      description: 'Automated rent collection with detailed financial reporting and transparent accounting'
    },
    {
      image: 'security.jpg',
      title: 'Security & Protection',
      description: '24/7 property monitoring and security services for complete peace of mind'
    },
    {
      image: 'performanceanalytics.jpg',
      title: 'Performance Analytics',
      description: 'Real-time property performance reports and market insights for informed decisions'
    },
    {
      image: 'dedicated_support.jpg',
      title: 'Dedicated Support',
      description: 'Round-the-clock customer support with dedicated property managers for your needs'
    }
  ];

  return (
    <section id="property-management" className="property-management">
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
                so you can enjoy complete peace of mind while maximizing your property's potential.
              </p>
            </div>
            
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">✅</span>
                <span>Proven Processes</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">💬</span>
                <span>Transparent Communication</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🏆</span>
                <span>Years of Excellence</span>
              </div>
            </div>

            <div className="cta-section">
              <p className="cta-text">
                URBANGUEST is your trusted partner for stress-free property ownership and maximum returns.
              </p>
            </div>
          </div>

          <div className="features-showcase">
            <div className="features-grid-management">
              {managementFeatures.map((feature, index) => (
                <div key={index} className="management-feature-card">
                  <div className="management-image">
                    <img src={`${process.env.PUBLIC_URL}/${feature.image}`} alt={feature.title} />
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
