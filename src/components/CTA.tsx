import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-[#F8F7F4] py-28 md:py-36 border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Large Centered White Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white border border-[#E5E5E5] py-20 px-8 sm:px-12 md:py-24 md:px-20 flex flex-col items-center justify-center text-center max-w-[1000px] mx-auto"
        >
          {/* Card Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-4">
            Begin Your Project
          </h2>

          {/* Paragraph */}
          <p className="font-sans text-sm sm:text-base text-[#6B6B6B] max-w-[500px] mb-8 leading-relaxed">
            Collaborate with our studio to transform your vision into a timeless architectural reality.
          </p>

          {/* Black CTA Button */}
          <a
            href="mailto:inquire@groundwork.arch"
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold bg-[#111111] text-white border border-[#111111] px-8 py-4 hover:bg-transparent hover:text-[#111111] transition-all duration-300 group"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
export default CTA;
