
import { useEffect } from 'react';
import SlimHeader from '@/components/layout/SlimHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SlimHeader />
      <Navbar />
      
      <main className="flex-grow pt-[120px]">
        <section className="py-20 md:py-32">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up animation-delay-200">
                We're looking for exceptional talent to help us connect businesses with the best professionals globally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 animate-slide-up animation-delay-300">
                <h3 className="text-2xl font-semibold mb-4">Why Work With Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[#6b4ea8] to-[#b8a5f2] flex items-center justify-center text-white text-sm">✓</span>
                    <span>Remote-first environment with flexible scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[#6b4ea8] to-[#b8a5f2] flex items-center justify-center text-white text-sm">✓</span>
                    <span>Competitive compensation and growth opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[#6b4ea8] to-[#b8a5f2] flex items-center justify-center text-white text-sm">✓</span>
                    <span>Collaborative team culture that values diversity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[#6b4ea8] to-[#b8a5f2] flex items-center justify-center text-white text-sm">✓</span>
                    <span>Professional development and learning resources</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-8 animate-slide-up animation-delay-400">
                <h3 className="text-2xl font-semibold mb-4">Current Openings</h3>
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <h4 className="text-xl font-medium">Talent Acquisition Specialist</h4>
                    <p className="text-muted-foreground">Remote - Full Time</p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <h4 className="text-xl font-medium">Client Relationship Manager</h4>
                    <p className="text-muted-foreground">Remote - Full Time</p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <h4 className="text-xl font-medium">Marketing Coordinator</h4>
                    <p className="text-muted-foreground">Remote - Part Time</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center animate-slide-up animation-delay-500">
              <h3 className="text-2xl font-semibold mb-6">Don't see a role that fits?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals to join our team. 
                Send your resume to <a href="mailto:careers@huntandhire.com" className="text-primary hover:underline">careers@huntandhire.com</a>
              </p>
              <a href="/contact" className="btn-primary btn-hover-effect">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
