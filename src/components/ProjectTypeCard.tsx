import React from 'react';
import { Compass, Home, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardProps {
  typeId: string;
  title: string;
  description: string;
  icon: string;
  isSelected: boolean;
  onSelect: (typeId: string) => void;
}

export const ProjectTypeCard: React.FC<CardProps> = ({
  typeId,
  title,
  description,
  icon,
  isSelected,
  onSelect,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'compass':
        return <Compass size={24} className="stroke-[1.25]" />;
      case 'home':
        return <Home size={24} className="stroke-[1.25]" />;
      case 'sofa':
        return <Sofa size={24} className="stroke-[1.25]" />;
      default:
        return <Compass size={24} className="stroke-[1.25]" />;
    }
  };

  return (
    <motion.div
      onClick={() => onSelect(typeId)}
      whileHover={{ y: -4 }}
      className={`border p-8 md:p-10 flex flex-col justify-between items-start text-left cursor-pointer h-full transition-all duration-300 ${
        isSelected
          ? 'border-[#111111] bg-[#F0EFEA]'
          : 'border-[#E8E8E8] bg-white hover:border-[#6B6B6B] hover:bg-[#F8F7F4]/50'
      }`}
    >
      {/* Icon Container */}
      <div className="w-12 h-12 flex items-center justify-center border border-[#E8E8E8] mb-12 bg-[#F8F7F4]">
        {getIcon()}
      </div>

      {/* Card Content */}
      <div>
        <h3 className="font-serif text-2xl text-[#111111] mb-4">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectTypeCard;
