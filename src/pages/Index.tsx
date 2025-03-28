
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SlimHeader from '@/components/layout/SlimHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import UnlockGrowth from '@/components/sections/UnlockGrowth';
import PrecisionPlacement from '@/components/sections/PrecisionPlacement';
import RolesSection from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Clients from '@/components/sections/Clients';
import QuickFAQ from '@/components/sections/QuickFAQ';
import FAQ from '@/components/sections/FAQ';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Trigger smooth scrolling on initial load if there's a hash
    if (location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location.hash]);

  // Function to navigate to the HowItWorks section
  const handleBookCallClick = () => {
    const howItWorksSection = document.querySelector('#how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SlimHeader />
      <Navbar />
      
      <main className="flex-grow pt-[120px]">
        <Hero onBookCallClick={handleBookCallClick} />
        <UnlockGrowth /> 
        <PrecisionPlacement />
        <RolesSection />
        <HowItWorks />
        <Clients />
        <QuickFAQ />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
