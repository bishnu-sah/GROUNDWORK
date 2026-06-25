import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/philosophy_hero.png';

export const PhilosophyHero: React.FC = () => {
  return (
    <section className="relative w-full h-[900px] bg-[#F8F7F4] overflow-hidden flex items-center">
      {/* Background Image spanning full container */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          src={heroImg}
          alt="Abstract Architecture Ethos"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Side Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-end">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[500px] md:max-w-[600px] pr-4 md:pr-12 text-left"
        >
          {/* Label */}
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6E6E6E] mb-4 block">
            ETHOS
          </span>

          {/* Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] font-normal leading-[1.05] mb-6">
            Our Philosophy
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-lg sm:text-xl text-[#6E6E6E] leading-relaxed max-w-[420px]">
            Architecture as the silent orchestrator of human experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophyHero;
