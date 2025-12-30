import React from "react";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ imgSrc, title, description, githubLink }) => {
  return (
    <div className="p-4 flex-shrink-0">
      <div className="h-fit w-[280px] sm:w-[300px] md:w-[320px] bg-white/5 backdrop-blur-md border border-gray-200 border-opacity-30 rounded-2xl overflow-hidden
     shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-floatCard">
        <a href={githubLink || "#"} target="_blank" rel="noopener noreferrer">
          <img
            src={imgSrc}
            alt={title}
            className="h-48 sm:h-52 w-full object-cover object-center rounded-t-2xl"
          />
        </a>
        <div className="p-4 flex flex-col gap-2">
          <h2 className="tracking-widest text-xl sm:text-2xl font-semibold text-white">{title}</h2>
          <p className="text-sm sm:text-base text-gray-300">{description}</p>
          <div className="flex items-center justify-start mt-2">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="text-pink-500 hover:text-purple-600 cursor-pointer text-2xl" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes floatCard {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-floatCard {
          animation: floatCard 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
