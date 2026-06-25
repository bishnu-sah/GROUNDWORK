import React, { useState } from 'react';

interface CategoryTabsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeTab: externalActiveTab, onTabChange }) => {
  const tabs = [
    'All Insights',
    'Design Education',
    'Behind The Design',
    'Sustainable Living'
  ];

  const [localActiveTab, setLocalActiveTab] = useState('All Insights');
  const activeTab = externalActiveTab || localActiveTab;

  const handleTabClick = (tab: string) => {
    setLocalActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="w-full bg-[#F8F7F4] pt-12 pb-2">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Horizontal Navigation List */}
        <div className="relative border-b border-[#E8E8E8] pb-4 flex items-center justify-start overflow-x-auto no-scrollbar gap-8 md:gap-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold pb-4 transition-all duration-300 whitespace-nowrap focus:outline-none ${
                  isActive ? 'text-[#111111]' : 'text-[#6B6B6B] hover:text-[#111111]'
                }`}
              >
                {tab}
                
                {/* Active Tab Black Underline */}
                {isActive && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-[#111111] w-full" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default CategoryTabs;
