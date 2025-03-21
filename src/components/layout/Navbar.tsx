
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrollPosition > 10 ? 'bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg' : ''
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <span className="text-primary">Virtual</span>
          <span className="text-[#FF5E7A]">Mark</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {isHomePage ? (
            <>
              <a href="#home" className="nav-link">Home</a>
              <a href="#roles" className="nav-link">Roles</a>
              <a href="#how-it-works" className="nav-link">Process</a>
              <a href="#clients" className="nav-link">Clients</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </>
          ) : null}
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link 
            to={isHomePage ? "#book-call" : "/contact"} 
            className="btn-primary ml-4"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md text-foreground hover:bg-secondary/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
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
              <a href="#home" className="nav-link w-full py-3">Home</a>
              <a href="#roles" className="nav-link w-full py-3">Roles</a>
              <a href="#how-it-works" className="nav-link w-full py-3">Process</a>
              <a href="#clients" className="nav-link w-full py-3">Clients</a>
              <a href="#faq" className="nav-link w-full py-3">FAQ</a>
            </>
          ) : null}
          <Link to="/about" className="nav-link w-full py-3">About</Link>
          <Link to="/contact" className="nav-link w-full py-3">Contact</Link>
          <Link 
            to={isHomePage ? "#book-call" : "/contact"} 
            className="btn-primary mt-4 w-full flex justify-center"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
