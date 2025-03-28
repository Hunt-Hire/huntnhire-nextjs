
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const SlimHeader = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 h-10 bg-background/80 backdrop-blur-md border-b border-white/5 z-60">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Social Links */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Right Section - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          {/* FAQs Dropdown */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">FAQs:</span>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Client-Related FAQs
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Talent-Related FAQs
            </a>
          </div>
          
          {/* Email Link */}
          <a 
            href="mailto:hello@huntandhire.com" 
            className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail size={16} />
            <span>hello@huntandhire.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default SlimHeader;
