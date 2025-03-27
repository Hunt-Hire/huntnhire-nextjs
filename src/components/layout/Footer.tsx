
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription for:', email);
    setEmail('');
    // In a real app, we would send this to a backend
  };

  return (
    <footer className="bg-secondary/30 border-t border-white/5">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/122d47fc-4c43-4c2d-93b0-b36ca8f73b8c.png" 
                alt="Hunt & Hire Logo" 
                className="h-8"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Connecting businesses with exceptional talent for flexible, scalable growth without the hassle.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <a 
                href="#" 
                className="hover:text-[#7960be] transition-colors hover-lift" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="hover:text-[#9b85de] transition-colors hover-lift"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="hover:text-[#7960be] transition-colors hover-lift"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:hello@huntandhire.com" 
                className="hover:text-[#9b85de] transition-colors hover-lift"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Available Roles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Development Experts
                </a>
              </li>
              <li>
                <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Marketing Specialists
                </a>
              </li>
              <li>
                <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Project Managers
                </a>
              </li>
              <li>
                <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  UX/UI Designers
                </a>
              </li>
              <li>
                <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Data Analysts
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Get talent insights and job alerts.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-secondary/50 border border-border/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7960be]/30 placeholder:text-muted-foreground/70"
                  aria-label="Email for newsletter"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 p-1.5 bg-gradient-to-r from-[#7960be] to-[#9b85de] rounded-md text-primary-foreground hover:opacity-90 transition-opacity"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Hunt & Hire. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
