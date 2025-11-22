import { useState } from "react";
import ExperienceData from "../../Data/Experiences";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = {
    All: ExperienceData,
    Frontend: ExperienceData.filter((skill) => skill.category === "frontend"),
    Tools: ExperienceData.filter((skill) => skill.category === "tools"),
  };

  return (
    <section id="skills" className="relative w-full min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">
            Technologies and tools I work with to create exceptional digital experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border border-gray-700/50 backdrop-blur-sm"
              }`}
            >
              {activeCategory === category && (
                <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm"></div>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-6">
          {skillCategories[activeCategory].map((data) => {
            const IconComponent = data.icon;
            return (
              <a
                key={data.id}
                href={data.url}
                target={data.target}
                rel="noopener noreferrer"
                className="relative group"
              >
                {/* Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Main Card */}
                <div className="relative flex flex-col items-center p-6 transition-all duration-500 transform border shadow-2xl bg-gray-800/60 backdrop-blur-sm border-gray-700/50 rounded-2xl group-hover:scale-105 group-hover:-translate-y-2">
                  
                  {/* Icon Container */}
                  <div className="relative mb-4 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                    <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40"></div>
                    
                    <div className="relative p-4 bg-gray-900/80 rounded-xl">
                      {IconComponent ? (
                        <IconComponent
                          color={data.color}
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        />
                      ) : null}
                      {data.img ? (
                        <img
                          src={data.img}
                          width={data.width}
                          className={`${data.extraClass} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20`}
                          alt={data.alt}
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <span className="text-sm font-medium text-center text-gray-200 transition-colors duration-300 md:text-base group-hover:text-white">
                    {data.name}
                  </span>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 w-0 h-1 transition-all duration-300 transform -translate-x-1/2 rounded-full left-1/2 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4"></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Stats */}
        {/* <div className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4">
          {[
            { number: "2+", text: "Years Experience", color: "from-blue-500 to-cyan-500" },
            { number: "50+", text: "Projects Completed", color: "from-purple-500 to-pink-500" },
            { number: "30+", text: "Happy Clients", color: "from-green-500 to-emerald-500" },
            { number: "15+", text: "Technologies", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
              <div className="relative p-6 transition-all duration-500 transform border bg-gray-800/60 backdrop-blur-sm border-gray-700/50 rounded-2xl group-hover:scale-105">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {stat.text}
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Experience;