
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Mail } from 'lucide-react';

const Careers = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] opacity-50"
          />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary">Careers</p>
              </div>
              
              <h1 className="mb-6">
                Join Our <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Dynamic Team</span>: 
                <br />Your Path to Global Opportunities
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Build Your Digital Marketing / Website Development Career with Us!
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 bg-secondary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <p className="lead">
                We're a fast-growing startup connecting exceptional talent with leading marketing and SaaS agencies worldwide. 
                If you're passionate about your field and ready to take your career to the next level, we'd love to hear from you!
              </p>
              
              <h2>Here's how our hiring process works:</h2>
              
              <div className="grid gap-8 my-12">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/20 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Submit Your Application</h3>
                    <p>Kickstart your journey! Send your PDF resume to hr@huntnhire.co. Tell us about your passion and what makes you stand out.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/20 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Initial Screening: A Quick Chat</h3>
                    <p>If your skills and experience align with our needs, we'll schedule a friendly phone call. This is a chance for us to get to know you better and for you to ask any questions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/20 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Video Resume: Showcase Your Spark</h3>
                    <p>Let your personality shine! Share a short video resume. This is your chance to show us who you are beyond the resume and demonstrate your communication style.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/20 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Client Interview: Meet Your Future Team</h3>
                    <p>If you're a great fit, you'll meet our client for an interview. This is your opportunity to learn about the role and show them why you're the perfect candidate.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/20 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Hiring & Onboarding: Welcome Aboard!</h3>
                    <p>Congratulations! We'll guide you through the formalities and make your onboarding smooth and exciting.</p>
                  </div>
                </div>
              </div>
              
              <h2>Why Join Our Growing Community?</h2>
              <ul>
                <li><strong>Global Opportunities:</strong> Work with leading marketing and SaaS agencies around the world.</li>
                <li><strong>Career Growth:</strong> We're a startup, meaning you'll have the chance to grow with us and take on new challenges.</li>
                <li><strong>Flexible Work:</strong> Enjoy the freedom of remote work and a flexible schedule.</li>
                <li><strong>Competitive Compensation:</strong> We offer competitive pay and benefits to reward your hard work.</li>
                <li><strong>Skill Enhancement:</strong> We provide opportunities for continuous learning and skill development.</li>
                <li><strong>Direct Client Exposure:</strong> Get hands-on experience working directly with clients.</li>
                <li><strong>Supportive Community:</strong> Join a team of passionate professionals who support each other.</li>
                <li><strong>Fast-paced environment:</strong> In a startup environment, no two days are the same.</li>
                <li><strong>Direct Impact:</strong> Your contributions will directly impact client success.</li>
              </ul>
              
              <h2>We're Looking For:</h2>
              <ul>
                <li>Passionate and driven individuals.</li>
                <li>Excellent communicators and problem-solvers.</li>
                <li>Professionals who thrive in a remote work environment.</li>
                <li>Individuals eager to learn and grow.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
          <div className="container-custom text-center">
            <h2 className="mb-6">Ready to start your journey? Apply today!</h2>
            <a 
              href="mailto:careers@huntnhire.co" 
              className="btn-primary inline-flex items-center mx-auto"
            >
              Email us at careers@huntnhire.co
              <Mail size={16} className="ml-2" />
            </a>
            <p className="mt-4 text-muted-foreground">We look forward to welcoming you to our team!</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
