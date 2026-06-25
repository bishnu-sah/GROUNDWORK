import React from 'react';
import { motion } from 'framer-motion';

export const FeaturedArticle: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] py-16 md:py-24 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Large Featured Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#E8E8E8] shadow-[0_8px_30px_rgb(17,17,17,0.03)]"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
              alt="Custom Modern Villa Architectural Landscape"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Title, Label, Description, and CTA */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center items-start text-left"
          >
            {/* Category Label */}
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B] mb-4">
              Design Education — Featured
            </span>

            {/* Large Serif Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-tight mb-6">
              How to Plan a Custom Home: The Groundwork Methodology
            </h2>

            {/* Description */}
            <p className="font-sans text-sm md:text-base text-[#6B6B6B] leading-relaxed mb-8 max-w-[480px]">
              Building a custom residence requires navigating zoning boundaries, sun pathways, and raw textures. In this detailed guide, we map our comprehensive conceptual design phase.
            </p>

            {/* CTA */}
            <a
              href="#read"
              className="inline-flex items-center font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] hover:opacity-75 transition-opacity border-b border-[#111111] pb-1"
            >
              Read Article &rarr;
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
