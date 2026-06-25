import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NextStep: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] py-28 md:py-36 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center flex flex-col items-center justify-center">
        
        {/* Label */}
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6E6E6E] mb-6 block"
        >
          NEXT STEP
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#111111] mb-12"
        >
          Build for a lifetime.
        </motion.h2>

        {/* Two Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <Link
            to="/#contact"
            className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest font-semibold bg-[#111111] text-white border border-[#111111] px-8 py-4 hover:bg-transparent hover:text-[#111111] transition-all duration-300"
          >
            Begin a Conversation
          </Link>

          {/* Secondary Button */}
          <Link
            to="/#contact"
            className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest font-semibold bg-transparent text-[#111111] border border-[#111111] px-8 py-4 hover:bg-[#111111] hover:text-white transition-all duration-300"
          >
            Inquire
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default NextStep;
