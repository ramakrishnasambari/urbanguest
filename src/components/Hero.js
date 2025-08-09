import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="iframe-container">
          <iframe 
            className="deg" 
            loading="lazy" 
            src="https://hyderabadone.in/theview/" 
            data-lazy-image 
            alt=""
            title="Urban Guest View"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
