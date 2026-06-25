import React from 'react';
import { motion } from 'framer-motion';

export const ContactDetails: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact details lists */}
          <div className="flex flex-col text-left space-y-8 w-full">
            
            {/* Block 1: Location */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-[#E6E6E6] pb-6"
            >
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-3">
                LOCATION
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#6B6B6B]">
                India
              </p>
            </motion.div>

            {/* Block 2: Direct Contacts */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-[#E6E6E6] pb-6"
            >
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-3">
                DIRECT
              </h4>
              <div className="flex flex-col space-y-1.5">
                <a href="mailto:studio@groundwork.arch" className="font-sans text-sm sm:text-base text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  studio@groundwork.arch
                </a>
                <a href="tel:+919876543210" className="font-sans text-sm sm:text-base text-[#6B6B6B] hover:text-[#111111] transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
            </motion.div>

            {/* Block 3: Hours */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-[#E6E6E6] pb-6"
            >
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-3">
                STUDIO HOURS
              </h4>
              <div className="grid grid-cols-2 gap-4 max-w-[320px]">
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-[#6B6B6B] uppercase block">
                    Monday — Friday
                  </span>
                  <span className="font-sans text-sm text-[#111111]">
                    09:00 — 18:00
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-[#6B6B6B] uppercase block">
                    Saturday — Sunday
                  </span>
                  <span className="font-sans text-sm text-[#111111]">
                    By Appointment
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Block 4: Social follows */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] mb-3">
                FOLLOW
              </h4>
              <div className="flex items-center space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#6B6B6B] hover:text-[#111111] transition-all duration-300 pb-0.5 border-b border-transparent hover:border-[#111111]">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#6B6B6B] hover:text-[#111111] transition-all duration-300 pb-0.5 border-b border-transparent hover:border-[#111111]">
                  LinkedIn
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#E6E6E6]"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
              alt="Vertical Minimalist Villa Column"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
