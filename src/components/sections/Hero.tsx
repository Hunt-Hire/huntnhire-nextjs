import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const [scrolled, setScrolled] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Connecting Exceptional Talent With Opportunity';

  // Typewriter effect for the heading
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here (100ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = Math.min(scrollY / 600, 1);
      setScrolled(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
    >
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#7960be]/30 to-[#9b85de]/30 animate-float-bubble"
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              filter: 'blur(8px)',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        {/* Text Content */}
        <div className="lg:w-3/5 text-center lg:text-left">
          <div className="inline-block px-5 py-2 mb-8 rounded-full bg-[#7960be]/10 border border-[#7960be]/20 backdrop-blur-sm transform translate-y-10 opacity-0 animate-slide-up">
            <p className="text-sm font-medium text-[#7960be] tracking-wide">Find Your Perfect Talent Match</p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            <span className="block">{typedText}</span>
            <span className="inline-block h-1 w-12 bg-[#7960be] mt-2"></span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 transform translate-y-10 opacity-0 animate-slide-up animation-delay-200">
            Hunt & Hire helps you find the perfect professional match for your team within days, not months.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform translate-y-10 opacity-0 animate-slide-up animation-delay-300">
            <button
              onClick={onBookCallClick}
              className="relative px-6 py-3 bg-gradient-to-r from-[#7960be] to-[#9b85de] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7960be] to-[#9b85de] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
              Book a Discovery Call
            </button>
            <a
              href="#roles"
              className="relative px-6 py-3 border border-[#7960be]/50 text-[#7960be] font-semibold rounded-full hover:bg-[#7960be]/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <span className="absolute inset-0 rounded-full bg-[#7960be] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></span>
              Explore Talent
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-2/5 transform translate-y-10 opacity-0 animate-slide-up animation-delay-400">
          <div className="relative w-full max-w-sm mx-auto group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7960be] to-[#9b85de] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
            {/* Glass Card */}
            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_20px_rgba(121,96,190,0.3)] transition-all duration-500 animate-float">
              <img
                src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8"
                alt="Professional at work"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#roles"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform translate-y-10 opacity-0 animate-slide-up animation-delay-500 group"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-gray-300 group-hover:text-[#7960be] transition-colors duration-300">
            Explore
          </span>
          <div className="relative">
            <ArrowDown
              size={24}
              className="text-[#7960be] animate-bounce"
            />
            <div className="absolute inset-0 rounded-full bg-[#7960be] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 animate-pulse"></div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Hero;