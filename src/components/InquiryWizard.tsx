import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectTypeCard from './ProjectTypeCard';

interface InquiryWizardProps {
  currentStep: number;
  onSelectType: (type: string | null) => void;
  selectedType: string | null;
  onValidationChange: (isValid: boolean) => void;
  stepDirection: number; // -1 for back, 1 for forward
}

export const InquiryWizard: React.FC<InquiryWizardProps> = ({
  currentStep,
  onSelectType,
  selectedType,
  onValidationChange,
  stepDirection,
}) => {
  // Step 2 details form states
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    budget: '',
    timeline: '',
  });

  // Step 3 details states
  const [vision, setVision] = useState({
    goals: '',
    agreement: false,
    fileName: '',
  });

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDetails = { ...details, [name]: value };
    setDetails(newDetails);

    // Validate details (all fields required)
    const isValid = Object.values(newDetails).every((val) => val.trim() !== '');
    onValidationChange(isValid);
  };

  const handleVisionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, type, value } = e.target;
    let newVision;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      newVision = { ...vision, [name]: checked };
    } else if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0];
      newVision = { ...vision, fileName: file ? file.name : '' };
    } else {
      newVision = { ...vision, [name]: value };
    }

    setVision(newVision);

    // Validate vision (goals text and agreement checked)
    const isValid = newVision.goals.trim() !== '' && newVision.agreement;
    onValidationChange(isValid);
  };

  // Sync validation status when currentStep changes
  React.useEffect(() => {
    if (currentStep === 1) {
      onValidationChange(selectedType !== null);
    } else if (currentStep === 2) {
      const isValid = Object.values(details).every((val) => val.trim() !== '');
      onValidationChange(isValid);
    } else if (currentStep === 3) {
      const isValid = vision.goals.trim() !== '' && vision.agreement;
      onValidationChange(isValid);
    }
  }, [currentStep, selectedType, details, vision]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' as any },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' as any },
    }),
  };

  return (
    <div className="w-full relative overflow-hidden min-h-[380px]">
      <AnimatePresence initial={false} custom={stepDirection} mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            custom={stepDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col text-left space-y-12"
          >
            {/* Title / Description */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-4">
                Begin your architectural journey.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#6B6B6B]">
                Select the category that best describes your intent.
              </p>
            </div>

            {/* Type Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
              <ProjectTypeCard
                typeId="home"
                title="New Home"
                description="Ground-up residential construction."
                icon="compass"
                isSelected={selectedType === 'home'}
                onSelect={(id) => onSelectType(id)}
              />
              <ProjectTypeCard
                typeId="renovation"
                title="Renovation"
                description="Adaptive reuse and transformative structural enhancements."
                icon="home"
                isSelected={selectedType === 'renovation'}
                onSelect={(id) => onSelectType(id)}
              />
              <ProjectTypeCard
                typeId="interior"
                title="Interior Design"
                description="Meticulous spatial curation and materiality."
                icon="sofa"
                isSelected={selectedType === 'interior'}
                onSelect={(id) => onSelectType(id)}
              />
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            custom={stepDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col text-left space-y-12"
          >
            {/* Title / Description */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-4">
                Tell us about your project.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#6B6B6B]">
                Provide details so we can understand constraints.
              </p>
            </div>

            {/* Form grid, no rounded corners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={details.name}
                  onChange={handleDetailsChange}
                  className="bg-transparent border border-[#E8E8E8] px-5 py-3.5 font-sans text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={details.email}
                  onChange={handleDetailsChange}
                  className="bg-transparent border border-[#E8E8E8] px-5 py-3.5 font-sans text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your Phone Number"
                  value={details.phone}
                  onChange={handleDetailsChange}
                  className="bg-transparent border border-[#E8E8E8] px-5 py-3.5 font-sans text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Project Location
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="City, Country"
                  value={details.location}
                  onChange={handleDetailsChange}
                  className="bg-transparent border border-[#E8E8E8] px-5 py-3.5 font-sans text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                />
              </div>

              {/* Budget */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Budget Range
                </label>
                <input
                  type="text"
                  name="budget"
                  required
                  placeholder="e.g. $500k - $1M"
                  value={details.budget}
                  onChange={handleDetailsChange}
                  className="bg-transparent border border-[#E8E8E8] px-5 py-3.5 font-sans text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                />
              </div>

              {/* Timeline */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Desired Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  required
                  placeholder="e.g. Next 12 months"
                  value={details.timeline}
                  onChange={handleDetailsChange}
                  className="bg-transparent border border-[#E8E8E8] px-5 py-3.5 font-sans text-sm text-[#111111] focus:border-[#111111] focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            custom={stepDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col text-left space-y-12"
          >
            {/* Title / Description */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-4">
                Define your vision.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#6B6B6B]">
                Detail goals and upload inspiration items.
              </p>
            </div>

            {/* Form list */}
            <div className="flex flex-col space-y-6">
              {/* Textarea goals */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Project Goals
                </label>
                <textarea
                  name="goals"
                  rows={6}
                  required
                  placeholder="Describe your vision, aesthetic requirements, and layout targets..."
                  value={vision.goals}
                  onChange={handleVisionChange}
                  className="bg-transparent border border-[#E8E8E8] px-5 py-3.5 font-sans text-sm text-[#111111] focus:border-[#111111] focus:outline-none resize-none"
                />
              </div>

              {/* Inspiration Upload */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#111111] font-semibold">
                  Inspiration Images
                </label>
                <div className="border border-dashed border-[#E8E8E8] p-6 text-center bg-white flex flex-col items-center justify-center relative cursor-pointer">
                  <input
                    type="file"
                    name="file"
                    onChange={handleVisionChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <span className="font-mono text-[10px] tracking-widest text-[#6B6B6B] uppercase font-semibold">
                    {vision.fileName ? `SELECTED: ${vision.fileName}` : 'UPLOAD IMAGES / BLU-PRINTS'}
                  </span>
                </div>
              </div>

              {/* Checkbox agreement */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  required
                  checked={vision.agreement}
                  onChange={handleVisionChange}
                  className="mt-1 w-4 h-4 bg-transparent border border-[#E8E8E8] checked:bg-[#111111] text-[#111111] rounded-none focus:ring-0 focus:outline-none"
                />
                <label htmlFor="agreement" className="font-sans text-xs text-[#6B6B6B] leading-relaxed cursor-pointer select-none">
                  I agree to the processing of personal data for architectural consultations.
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InquiryWizard;
