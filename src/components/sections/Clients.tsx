
import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const Clients = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      name: "Raj Patel",
      role: "Recruitment Director, TechHub",
      image: "https://images.unsplash.com/photo-1618151313441-bc79b11e5090",
      stars: 5,
      text: "Hunt & Hire helped us find specialized talent in just a week. Their network of professionals is impressive, and the candidate we hired has transformed our team's productivity.",
    },
    {
      name: "Priya Sharma",
      role: "Founder, GrowthMakers",
      image: "https://images.unsplash.com/photo-1573497019707-1c04de26e58c",
      stars: 5,
      text: "The specialist we hired through Hunt & Hire exceeded our expectations. The matching process was seamless, and we found the perfect candidate within days instead of months.",
    },
    {
      name: "Dev Anand",
      role: "CEO, NextLevel Agency",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      stars: 5,
      text: "As a fast-growing agency, finding quality talent quickly is crucial. Hunt & Hire has been our secret advantage, delivering outstanding professionals who hit the ground running.",
    },
  ];

  // Brand logos for the slider
  const brandLogos = [
    {
      name: "TechHub",
      image: "https://www.logodesignlove.com/images/classic/next-logo-1.jpg"
    },
    {
      name: "GlobalTech",
      image: "https://www.logodesignlove.com/images/classic/ibm-logo.jpg"
    },
    {
      name: "InnovateX",
      image: "https://www.logodesignlove.com/images/classic/nasa-logo.jpg"
    },
    {
      name: "FutureWorks",
      image: "https://www.logodesignlove.com/images/classic/paul-rand-abc-logo.jpg"
    },
    {
      name: "DigitalPrime",
      image: "https://www.logodesignlove.com/images/classic/shell-logo.jpg"
    },
    {
      name: "TechForward",
      image: "https://www.logodesignlove.com/images/classic/westinghouse-logo.jpg"
    }
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
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#7960be]/10 border border-[#7960be]/20">
            <p className="text-sm font-medium text-[#7960be]">Clients Say</p>
          </div>
          <h2>Success Stories</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
            Here's what our clients say about working with Hunt & Hire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Client logos slider */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <AnimatedCard 
              animationDirection="left"
              hoverEffect={false}
              className="flex flex-col space-y-10 p-8 hover-lift"
            >
              <h3 className="text-xl font-semibold">Trusted by innovative brands</h3>
              
              <Carousel 
                className="w-full py-4"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {brandLogos.map((brand, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/1">
                      <div className="h-16 bg-white/10 rounded-md flex items-center justify-center p-2 hover:bg-[#7960be]/10 transition-colors duration-300 btn-hover-effect overflow-hidden">
                        <img 
                          src={brand.image} 
                          alt={brand.name} 
                          className="max-h-12 max-w-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="relative static left-0 translate-y-0 h-8 w-8" />
                  <CarouselNext className="relative static right-0 translate-y-0 h-8 w-8" />
                </div>
              </Carousel>
              
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#7960be]"></div>
                  <p className="text-sm text-muted-foreground">48-hour talent matching</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#7960be]"></div>
                  <p className="text-sm text-muted-foreground">200+ pre-vetted professionals</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#7960be]"></div>
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
              className="relative hover-glow"
            >
              <div className="absolute top-4 right-8">
                <Quote size={80} className="text-[#7960be]/10" />
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
                          <Star key={i} size={20} className="fill-[#7960be] text-[#7960be]" />
                        ))}
                      </div>
                      <p className="text-xl italic">{testimonial.text}</p>
                      <div className="flex items-center space-x-4 mt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden hover-scale">
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
                  className="p-2 rounded-full bg-white/5 hover:bg-[#7960be]/20 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white/5 hover:bg-[#7960be]/20 transition-colors"
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
