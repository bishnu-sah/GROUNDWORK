import React from 'react';
import { motion } from 'framer-motion';

export const Sustainability: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Top Editorial Row (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16 items-start">
          
          {/* Column 1: Heading */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:border-r border-[#E8E8E8] md:pr-12 lg:pr-16 flex h-full"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] leading-tight max-w-[280px]">
              Quiet Sustainability
            </h2>
          </motion.div>

          {/* Column 2: Paragraph 1 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="font-sans text-sm md:text-base text-[#6E6E6E] leading-relaxed">
              We approach sustainability as an intrinsic aspect of design quality, not an additive checklist. Our materials are sourced locally, reducing transport carbon footprints while celebrating the raw textures and regional character of the landscape.
            </p>
          </motion.div>

          {/* Column 3: Paragraph 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="font-sans text-sm md:text-base text-[#6E6E6E] leading-relaxed">
              We build structures designed to endure for generations. True longevity means reducing the long-term energy load through intelligent site orientation, high thermal mass materials, and passive airflow pathways that work with nature.
            </p>
          </motion.div>

        </div>

        {/* Bottom Row: Landscape Image + Stats Block (aligned side-by-side) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Landscape Image (Spans 2 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#E8E8E8]"
          >
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
              alt="Forest Villa Canopy Landscape"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Black Statistics Card (Spans 1 column on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] p-12 flex flex-col justify-center text-center md:text-left h-full"
          >
            <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-white font-normal mb-4 block">
              90%
            </span>
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-white/80 max-w-[200px]">
              Locally Sourced Material Base
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Sustainability;
