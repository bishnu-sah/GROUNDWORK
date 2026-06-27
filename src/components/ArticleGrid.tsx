import React from 'react';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  category: string;
  readTime: string;
  desc: string;
  image: string;
}

export const ArticleGrid: React.FC = () => {
  const articles: Article[] = [
  {
    title: 'Choosing Materials That Last: Beyond Aesthetics',
    category: 'Sustainable Living',
    readTime: '6 Min Read',
    desc: 'Investigating concrete aggregates, seasoned cedar panel joints, and corrosion resistance configurations built for extreme regional weather environments.',
    image: '/INSIGHT/CARD1.png',
  },
  {
    title: "The Architect's Design Process: From Sketch to Site",
    category: 'Design Education',
    readTime: '8 Min Read',
    desc: 'Tracking the progression from initial hand-drawn carbon designs and digital modeling grids to active structural masonry blueprints.',
    image: '/INSIGHT/CARD2.png',
  },
  {
    title: 'Passive Design: Harnessing the Elements',
    category: 'Sustainable Living',
    readTime: '5 Min Read',
    desc: 'How carefully computed thermal masses, seasonal solar orientation, and airflow paths minimize dependency on mechanical ventilation.',
    image: '/INSIGHT/CARD3.png',
  },
  {
    title: 'The Quiet Luxury of Volume and Light',
    category: 'Behind The Design',
    readTime: '7 Min Read',
    desc: 'A case study on subtractions of structural ornamentation, raising ceiling planes, and utilizing floor-to-ceiling glass to expand internal voids.',
    image: '/INSIGHT/CARD4.png',
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

  const cardVariants = {
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
    <section className="w-full bg-[#F8F7F4] py-24 md:py-32 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* 2-Column Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch"
        >
          {articles.map((article) => (
            <motion.div
              key={article.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#E8E8E8] flex flex-col justify-between transition-all duration-300 cursor-pointer group shadow-[0_8px_30px_rgb(17,17,17,0.02)]"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#E8E8E8]">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
              </div>

              {/* Card Details & Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* Category & Read Time Row */}
                  <div className="flex items-center justify-between mb-4 border-b border-[#E8E8E8]/50 pb-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-[#6B6B6B]">
                      {article.category}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#6B6B6B]">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] mb-4 group-hover:text-opacity-80 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed mb-8">
                    {article.desc}
                  </p>
                </div>

                {/* Explore Link CTA */}
                <div className="pt-4 border-t border-[#E8E8E8]/50">
                  <span className="inline-flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#111111] group-hover:translate-x-1 transition-transform duration-300">
                    Explore &rarr;
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ArticleGrid;
