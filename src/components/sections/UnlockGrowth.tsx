import { Zap } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const UnlockGrowth = () => {
  const advantages = [
    {
      title: "Maximize Budget Efficiency",
      description:
        "Cut payroll costs by up to 75% using our offshore virtual staffing solutions.",
      delay: 100,
    },
    {
      title: "Accelerated Hiring Process",
      description:
        "Reduce time-to-hire by 70% with our quick remote recruitment system.",
      delay: 200,
    },
    {
      title: "Effortless Team Integration",
      description:
        "Get culturally aligned virtual assistants and professionals who blend seamlessly into your team.",
      delay: 300,
    },
  ];

  return (
    <section className="section py-12 relative overflow-hidden bg-[#F7FFF7] bg-[size:24px_24px]">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center text-[#7960BE]">
            Unlock Exponential Growth with Global {" "} Talent.
            <span className="relative inline-block text-[#0DAB76]/70 min-w-12">
              <Typewriter
                words={["Marketing", "SaaS", "Web Developers", "SEO Experts", "E-commerce", "Advertising", "Design", "Project Management"]}
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
            Remove hiring delays. Build your dream remote team with experienced virtual assistants, digital marketers, and creative professionals who help agencies grow smarter and faster.
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
         Hunt N Hire connects agencies with the best remote talent across the globe, helping you scale confidently and stay competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnlockGrowth;
