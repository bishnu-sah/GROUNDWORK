import React from 'react';
import { motion } from 'framer-motion';

interface Member {
  name: string;
  role: string;
  image: string;
}

export const TeamSection: React.FC = () => {
  const team: Member[] = [
    {
      name: 'Elena Rostova',
      role: 'Principal Architect',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500&q=80',
    },
    {
      name: 'Marcus Vance',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=500&q=80',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Lead Interior Stylist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=500&q=80',
    },
    {
      name: 'David Kael',
      role: 'Structural Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=500&q=80',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as any,
      },
    },
  };

  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' as any }}
            className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B] mb-4 block"
          >
            OUR TEAM
          </motion.span>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' as any }}
            className="font-serif text-4xl sm:text-5xl text-[#111111] leading-tight"
          >
            The Collective
          </motion.h2>
        </div>

        {/* 4-Column Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="flex flex-col text-left group"
            >
              {/* Grayscale Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#E6E6E6] mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>

              {/* Name */}
              <h3 className="font-serif text-2xl text-[#111111] mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-[#6B6B6B]">
                {member.role}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
