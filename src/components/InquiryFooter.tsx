import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface InquiryFooterProps {
  canContinue: boolean;
  isLastStep: boolean;
  onContinue: () => void;
  onBack: () => void;
  currentStep: number;
}

export const InquiryFooter: React.FC<InquiryFooterProps> = ({
  canContinue,
  isLastStep,
  onContinue,
  onBack,
  currentStep,
}) => {
  return (
    <div className="w-full pt-8 border-t border-[#E8E8E8] mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left Back navigation Action */}
      <div>
        {currentStep === 1 ? (
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] hover:opacity-75 transition-opacity"
          >
            &larr; EXIT
          </Link>
        ) : (
          <button
            type="button"
            onClick={onBack}
            className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111] hover:opacity-75 transition-opacity focus:outline-none"
          >
            &larr; BACK
          </button>
        )}
      </div>

      {/* Right Action Button */}
      <div>
        {canContinue ? (
          <motion.button
            key="enabled-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            type="button"
            onClick={onContinue}
            className="font-mono text-xs uppercase tracking-widest font-semibold bg-[#111111] text-white px-8 py-4 border border-[#111111] hover:bg-transparent hover:text-[#111111] transition-all duration-300 w-full sm:w-auto"
          >
            {isLastStep ? 'SUBMIT INQUIRY' : 'CONTINUE'}
          </motion.button>
        ) : (
          <button
            type="button"
            disabled
            className="font-mono text-xs uppercase tracking-widest font-semibold bg-[#D6D0C8] text-white px-8 py-4 cursor-not-allowed w-full sm:w-auto"
          >
            {isLastStep ? 'SUBMIT INQUIRY' : 'CONTINUE'}
          </button>
        )}
      </div>
    </div>
  );
};

export default InquiryFooter;
