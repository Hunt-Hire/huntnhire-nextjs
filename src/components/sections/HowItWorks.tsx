import { useEffect, useRef, useState } from 'react';
import AnimatedCard from '../ui/AnimatedCard';
import { ArrowRight, Calendar, Users, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Book a Discovery Call',
      description: "Schedule a consultation with our experts. We'll discuss your agency's goals and define the ideal candidate profile.",
      icon: <Calendar size={48} className="text-primary" />,
    },
    {
      number: '02',
      title: 'We Find Perfect Match',
      description: 'Our specialized recruiters leverage their expertise and global networks to identify and pre-screen top-tier candidates.',
      icon: <Users size={48} className="text-primary" />,
    },
    {
      number: '03',
      title: 'Meet Your Candidate',
      description: 'Conduct a final interview to select your new team member. We provide comprehensive onboarding support.',
      icon: <Target size={48} className="text-primary" />,
    },
  ];

  // Slider navigation
  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section bg-gradient-to-b from-background to-primary/5 py-24 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 shadow-md">
            <p className="text-base font-semibold text-primary">How It Works</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Skip the Hassle, Scale Your Agency</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We handle the entire talent acquisition process so you can focus on growing your business.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => (
            <AnimatedCard
              key={index}
              animationDelay={index * 100}
              className={`relative flex flex-col items-center text-center p-6 rounded-xl bg-background/95 shadow-lg border border-white/5 transition-all duration-300 ${
                activeStep === index ? 'scale-105 border-primary/30 shadow-primary/10' : ''
              }`}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center shadow-md">
                {step.number}
              </div>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mt-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </AnimatedCard>
          ))}
        </div>

        {/* Redesigned "Your Path to Top Talent" Section as a Slider */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Your Path to Top Talent</h3>
          <div className="relative" ref={sliderRef}>
            {/* Slider Content */}
            <div className="flex items-center justify-center">
              <div
                className="w-full max-w-2xl bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 shadow-lg transition-opacity duration-500"
                key={activeStep} // Key ensures the fade transition triggers on step change
              >
                <div className="flex flex-col items-center gap-6 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {steps[activeStep].icon}
                  </div>
                  {/* Text Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {activeStep + 1}
                      </div>
                      <h4 className="text-2xl font-semibold text-white">{steps[activeStep].title}</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed max-w-md mx-auto">{steps[activeStep].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full bg-primary/20 text-white hover:bg-primary/40 transition-colors duration-300"
              aria-label="Previous step"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full bg-primary/20 text-white hover:bg-primary/40 transition-colors duration-300"
              aria-label="Next step"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index ? 'bg-primary scale-125' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Updated Calendly Section with Iframe */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-6">Schedule Your Free Growth Consultation Today</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Book a discovery call with our team to discuss your needs and kickstart the hiring process.
          </p>
          <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl shadow-lg border border-white/5">
            <div className="relative w-full h-[1000px] rounded-lg overflow-hidden">
              <iframe
                src="https://calendly.com/hassaan-huntnhire/new-meeting"
                className="w-full h-full border-0"
                title="Schedule a Discovery Call with Hunt & Hire"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;