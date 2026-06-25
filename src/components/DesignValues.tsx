import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Lightbulb } from 'lucide-react';

interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const DesignValues: React.FC = () => {
  const values: ValueCard[] = [
    {
      title: 'Sustainability',
      description: 'Designing buildings that minimize local resource extraction. We source native stone and regional timber to align with ecological boundaries.',
      icon: <Leaf size={24} className="text-[#111111] stroke-[1.25]" />,
    },
    {
      title: 'Craftsmanship',
      description: 'Paying homage to ancestral masonry, joint configurations, and structural integrity. Every surface displays the thumbprint of deliberate construction.',
      icon: <Award size={24} className="text-[#111111] stroke-[1.25]" />,
    },
    {
      title: 'Innovation',
      description: 'Integrating dynamic digital styling, geometric layouts, and passive thermal control solutions that elevate performance and sustainability indices.',
      icon: <Lightbulb size={24} className="text-[#111111] stroke-[1.25]" />,
    },
  ];

  return (
    <section className="w-full bg-[#F0EFEA] py-24 md:py-32 border-b border-[#E6E6E6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="mb-16 text-left">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6B6B6B] mb-4 block"
          >
            OUR DNA
          </motion.span>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl text-[#111111] leading-tight"
          >
            Design Values
          </motion.h2>
        </div>

        {/* 3 equal cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: '0 4px 20px -2px rgba(17,17,17,0.06)' }}
              className="bg-white border border-[#E6E6E6] p-8 md:p-10 flex flex-col items-start transition-all duration-300 h-full text-left cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#F8F7F4] flex items-center justify-center mb-8 border border-[#E6E6E6]">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-2xl text-[#111111] mb-4">
                {item.title}
              </h3>

              {/* Card Paragraph */}
              <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DesignValues;
