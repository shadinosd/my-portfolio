/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import aboutImg from "/image/programimg.jpg";

const About = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const createStars = () => {
      starsRef.current = [];
      const starCount = 150;
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
          brightness: Math.random() * 0.5 + 0.5,
          pulseSpeed: Math.random() * 0.05 + 0.02
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach(star => {
        // Update star position
        star.x -= star.speed;
        if (star.x < -10) {
          star.x = canvas.width + 10;
          star.y = Math.random() * canvas.height;
        }

        // Pulsing effect
        star.brightness += star.pulseSpeed;
        if (star.brightness > 1 || star.brightness < 0.5) {
          star.pulseSpeed *= -1;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();

        // Draw star glow
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness * 0.3})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createStars();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Animated Space Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      />
      
      <section id="about" className="relative w-full min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Animated Header */}
          <div className="mb-12 text-center md:mb-16">  
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl sm:mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">Me</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 sm:mt-8 sm:text-xl animate-fade-in">
              My journey from programming novice to MERN-Stack developer
            </p>
          </div>

          <div className="flex flex-col items-center gap-12 lg:flex-row md:gap-16">
            {/* Animated Profile Image with Rings */}
            <div className="flex justify-center w-full px-4 lg:w-2/5 sm:px-0">
              <div className="relative group">
                {/* Outer Ring Animation */}
                <div className="absolute transition-all duration-1000 rounded-full opacity-75 -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:opacity-100 animate-pulse"></div>
                
                {/* Middle Ring */}
                <div className="absolute rounded-full -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 animate-spin-slow">
                  <div className="w-full h-full bg-gray-900 rounded-full"></div>
                </div>
                
                {/* Inner Ring */}
                <div className="absolute rounded-full -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 animate-spin-slower">
                  <div className="w-full h-full bg-gray-900 rounded-full"></div>
                </div>
                
                {/* Main Image Container */}
                <div className="relative z-10 p-2 transition-all duration-500 transform bg-gray-900 rounded-full group-hover:scale-105 group-hover:rotate-3">
                  <img
                    src={aboutImg}
                    alt="About"
                    className="object-cover w-64 h-64 transition-transform duration-500 transform border-4 border-transparent rounded-full shadow-2xl sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-blue-500 to-purple-500 bg-origin-border group-hover:scale-102"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute w-6 h-6 bg-yellow-400 rounded-full -top-2 -right-2 animate-bounce opacity-80"></div>
                <div className="absolute w-4 h-4 delay-75 bg-green-400 rounded-full -bottom-4 -left-4 animate-bounce opacity-80"></div>
                <div className="absolute w-3 h-3 delay-150 bg-red-400 rounded-full top-1/2 -right-8 animate-bounce opacity-80"></div>
              </div>
            </div>

            {/* Content Cards */}
            <div className="w-full space-y-8 lg:w-3/5 md:space-y-10">
              {/* Frontend Card */}
              <div className="relative group">
                <div className="absolute transition duration-1000 opacity-25 -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur group-hover:opacity-75 group-hover:duration-200 animate-tilt"></div>
                <div className="relative p-6 transition-all duration-500 transform border border-gray-700 shadow-2xl bg-gray-800/80 backdrop-blur-sm rounded-2xl group-hover:scale-102 group-hover:-translate-y-1">
                  <h3 className="mb-4 text-2xl font-bold text-transparent text-white sm:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Frontend Development Journey
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Initially intimidated by programming, I discovered my passion through building websites with{" "}
                    <span className="font-semibold text-blue-300">HTML</span>,{" "}
                    <span className="font-semibold text-blue-300">CSS</span>, and{" "}
                    <span className="font-semibold text-blue-300">JavaScript</span>,{" "}
                    <span className="font-semibold text-blue-300">Tailwind</span>.
                    My enthusiasm grew as I mastered{" "}
                    <span className="font-semibold text-purple-300">React+Vite</span>,
                    creating increasingly complex and interactive web applications
                    that showcased my evolving design sensibilities and technical skills.
                  </p>
                </div>
              </div>

              {/* Backend Card */}
              <div className="relative group">
                <div className="absolute transition duration-1000 opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur group-hover:opacity-75 group-hover:duration-200 animate-tilt"></div>
                <div className="relative p-6 transition-all duration-500 transform border border-gray-700 shadow-2xl bg-gray-800/80 backdrop-blur-sm rounded-2xl group-hover:scale-102 group-hover:-translate-y-1">
                  <h3 className="mb-4 text-2xl font-bold text-transparent text-white sm:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    Backend Development Expertise
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Skilled in{" "}
                    <span className="font-semibold text-green-300">MongoDB</span>,{" "}
                    <span className="font-semibold text-green-300">Node.js</span>,{" "}
                    <span className="font-semibold text-green-300">Express.js</span>, and{" "}
                    <span className="font-semibold text-green-300">Next.js</span>, with experience in building efficient APIs and integrating secure, scalable backend systems for modern web applications. Proficient in building robust backend solutions and testing them with modern tools, enabling seamless frontend-backend integration.
                  </p>
                </div>
              </div>

              {/* Programming Foundation Card */}
              <div className="relative group">
                <div className="absolute transition duration-1000 opacity-25 -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur group-hover:opacity-75 group-hover:duration-200 animate-tilt"></div>
                <div className="relative p-6 transition-all duration-500 transform border border-gray-700 shadow-2xl bg-gray-800/80 backdrop-blur-sm rounded-2xl group-hover:scale-102 group-hover:-translate-y-1">
                  <h3 className="mb-4 text-2xl font-bold text-transparent text-white sm:text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                    Programming Foundation
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300">
                    I began my programming journey with{" "}
                    <span className="font-semibold text-cyan-300">Python</span>, building a solid foundation in logic and problem-solving. Gradually, my interest shifted toward web development, leading me to learn{" "}
                    <span className="font-semibold text-cyan-300">JavaScript</span> and explore modern technologies. This foundation has been crucial in developing my analytical thinking and problem-solving abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 12s linear infinite;
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .group:hover .animate-tilt {
          animation-duration: 0.5s;
        }
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

export default About;