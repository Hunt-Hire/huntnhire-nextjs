
import { MessageSquare, TrendingUp, Lightbulb, Users, Camera } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';

const RolesSection = () => {
  const roles = [
    {
      icon: <MessageSquare size={36} className="text-primary" />,
      title: 'Social Media Pro',
      description: "I'll build your brand presence and engage your audience with compelling social content.",
      delay: 0,
    },
    {
      icon: <TrendingUp size={36} className="text-primary" />,
      title: 'Paid Ads Guru',
      description: "I'll optimize your ad spend and boost your campaigns' ROI with data-driven strategies.",
      delay: 100,
    },
    {
      icon: <Lightbulb size={36} className="text-primary" />,
      title: 'Content Creator',
      description: "I'll craft engaging stories that resonate with your audience and drive conversions.",
      delay: 200,
    },
    {
      icon: <Users size={36} className="text-primary" />,
      title: 'Client Manager',
      description: "I'll keep your clients happy and their projects moving forward smoothly.",
      delay: 300,
    },
    {
      icon: <Camera size={36} className="text-primary" />,
      title: 'Visual Designer',
      description: "I'll transform your brand identity into stunning visuals that captivate your audience.",
      delay: 400,
    },
  ];

  return (
    <section id="roles" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Roles We Fill</p>
          </div>
          <h2>Marketing Talent On Demand</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
            Expert professionals ready to join your team and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <AnimatedCard 
              key={index}
              animationDelay={role.delay}
              className="h-full flex flex-col group"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                {role.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-muted-foreground">{role.description}</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-primary text-sm font-medium flex items-center">
                  Hire Now <TrendingUp size={16} className="ml-2" />
                </span>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            All our marketing professionals are pre-vetted and ready to start within 48 hours.
          </p>
          <a href="#how-it-works" className="btn-outline">
            See How We Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
