
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former tech lead at major tech companies with 15+ years of experience in scaling engineering teams.",
      delay: 0,
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      bio: "Award-winning designer with expertise in creating intuitive and beautiful digital experiences.",
      delay: 100,
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Director",
      bio: "Full-stack developer who has architected solutions for Fortune 500 companies and startups alike.",
      delay: 200,
    },
    {
      name: "Priya Patel",
      role: "Client Success Manager",
      bio: "Dedicated to ensuring seamless client experiences and exceeding expectations on every project.",
      delay: 300,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] opacity-50"
          />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary">About Us</p>
              </div>
              
              <h1 className="mb-6">
                Seamless Talent, <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Superior Results
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                We're a collective of digital specialists committed to helping ambitious businesses achieve exceptional outcomes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedCard 
                  animationDirection="left"
                  hoverEffect={false}
                  className="p-0 overflow-hidden"
                >
                  <div className="relative h-[400px] md:h-[500px] bg-gradient-to-tr from-secondary via-secondary/50 to-primary/30">
                    {/* Abstract shapes */}
                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
                    <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-primary/10 blur-xl" />
                    
                    {/* Center element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="glass-card p-8 max-w-xs text-center">
                        <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
                        <p className="text-muted-foreground">
                          To redefine how businesses access premium technical talent and digital services.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
              
              <div>
                <h2 className="mb-6 opacity-0 animate-fade-in">Our Mission</h2>
                <p className="text-lg mb-6 text-muted-foreground opacity-0 animate-fade-in animation-delay-100">
                  We exist to bridge the gap between exceptional talent and ambitious companies, creating value through strategic technical partnerships.
                </p>
                <p className="text-lg mb-8 text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
                  Our approach combines deep technical expertise with a focus on business outcomes, ensuring that every project delivers measurable results and sustainable growth.
                </p>
                <ul className="space-y-4 opacity-0 animate-fade-in animation-delay-300">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">→</span>
                    <span>Delivering premium quality without premium pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">→</span>
                    <span>Building long-term partnerships, not just transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">→</span>
                    <span>Creating value through technical excellence and business insight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary">Our Team</p>
              </div>
              <h2>Meet Our Experts</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
                A diverse team of specialists committed to your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <AnimatedCard 
                  key={index}
                  animationDelay={member.delay}
                  className="h-full flex flex-col"
                >
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container-custom text-center">
            <h2 className="mb-6 opacity-0 animate-fade-in">Work With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-100">
              Ready to transform your digital capabilities with exceptional talent and strategic expertise?
            </p>
            <div className="opacity-0 animate-fade-in animation-delay-200">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
