import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <h3>
              <span className="location-pin">📍</span>
              Contact Info
            </h3>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>Innov8 Pranava Business Park, 7th Floor, Pranava Business Park, Beside Harsha Toyota Showroom, Kothaguda, Telangana 500084</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+919739731119</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>varma@urbanguestrentals.com</p>
              </div>
            </div>
            
            <div className="social-media-section">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <div className="social-icon linkedin" title="LinkedIn">
                  <span>💼</span>
                </div>
                <div className="social-icon instagram" title="Instagram">
                  <span>📷</span>
                </div>
                <div className="social-icon facebook" title="Facebook">
                  <span>👥</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <div className="container">
          <p>&copy; 2024 Urban Guest</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
