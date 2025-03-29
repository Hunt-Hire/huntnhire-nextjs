import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Check if on the home page
  const isHomePage = location.pathname === '/';

  // Handle scroll event to hide/show the header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide the header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show the header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Navigation handlers
  const handleHowItWorksClick = () => {
    const section = document.querySelector('#how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRolesClick = () => {
    const section = document.querySelector('#roles');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowToApplyClick = () => {
    const section = document.querySelector('#how-to-apply');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-[100%]'
      }`}
    >
      {/* Slim Header */}
      <div className="h-10 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container-custom flex items-center justify-between h-full px-4 md:px-12">
          {/* Left: Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com/huntnhire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com/huntnhire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com/huntnhire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://linkedin.com/company/huntnhire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Right: FAQs and Email (Hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-muted-foreground text-sm font-medium">FAQs</span>
            <a
              href="/faqs#client"
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              Client-Related FAQs
            </a>
            <a
              href="/faqs#talent"
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              Talent-Related FAQs
            </a>
            <a
              href="mailto:careers@huntnhire.co"
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
              <span>careers@huntnhire.co</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="container-custom flex items-center justify-between h-16 md:h-20 bg-background/80 backdrop-blur-md border-b border-white/5">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <img
            src="/lovable-uploads/Hunt&Hire.png"
            alt="Hunt & Hire Logo"
            className="h-64 md:h-56"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a onClick={handleHowItWorksClick} className="nav-link hover-lift cursor-pointer">
            How It Works
          </a>
          <a onClick={handleRolesClick} className="nav-link hover-lift cursor-pointer">
            Our Roles
          </a>
          <Link to="/careers" className="nav-link hover-lift">
            Careers
          </Link>
          <a onClick={handleHowToApplyClick} className="nav-link hover-lift cursor-pointer">
            How To Apply
          </a>
          <a
            onClick={handleHowItWorksClick}
            className="btn-primary ml-4 hover-glow cursor-pointer"
          >
            Book a Discovery Call
          </a>
          <a
            href="#"
            className="ml-4 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2 rounded-md text-foreground hover:bg-secondary/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-[104px] inset-x-0 bg-background/95 backdrop-blur-lg border-b border-white/5 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="container-custom py-6 space-y-4 flex flex-col">
          <a onClick={handleHowItWorksClick} className="nav-link w-full py-3 cursor-pointer">
            How It Works
          </a>
          <a onClick={handleRolesClick} className="nav-link w-full py-3 cursor-pointer">
            Our Roles
          </a>
          <Link to="/careers" className="nav-link w-full py-3">
            Careers
          </Link>
          <a onClick={handleHowToApplyClick} className="nav-link w-full py-3 cursor-pointer">
            How To Apply
          </a>
          <a
            onClick={handleHowItWorksClick}
            className="btn-primary mt-4 w-full flex justify-center cursor-pointer"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;