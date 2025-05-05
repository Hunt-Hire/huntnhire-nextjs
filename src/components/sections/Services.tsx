import { MessageSquare } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import e1 from "@/assets/images/e1.jpg";
import e2 from "@/assets/images/e2.jpg";
import e3 from "@/assets/images/e3.jpg";

interface RoleCategory {
  title: string;
  description: string;
  roles: string[];
  image: string;
  delay: number;
}

const RolesSection = () => {
  const roleCategories: RoleCategory[] = [
    {
      title: "Digital Marketers",
      description:
        "Drive leads and visibility with our expert digital marketers",
      roles: [
        "PPC Expert",
        "SEO Specialist",
        "Social Media Manager",
        "Graphics Designer",
        "CRM Automation Expert",
      ],
      image: e1,
      delay: 0,
    },
    {
      title: "Account Managers",
      description:
        "Boost retention and revenue with our strategic project managers",
      roles: [
        "Account Manager",
        "Client Success Manager",
        "Executive Assistant",
      ],
      image: e2,
      delay: 100,
    },

    {
      title: "Website Developers",
      description:
        "Build high-converting websites with out expert web developers",
      roles: [
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
        "Web Designer",
      ],
      image: e3,
      delay: 300,
    },
  ];

  // Function to navigate to the HowItWorks section (where the calendar is located)
  const handleCardClick = () => {
    const howItWorksSection = document.querySelector("#calender");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="roles"
      className="relative overflow-hidden 
      bg-[#7960BE]"
    >
      <div className="container-custom relative z-10">
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 mb-8 rounded-md bg-white shadow-lg">
              <p className="text-lg font-semibold text-[#7960BE]">Our Roles</p>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-center text-white">
              Hire a Virtual Associate For Your{" "}
              <span className="relative inline-block text-[#F7FFF7] bg-[#0DAB76]/70 px-3 rounded-md">
                <Typewriter
                  words={["Marketing", "SaaS", "Web"]}
                  loop={0}
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1500}
                  cursor={false}
                />
                {/* Ghost word to reserve space */}
                <span className="invisible absolute top-0 left-0">
                  Marketing
                </span>
              </span>{" "}
              Agency
            </h2>
          </div>
        </div>

        {/* Card */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {roleCategories.map((category, index) => (
            <div
              onClick={handleCardClick}
              key={index}
              className="group flex flex-col overflow-hidden rounded-3xl cursor-pointer border 
              border-purple-500/10 bg-[#F7FFF7] shadow-xl 
              hover:shadow-purple-500/30 transition-transform duration-300 hover:-translate-y-2 min-h-[500px]"
            >
              {/* Image Section */}
              <div className="relative h-72 w-full bg-[#7960BE] flex items-end justify-center">
                <img
                  src={category.image}
                  alt={`${category.title} Professional`}
                  className="w-44 h-60 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 items-center justify-start text-center px-6 py-8 bg-[#F7FFF7] backdrop-blur-md">
                <h3 className="text-2xl font-extrabold text-[#7960BE] mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                <ul className="flex flex-wrap gap-2 justify-center">
                  {category.roles.map((role, roleIndex) => (
                    <li
                      key={roleIndex}
                      className="px-3 py-1 text-sm font-medium text-[#F7FFF7] bg-[#0DAB76]/70 
                      rounded-full  transition-colors"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="mt-20 text-center">
          <button
            onClick={handleCardClick}
            className="bg-white inline-flex items-center px-8 py-4 text-sm lg:text-xl text-[#7960BE]
            font-semibold rounded-md hover-glow shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Find Your Perfect Match Today
            <MessageSquare size={24} className="ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
