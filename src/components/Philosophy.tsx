import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Monochrome Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/5] overflow-hidden bg-[#E5E5E5]"
          >
            <img
              src="/arc.png"    
              alt="Monochrome Architectural Close-up"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: Text & Features */}
          <div className="flex flex-col justify-center">
            
            {/* Label */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B] mb-4 block"
            >
              OUR PHILOSOPHY
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111111] leading-tight mb-6"
            >
              Architecture as a Foundation for Living
            </motion.h2>

            {/* Paragraph Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base text-[#6B6B6B] leading-relaxed mb-10"
            >
              We believe that spaces shape lives. Our design approach focuses on creating harmonious environments that integrate naturally with their surroundings. Every line is intentional, every material selected for its truth, and every layout optimized for living.
            </motion.p>

            {/* Two Feature Blocks */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col border-t border-[#E5E5E5] pt-6"
              >
                <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-2">
                  Material Integrity
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                  We respect the true nature of wood, stone, concrete, and metal, highlighting their raw textures and structural capabilities without artificial masking.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col border-t border-[#E5E5E5] pt-6"
              >
                <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-2">
                  Spatial Awareness
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                  Our designs are sculpted around light, shadow, volume, and natural human movement, creating an intuitive flow that elevates daily experiences.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Philosophy;
