import { useRef, useState } from "react";
import AnimatedCard from "../ui/AnimatedCard";
import { Calendar, Users, Target } from "lucide-react";
import CalendlyWidget from "../CalendlyWidget";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Book a Discovery Call",
      description:
        "Schedule a consultation with our experts. We'll discuss your agency's goals and define the ideal candidate profile.",
      icon: <Calendar size={48} className="text-[#0DAB76]/70" />,
    },
    {
      number: "02",
      title: "We Find Perfect Match",
      description:
        "Our specialized recruiters leverage their expertise and global networks to identify and pre-screen top-tier candidates. We’ll provide you with detailed candidate profiles, including video introductions.",
      icon: <Users size={48} className="text-[#0DAB76]/70" />,
    },
    {
      number: "03",
      title: "Meet Your Candidate",
      description:
        "Conduct a final interview to select your new team member. We provide comprehensive onboarding support and ongoing assistance to ensure a successful integration.",
      icon: <Target size={48} className="text-[#0DAB76]/70" />,
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
      className="bg-[#7960BE] relative overflow-hidden text-[#F7FFF7]"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 mb-8 rounded-md bg-white shadow-lg">
            <p className="text-lg font-semibold text-[#7960BE]">How It Works</p>
          </div>
          <p className="text-sm md:text-lg text-[#F7FFF7] max-w-4xl mx-auto leading-relaxed">
            Skip the resume piles and endless interviews. <br />
            We handle the entire talent acquisition process so you can focus on
            scaling your agency.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => (
            <AnimatedCard
              key={index}
              animationDelay={index * 100}
              className={`relative flex flex-col items-center text-center p-6 rounded-xl
                bg-white shadow-lg border border-[#0DAB76] transition-all duration-300 ${
                  activeStep === index
                    ? "scale-105 border-primary/30 shadow-primary/10"
                    : ""
                }`}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#55C49F] text-white font-bold text-lg flex items-center justify-center shadow-md">
                {step.number}
              </div>
              <div className="w-20 h-20 rounded-full bg-[#0DAB76]/10 flex items-center justify-center mb-6 mt-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-[#0DAB76]/70 mb-4">
                {step.title}
              </h3>
              <p className="leading-relaxed text-[#191919]">
                {step.description}
              </p>
            </AnimatedCard>
          ))}
        </div>

        {/*Calendar Section */}
        <div className="text-center mt-20 px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            Schedule Your Free
            <span className="text-accent">Growth Consultation</span> Today
          </h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-white/80">
            Book a discovery call with our team to discuss your needs and
            kickstart the hiring process.
          </p>

          <section
            id="calender"
            className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-white/10
             border border-white/10 p-2 md:p-4 rounded-2xl shadow-xl backdrop-blur-lg"
          >
            <div className="rounded-xl w-full">
              <CalendlyWidget url="https://calendly.com/dev-huntnhire/30min" />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
