 import profileimg from '/image/sb.jpg';

import TextChange from "../TextChange/TextChange";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center w-full min-h-screen overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bg-blue-300 rounded-full top-1/4 left-1/4 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bg-purple-300 rounded-full top-1/3 right-1/4 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bg-pink-300 rounded-full bottom-1/4 left-1/2 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="w-full max-w-6xl px-6 py-20 mx-auto lg:mt-10">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Text Content */}
          <div className="space-y-8 text-center md:w-1/2 md:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight sm:text-xl md:text-6xl lg:text-5xl">
                <span className="block text-gray-800">Hello, I&apos;m</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  <TextChange />
                </span>
              </h1>

              <p className="text-xl leading-relaxed text-gray-600 md:text-2xl">
                MERN Stack Developer specializing in modern web technologies and
                creating seamless user experiences.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:justify-start">
              <a
                href="https://drive.google.com/file/d/1YqSN5TaC1jI3cqHD9KP2wQ7akaIJi42u/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-4 font-semibold text-white transition-all duration-300 bg-blue-600 shadow-lg group rounded-xl hover:bg-blue-700 hover:shadow-xl hover:scale-105 hover:animate-pulse-glow"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-100"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 font-semibold text-blue-600 transition-all duration-300 border-2 border-blue-600 group rounded-xl hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105"
              >
                <span className="relative">Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            {/* <div className="flex justify-center gap-6 pt-8 md:justify-start">
              {['github', 'linkedin', 'twitter'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 text-gray-600 transition-all duration-300 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:text-blue-600 hover:bg-blue-50"
                >
                  <div className="w-6 h-6 bg-current rounded-full"></div>
                </a>
              ))}
            </div> */}
          </div>

          {/* Profile Image with Enhanced Animation */}
          <div className="flex justify-center md:w-1/2">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 transition-all duration-1000 rounded-full opacity-50 bg-gradient-to-r from-blue-400 to-purple-500 blur-xl group-hover:opacity-75 animate-pulse"></div>
              
              {/* Animated Rings */}
              <div className="absolute transition-all duration-1000 rounded-full -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 animate-spin-slow">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              
              <div className="absolute transition-all duration-1000 rounded-full -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 group-hover:opacity-50 animate-spin-slower">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 p-3 transition-all duration-500 transform bg-white rounded-full shadow-2xl group-hover:scale-105 group-hover:rotate-3">
                <img
                  src={profileimg}
                  alt="Profile"
                  className="relative z-20 object-cover w-64 h-64 transition-transform duration-500 transform border-4 border-white rounded-full shadow-lg md:w-80 md:h-80 lg:w-96 lg:h-96 group-hover:scale-102"
                  loading="eager"
                />
                
                {/* Floating Elements */}
                <div className="absolute z-30 w-6 h-6 bg-yellow-400 rounded-full top-2 right-2 animate-bounce opacity-80 group-hover:animate-ping"></div>
                <div className="absolute z-30 w-4 h-4 bg-green-400 rounded-full bottom-4 left-4 animate-bounce opacity-80" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute z-30 w-3 h-3 bg-red-400 rounded-full top-1/2 -right-2 animate-bounce opacity-80" style={{animationDelay: '0.4s'}}></div>
              </div>

              {/* Status Indicator */}
              <div className="absolute z-30 flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-lg bottom-4 right-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;