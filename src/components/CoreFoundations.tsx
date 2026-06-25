import React from 'react';
import { motion } from 'framer-motion';

interface CardItem {
  title: string;
  description: string;
  quote: string;
  image: string;
}

export const CoreFoundations: React.FC = () => {
  const cards: CardItem[] = [
    {
      title: 'Spatial Harmony',
      description: 'We believe in the perfect balance of proportion, creating spaces that feel intuitive, grounded, and aligned with human scale.',
      quote: '“The relationship between light and mass is the essence of living.”',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Material Truth',
      description: 'Exposing the raw characteristics of steel, timber, and stone brings structural clarity and a visceral connection to the site.',
      quote: '“Honesty in materials builds a silent dialogue between user and structure.”',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Silent Impact',
      description: 'Design that does not demand attention, but rather sits in quiet grace, providing sanctuary from the noise of the outside world.',
      quote: '“True luxury lies in the careful subtraction of the unnecessary.”',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Label */}
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-widest font-semibold text-[#6E6E6E] mb-16 block text-left"
        >
          CORE FOUNDATIONS
        </motion.span>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              {/* Image with zoom effect on hover */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#E8E8E8] mb-8">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-750 ease-out hover:scale-104"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-[#6E6E6E] leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Subtle Divider */}
              <div className="border-t border-[#E8E8E8] w-full my-4" />

              {/* Italic Quote */}
              <p className="font-serif italic text-sm text-[#111111] leading-relaxed mt-2">
                {card.quote}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreFoundations;
