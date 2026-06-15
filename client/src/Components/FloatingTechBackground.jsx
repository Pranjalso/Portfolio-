import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiJsonwebtokens,
  SiMongoose,
  SiGreensock,
  SiPostman,
  SiVercel,
  SiRender,
  SiLeetcode,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Complete tech stack icons based on your resume and portfolio (Python & Java removed)
const techIcons = [
  // Frontend
  { Icon: FaReact, name: "React" },
  { Icon: TbBrandReactNative, name: "React Native" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: FaHtml5, name: "HTML5" },
  { Icon: FaCss3Alt, name: "CSS3" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiGreensock, name: "GSAP" },
  
  // Backend
  { Icon: FaNodeJs, name: "Node.js" },
  { Icon: SiExpress, name: "Express.js" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiMongoose, name: "Mongoose" },
  { Icon: SiJsonwebtokens, name: "JWT" },
  
  // Programming Languages (Python & Java removed)
  { Icon: FaJsSquare, name: "JS" },
  
  // Tools & Platforms
  { Icon: FaGitAlt, name: "Git" },
  { Icon: FaGithub, name: "GitHub" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiRender, name: "Render" },
  { Icon: SiLeetcode, name: "LeetCode" },
];

// Generate unique positions ensuring icons don't overlap too much
const generateUniquePositions = (count) => {
  const positions = [];
  const minDistance = 15; // minimum percentage distance between icons
  
  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let placed = false;
    
    while (!placed && attempts < 50) {
      const newPos = {
        left: Math.random() * 85 + 7.5, // 7.5% to 92.5%
        top: Math.random() * 85 + 7.5,
        size: Math.floor(Math.random() * 35) + 25, // size between 25-60
        duration: Math.random() * 12 + 18, // 18s to 30s
        delay: Math.random() * 6, // stagger animation
        rotateDirection: Math.random() > 0.5 ? 1 : -1,
        xOffset: Math.random() * 30 + 15, // for varied movement
        yOffset: Math.random() * 30 + 15,
      };
      
      // Check distance from existing positions
      let tooClose = false;
      for (const pos of positions) {
        const dx = Math.abs(pos.left - newPos.left);
        const dy = Math.abs(pos.top - newPos.top);
        if (dx < minDistance && dy < minDistance) {
          tooClose = true;
          break;
        }
      }
      
      if (!tooClose) {
        positions.push(newPos);
        placed = true;
      }
      attempts++;
    }
    
    // If couldn't place without overlap, just place anyway
    if (!placed) {
      positions.push({
        left: Math.random() * 85 + 7.5,
        top: Math.random() * 85 + 7.5,
        size: Math.floor(Math.random() * 35) + 25,
        duration: Math.random() * 12 + 18,
        delay: Math.random() * 6,
        rotateDirection: Math.random() > 0.5 ? 1 : -1,
        xOffset: Math.random() * 30 + 15,
        yOffset: Math.random() * 30 + 15,
      });
    }
  }
  
  return positions;
};

const FloatingTechBackground = () => {
  const positions = generateUniquePositions(techIcons.length);
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/95 via-[#0c1222]/90 to-[#0a0f1e]/95" />
      
      {techIcons.map(({ Icon, name }, index) => {
        const {
          left,
          top,
          size,
          duration,
          delay,
        } = positions[index];
        
        // Adjust size based on screen size (will be overridden by CSS for mobile)
        const getResponsiveSize = () => {
          // Base size is set in inline style, but we'll let CSS handle responsiveness
          return size;
        };
        
        // Lighter color variations with reduced opacity for better UI
        const getIconColor = () => {
          const colors = [
            "text-cyan-300/20",   // React, JS - lighter, more transparent
            "text-emerald-300/20", // Node, Express - lighter, more transparent
            "text-amber-300/20",   // MongoDB - lighter, more transparent
            "text-sky-300/20",     // Next.js, TS - lighter, more transparent
            "text-rose-300/20",    // HTML, CSS - lighter, more transparent
            "text-indigo-300/20",  // Tools - lighter, more transparent
            "text-purple-300/20",  // Additional - lighter, more transparent
            "text-teal-300/20",    // Tailwind - lighter, more transparent
          ];
          if (name.includes("React") || name.includes("Next") || name.includes("JS")) return colors[0];
          if (name.includes("Node") || name.includes("Express")) return colors[1];
          if (name.includes("Mongo") || name.includes("Mongoose")) return colors[2];
          if (name.includes("Type") || name.includes("Next")) return colors[3];
          if (name.includes("HTML") || name.includes("CSS")) return colors[4];
          if (name.includes("Git") || name.includes("Postman") || name.includes("LeetCode")) return colors[5];
          return colors[6];
        };
        
        return (
          <Icon
            key={index}
            size={getResponsiveSize()}
            className={`absolute ${getIconColor()} drop-shadow-sm transition-all duration-500 hover:opacity-40 hover:scale-110 responsive-icon`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              animation: `floatTech${index % 3} ${duration}s ease-in-out infinite`,
              filter: "blur(0.3px)",
            }}
            title={name}
          />
        );
      })}
      
      {/* Additional floating particles - lighter with responsive count */}
      <div className="absolute inset-0">
        {typeof window !== 'undefined' && window.innerWidth < 640 ? (
          // Fewer particles on mobile for better performance
          [...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-white/10 rounded-full responsive-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 8 + 4}s infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))
        ) : (
          // More particles on desktop for better visual
          [...Array(40)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-white/10 rounded-full responsive-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 8 + 4}s infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))
        )}
      </div>

      {/* Animation Styles with Responsive Adjustments */}
      <style>{`
        @keyframes floatTech0 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-25px) translateX(12px) rotate(12deg);
          }
          50% {
            transform: translateY(-45px) translateX(25px) rotate(0deg);
          }
          75% {
            transform: translateY(-25px) translateX(12px) rotate(-12deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }
        
        @keyframes floatTech1 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) translateX(-20px) rotate(8deg);
          }
          66% {
            transform: translateY(-35px) translateX(-10px) rotate(-8deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }
        
        @keyframes floatTech2 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          20% {
            transform: translateY(-30px) translateX(-15px) rotate(15deg);
          }
          40% {
            transform: translateY(-50px) translateX(0px) rotate(0deg);
          }
          60% {
            transform: translateY(-30px) translateX(15px) rotate(-15deg);
          }
          80% {
            transform: translateY(-10px) translateX(8px) rotate(-5deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.5);
          }
        }
        
        /* Responsive Icon Sizes */
        @media (max-width: 640px) {
          .responsive-icon {
            transform: scale(0.6);
          }
          .responsive-particle {
            display: none;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .responsive-icon {
            transform: scale(0.7);
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .responsive-icon {
            transform: scale(0.85);
          }
        }
        
        @media (min-width: 1025px) {
          .responsive-icon {
            transform: scale(1);
          }
        }
        
        /* Animation adjustments for mobile */
        @media (max-width: 768px) {
          @keyframes floatTech0 {
            0% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-15px) translateX(8px) rotate(8deg);
            }
            50% {
              transform: translateY(-25px) translateX(15px) rotate(0deg);
            }
            75% {
              transform: translateY(-15px) translateX(8px) rotate(-8deg);
            }
            100% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
          }
          
          @keyframes floatTech1 {
            0% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-10px) translateX(-12px) rotate(6deg);
            }
            66% {
              transform: translateY(-20px) translateX(-6px) rotate(-6deg);
            }
            100% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
          }
          
          @keyframes floatTech2 {
            0% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            20% {
              transform: translateY(-18px) translateX(-10px) rotate(10deg);
            }
            40% {
              transform: translateY(-30px) translateX(0px) rotate(0deg);
            }
            60% {
              transform: translateY(-18px) translateX(10px) rotate(-10deg);
            }
            80% {
              transform: translateY(-6px) translateX(5px) rotate(-3deg);
            }
            100% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingTechBackground;