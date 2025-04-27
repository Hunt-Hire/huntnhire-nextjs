import { ArrowRight, Zap } from "lucide-react";

const PrecisionPlacement = () => {
  const reasons = [
    {
      title: "Industry-Focused Expertise",
      description:
        "Tailored talent solutions exclusively for marketing and SaaS businesses.",
      delay: 100,
    },
    {
      title: "Secure Global Placement",
      description:
        "We handle all employment complexities, delivering a secure and risk-free talent partnership.",
      delay: 200,
    },
    {
      title: "Immediate Impact Talent",
      description:
        "Pre-qualified professionals ready to contribute from day one.",
      delay: 300,
    },
    {
      title: "Growth-Driven Talent Partnership",
      description:
        "We provide ongoing strategic support beyond just filling positions.",
      delay: 400,
    },
  ];

  // Function to navigate to the HowItWorks section
  const handleCTAClick = () => {
    const howItWorksSection = document.querySelector("#calender");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-12 text-[#7960BE] relative overflow-hidden bg-[#F7FFF7]
  "
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            Precision <span className="text-[#7960BE]">Placement</span>,
            Powerful Progress
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200 text-[#191919]">
            Your dedicated partner in sourcing elite global professionals for
            marketing and SaaS agencies, ensuring seamless integration and rapid
            scaling.
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
                className="relative flex flex-col p-6 md:p-8 rounded-3xl shadow-xl transition-all duration-300
                         hover:scale-[1.03] hover:shadow-[#0DAB76]/50
                         bg-white/5 backdrop-blur-md border border-white/10"
                style={{ animationDelay: `${reason.delay}ms` }}
              >
                {/* Icon (Instead of Gradient Bar) */}
                <div className="absolute left-6 top-6">
                  <Zap className="text-[#7960BE] w-6 h-6" />
                </div>
                {/* Content */}
                <h4 className="text-2xl md:text-3xl font-semibold text-[#0DAB76]/70 mb-4 pl-10 md:pl-8">
                  {reason.title}
                </h4>
                <p className="text-lg text-gray-400 leading-relaxed pl-6 md:pl-8 text-center md:text-left text-[#191919]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="bg-[#7960BE] text-white rounded-md inline-flex items-center text-sm md:text-lg 
            px-5 py-4 hover-glow shadow-lg transition-transform duration-300 hover:scale-105"
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
