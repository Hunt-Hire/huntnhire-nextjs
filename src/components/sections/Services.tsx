
import { Code, Palette, PieChart, Users } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';

const Services = () => {
  const services = [
    {
      icon: <Code size={36} className="text-primary" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for exceptional user experiences.',
      delay: 0,
    },
    {
      icon: <Palette size={36} className="text-primary" />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and beautiful designs that elevate your digital products.',
      delay: 100,
    },
    {
      icon: <Users size={36} className="text-primary" />,
      title: 'Talent Scaling',
      description: 'Access to premium technical talent to expand your team capabilities quickly.',
      delay: 200,
    },
    {
      icon: <PieChart size={36} className="text-primary" />,
      title: 'Digital Strategy',
      description: 'Strategic guidance to help your business succeed in the digital landscape.',
      delay: 300,
    },
  ];

  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Our Services</p>
          </div>
          <h2>Premium Solutions</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
            We deliver exceptional results across various digital domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedCard 
              key={index}
              animationDelay={service.delay}
              className="h-full flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Each service is tailored to your specific needs, ensuring you get exactly what your business requires to thrive.
          </p>
          <a href="#how-it-works" className="btn-outline">
            See How We Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
