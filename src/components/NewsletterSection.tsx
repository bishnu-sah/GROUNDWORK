import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Journal Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="text-left">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight mb-4"
            >
              Join our architectural journal
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base text-[#6B6B6B] leading-relaxed max-w-[480px]"
            >
              We compile monthly studies of structural masonry, environmental orientation calculations, and material durability trials. Delivered directly.
            </motion.p>
          </div>

          {/* Right Column: Input form with label */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-left"
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 max-w-[500px]">
              
              {/* Label */}
              <label htmlFor="journal-email" className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#111111]">
                Email Address
              </label>

              {/* Form Input Container */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                
                {/* Thin bordered input, no rounded corners */}
                <input
                  id="journal-email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-transparent border border-[#E8E8E8] px-6 py-4 font-mono text-xs text-[#111111] placeholder-[#6B6B6B] focus:border-[#111111] focus:outline-none transition-colors duration-300"
                />

                {/* Black Subscribe button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold bg-[#111111] text-white border border-[#111111] px-8 py-4 hover:bg-transparent hover:text-[#111111] transition-all duration-300 group"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
