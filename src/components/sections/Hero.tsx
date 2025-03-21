
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Calculate scroll percentage (0 to 1)
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
        background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.15), transparent 60%)',
      }}
    >
      {/* Background elements */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"
        style={{
          transform: `translateY(${scrolled * 100}px)`,
        }}
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] opacity-50"
        style={{
          transform: `translate(-50%, -50%) scale(${1 - scrolled * 0.2})`,
        }}
      />

      <div className="container-custom relative z-10 mt-16 md:mt-0 flex flex-col md:flex-row items-center">
        <div className="max-w-3xl md:w-1/2 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 opacity-0 animate-fade-in">
            <p className="text-sm font-medium text-primary">Scale Your Marketing Smarter, Not Harder</p>
          </div>
          
          <h1 className="opacity-0 animate-fade-in animation-delay-100">
            Virtual Marketing <br />
            <span className="bg-gradient-to-r from-primary to-[#FF5E7A] bg-clip-text text-transparent">
              Talent On Demand
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in animation-delay-200">
            Grow your brand with expert marketing professionals ready to join your team within days, not months.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in animation-delay-300">
            <button 
              onClick={onBookCallClick}
              className="btn-primary"
            >
              Book a Discovery Call
            </button>
            <a href="#roles" className="btn-outline">
              Start Hiring
            </a>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="md:w-1/2 mt-12 md:mt-0 opacity-0 animate-fade-in animation-delay-400">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-[#FF5E7A] opacity-20 blur-xl"></div>
            <div className="glass-card overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Marketer at desk with digital dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#roles" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500 animation-fill-forwards"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Explore</span>
          <ArrowDown size={20} className="animate-float text-primary" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
