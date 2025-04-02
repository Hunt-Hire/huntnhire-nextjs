import { ArrowRight } from 'lucide-react';

const UnlockGrowth = () => {
  const advantages = [
    {
      title: 'Maximize Budget Efficiency',
      description: 'Achieve up to 75% savings on payroll costs by leveraging our global talent.',
      delay: 100,
    },
    {
      title: 'Accelerated Hiring Process',
      description: 'Reduce time-to-fill by 70% with our efficient recruitment solutions.',
      delay: 200,
    },
    {
      title: 'Effortless Team Integration',
      description: 'Experience seamless collaboration with our pre-vetted, culturally aligned professionals.',
      delay: 300,
    },
  ];

  return (
    <section
      className="section bg-gradient-to-b from-background to-secondary/5 py-24 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear_gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            Unlock Exponential Growth: Access Top-Tier Global Marketing & SaaS Talent
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Stop growth bottlenecks. Access skilled global talent, integrate seamlessly, and drive your agency's success.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-6 animate-slide-up animation-delay-300">
            Don’t Let Talent Gaps Stifle Your Agency’s Momentum
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            Lost revenue and burnout from hiring delays? Our streamlined process delivers vetted global talent, letting you focus on scaling and exceeding growth goals.
          </p>
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12 animate-slide-up animation-delay-500">
            The Advantages of Partnering With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="relative flex flex-col p-10 bg-background/50 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(121,96,190,0.25)] animate-slide-up w-full"
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                {/* Gradient Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7960be] to-[#9b85de] rounded-l-2xl" />
                
                {/* Content */}
                <h4 className="text-2xl md:text-3xl font-semibold text-primary mb-4 pl-6">{advantage.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed pl-6">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-600">
            If you are ready to remove the limitations of local hiring and access a world of qualified professionals, then we are ready to help. We are dedicated to providing your agency with the talent needed to achieve and exceed your growth objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnlockGrowth;