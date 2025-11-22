// // components/Skills/Skills.jsx
// import { useEffect, useRef } from "react";
// import { 
//   FiCode, 
//   FiGitBranch,
//   FiServer
// } from "react-icons/fi";

// const Skills = () => {
//   const skillsRef = useRef([]);

//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       icon: <FiCode className="text-2xl" />,
//       color: "from-blue-500 to-cyan-500",
//       skills: [
//         { name: "React.js", level: 90 },
//         { name: "JavaScript (ES6+)", level: 85 },
//         { name: "TypeScript", level: 80 },
//         { name: "Tailwind CSS", level: 95 },
//         { name: "HTML5/CSS3", level: 90 },
//         { name: "Redux/Context API", level: 85 }
//       ]
//     },
//     {
//       title: "Backend Development",
//       icon: <FiServer className="text-2xl" />,
//       color: "from-green-500 to-emerald-500",
//       skills: [
//         { name: "Node.js", level: 88 },
//         { name: "Express.js", level: 85 },
//         { name: "MongoDB", level: 82 },
//         { name: "RESTful APIs", level: 90 },
//         { name: "JWT Authentication", level: 85 },
//         { name: "Socket.io", level: 75 }
//       ]
//     },
//     {
//       title: "Tools & Technologies",
//       icon: <FiGitBranch className="text-2xl" />,
//       color: "from-purple-500 to-pink-500",
//       skills: [
//         { name: "Git & GitHub", level: 88 },
//         { name: "Docker", level: 70 },
//         { name: "VS Code", level: 95 },
//         { name: "Postman", level: 90 },
//         { name: "Webpack/Vite", level: 80 },
//         { name: "Jest/Testing", level: 75 }
//       ]
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.width = entry.target.getAttribute('data-level') + '%';
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     skillsRef.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="skills" className="relative w-full min-h-screen px-4 py-20 sm:px-6 lg:px-8">
//       <div className="w-full max-w-6xl mx-auto">
//         {/* Animated Header */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">
//             Technologies and tools I use to bring ideas to life
//           </p>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-3 md:gap-6">
//           {skillCategories.map((category, categoryIndex) => (
//             <div
//               key={categoryIndex}
//               className="relative group"
//             >
//               {/* Gradient Border */}
//               <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
              
//               {/* Main Card */}
//               <div className="relative p-6 transition-all duration-500 transform border shadow-2xl bg-gray-800/60 backdrop-blur-sm border-gray-700/50 rounded-2xl group-hover:scale-105 group-hover:-translate-y-2">
//                 {/* Card Header */}
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
//                     {category.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{category.title}</h3>
//                 </div>

//                 {/* Skills List */}
//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex} className="group/skill">
//                       <div className="flex justify-between mb-2">
//                         <span className="font-medium text-gray-200 transition-colors group-hover/skill:text-white">
//                           {skill.name}
//                         </span>
//                         <span className="text-sm text-gray-400 transition-colors group-hover/skill:text-gray-300">
//                           {skill.level}%
//                         </span>
//                       </div>
//                       <div className="h-2 overflow-hidden bg-gray-700 rounded-full">
//                         <div
//                           ref={el => skillsRef.current[`${categoryIndex}-${skillIndex}`] = el}
//                           data-level={skill.level}
//                           className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
//                           style={{ width: '0%' }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Info Cards */}
//         {/* <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
//           {[
//             { label: "Projects Completed", value: "50+", icon: "🚀" },
//             { label: "Happy Clients", value: "30+", icon: "😊" },
//             { label: "Years Experience", value: "2+", icon: "💼" },
//             { label: "Coffee Cups", value: "1000+", icon: "☕" }
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="p-6 text-center transition-all duration-500 border bg-gray-800/40 backdrop-blur-sm border-gray-700/30 rounded-2xl hover:scale-105 hover:bg-gray-800/60"
//             >
//               <div className="mb-2 text-3xl">{stat.icon}</div>
//               <div className="mb-1 text-2xl font-bold text-white">{stat.value}</div>
//               <div className="text-sm text-gray-400">{stat.label}</div>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Skills;