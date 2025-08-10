import React from 'react';
import './RentalExperience.css';

const RentalExperience = () => {
  const whyChooseFeatures = [
    {
      number: "01",
      title: "Unbeatable Deals",
      description: "We negotiate directly with property owners to secure the lowest rents for you. Our exclusive network gives you access to properties you won't find on public listings.",
      color: "linear-gradient(135deg, #4a90e2 0%, #357abd 50%, #2c5aa0 100%)"
    },
    {
      number: "02", 
      title: "Exclusive Hyderabad Network",
      description: "Access to properties you won't find on public listings. We have partnerships with the best property owners across Hyderabad's prime locations.",
      color: "linear-gradient(135deg, #455a64 0%, #37474f 50%, #263238 100%)"
    },
    {
      number: "03",
      title: "Zero Hassle Process", 
      description: "From search to move-in, we handle the heavy lifting. Our streamlined process ensures you find your perfect home without any stress or complications.",
      color: "linear-gradient(135deg, #2196f3 0%, #1976d2 50%, #1565c0 100%)"
    },
    {
      number: "04",
      title: "No Hidden Costs",
      description: "Transparent pricing with no last-minute surprises. What you see is what you pay, with complete clarity on all fees and charges.",
      color: "linear-gradient(135deg, #ff9800 0%, #f57c00 50%, #ef6c00 100%)"
    }
  ];

  return (
    <section className="rental-experience">
      <div className="container">
        <div className="rental-hero">
          <div className="rental-content">
            <h1 className="rental-title">
              At <span className="brand-highlight">URBANGUEST</span>, <span className="gradient-text">we redefine the rental experience</span> in Hyderabad.
            </h1>
            <p className="rental-subtitle">
              From luxurious apartments, villas and cozy studios to spacious family homes, we bring you 
              <strong> exclusive rental deals you won't find anywhere else.</strong>
            </p>
            
            <div className="next-gen-showcase">
              <div className="showcase-content">
                <div className="showcase-text-section">
                  <div className="text-content">
                    <div className="showcase-badge">
                      <span className="badge-text">We're not just another rental agency</span>
                    </div>
                    <h2 className="showcase-title">
                      We're the <span className="highlight-text">only service</span> in Hyderabad
                    </h2>
                    <p className="showcase-description">
                      Dedicated to giving you the <strong>best deals, every single time.</strong>
                    </p>
                    <p className="showcase-subdescription">
                      Experience the future of rental services with cutting-edge technology and 
                      personalized solutions that put you first.
                    </p>
                  </div>
                </div>
                <div className="showcase-infographic-section">
                  <div className="road-container">
                    <div className="road-chart">
                      <svg className="road-path" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: '#333333', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 1}} />
                          </linearGradient>
                        </defs>
                        {/* Outer road circle */}
                        <circle 
                          cx="250" 
                          cy="250" 
                          r="150" 
                          fill="none" 
                          stroke="url(#roadGradient)" 
                          strokeWidth="25"
                        />
                        {/* Inner road circle */}
                        <circle 
                          cx="250" 
                          cy="250" 
                          r="137" 
                          fill="none" 
                          stroke="url(#roadGradient)" 
                          strokeWidth="25"
                        />
                        {/* Center white line */}
                        <circle 
                          cx="250" 
                          cy="250" 
                          r="143.5" 
                          fill="none" 
                          stroke="#ffffff" 
                          strokeWidth="3"
                          strokeDasharray="12,6"
                        />
                        
                        {/* Connecting roads extending from 4 sides */}
                        {/* Top road */}
                        <line 
                          x1="250" 
                          y1="100" 
                          x2="250" 
                          y2="25" 
                          stroke="url(#roadGradient)" 
                          strokeWidth="25"
                          strokeLinecap="round"
                        />
                        {/* Right road */}
                        <line 
                          x1="400" 
                          y1="250" 
                          x2="475" 
                          y2="250" 
                          stroke="url(#roadGradient)" 
                          strokeWidth="25"
                          strokeLinecap="round"
                        />
                        {/* Bottom road */}
                        <line 
                          x1="250" 
                          y1="400" 
                          x2="250" 
                          y2="475" 
                          stroke="url(#roadGradient)" 
                          strokeWidth="25"
                          strokeLinecap="round"
                        />
                        {/* Left road */}
                        <line 
                          x1="100" 
                          y1="250" 
                          x2="25" 
                          y2="250" 
                          stroke="url(#roadGradient)" 
                          strokeWidth="25"
                          strokeLinecap="round"
                        />
                        
                        {/* White center lines for connecting roads */}
                        {/* Top road center line */}
                        <line 
                          x1="250" 
                          y1="100" 
                          x2="250" 
                          y2="25" 
                          stroke="#ffffff" 
                          strokeWidth="3"
                          strokeDasharray="12,6"
                        />
                        {/* Right road center line */}
                        <line 
                          x1="400" 
                          y1="250" 
                          x2="475" 
                          y2="250" 
                          stroke="#ffffff" 
                          strokeWidth="3"
                          strokeDasharray="12,6"
                        />
                        {/* Bottom road center line */}
                        <line 
                          x1="250" 
                          y1="400" 
                          x2="250" 
                          y2="475" 
                          stroke="#ffffff" 
                          strokeWidth="3"
                          strokeDasharray="12,6"
                        />
                        {/* Left road center line */}
                        <line 
                          x1="100" 
                          y1="250" 
                          x2="25" 
                          y2="250" 
                          stroke="#ffffff" 
                          strokeWidth="3"
                          strokeDasharray="12,6"
                        />
                      </svg>
                      
                      <div className="road-icons">
                        {/* Icons removed - only connecting roads remain */}
                      </div>
                      
                      <div className="hyderabad-center">
                        <h3>Hyderabad</h3>
                        <div className="inventory-text">
                          <p>We have a strong inventory of properties strategically located near metro stations, the Outer Ring Road, the Financial District, and HITEC City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Slider Section */}
        <div className="location-slider-section">
          <div className="location-cards-slider">
            <div className="location-card">
              <div className="card-icon">
                <img src={`${process.env.PUBLIC_URL}/hitech_city.png`} alt="HITEC City" />
              </div>
              <h3>HITEC City</h3>
              <p>Tech hub with premium office spaces and modern residential complexes</p>
            </div>
            
            <div className="location-arrow">→</div>
            
            <div className="location-card">
              <div className="card-icon">
                <img src={`${process.env.PUBLIC_URL}/metro.png`} alt="Metro Connects" />
              </div>
              <h3>Metro Connects</h3>
              <p>Well-connected areas with excellent public transportation</p>
            </div>
            
            <div className="location-arrow">→</div>
            
            <div className="location-card">
              <div className="card-icon">
                <img src={`${process.env.PUBLIC_URL}/financial_distrct.png`} alt="Financial District" />
              </div>
              <h3>Financial District</h3>
              <p>Business center with corporate offices and luxury accommodations</p>
            </div>
            
            <div className="location-arrow">→</div>
            
            <div className="location-card">
              <div className="card-icon">
                <img src={`${process.env.PUBLIC_URL}/ringroad.jpeg`} alt="Outer Ring Road" />
              </div>
              <h3>Outer Ring Road</h3>
              <p>Strategic locations with excellent connectivity and growth potential</p>
            </div>
            
            <div className="location-arrow">→</div>
            
            <div className="location-card">
              <div className="card-icon">
                <img src={`${process.env.PUBLIC_URL}/aeroplane.jpeg`} alt="Airport Connects" />
              </div>
              <h3>Airport Connects</h3>
              <p>Convenient locations near international airport with modern amenities</p>
            </div>
            
            <div className="location-arrow">→</div>
            
            <div className="location-card">
              <div className="card-icon">
                <img src={`${process.env.PUBLIC_URL}/hospitals.jpeg`} alt="Hospitals Nearby" />
              </div>
              <h3>Hospitals Nearby</h3>
              <p>Areas near hospitals and medical facilities with healthcare professionals</p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="why-choose-section">
          <h2 className="section-title">Why Choose URBANGUEST?</h2>
          <div className="infographic-container">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="infographic-item">
                <div className="option-circle">
                  <div className="circle-number">{feature.number}</div>
                  <div className="circle-connector"></div>
                </div>
                <div className="option-banner" style={{background: feature.color}}>
                  <div className="banner-content">
                    <h3 className="banner-title">{feature.title}</h3>
                    <p className="banner-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalExperience;
