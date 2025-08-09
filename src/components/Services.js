import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Co Working Space",
      description: "Modern co-working spaces designed for freelancers, startups, and remote teams. Enjoy flexible memberships, high-speed internet, and a collaborative environment that boosts productivity.",
      image: `${process.env.PUBLIC_URL}/coworkingspace.jpeg`
    },
    {
      title: "Commercial Space",
      description: "Our commercial space solutions cater to businesses looking for modern, flexible spaces that meet operational needs while maintaining a professional environment.",
      image: `${process.env.PUBLIC_URL}/commercial.jpeg`
    },
    {
      title: "Apartments",
      description: "Explore our wide range of apartments in prime locations, ideal for those seeking a comfortable and stylish living experience with great amenities.",
      image: `${process.env.PUBLIC_URL}/apartments.jpeg`
    },
    {
      title: "Office Space",
      description: "We provide premium office spaces designed for productivity, with state-of-the-art facilities and a professional atmosphere, perfect for any business.",
      image: `${process.env.PUBLIC_URL}/office_space.jpeg`
    },
    {
      title: "Residential Villas",
      description: "Luxurious residential villas offering spacious living, modern amenities, and premium locations. Perfect for families seeking comfort, privacy, and elegance in their dream home.",
      image: `${process.env.PUBLIC_URL}/residentialvillas.jpeg`
    },
    {
      title: "Residential",
      description: "Our residential properties offer a variety of options, from affordable homes to luxury villas, providing a perfect fit for every family and lifestyle.",
      image: `${process.env.PUBLIC_URL}/residential.jpeg`
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
