
import { Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SlimHeader = () => {
  return (
    <header className="fixed top-0 inset-x-0 h-10 bg-background/80 backdrop-blur-md border-b border-white/5 z-50">
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
          <Link
            to="/about/#client-faqs"
            className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Client-Related FAQs
          </Link>
          <Link
            to="/about/#talent-faqs"
            className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Talent-Related FAQs
          </Link>
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
    </header>
  );
};

export default SlimHeader;
