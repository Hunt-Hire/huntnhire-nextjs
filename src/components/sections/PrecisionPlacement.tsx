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
  className="section py-24 relative overflow-hidden 
  bg-gradient-to-b from-secondary/5 to-background 
  bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),
      linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]
  bg-[size:24px_24px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')]"
>
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            Precision Placement, Powerful Progress
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Your dedicated partner in sourcing elite global professionals for marketing and SaaS agencies, ensuring seamless integration and rapid scaling.
          </p>
        </div>

        {/* Why Hire Through Us */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12 animate-slide-up animation-delay-300">
            Why Hire Through Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative flex flex-col p-10 bg-background/70 rounded-2xl shadow-lg border border-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(121,96,190,0.25)] hover:-translate-y-2 animate-slide-up w-full"
                style={{ animationDelay: `${reason.delay}ms` }}
              >
                {/* Gradient Accent Bar on Top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7960be] to-[#9b85de] rounded-t-2xl" />
                
                {/* Content */}
                <h4 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{reason.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="btn-primary inline-flex items-center text-lg px-10 py-4 animate-slide-up animation-delay-500 hover-glow"
          >
            Schedule Your Growth Consultation
            <ArrowRight size={20} className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrecisionPlacement;