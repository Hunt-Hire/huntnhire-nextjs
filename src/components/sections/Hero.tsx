
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const [scrolled, setScrolled] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Seamless Talent, Superior Results: Scale Effortlessly with our Expert Global Team';

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
    }, 50); // Adjust typing speed here (50ms per character)

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552581234-26160f608093)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>

      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#6b4ea8]/30 to-[#b8a5f2]/30 animate-float-bubble"
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
      <div className="container-custom relative z-10 flex flex-col items-center py-32 md:py-40">
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transform translate-y-10 opacity-0 animate-slide-up">
            Cost-Effective Scaling, Uncompromising Quality
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-8 transform translate-y-10 opacity-0 animate-slide-up animation-delay-200">
            {typedText}
            <span className="inline-block h-1 w-12 bg-gradient-to-r from-[#6b4ea8] to-[#b8a5f2] mt-4"></span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto transform translate-y-10 opacity-0 animate-slide-up animation-delay-300">
            Hunt & Hire helps you find the perfect professional match for your team within days, not months. Our pre-vetted talent is ready to elevate your business.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 transform translate-y-10 opacity-0 animate-slide-up animation-delay-400">
            <button
              onClick={onBookCallClick}
              className="btn-primary btn-hover-effect"
            >
              Book a Discovery Call
            </button>
            <button
              onClick={onBookCallClick}
              className="btn-primary btn-hover-effect"
            >
              Schedule Your Growth Consultation
            </button>
            <a
              href="#roles"
              className="btn-outline hover:bg-white/5"
            >
              Explore Roles
            </a>
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
          <span className="text-sm font-medium text-gray-300 group-hover:text-[#6b4ea8] transition-colors duration-300">
            Explore
          </span>
          <div className="relative">
            <ArrowDown
              size={24}
              className="text-[#6b4ea8] animate-bounce"
            />
            <div className="absolute inset-0 rounded-full bg-[#6b4ea8] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 animate-pulse"></div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
