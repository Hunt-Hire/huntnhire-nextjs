import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import UnlockGrowth from "@/components/sections/UnlockGrowth";
import PrecisionPlacement from "@/components/sections/PrecisionPlacement";
import RolesSection from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Clients from "@/components/sections/Clients";
import QuickFAQ from "@/components/sections/QuickFAQ";
import FAQ from "@/components/sections/FAQ";
import SlimHeader from "@/components/sections/SlimHeader";

const Index = () => {
  const location = useLocation();

  const Divider = () => {
    return (
      <div
        className="w-full h-[2px] max-w-6xl mx-auto my-1"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
        }}
      />
    );
  };

  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          // Account for fixed header height (approximately 104px)
          const headerOffset = 104;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Trigger smooth scrolling on initial load if there's a hash
    if (location.hash) {
      // Small delay to ensure the page is fully loaded
      setTimeout(handleHashChange, 100);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [location.hash]);

  // Function to navigate to the HowItWorks section
  const handleBookCallClick = () => {
    const howItWorksSection = document.querySelector("#calender");
    if (howItWorksSection) {
      // Account for fixed header height (approximately 104px)
      const headerOffset = 104;
      const elementPosition = howItWorksSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SlimHeader />
      <Navbar />

      <main className="flex-grow">
        <Hero onBookCallClick={handleBookCallClick} />

        <UnlockGrowth />

        <RolesSection />

        <PrecisionPlacement />

        <HowItWorks />

        <Clients id="clients" />
        <div id="quick-faq">
          <QuickFAQ />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
