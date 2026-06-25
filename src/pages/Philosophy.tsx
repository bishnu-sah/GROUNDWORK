import React from 'react';
import Navbar from '../components/Navbar';
import PhilosophyHero from '../components/PhilosophyHero';
import CoreFoundations from '../components/CoreFoundations';
import Methodology from '../components/Methodology';
import Sustainability from '../components/Sustainability';
import NextStep from '../components/NextStep';
import Footer from '../components/Footer';

export const Philosophy: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F7F4] text-[#111111]">
      <Navbar />
      <main>
        <PhilosophyHero />
        <CoreFoundations />
        <Methodology />
        <Sustainability />
        <NextStep />
      </main>
      <Footer />
    </div>
  );
};

export default Philosophy;
