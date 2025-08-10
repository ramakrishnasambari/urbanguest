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
              <img src={`${process.env.PUBLIC_URL}/dream_home.jpeg`} alt="Dream Home" />
            </div>
          </div>
          
          <div className="ribbon-banner-section">
            <div className="ribbon-container">
              <div className="ribbon-row">
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">Years of Experience</span>
                  </div>
                </div>
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">Fully Insured</span>
                  </div>
                </div>
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">Cost Control Experts</span>
                  </div>
                </div>
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">100% Satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="ribbon-row">
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">Free Consultation</span>
                  </div>
                </div>
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">Satisfied Customers</span>
                  </div>
                </div>
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">Project Management</span>
                  </div>
                </div>
                <div className="ribbon-item">
                  <div className="ribbon-banner">
                    <span className="ribbon-text">Affordable Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="investment-section">
          <h2>LOOKING FOR INVESTMENT</h2>
          <p className="investment-intro">
            We understand that profitable real estate investing requires more than just finding properties. 
            It requires market insight, financial acumen, and a strategic approach to identify high-potential 
            investments. That's why we work for you—offering expert advice, data-driven analysis, and access 
            to lucrative investment opportunities.
          </p>
          
          <div className="investment-highlights">
            <div className="highlight-item">
              <h3>Unparalleled Returns</h3>
              <p>By realizing the potential of up-and-coming areas, our returns are unparalleled.</p>
            </div>
            <div className="highlight-item">
              <h3>Cost Efficiency</h3>
              <p>We work to limit capital expense without sacrificing on ROI or high standards, resulting in significant, sustainable yields.</p>
            </div>
            <div className="highlight-item">
              <h3>Prime Locations</h3>
              <p>Delve into prime investment properties not only in the vibrant locations of Hyderabad</p>
            </div>
            <div className="highlight-item">
              <h3>Expansion Opportunities</h3>
              <p>but also explore our other investment options in Bangalore & Goa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
