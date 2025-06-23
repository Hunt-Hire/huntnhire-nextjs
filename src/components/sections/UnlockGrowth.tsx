import { Zap } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const UnlockGrowth = () => {
  const advantages = [
    {
      title: "Maximize Budget Efficiency",
      description:
        "Achieve up to 75% savings on payroll costs by leveraging our global talent.",
      delay: 100,
    },
    {
      title: "Accelerated Hiring Process",
      description:
        "Reduce time-to-fill by 70% with our efficient recruitment solutions.",
      delay: 200,
    },
    {
      title: "Effortless Team Integration",
      description:
        "Experience seamless collaboration with our pre-vetted, culturally aligned professionals.",
      delay: 300,
    },
  ];

  return (
    <section className="section py-12 relative overflow-hidden bg-[#F7FFF7] bg-[size:24px_24px]">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center text-[#7960BE]">
            Unlock Exponential Growth: Access Top-Tier Global{" "}
            <span className="relative inline-block text-[#0DAB76]/70 min-w-5">
              <Typewriter
                words={["Marketing", "SaaS"]}
                loop={0}
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
                cursor={false}
              />
              {/* Ghost word to prevent layout shift */}
              <span className="invisible absolute top-0 left-0">Marketing</span>
            </span>{" "}
            Talent
          </h2>
          <p className="text-xl max-w-6xl mx-auto leading-relaxed animate-slide-up animation-delay-200 text-[#191919]">
            Stop growth bottlenecks. Access skilled global talent, integrate
            seamlessly, and drive your agency's success.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-6 animate-slide-up animation-delay-300 text-[#7960BE]">
            Don’t Let Talent Gaps Stifle Your Agency’s Momentum
          </h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-400 text-[#191919]">
            Lost revenue and burnout from hiring delays? Our streamlined process
            delivers vetted global talent, letting you focus on scaling and
            exceeding growth goals.
          </p>
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12 animate-slide-up animation-delay-500 text-[#7960BE]">
            The Advantages of Partnering With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="relative flex flex-col p-6 md:p-8 rounded-3xl shadow-xl transition-all duration-300
                         hover:scale-[1.03] hover:shadow-[#0DAB76]/50
                         bg-white/5 backdrop-blur-md border border-white/10"
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                <div className="absolute left-6 top-6">
                  <Zap className="text-[#7960BE] w-6 h-6" />
                </div>
                <h4 className="text-2xl md:text-3xl font-semibold text-[#0DAB76]/70 mb-4 pl-10 md:pl-8">
                  {advantage.title}
                </h4>
                <p className="text-lg leading-relaxed pl-6 md:pl-8 text-center md:text-left text-[#191919]">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <p className="text-xl max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-600 text-[#191919]">
            If you are ready to remove the limitations of local hiring and
            access a world of qualified professionals, then we are ready to
            help. We are dedicated to providing your agency with the talent
            needed to achieve and exceed your growth objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnlockGrowth;
