import React from 'react';
import { motion } from 'framer-motion';

export const InquirySidebar: React.FC = () => {
  return (
    <aside className="w-full flex flex-col text-left space-y-8">
      
      {/* Sidebar Content Headers */}
      <div>
        <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#111111] mb-6">
          GROUNDWORK APPROACH
        </h4>
        <div className="space-y-4 font-sans text-sm text-[#6B6B6B] leading-relaxed">
          <p>
            Every project begins with a shared dialogue and site analysis. We believe that architecture should be a response to both its environment and the inhabitants' ritualistic needs.
          </p>
          <p>
            Phase 01 is about defining parameters, constraints, and the core 'concept' that will drive every subsequent decision.
          </p>
        </div>
      </div>

      {/* Portrait Architectural Cover with overlay text */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[4/5] overflow-hidden bg-[#E8E8E8]"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
          alt="Studio Context Model detail"
          className="w-full h-full object-cover grayscale"
          loading="lazy"
        />
        
        {/* Caption overlaid on bottom left of image */}
        <div className="absolute bottom-6 left-6 z-20">
          <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-white/90">
            STUDIO CONTEXT
          </span>
        </div>
      </motion.div>

    </aside>
  );
};

export default InquirySidebar;
