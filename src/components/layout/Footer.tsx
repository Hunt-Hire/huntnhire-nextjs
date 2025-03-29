
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

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
                src="/lovable-uploads/Hunt&Hire.png"
                alt="Hunt & Hire Logo" 
                className="h-32"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Build Your Dream Team Swiftly and Smartly with Us!
            </p>
            <p className="text-muted-foreground max-w-xs">
              We provide elite global professionals, so your marketing or SaaS agency can scale rapidly and efficiently.
            </p>
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
                <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#roles" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Our Roles
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors hover-lift">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect!</h4>
            <div className="flex space-x-4 text-muted-foreground mb-4">
              <a 
                href="https://facebook.com/huntnhire" 
                className="hover:text-[#7960be] transition-colors hover-lift" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/huntnhire" 
                className="hover:text-[#9b85de] transition-colors hover-lift"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com/huntnhire" 
                className="hover:text-[#7960be] transition-colors hover-lift"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/huntnhire" 
                className="hover:text-[#9b85de] transition-colors hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
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
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Terms
            </Link>
            <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
