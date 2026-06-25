import React from 'react';
import Navbar from '../components/Navbar';
import StudioHero from '../components/StudioHero';
import TeamSection from '../components/TeamSection';
import DesignValues from '../components/DesignValues';
import ProcessTimeline from '../components/ProcessTimeline';
import StudioCTA from '../components/StudioCTA';
import Footer from '../components/Footer';

export const Studio: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F7F4] text-[#111111]">
      <Navbar />
      <main>
        <StudioHero />
        <TeamSection />
        <DesignValues />
        <ProcessTimeline />
        <StudioCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Studio;
