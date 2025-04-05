import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Seamless Talent, Superior Results\nScale Effortlessly with our Expert Global Team";
  const typingSpeed = 100; // Speed in milliseconds

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="py-10 md:py-16 section flex justify-center items-center min-h-[90vh]"
    >
      <div className="container mx-auto px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        {/* Image */}
        <div className="order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093"
              alt="Team working collaboratively"
              className="rounded-md object-cover w-full"
              style={{ maxHeight: "400px", height: "auto" }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-block btn-primary text-white py-1 px-3 rounded-full text-sm font-medium mb-4">
            Cost-Effective Scaling, Uncompromising Quality
          </div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6 whitespace-pre-line">
            {typedText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < typedText.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
            <span className="inline-block w-2 h-6 bg-primary ml-2 animate-blink" />
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button
              onClick={onBookCallClick}
              className="btn-primary hover-glow text-white
                font-semibold py-3 px-6 rounded-full focus:outline-none
                focus:ring-2 focus:ring-green-400"
            >
              Schedule a Growth Consultation
            </button>

            <button
              onClick={handleExploreRolesClick}
              className=" inline-flex items-center text-white hover:underline
                font-semibold py-3 px-6 self-center"
            >
              Explore Roles
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          {/* <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
            <span className="font-semibold">EXCELLENT</span>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span>467 reviews</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
