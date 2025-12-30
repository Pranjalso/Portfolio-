import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

const techIcons = [
  FaReact,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  FaGitAlt,
];

const FloatingTechBackground = () => {
  // Generate random positions avoiding overlap at edges
  const generatePosition = () => ({
    left: Math.random() * 90 + 5, // 5% to 95%
    top: Math.random() * 90 + 5,  // 5% to 95%
    size: Math.floor(Math.random() * 25) + 25, // size between 25-50
    duration: Math.random() * 10 + 15, // 15s to 25s
    delay: Math.random() * 5, // stagger animation
  });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {techIcons.map((Icon, index) => {
        const { left, top, size, duration, delay } = generatePosition();

        return (
          <Icon
            key={index}
            size={size}
            className="absolute text-white/20 drop-shadow-md animate-floatTech"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* Animation */}
      <style>{`
        @keyframes floatTech {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(15deg);
          }
          50% {
            transform: translateY(-40px) translateX(20px) rotate(0deg);
          }
          75% {
            transform: translateY(-20px) translateX(10px) rotate(-15deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }

        .animate-floatTech {
          animation: floatTech linear infinite;
        }

        @media (max-width: 768px) {
          .animate-floatTech {
            transform: scale(0.8); /* scale down icons on smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingTechBackground;
