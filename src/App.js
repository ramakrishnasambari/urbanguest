import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import RentalExperience from './components/RentalExperience';
import PropertyManagement from './components/PropertyManagement';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <RentalExperience />
      <PropertyManagement />
      <About />
      <Services />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
