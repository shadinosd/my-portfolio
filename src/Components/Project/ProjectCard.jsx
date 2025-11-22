/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiCode, FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  frontend,
  backend,
  tags,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl bg-slate-100 border shadow-md">
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-blue-200 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="flex items-center gap-3">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 rounded-lg text-white transition-colors duration-200"
            >
              <FiExternalLink size={16} />
              <span>Live Demo</span>
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1 px-4 py-2 bg-gray-300 rounded-lg text-gray-800 transition-colors duration-200"
            >
              <FiCode size={16} />
              <span>Code</span>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-blue-100 rounded-xl max-w-md w-full border shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">View Code</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href={frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-slate-100 rounded-lg text-gray-800"
                >
                  <div className="flex items-center gap-3">
                    <FiGithub size={20} />
                    <span>Frontend Code</span>
                  </div>
                  <FiExternalLink size={16} className="text-gray-500" />
                </a>

                {backend && (
                  <a
                    href={backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-100 rounded-lg text-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <FiGithub size={20} />
                      <span>Backend Code</span>
                    </div>
                    <FiExternalLink size={16} className="text-gray-500" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
