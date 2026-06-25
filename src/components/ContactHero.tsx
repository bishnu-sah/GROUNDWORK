import React from 'react';
import { motion } from 'framer-motion';

export const ContactHero: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#E6E6E6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-left">
        
        {/* Large Editorial Heading */}
        <div className="mb-8 md:mb-12">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] font-normal leading-[1.05]"
          >
            Connect with our Studio.
          </motion.h1>
        </div>

        {/* Supporting Narrative Paragraph */}
        <div className="max-w-[750px]">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-lg lg:text-xl text-[#6B6B6B] leading-relaxed"
          >
            We believe that exceptional architecture begins with a shared vision. Whether you are embarking on a residential retreat or a large-scale commercial endeavor, we are here to discuss how design can elevate your intent.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
