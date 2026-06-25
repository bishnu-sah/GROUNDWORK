import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero_architecture.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-[#F8F7F4]">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-[85vh] lg:h-[90vh] overflow-hidden">
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Animated Hero Image */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src={heroImage}
          alt="Luxury Architecture Villa"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Content Overlaid on Image */}
      <div className="relative z-20 flex-1 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center h-[85vh] lg:h-[90vh]">
        <div className="text-center mt-20">
          {/* Centered Heading */}
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] max-w-[900px] mb-8"
          >
            Spaces Through Timeless Architecture
          </motion.h1>

          {/* Two Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest font-semibold bg-white text-[#111111] border border-white px-8 py-4 hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Request Consultation
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest font-semibold bg-transparent text-white border border-white px-8 py-4 hover:bg-white hover:text-[#111111] transition-all duration-300"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Section Below Hero Image */}
      <div className="relative z-20 w-full bg-[#F8F7F4] py-16 md:py-24 border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {/* Stat 1 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111111] font-normal mb-2">
                15+
              </span>
              <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B]">
                Years of Excellence
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111111] font-normal mb-2">
                120+
              </span>
              <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B]">
                Completed Projects
              </span>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111111] font-normal mb-2">
                Award Winning
              </span>
              <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B]">
                Architecture Studio
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
