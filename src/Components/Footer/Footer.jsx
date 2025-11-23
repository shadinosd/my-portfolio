import { useState } from "react";
import {
  FaArrowUp,
  FaCode,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "#home", icon: <FaUser className="text-blue-400" /> },
    { name: "About", href: "#about", icon: <FaUser className="text-purple-400" /> },
    { name: "Skills", href: "#skills", icon: <FaCode className="text-green-400" /> },
    { name: "Projects", href: "#projects", icon: <FaLink className="text-pink-400" /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope className="text-orange-400" /> },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook size={18} />,
      url: "https://www.facebook.com/shadin.biswas.102",
      gradient: "from-blue-600 to-blue-700",
      name: "Facebook"
    },
    {
      icon: <FaTwitter size={18} />,
      url: "https://x.com/BiswasShad44090",
      gradient: "from-blue-400 to-cyan-500",
      name: "Twitter"
    },
    {
      icon: <FaInstagram size={18} />,
      url: "https://www.instagram.com/_shadin_biswas/",
      gradient: "from-pink-600 to-purple-600",
      name: "Instagram"
    },
    {
      icon: <FaLinkedin size={18} />,
      url: "https://www.linkedin.com/in/shadin-biswas-559719392/",
      gradient: "from-blue-700 to-blue-800",
      name: "LinkedIn"
    },
    {
      icon: <FaGithub size={18} />,
      url: "https://github.com/shadinosd",
      gradient: "from-gray-700 to-gray-800",
      name: "GitHub"
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-400" />,
      text: "shadinbiswas11@gmail.com",
      href: "shadinbiswas11@gmail.com"
    },
    {
      icon: <FaPhone className="text-green-400" />,
      text: "+880 1812920791",
      href: "tel:+8801812920791"
    },
    {
      icon: <FaMapMarkerAlt className="text-purple-400" />,
      text: "Habiganj, Bangladesh",
      href: "https://dub.sh/eUFe3sx"
    }
  ];

  return (
    <footer id="footer" className="relative w-full py-16 mt-20 overflow-hidden ">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 -z-10"></div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0 -z-10 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-star-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="group">
              <h2 className="mb-4 text-2xl font-bold text-center text-white transition-all duration-300 transform group-hover:scale-105">
                SHADIN BISWAS
              </h2>
              <p className="mb-6 leading-relaxed text-center text-gray-300 transition-colors duration-300 group-hover:text-white">
                Passionate MERN Stack developer creating beautiful, functional web experiences. 
                Let&apos;s build something amazing together.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl bg-gradient-to-r ${social.gradient} text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-white/10 group-hover:opacity-100"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:col-span-1">
            <h3 className="inline-block pb-2 mb-6 text-lg font-semibold text-white border-b-2 border-blue-">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center justify-center gap-3 py-2 text-gray-300 transition-all duration-300 hover:text-white group"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      {link.icon}
                    </span>
                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:col-span-1">
            <h3 className="inline-block pb-2 mb-6 text-lg font-semibold text-white border-b-2 border-green-500">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-gray-300 transition-all duration-300 hover:text-white group"
                >
                  <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {contact.icon}
                  </span>
                  <span className="transition-all duration-300 group-hover:translate-x-1">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center lg:col-span-1">
            <h3 className="inline-block pb-2 mb-6 text-lg font-semibold text-white border-b-2 border-purple-500">
              Newsletter
            </h3>
            <p className="mb-4 text-gray-300">
              Subscribe to get updates on my latest projects and articles.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border border-gray-700 bg-gray-800/60 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button 
                type="submit"
                className="relative w-full px-6 py-3 font-medium text-white transition-all duration-300 transform group/btn hover:scale-105"
              >
                <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover/btn:from-blue-600 group-hover/btn:to-purple-600"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaPaperPlane className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  Subscribe
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 mt-10 border-t border-gray-900">
          <div className="flex items-center justify-center space-y-4 md:flex-row md:space-y-0">
            <div className="mx-auto text-gray-300 text-md">
              <p>&copy; {currentYear} SHADIN BISWAS. All rights reserved.</p>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="transition-all duration-300 hover:text-blue-400 hover:scale-105">
                Privacy Policy
              </a>
              <a href="#" className="transition-all duration-300 hover:text-blue-400 hover:scale-105">
                Terms of Service
              </a>
              <a href="#" className="transition-all duration-300 hover:text-blue-400 hover:scale-105">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed z-50 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 bottom-8 right-8 hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;