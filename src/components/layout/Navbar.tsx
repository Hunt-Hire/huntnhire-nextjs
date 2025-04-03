import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Check if on the home page
  const isHomePage = location.pathname === '/';

  // Handle scroll event to hide/show the header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu and search modal when path changes
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  // Navigation handlers
  const handleHowItWorksClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#how-it-works';
      return;
    }
    const section = document.querySelector('#how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRolesClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#roles';
      return;
    }
    const section = document.querySelector('#roles');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logo click handler to navigate to landing page
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default Link behavior for custom handling
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to root if not already on home page
    } else {
      // If already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Search handlers
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  // Static content to search (example, extend this as needed)
  const searchableContent = [
    { title: 'How It Works', sectionId: 'how-it-works', keywords: ['discovery call', 'candidate', 'recruiters'] },
    { title: 'Our Roles', sectionId: 'roles', keywords: ['marketing', 'virtual assistant', 'ppc'] },
    { title: 'About', path: '/about', keywords: ['company', 'mission', 'team'] },
    { title: 'Contact', path: '/contact', keywords: ['email', 'support', 'inquiry'] },
    { title: 'Careers', path: '/careers', keywords: ['jobs', 'hiring', 'apply'] },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const queryLower = searchQuery.toLowerCase();
      const match = searchableContent.find((item) =>
        item.title.toLowerCase().includes(queryLower) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(queryLower))
      );

      if (match) {
        if (match.sectionId && location.pathname === '/') {
          const section = document.querySelector(`#${match.sectionId}`);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (match.path) {
          navigate(match.path);
        }
      } else {
        alert('No results found. Try a different search term.');
      }
      handleSearchClose();
    }
  };

  return (
    <header
      className={`fixed top-[42px] inset-x-0 z-40 transition-transform duration-300 w-full ${
        isVisible ? 'translate-y-0' : '-translate-y-[100%]'
      }`}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between h-16 md:h-20 bg-background/80 backdrop-blur-md border-b border-white/5 w-full px-4 md:px-12">
        {/* Left: Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
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
          <Link to="/about" className="nav-link hover-lift">
            About
          </Link>
          <Link to="/contact" className="nav-link hover-lift">
            Contact
          </Link>
          <Link to="/careers" className="nav-link hover-lift">
            Careers
          </Link>
          <a
            onClick={handleHowItWorksClick}
            className="btn-primary ml-4 hover-glow cursor-pointer"
          >
            Book a Discovery Call
          </a>
          <button
            onClick={handleSearchClick}
            className="ml-4 text-muted-foreground hover:text-primary transition-colors"
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
        className={`md:hidden absolute top-[106px] inset-x-0 bg-background/95 backdrop-blur-lg border-b border-white/5 shadow-lg transition-all duration-300 ease-in-out w-full ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="py-6 space-y-4 flex flex-col px-4 md:px-12">
          <a onClick={handleHowItWorksClick} className="nav-link w-full py-3 cursor-pointer">
            How It Works
          </a>
          <a onClick={handleRolesClick} className="nav-link w-full py-3 cursor-pointer">
            Our Roles
          </a>
          <Link to="/about" className="nav-link w-full py-3">
            About
          </Link>
          <Link to="/contact" className="nav-link w-full py-3">
            Contact
          </Link>
          <Link to="/careers" className="nav-link w-full py-3">
            Careers
          </Link>
          <a
            onClick={handleHowItWorksClick}
            className="btn-primary mt-4 w-full flex justify-center cursor-pointer"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-lg p-6 w-full max-w-md mx-4 shadow-xl border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">Search</h3>
              <button
                onClick={handleSearchClose}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Close search"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for roles, pages, or info..."
                className="w-full p-3 rounded-md bg-secondary/20 text-foreground border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <button
                type="submit"
                className="btn-primary p-3 rounded-md hover-glow"
                aria-label="Submit search"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;