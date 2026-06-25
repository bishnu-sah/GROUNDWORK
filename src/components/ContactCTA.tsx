import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="w-full bg-[#000000] py-28 md:py-36 text-center overflow-hidden flex items-center justify-center min-h-[500px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center text-center space-y-6"
      >
        
        {/* Label */}
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-white/60 mb-2 block">
          NEW PROJECTS
        </span>

        {/* Heading */}
        <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white leading-tight font-normal max-w-[800px] mb-8">
          Ready to build something enduring?
        </h2>

        {/* Outlined White Button */}
        <a
          href="mailto:studio@groundwork.arch"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold text-white border border-white px-8 py-4 hover:bg-white hover:text-[#000000] transition-all duration-300 ease-in-out"
        >
          <span>Start a Conversation</span>
          <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>

      </motion.div>
    </section>
  );
};

export default ContactCTA;
