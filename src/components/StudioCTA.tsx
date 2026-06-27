import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudioCTA: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Heading, Paragraph, Outlined Button */}
          <div className="text-left flex flex-col justify-center items-start">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-tight mb-6"
            >
              Ready to begin your architectural legacy?
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base text-[#6B6B6B] leading-relaxed mb-8 max-w-[480px]"
            >
              Whether you possess a definitive blueprint or seek initial conceptual guidance, our team is equipped to turn complex site constraints into standard-setting structures.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] border border-[#111111] px-8 py-4 hover:bg-[#111111] hover:text-white transition-all duration-250 ease-in-out"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={14} className="transform transition-transform duration-250 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Large Landscape Architectural Image */}
          <div className="overflow-hidden w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-[#E6E6E6]">
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src="/Architectural detail.png"              alt="Landscape Architectural Villa Architecture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudioCTA;
