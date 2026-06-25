import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import PhilosophySection from './components/Philosophy';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PhilosophyPage from './pages/Philosophy';
import StudioPage from './pages/Studio';
import InsightsPage from './pages/Insights';
import ContactPage from './pages/Contact';
import InquirePage from './pages/Inquire';

// Scroll to top helper component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Smooth scroll to hash helper component
const HashScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        // Wait for page mount/animation
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return null;
};

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F7F4] text-[#111111]">
      <Navbar />
      <main>
        <Hero />
        <SelectedWorks />
        <PhilosophySection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <HashScrollHandler />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inquire" element={<InquirePage />} />
      </Routes>
    </Router>
  );
};

export default App;
