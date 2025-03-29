import { Facebook, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const SlimHeader = () => {
  return (
    <header className="fixed top-0 inset-x-0 h-10 bg-background/80 backdrop-blur-md border-b border-white/5 z-60">
      <div className="container-custom flex items-center justify-between h-full px-4 md:px-12">
        {/* Left: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
          <a
            href="#"
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
            href="#"
            className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Client-Related FAQs
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Talent-Related FAQs
          </a>
          <a
            href="mailto:hello@huntandhire.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SlimHeader;