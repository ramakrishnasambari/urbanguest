import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Co-working Spaces",
      description: "Modern co-working spaces designed for freelancers, startups, and remote teams. Enjoy flexible memberships, high-speed internet, and a collaborative environment that boosts productivity.",
      image: `${process.env.PUBLIC_URL}/coworkingspace.jpeg`
    },
    {
      title: "Rental Apartments & Villas",
      description: "Premium rental apartments and luxurious villas in prime locations. From cozy studios to spacious family homes, find your perfect rental with modern amenities and flexible lease terms.",
      image: `${process.env.PUBLIC_URL}/apartments.jpeg`
    },
    {
      title: "Property Management",
      description: "Comprehensive property management services including tenant screening, maintenance coordination, rent collection, and 24/7 support for stress-free property ownership.",
      image: `${process.env.PUBLIC_URL}/residential.jpeg`
    },
    {
      title: "Corporate Housing Solutions",
      description: "Fully furnished corporate housing solutions for business travelers and relocating employees. Premium accommodations with all amenities for short and long-term stays.",
      image: `${process.env.PUBLIC_URL}/residentialvillas.jpeg`
    },
    {
      title: "Short-term Stays",
      description: "Flexible short-term accommodation options perfect for business trips, vacations, or temporary relocations. Fully equipped properties with hotel-like services and amenities.",
      image: `${process.env.PUBLIC_URL}/office_space.jpeg`
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p className="services-subtitle">Find the category for you</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
