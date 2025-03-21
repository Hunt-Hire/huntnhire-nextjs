
import { useEffect, useRef, useState } from 'react';
import AnimatedCard from '../ui/AnimatedCard';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Steps in the process
  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Schedule a discovery call to discuss your marketing needs and goals.',
    },
    {
      number: '02',
      title: 'Match',
      description: 'We'll match you with pre-vetted marketing professionals who fit your requirements.',
    },
    {
      number: '03',
      title: 'Hire',
      description: 'Select your ideal candidate and start working together within 48 hours.',
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Grow your marketing efforts with flexible talent that scales with your needs.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
          }, 3000);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [steps.length]);

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="section bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Our Process</p>
          </div>
          <h2>How It Works</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
            A simple, effective approach to hiring marketing talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps visualization */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    activeStep === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10 absolute inset-0'
                  }`}
                >
                  <div className="text-7xl md:text-9xl font-bold text-primary/10">
                    {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 max-w-md">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex mt-10 space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === index ? 'w-10 bg-primary' : 'w-2 bg-muted'
                  }`}
                  onClick={() => setActiveStep(index)}
                  aria-label={`View step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="order-1 lg:order-2">
            <AnimatedCard 
              animationDirection="right" 
              className="p-0 overflow-hidden"
              hoverEffect={false}
            >
              <div className="relative h-[400px] md:h-[500px] bg-gradient-to-tr from-secondary via-secondary/50 to-primary/30 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full border border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute inset-0 m-auto w-24 h-24 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="text-foreground font-semibold">
                        {steps[activeStep].title}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Abstract elements */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-primary/10 blur-xl" />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
