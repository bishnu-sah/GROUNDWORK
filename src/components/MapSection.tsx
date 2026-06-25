import React from 'react';
import { motion } from 'framer-motion';

export const MapSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[500px] bg-[#E6E6E6]"
      >
        {/* Grayscale top-down structure map image */}
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1600&q=80"
          alt="Grayscale City Topography Road Grid Map"
          loading="lazy"
          className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>
    </section>
  );
};

export default MapSection;
