import React from 'react';
import { motion } from 'framer-motion';

export const StudioHero: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] pt-32 pb-24 md:pt-40 md:pb-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Large Editorial Quote */}
        <div className="mb-20 md:mb-28 text-left max-w-[1000px]">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-[1.15] font-normal"
          >
            “Architecture is the will of an epoch translated into space.”
          </motion.h1>
        </div>

        {/* Two-Column split below the quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait Architecture Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#E6E6E6]"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Portrait Minimalist Architecture Structure"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Describing Paragraphs */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-6 md:space-y-8 text-left"
          >
            <p className="font-sans text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
              Founded in 2012, Groundwork is a design collective built on the conviction that excellent spaces enhance daily living. We operate at the intersection of architecture, interior styling, and structural engineering, developing custom residential estates and cultural structures across the globe.
            </p>
            <p className="font-sans text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
              Our multidisciplinary team approaches every site as a unique dialogue between nature and build. By strictly limiting our annual project load, we dedicate exhaustive attention to detailing, material honesty, and spatial purity, ensuring every building stands as an enduring monument to its environment.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default StudioHero;
