import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const handleExploreRolesClick = () => {
    const section = document.querySelector('#roles');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
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

        {/* Unique Selling Point */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up animation-delay-200">
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Seamless Talent, Superior Results
          </span>
          <br />
          Scale Effortlessly with our Expert Global Team
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
          <button
            onClick={onBookCallClick}
            className="btn-primary inline-flex items-center hover-glow"
          >
            Book a Discovery Call
            <ArrowRight size={16} className="ml-2" />
          </button>
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