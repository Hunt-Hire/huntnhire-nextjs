
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import BookCallModal from '@/components/ui/BookCallModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookCallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if URL has #book-call hash and open modal
    if (window.location.hash === '#book-call') {
      setIsModalOpen(true);
    }

    // Implement smooth scrolling for anchor links
    const handleHashChange = () => {
      if (window.location.hash === '#book-call') {
        setIsModalOpen(true);
      } else if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onBookCallClick={() => setIsModalOpen(true)} />
        <Services />
        <HowItWorks />
        <FAQ />
        
        {/* Book Call section (anchor point) */}
        <div ref={bookCallRef} id="book-call" className="section py-16 bg-primary/5">
          <div className="container-custom text-center">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Schedule a no-obligation discovery call to discuss your project needs and how we can help your business grow.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <BookCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
