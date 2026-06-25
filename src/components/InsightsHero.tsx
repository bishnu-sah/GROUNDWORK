import React from 'react';
import { motion } from 'framer-motion';

export const InsightsHero: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Huge Serif Heading */}
        <div className="mb-20 text-left">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] font-normal leading-[1.05]"
          >
            Insights & Knowledge
          </motion.h1>
        </div>

        {/* Editorial Quote Block (Curator Note split columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start pt-8">
          
          {/* Left: Curator Note Label with Vertical Border */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 md:border-r border-[#E8E8E8] md:pr-8 flex h-full"
          >
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B]">
              Curator Note
            </span>
          </motion.div>

          {/* Right: The Quote Paragraph */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 text-left"
          >
            <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#111111] leading-relaxed max-w-[800px]">
              “Architecture is the learned game, correct and magnificent, of forms assembled in the light. In this journal, we document the thinking, materials, and processes that define our search for permanence.”
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default InsightsHero;
