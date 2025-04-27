import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

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
      image:
        "data:image/jpeg;base64,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",
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
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHNYRNhu3ariQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695930629110?e=2147483647&v=beta&t=GCKZLeA0Rmv0-eP7A77jldpLD4IuwFEh1OaUqZ4nAfU",
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
      image:
        "data:image/jpeg;base64,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",
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
