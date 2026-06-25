import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import StepIndicator from '../components/StepIndicator';
import InquiryWizard from '../components/InquiryWizard';
import InquirySidebar from '../components/InquirySidebar';
import InquiryFooter from '../components/InquiryFooter';
import Footer from '../components/Footer';

export const Inquire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepDirection, setStepDirection] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [canContinue, setCanContinue] = useState(false);

  const handleSelectType = (type: string | null) => {
    setSelectedType(type);
    setCanContinue(type !== null);
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setStepDirection(1);
      setCurrentStep((prev) => prev + 1);
      setCanContinue(false);
    } else {
      alert('Your inquiry was successfully submitted. Groundwork Architects will reach out shortly.');
      window.location.href = '/';
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setStepDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8F7F4] text-[#111111]">
      <Navbar />
      
      {/* Split Wizard layout */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 md:pt-40 md:pb-32">
        
        {/* Step progress heading */}
        <StepIndicator currentStep={currentStep} />

        {/* 12-Column grid separation (left 7 cols, right 3 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 lg:gap-24 items-start">
          
          {/* Left section (Wizard and navigation footer) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <InquiryWizard
              currentStep={currentStep}
              selectedType={selectedType}
              onSelectType={handleSelectType}
              onValidationChange={setCanContinue}
              stepDirection={stepDirection}
            />
            
            <InquiryFooter
              canContinue={canContinue}
              isLastStep={currentStep === 3}
              onContinue={handleContinue}
              onBack={handleBack}
              currentStep={currentStep}
            />
          </div>

          {/* Right section (Inquiry approach details and model context illustration) */}
          <div className="lg:col-span-3 lg:border-l border-[#E8E8E8] lg:pl-12">
            <InquirySidebar />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Inquire;
