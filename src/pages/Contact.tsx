import React from 'react';
import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactDetails from '../components/ContactDetails';
import ContactCTA from '../components/ContactCTA';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

export const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F7F4] text-[#111111]">
      <Navbar />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactCTA />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
