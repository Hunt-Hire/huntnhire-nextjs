import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail } from "lucide-react";
import SlimHeader from "@/components/sections/SlimHeader";

const Careers = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SlimHeader />

      <Navbar />

      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#7960BE]">
          {/* Decorative Gradient Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-[100px] opacity-50" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-slide-up">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#F7FFF7] shadow-md">
                <p className="text-sm font-medium text-primary">Careers</p>
              </div>

              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Join Our <span className="text-[#0DAB76]/70">Dynamic Team</span>
                :
                <br />
                Your Path to Global Opportunities
              </h1>

              <p className="text-xl text-[#191919] leading-relaxed">
                Build Your Digital Marketing / Website Development Career with
                Us!
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-[#F7FFF7]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <p className="lead text-xl text-[#191919] mb-8 animate-slide-up">
                We're a fast-growing startup connecting exceptional talent with
                leading marketing and SaaS agencies worldwide. If you're
                passionate about your field and ready to take your career to the
                next level, we'd love to hear from you!
              </p>

              <h2 className="text-3xl font-bold mb-6 animate-slide-up animation-delay-200 text-[#7960BE]">
                Here's how our hiring process works:
              </h2>

              <div className="grid gap-8 my-12">
                {[
                  {
                    step: 1,
                    title: "Submit Your Application",
                    description:
                      "Kickstart your journey! Send your PDF resume to hr@huntnhire.co. Tell us about your passion and what makes you stand out.",
                  },
                  {
                    step: 2,
                    title: "Initial Screening: A Quick Chat",
                    description:
                      "If your skills and experience align with our needs, we’ll schedule a friendly phone call. This is a chance for us to get to know you better and for you to ask any questions.",
                  },
                  {
                    step: 3,
                    title: "Video Resume: Showcase Your Spark",
                    description:
                      "Let your personality shine! Share a short video resume. This is your chance to show us who you are beyond the resume and demonstrate your communication style.",
                  },
                  {
                    step: 4,
                    title: "Client Interview: Meet Your Future Team",
                    description:
                      "If you’re a great fit, you’ll meet our client for an interview. This is your opportunity to learn about the role and show them why you’re the perfect candidate.",
                  },
                  {
                    step: 5,
                    title: "Hiring & Onboarding: Welcome Aboard!",
                    description:
                      "Congratulations! We’ll guide you through the formalities and make your onboarding smooth and exciting.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="bg-[#7960BE] font-bold rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#7960BE]">
                        {item.title}
                      </h3>
                      <p className="text-[#191919] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6 animate-slide-up text-[#7960BE]">
                Why Join Our Growing Community?
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Global Opportunities: Work with leading marketing and SaaS agencies around the world.",
                  "Career Growth: We’re a startup, meaning you’ll have the chance to grow with us and take on new challenges.",
                  "Flexible Work: Enjoy the freedom of remote work and a flexible schedule.",
                  "Competitive Compensation: We offer competitive pay and benefits to reward your hard work.",
                  "Skill Enhancement: We provide opportunities for continuous learning and skill development.",
                  "Direct Client Exposure: Get hands-on experience working directly with clients.",
                  "Supportive Community: Join a team of passionate professionals who support each other.",
                  "Fast-paced environment: In a startup environment, no two days are the same.",
                  "Direct Impact: Your contributions will directly impact client success.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[#191919] opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 animate-slide-up text-[#7960BE]">
                We're Looking For:
              </h2>
              <ul className="grid gap-4">
                {[
                  "Passionate and driven individuals.",
                  "Excellent communicators and problem-solvers.",
                  "Professionals who thrive in a remote work environment.",
                  "Individuals eager to learn and grow.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[#191919] opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#F7FFF7]">
          <div className="container-custom text-center">
            <h2 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight animate-slide-up text-[#191919]">
              Ready to start your journey?{" "}
              <span className="text-[#0DAB76]">Apply today!</span>
            </h2>
            <a
              href="mailto:careers@huntnhire.co"
              className=" p-4 rounded-md bg-[#7960BE] inline-flex items-center mx-auto animate-slide-up animation-delay-200 hover-glow"
            >
              Email us at careers@huntnhire.co
              <Mail size={16} className="ml-2" />
            </a>
            <p className="mt-4 text-[#191919] animate-slide-up animation-delay-300">
              We look forward to welcoming you to our team!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
