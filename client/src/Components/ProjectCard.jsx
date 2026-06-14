// ProjectCard.jsx
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink, FiEye } from "react-icons/fi";
import { FaCode, FaStar } from "react-icons/fa";

const ProjectCard = ({ imgSrc, title, description, techStack, githubLink, liveLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[300px] sm:w-[340px] md:w-[360px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
        
        {/* Image Container with Overlay */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Overlay with Links */}
          <div className={`absolute inset-0 bg-gray-900/80 flex items-center justify-center gap-4 transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-500 transition-all duration-300 hover:scale-110"
              >
                <AiFillGithub className="text-xl" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <FiExternalLink className="text-xl" />
              </a>
            )}
            {!githubLink && !liveLink && (
              <div className="flex items-center gap-2 text-gray-400">
                <FiEye className="text-sm" />
                <span className="text-xs">Preview Soon</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {techStack && techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-1 rounded-full bg-gray-800/60 text-gray-400 border border-gray-700/50"
              >
                {tech}
              </span>
            ))}
            {techStack && techStack.length > 4 && (
              <span className="text-[10px] px-2 py-1 rounded-full bg-gray-800/60 text-gray-400">
                +{techStack.length - 4}
              </span>
            )}
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
            <div className="flex gap-3">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-500 hover:text-indigo-400 text-xs transition-colors duration-300"
                >
                  <FaCode className="text-xs" />
                  <span>Code</span>
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-500 hover:text-emerald-400 text-xs transition-colors duration-300"
                >
                  <FiExternalLink className="text-xs" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-xs">
              <FaStar className="text-[10px]" />
              <span>Featured</span>
            </div>
          </div>
        </div>

        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl border border-indigo-500/0 group-hover:border-indigo-500/30 transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default ProjectCard;