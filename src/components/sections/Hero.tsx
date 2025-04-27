import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText =
    "Seamless Talent, Superior Results\nScale Effortlessly with our Expert Global Team";
  const typingSpeed = 40;

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };
    type();
  }, []);

  const handleExploreRolesClick = () => {
    const section = document.querySelector("#roles");
    if (section) {
      const headerOffset = 104;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1.03,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.section
      id="home"
      className="relative flex items-center justify-center min-h-[80vh] pt-32 pb-20 bg-[#7960BE] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center relative z-10"
          variants={imageVariants}
          initial="initial"
          animate={isTypingComplete ? "animate" : "initial"}
        >
          {/* Decorative Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] bg-white/10 blur-3xl rounded-full opacity-50" />
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093"
            alt="Team Collaboration"
            className="relative rounded-3xl shadow-2xl border border-white/20 max-w-[90%] md:max-w-[70%] lg:max-w-[80%] object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <div className="order-2 lg:order-1 text-center lg:text-left relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="space-y-6"
          >
            <div
              className="inline-flex items-center
            bg-[#0DAB76]/70 text-[#F7FFF7] py-2 px-4 rounded-full text-xs sm:text-sm font-semibold shadow-md"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Cost-Effective Scaling, Uncompromising Quality
            </div>

            <h1 className="text-2xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white whitespace-pre-line">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {typedText.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < typedText.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </motion.span>
              {isTypingComplete && (
                <span className="inline-block w-2 h-6 bg-white ml-2 animate-blink" />
              )}
            </h1>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hire pre-vetted remote talent in as little as two weeks with up to
              70% savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <motion.button
                onClick={onBookCallClick}
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Now
              </motion.button>

              <motion.button
                onClick={handleExploreRolesClick}
                className="inline-flex items-center text-[#F7FFF7] hover:text-gray-200 font-semibold py-3 px-6 border-b-2 border-transparent hover:border-white/50 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                Explore Roles
                <ArrowRight size={20} className="ml-3" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curvy Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-24 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,100 1120,0 1440,80 L1440,120 L0,120 Z"
            fill="#F7FFF7"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default Hero;
