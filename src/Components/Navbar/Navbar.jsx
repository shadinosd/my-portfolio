import { useEffect, useState } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiMail, FiArrowUp } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'contact', 'footer'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "About", href: "#about", icon: <FiUser /> },
    { name: "Skills", href: "#skills", icon: <FiCode /> },
    { name: "Projects", href: "#projects", icon: <FiFolder /> },
    { name: "Contact", href: "#contact", icon: <FiMail /> },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100/50" 
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  className="object-cover w-12 h-12 border-2 border-blue-500 rounded-full shadow-lg"
                  src="./image/mylogo.avif"
                  alt="Website Logo"
                />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
              </div>
              <span className="hidden text-xl font-bold text-transparent text-gray-800 md:block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Shadin biswas
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="items-center hidden gap-2 md:flex">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-full ${
                    activeSection === link.href.slice(1)
                      ? "bg-blue-500 text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <span className={`${activeSection === link.href.slice(1) ? 'text-white' : 'text-blue-500'}`}>
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="z-50 p-2 text-2xl text-gray-700 transition-all duration-300 rounded-lg md:hidden hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
          
          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/95 backdrop-blur-md md:hidden">
              <button
                className="absolute p-2 text-2xl text-gray-700 top-6 right-6"
                onClick={() => setIsOpen(false)}
              >
                <FiX size={28} />
              </button>
              
              <ul className="flex flex-col items-center w-full gap-4 px-6 text-xl">
                {navLinks.map((link, index) => (
                  <li key={index} className="w-full max-w-xs text-center">
                    <a
                      href={link.href}
                      className={`flex items-center justify-center w-full gap-3 px-6 py-4 transition-all duration-300 rounded-2xl ${
                        activeSection === link.href.slice(1)
                          ? "bg-blue-500 text-white shadow-lg transform scale-105"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Scroll to Top Button */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 p-3 text-white transition-all duration-300 bg-blue-500 rounded-full shadow-lg bottom-8 right-8 hover:bg-blue-600 hover:shadow-xl hover:scale-110"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navbar;