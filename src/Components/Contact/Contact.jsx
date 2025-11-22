import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUndo, FaMapMarkerAlt } from "react-icons/fa";
import { sendContactMessage } from "./ContactApi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const result = await sendContactMessage(formData);
      toast.success(result.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaPhoneAlt className="text-xl" />,
      title: "Phone",
      info: "+880 1812920791",
      link: "tel:+8801812920791",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      info: "shadinbiswas11@gmail.com",
      link: "mailto:shadinbiswas11@gmail.com",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      info: "Habiganj Sadar, Bangladesh",
      link: "https://www.google.com/maps/place//@23.4571652,91.246125,693m/data=!3m1!1e3!4m9!1m8!3m7!1s0x37547f249815015d:0x549a77e542115f77!2z4KaV4KeB4Kau4Ka_4Kay4KeN4Kay4Ka-!3b1!8m2!3d23.4498326!4d91.1846622!16s%2Fm%2F02rr531?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      iconColor: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="relative w-full min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          {/* Contact Information */}
          <div className="w-full space-y-6 lg:w-1/2">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative">
                  {/* Gradient Border */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
                  
                  {/* Main Card */}
                  <div className="relative p-6 transition-all duration-500 transform border bg-gray-800/60 backdrop-blur-sm border-gray-700/50 rounded-2xl group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl ${method.bgColor} ${method.iconColor} backdrop-blur-sm`}>
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-white">{method.title}</h3>
                        <p className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                          {method.info}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Main Form Card */}
              <div className="relative p-8 border shadow-2xl bg-gray-800/60 backdrop-blur-sm border-gray-700/50 rounded-3xl">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="group/input">
                    <label
                      htmlFor="name"
                      className="block mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover/input:text-white"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 text-white placeholder-gray-400 transition-all duration-300 border border-gray-600 outline-none bg-gray-900/80 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group/input">
                    <label
                      htmlFor="email"
                      className="block mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover/input:text-white"
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 text-white placeholder-gray-400 transition-all duration-300 border border-gray-600 outline-none bg-gray-900/80 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group/input">
                    <label
                      htmlFor="message"
                      className="block mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover/input:text-white"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="6"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 text-white placeholder-gray-400 transition-all duration-300 border border-gray-600 outline-none resize-none bg-gray-900/80 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative flex items-center justify-center flex-1 gap-3 px-8 py-4 font-medium text-white transition-all duration-300 transform group/btn hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover/btn:from-blue-600 group-hover/btn:to-purple-600 disabled:bg-gray-600"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </>
                        )}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ name: "", email: "", message: "" })}
                      className="relative flex items-center justify-center flex-1 gap-3 px-8 py-4 font-medium text-gray-300 transition-all duration-300 transform group/btn hover:scale-105 hover:text-white"
                    >
                      <div className="absolute inset-0 transition-all duration-300 border border-gray-600 bg-gray-700/50 backdrop-blur-sm rounded-xl group-hover/btn:bg-gray-600/50"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        Reset
                        <FaUndo className="transition-transform duration-300 group-hover/btn:rotate-180" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute w-32 h-32 rounded-full top-1/4 left-10 bg-blue-500/10 blur-3xl animate-float -z-10"></div>
      <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-1/4 right-10 bg-purple-500/10 blur-3xl animate-float -z-10"></div>
    </section>
  );
};

export default Contact;