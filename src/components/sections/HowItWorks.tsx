
import { useEffect, useRef, useState } from 'react';
import AnimatedCard from '../ui/AnimatedCard';
import { ArrowRight, Calendar, Users, Target, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Steps in the process
  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Schedule a discovery call to discuss your marketing needs and goals.',
      icon: <Calendar size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1573496546038-82f9c39f6365?q=80&w=500"
    },
    {
      number: '02',
      title: 'Match',
      description: 'We\'ll match you with pre-vetted marketing professionals who fit your requirements.',
      icon: <Users size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500"
    },
    {
      number: '03',
      title: 'Hire',
      description: 'Select your ideal candidate and start working together within 48 hours.',
      icon: <Target size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500"
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Grow your marketing efforts with flexible talent that scales with your needs.',
      icon: <TrendingUp size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500"
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
      className="section bg-gradient-to-b from-background/30 to-primary/5 py-24"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Our Process</p>
          </div>
          <h2 className="mb-4">How It Works</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined approach connects you with top marketing talent in just four simple steps.
            No lengthy recruitment processes, just quick access to the skills you need.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-500 ${
                  activeStep === index ? 'scale-105' : 'scale-100'
                }`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {step.number}
                </div>
                
                <AnimatedCard
                  className={`text-center h-full ${
                    activeStep === index 
                      ? 'border-2 border-primary/30 shadow-lg shadow-primary/10' 
                      : 'border border-white/10'
                  }`}
                  animationDirection="up"
                >
                  <div className="p-8">
                    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    
                    {activeStep === index && (
                      <div className="mt-4 flex justify-center">
                        <button 
                          onClick={() => setActiveStep((index + 1) % steps.length)}
                          className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                          Next Step <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    )}
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Step Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
          <div className="order-2 lg:order-1">
            <AnimatedCard 
              animationDirection="left"
              className="p-0 overflow-hidden"
              hoverEffect={false}
            >
              <div className="p-1">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={steps[activeStep].image} 
                    alt={steps[activeStep].title} 
                    className="w-full h-[350px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h3>
                      <p className="text-white/80">{steps[activeStep].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Why Our Process Works</h3>
              <p className="text-muted-foreground">
                We've refined our approach to make hiring marketing talent as seamless as possible. 
                Our platform connects you with pre-vetted professionals who have demonstrated expertise 
                in their field.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">48-Hour Placement</h4>
                    <p className="text-muted-foreground">Most clients are paired with talent and ready to start work within 48 hours of their initial call.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Pre-Vetted Experts</h4>
                    <p className="text-muted-foreground">We accept only the top 5% of marketing talent who apply to join our network after thorough evaluation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Flexible Scaling</h4>
                    <p className="text-muted-foreground">Easily scale your marketing team up or down based on your current needs and project requirements.</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary mt-6">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
