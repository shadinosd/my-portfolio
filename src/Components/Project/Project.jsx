/* eslint-disable react/prop-types */
import { useState } from "react";
import projectImg1 from "/image/Myfastproject.png";
import projectImg3 from "/image/mysundpeoject.png";
import projectImg2 from "/image/myharefproject.png";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({ image, title, description, tags, demoLink, frontend }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Main Card */}
      <div className="relative h-full overflow-hidden transition-all duration-500 transform border shadow-2xl bg-gray-800/60 backdrop-blur-sm border-gray-700/50 rounded-3xl group-hover:scale-105 group-hover:-translate-y-2">
        
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-48 transition-transform duration-700 transform sm:h-56 md:h-64 group-hover:scale-110"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex gap-4 transition-transform duration-500 transform scale-90 group-hover:scale-100">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white transition-all duration-300 transform border rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:scale-110 hover:rotate-12"
              >
                <FaEye size={20} />
              </a>
              <a
                href={frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white transition-all duration-300 transform border rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:scale-110 hover:-rotate-12"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Live Demo Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-medium text-white border rounded-full bg-green-500/90 backdrop-blur-sm border-green-400/50">
              Live Demo
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-white transition-all duration-500 sm:text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-6 leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium text-blue-300 transition-all duration-300 border rounded-full bg-blue-500/20 backdrop-blur-sm border-blue-400/30 hover:bg-blue-500/30 hover:text-white hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm font-medium text-white transition-all duration-300 group/btn bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg"
            >
              <FaEye className="transition-transform duration-300 group-hover/btn:scale-110" />
              Live Demo
            </a>
            <a
              href={frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 border border-gray-600 group/btn bg-gray-700/50 backdrop-blur-sm rounded-xl hover:bg-gray-600/50 hover:text-white hover:scale-105"
            >
              <FaGithub className="transition-transform duration-300 group-hover/btn:scale-110" />
              Code
            </a>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute w-3 h-3 transition-opacity duration-500 delay-100 bg-blue-400 rounded-full opacity-0 top-2 left-2 group-hover:opacity-100"></div>
          <div className="absolute w-2 h-2 transition-opacity duration-500 delay-200 bg-purple-400 rounded-full opacity-0 top-2 left-7 group-hover:opacity-100"></div>
          <div className="absolute w-2 h-2 transition-opacity duration-500 delay-300 bg-pink-400 rounded-full opacity-0 top-7 left-2 group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      image: projectImg1,
      title: "Ride-on R15 V4",
      description: "A modern OTT platform website with responsive design and seamless user experience. Features include video streaming, user profiles, and content categorization.",
      tags: ["HTML", "CSS", "Tailwind", "JavaScript", "OTT Platform" ,"Responsive"],
      demoLink: "https://shadinosd.github.io/The-Best-Online-Bike-Shop-Bikeroom/",
      frontend: "https://github.com/shadinosd/The-Best-Online-Bike-Shop-Bikeroom",
      category: "frontend"
    },
    {
      image: projectImg2,
      title: "Hockeys Club",
      description: "A professional banking application with modern UI/UX design. Includes features like account management, transaction history, and financial dashboard.",
      tags: ["HTML", "CSS", "Tailwind", "JavaScript", "Banking","Responsive"],
      demoLink: "https://shadinosd.github.io/Hockey-club-/",
      frontend: "https://github.com/shadinosd/Hockey-club-",
      category: "frontend"
    },
    {
      image: projectImg3,
      title: "Happy Travel",
      description: "An agricultural website showcasing modern farming solutions. Features responsive design, product catalog, and service information.",
      tags: ["React", "Tailwind", "JavaScript", "Agriculture", "Responsive"],
      demoLink: "https://shadinosd.github.io/Happy-Travel/",
      frontend: "https://github.com/shadinosd/Hockey-club-",
      category: "frontend"
    },
  ];

  const filters = ["All", "Frontend", "Fullstack", "Mobile", "Other"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="relative w-full min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full mx-auto max-w-7xl">
        {/* Animated Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">
            A collection of my recent work and creative contributions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border border-gray-700/50 backdrop-blur-sm"
              }`}
            >
              {activeFilter === filter && (
                <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm"></div>
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative inline-block group">
            <div className="absolute transition duration-1000 -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 group-hover:duration-200"></div>
            <div className="relative px-8 py-4 transition-all duration-500 transform border bg-gray-800/60 backdrop-blur-sm border-gray-700/50 rounded-2xl group-hover:scale-105">
              <p className="text-lg text-gray-300 transition-colors duration-300 group-hover:text-white">
                Interested in working together?{" "}
                <a 
                  href="#contact" 
                  className="font-semibold text-transparent transition-all duration-300 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300"
                >
                  Let&apos;s talk!
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 blur-3xl animate-float -z-10"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl animate-float -z-10"></div>
      </div>
    </section>
  );
};

export default Project;