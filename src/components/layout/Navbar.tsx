
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  // Check if on the home page
  const isHomePage = location.pathname === '/';

  // Handle scroll event for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-10 inset-x-0 z-40 transition-all duration-300 ${
        scrollPosition > 10 ? 'bg-background/90 backdrop-blur-md border-b border-white/5 shadow-lg' : ''
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <img
            src="/lovable-uploads/Hunt&Hire.png"
            alt="Hunt & Hire Logo"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {isHomePage ? (
            <>
              <a href="#how-it-works" className="nav-link hover-lift">
                How It Works
              </a>
              <a href="#roles" className="nav-link hover-lift">
                Our Roles
              </a>
              <Link to="/careers" className="nav-link hover-lift">
                Careers
              </Link>
              <a href="#how-it-works" className="nav-link hover-lift">
                How To Apply
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link hover-lift">
                Home
              </Link>
              <Link to="/careers" className="nav-link hover-lift">
                Careers
              </Link>
              <Link to="/about" className="nav-link hover-lift">
                About
              </Link>
              <Link to="/contact" className="nav-link hover-lift">
                Contact
              </Link>
            </>
          )}
          <a
            href={isHomePage ? '#how-it-works' : '/contact'}
            className="btn-primary ml-4 hover-glow"
          >
            Book a Discovery Call
          </a>
          <button
            className="ml-4 flex items-center p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
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
        className={`md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-white/5 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="container-custom py-6 space-y-4 flex flex-col">
          {isHomePage ? (
            <>
              <a href="#how-it-works" className="nav-link w-full py-3">
                How It Works
              </a>
              <a href="#roles" className="nav-link w-full py-3">
                Our Roles
              </a>
              <Link to="/careers" className="nav-link w-full py-3">
                Careers
              </Link>
              <a href="#how-it-works" className="nav-link w-full py-3">
                How To Apply
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link w-full py-3">
                Home
              </Link>
              <Link to="/careers" className="nav-link w-full py-3">
                Careers
              </Link>
              <Link to="/about" className="nav-link w-full py-3">
                About
              </Link>
              <Link to="/contact" className="nav-link w-full py-3">
                Contact
              </Link>
            </>
          )}
          <a
            href={isHomePage ? '#how-it-works' : '/contact'}
            className="btn-primary mt-4 w-full flex justify-center"
          >
            Book a Discovery Call
          </a>
          <button
            className="mt-4 w-full flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
            <span className="ml-2">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
