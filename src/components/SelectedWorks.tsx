import React from 'react';
import { motion } from 'framer-motion';
import monolithImage from '../assets/images/monolith_residence.png';
import canyonImage from '../assets/images/canyon_house.png';
import sacredocImage from '../assets/images/sacredoc_studio.png';

interface Project {
  title: string;
  location: string;
  year: string;
  image: string;
}

export const SelectedWorks: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'The Monolith Residence',
      location: 'Crete, Greece',
      year: '2024',
      image: monolithImage,
    },
    {
      title: 'Canyon House',
      location: 'Utah, USA',
      year: '2023',
      image: canyonImage,
    },
    {
      title: 'Sacredoc Studio',
      location: 'Santorini, Greece',
      year: '2025',
      image: sacredocImage,
    },
  ];

  return (
    <section id="portfolio" className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-[500px]">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-4"
            >
              Selected Works
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm md:text-base text-[#6B6B6B] leading-relaxed"
            >
              A collection of architectural achievements designed with a focus on form, function, and raw material integrity.
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="self-start md:self-end"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] hover:opacity-70 transition-opacity duration-300 border-b border-[#111111] pb-1"
            >
              View All Work
            </a>
          </motion.div>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom effect on hover */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#E5E5E5] mb-6">
                <motion.img
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-[#111111] mb-2 group-hover:text-opacity-80 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Details Row */}
              <div className="flex items-center justify-between border-t border-[#E5E5E5]/50 pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
                  {project.location}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SelectedWorks;
