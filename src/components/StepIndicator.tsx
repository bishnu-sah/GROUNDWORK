import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { num: '01', title: 'PROJECT TYPE', id: 1 },
    { num: '02', title: 'DETAILS', id: 2 },
    { num: '03', title: 'VISION', id: 3 },
    { num: '04', title: 'REVIEW', id: 4 },
  ];

  return (
    <div className="flex items-center space-x-6 sm:space-x-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold pb-8 border-b border-[#E8E8E8] mb-12 overflow-x-auto no-scrollbar">
      {steps.map((step) => {
        const isActive = currentStep === step.id;
        return (
          <div key={step.id} className="flex items-center space-x-4 flex-shrink-0">
            <span className={isActive ? 'text-[#111111] font-bold' : 'text-[#6B6B6B]'}>
              {step.num} {step.title}
            </span>
            
            {/* Horizontal Line next to current active step */}
            {isActive && (
              <span className="w-12 h-[1px] bg-[#111111] inline-block" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
