import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Seamless Talent, Superior Results\nScale Effortlessly with our Expert Global Team";
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
    const section = document.querySelector('#roles');
    if (section) {
      const headerOffset = 104;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1552581234-26160f608093')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/50 z-0" />

      {/* Main Content */}
      <div className="container-custom relative z-10 flex flex-col items-center justify-center gap-8 py-32 md:py-40 text-center">
        {/* Tagline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white animate-slide-up">
          Cost-Effective Scaling, Uncompromising Quality
        </h2>

        {/* Unique Selling Point with Typing Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up animation-delay-200 whitespace-pre-line">
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {typedText.split('\n')[0]}
          </span>
          {typedText.includes('\n') && (
            <>
              <br />
              {typedText.split('\n')[1]}
            </>
          )}
          <span className="inline-block w-2 h-6 bg-primary animate-blink" />
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
          <button
            onClick={onBookCallClick}
            className="btn-primary inline-flex items-center hover-glow"
          >
            Schedule Your Growth Consultation
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>

        {/* Secondary CTA */}
        <button
          onClick={handleExploreRolesClick}
          className="btn-outline inline-flex items-center animate-slide-up animation-delay-500"
        >
          Explore Roles
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Hero;