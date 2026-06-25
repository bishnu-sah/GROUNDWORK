import React from 'react';
import { motion } from 'framer-motion';

export const Methodology: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            
            {/* Label */}
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6E6E6E] mb-6 block"
            >
              THE METHODOLOGY
            </motion.span>

            {/* Large Heading */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight mb-8"
            >
              Light, Shadow, <br className="hidden sm:inline" />
              <span className="italic font-serif">&</span> <br className="hidden sm:inline" />
              Silence
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base text-[#6E6E6E] leading-relaxed mb-10"
            >
              We sculpt spaces around natural light pathways. By understanding the sun's trajectory throughout the seasons, we create interiors that transform dynamically. Shadow is treated not as the absence of light, but as a design material in its own right, carving depth, intimacy, and stillness.
            </motion.p>

            {/* Thin Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-t border-[#E8E8E8] w-full mb-8"
            />

            {/* Quote Block with portrait */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 sm:gap-6"
            >
              {/* Portrait Image */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-none bg-[#E8E8E8] overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                  alt="Arthur Levy"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Quote text */}
              <div className="flex flex-col">
                <p className="font-serif italic text-sm text-[#111111] leading-relaxed mb-2 max-w-[400px]">
                  “A space should not speak too loudly. It should allow the silence within to be felt.”
                </p>
                <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-[#6E6E6E]">
                  ARTHUR LEVY, LEAD ARCHITECT
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Square Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square overflow-hidden bg-[#E8E8E8]"
          >
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
              alt="Concrete Grid Shadow Ceiling"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;
