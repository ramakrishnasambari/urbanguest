import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-hero">
            <div className="about-hero-text">
              <h2>LOOKING FOR A DREAM HOME</h2>
              <p>
                At URBAN GUEST, we understand that buying home is more than just a transaction – 
                it's a life-changing experience. That's why we are committed to providing exceptional 
                real estate services, working tirelessly to meet the unique needs of every client. 
                Our expertise team is here to guide you every step of the way.
              </p>
            </div>
            <div className="about-hero-image">
              <img src="/dream_home.jpeg" alt="Dream Home" />
            </div>
          </div>
          
          <div className="features-grid">
            <div className="features-column">
              <div className="feature-item">
                <h4>Years of Experience</h4>
              </div>
              <div className="feature-item">
                <h4>Fully Insured</h4>
              </div>
              <div className="feature-item">
                <h4>Cost Control Experts</h4>
              </div>
              <div className="feature-item">
                <h4>100% Satisfaction Guarantee</h4>
              </div>
            </div>
            
            <div className="features-column">
              <div className="feature-item">
                <h4>Free Consultation</h4>
              </div>
              <div className="feature-item">
                <h4>Satisfied Customers</h4>
              </div>
              <div className="feature-item">
                <h4>Project Management</h4>
              </div>
              <div className="feature-item">
                <h4>Affordable Pricing</h4>
              </div>
            </div>
          </div>
        </div>
        
        <div className="investment-section">
          <h2>LOOKING FOR INVESTMENT</h2>
          <p>
            We understand that profitable real estate investing requires more than just finding properties. 
            It requires market insight, financial acumen, and a strategic approach to identify high-potential 
            investments. That's why we work for you—offering expert advice, data-driven analysis, and access 
            to lucrative investment opportunities.
          </p>
          
          <div className="investment-points">
            <div className="investment-point">
              <span className="arrow">→</span>
              <p>By realizing the potential of up-and-coming areas, our returns are unparalleled.</p>
            </div>
            <div className="investment-point">
              <span className="arrow">→</span>
              <p>We work to limit capital expense without sacrificing on ROI or high standards, resulting in significant, sustainable yields.</p>
            </div>
            <div className="investment-point">
              <span className="arrow">→</span>
              <p>Delve into prime investment properties not only in the vibrant locations of Hyderabad</p>
            </div>
            <div className="investment-point">
              <span className="arrow">→</span>
              <p>but also explore our other investment options in Bangalore & Goa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
