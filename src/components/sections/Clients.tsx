import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";

interface ClientsProps {
  id?: string;
}

const Clients = ({ id }: ClientsProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Wilson",
      role: "Recruitment Director, Devinity Marketing",
      image:
        "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      stars: 5,
      text: "Hunt & Hire helped us find specialized talent in just a week. Their network of professionals is impressive, and the candidate we hired has transformed our team's productivity.",
    },
    {
      name: "Kevin",
      role: "Founder, Virtual Marketing",
      image:
        "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      stars: 5,
      text: "The specialist we hired through Hunt & Hire exceeded our expectations. The matching process was seamless, and we found the perfect candidate within days instead of months.",
    },
    {
      name: "Jennifer",
      role: "CEO, TS Orbit",
      image:
        "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      stars: 5,
      text: "As a fast-growing agency, finding quality talent quickly is crucial. Hunt & Hire has been our secret advantage, delivering outstanding professionals who hit the ground running.",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id={id || "clients"}
      ref={sectionRef}
      className="bg-[#F7FFF7] relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 mb-8 rounded-md bg-[#7960BE] shadow-lg">
            <p className="text-lg font-semibold">Clients Say</p>
          </div>
          <h2 className="text-[#7960BE]">Success Stories</h2>
          <p className="mt-4 text-xl text-[#191919] max-w-xl mx-auto">
            Here's what our clients say about working with Hunt & Hire.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatedCard
            animationDirection="right"
            hoverEffect={false}
            className="relative hover-glow"
          >
            <div className="absolute top-4 right-8">
              <Quote size={80} className="text-[#0DAB96]/20" />
            </div>
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    activeTestimonial === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10 absolute inset-0"
                  }`}
                >
                  <div className="flex flex-col space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-[#0DAB96]/70 text-[#0DAB96]"
                        />
                      ))}
                    </div>
                    <p className="text-xl text-[#191919] italic">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center space-x-4 mt-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden hover-scale">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#191919]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[#191919]">
                          {testimonial.role}
                        </p>
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
    </section>
  );
};

export default Clients;
