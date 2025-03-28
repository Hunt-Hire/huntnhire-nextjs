import { ArrowRight } from 'lucide-react';

const PrecisionPlacement = () => {
  const reasons = [
    {
      title: 'Industry-Focused Expertise',
      description: 'Tailored talent solutions exclusively for marketing and SaaS businesses.',
      delay: 100,
    },
    {
      title: 'Secure Global Placement',
      description: 'We handle all employment complexities, delivering a secure and risk-free talent partnership.',
      delay: 200,
    },
    {
      title: 'Immediate Impact Talent',
      description: 'Pre-qualified professionals ready to contribute from day one.',
      delay: 300,
    },
    {
      title: 'Growth-Driven Talent Partnership',
      description: 'We provide ongoing strategic support beyond just filling positions.',
      delay: 400,
    },
  ];

  // Function to navigate to the HowItWorks section
  const handleCTAClick = () => {
    const howItWorksSection = document.querySelector('#how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="section bg-gradient-to-b from-secondary/5 to-background py-20 relative overflow-hidden bg-[linear-gradient(to_right,#7960be20_1px,transparent_1px),linear-gradient(to_bottom,#7960be20_1px,transparent_1px)] bg-[size:20px_20px]"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 animate-slide-up">
            Precision Placement, Powerful Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Your dedicated partner in sourcing elite global professionals for marketing and SaaS agencies, ensuring seamless integration and rapid scaling.
          </p>
        </div>

        {/* Why Hire Through Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 animate-slide-up animation-delay-300">
            Why Hire Through Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative flex flex-col p-6 bg-background/70 rounded-xl shadow-md border border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(121,96,190,0.2)] hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${reason.delay}ms` }}
              >
                {/* Gradient Accent Bar on Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7960be] to-[#9b85de] rounded-t-xl" />
                
                {/* Content */}
                <h4 className="text-xl font-semibold text-primary mb-2">{reason.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="btn-primary inline-flex items-center animate-slide-up animation-delay-500 hover-glow"
          >
            Schedule Your Growth Consultation
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrecisionPlacement;