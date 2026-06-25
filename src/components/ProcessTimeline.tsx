import React from 'react';
import { motion } from 'framer-motion';

interface Phase {
  num: string;
  name: string;
  desc: string;
}

export const ProcessTimeline: React.FC = () => {
  const phases: Phase[] = [
    {
      num: '01',
      name: 'DISCOVER',
      desc: 'We conduct comprehensive site evaluations, historical analysis, and detailed interviews to determine spatial constraints, landscape ecology, and user pathways.',
    },
    {
      num: '02',
      name: 'DESIGN',
      desc: 'Formulating volume distributions, light orientations, and structural models. We experiment with physical wood and stone sculptures to determine tactile weights.',
    },
    {
      num: '03',
      name: 'DEVELOP',
      desc: 'Refining drawings, specifying locally harvested materials, and integrating passive cooling/heating solutions into technical structural blueprints.',
    },
    {
      num: '04',
      name: 'DELIVER',
      desc: 'Directing construction oversight with precision masons and custom finish carpenters, delivering a seamless transition from plan to permanent sanctuary.',
    },
  ];

  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header Labels */}
        <div className="text-left mb-4">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B] block"
          >
            THE JOURNEY
          </motion.span>
        </div>

        {/* Heading & Inline Subtitle with Right-Extending Line */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-20">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl text-[#111111] whitespace-nowrap"
          >
            Our Process
          </motion.h2>
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] tracking-widest font-semibold text-[#6B6B6B] whitespace-nowrap uppercase md:pt-2"
          >
            FROM VISION TO REALITY
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block h-[1px] bg-[#E6E6E6] flex-grow origin-left self-center mt-2"
          />
        </div>

        {/* 4 columns layout aligned to the baseline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 items-start">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.num}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col text-left group"
            >
              {/* Small decorative square icon */}
              <div className="w-2.5 h-2.5 bg-[#111111] mb-6 transition-transform duration-300 group-hover:rotate-45" />

              {/* Number + Title */}
              <h3 className="font-serif text-2xl text-[#111111] mb-4">
                <span className="font-serif text-[#6B6B6B] mr-2">{phase.num}</span>
                <span className="font-mono text-sm tracking-widest font-semibold">{phase.name}</span>
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
