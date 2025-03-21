
import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';

const Clients = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechGrowth",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop&crop=faces",
      stars: 5,
      text: "Finding skilled marketing talent used to take months. With VirtualMark, we hired a social media expert in just 3 days who immediately improved our engagement by 40%.",
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, BrandScalers",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=faces",
      stars: 5,
      text: "The paid ads specialist we hired through VirtualMark transformed our campaigns. Our ROAS improved by 2.5x in just one month while scaling our ad spend.",
    },
    {
      name: "Emma Thompson",
      role: "CEO, GrowthBoost Agency",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces",
      stars: 5,
      text: "As an agency owner, scaling with quality talent is everything. VirtualMark has been our secret weapon, helping us expand our client services without sacrificing quality.",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Clients Say</p>
          </div>
          <h2>Success Stories</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
            Here's what our clients say about working with our marketing talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Client logos */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <AnimatedCard 
              animationDirection="left"
              hoverEffect={false}
              className="flex flex-col space-y-10 p-8"
            >
              <h3 className="text-xl font-semibold">Trusted by innovative brands</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-12 bg-white/5 rounded-md flex items-center justify-center">
                  <div className="text-xl font-bold text-white/30">Brand 1</div>
                </div>
                <div className="h-12 bg-white/5 rounded-md flex items-center justify-center">
                  <div className="text-xl font-bold text-white/30">Brand 2</div>
                </div>
                <div className="h-12 bg-white/5 rounded-md flex items-center justify-center">
                  <div className="text-xl font-bold text-white/30">Brand 3</div>
                </div>
                <div className="h-12 bg-white/5 rounded-md flex items-center justify-center">
                  <div className="text-xl font-bold text-white/30">Brand 4</div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <p className="text-sm text-muted-foreground">48-hour talent matching</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <p className="text-sm text-muted-foreground">200+ pre-vetted marketers</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <p className="text-sm text-muted-foreground">95% client satisfaction</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Testimonial */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <AnimatedCard 
              animationDirection="right"
              hoverEffect={false}
              className="relative"
            >
              <div className="absolute top-4 right-8">
                <Quote size={80} className="text-primary/10" />
              </div>
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ease-in-out ${
                      activeTestimonial === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10 absolute inset-0'
                    }`}
                  >
                    <div className="flex flex-col space-y-6">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={20} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-xl italic">{testimonial.text}</p>
                      <div className="flex items-center space-x-4 mt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end space-x-2 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
