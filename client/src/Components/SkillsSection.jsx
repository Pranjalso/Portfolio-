import React, { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaRocket,
  FaStar,
  FaTrophy,
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
  SiLeetcode,
  SiRedux,
} from "react-icons/si";
import { TbBrandReactNative, TbApi, TbBrandGithub } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { GiSkills, GiStarSwirl } from "react-icons/gi";
import { MdOutlineAnimation } from "react-icons/md";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [counters, setCounters] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Skill Categories
  const categories = [
    { id: "all", name: "All Skills", icon: <GiSkills />, gradient: "from-indigo-500 to-purple-500" },
    { id: "frontend", name: "Frontend", icon: <FaPaintBrush />, gradient: "from-cyan-500 to-blue-500" },
    { id: "backend", name: "Backend", icon: <FaServer />, gradient: "from-emerald-500 to-teal-500" },
    { id: "mobile", name: "Mobile", icon: <FaMobileAlt />, gradient: "from-orange-500 to-red-500" },
    { id: "database", name: "Database", icon: <FaDatabase />, gradient: "from-green-500 to-lime-500" },
    { id: "tools", name: "Tools & More", icon: <FaCode />, gradient: "from-pink-500 to-rose-500" },
  ];

  // All Skills Data
  const skills = [
    // Frontend
    { name: "React.js", category: "frontend", icon: <FaReact />, level: 90, color: "#61DAFB", desc: "UI Library" },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs />, level: 85, color: "#ffffff", desc: "React Framework" },
    { name: "TypeScript", category: "frontend", icon: <SiTypescript />, level: 80, color: "#3178C6", desc: "Typed JavaScript" },
    { name: "JavaScript", category: "frontend", icon: <SiJavascript />, level: 90, color: "#F7DF1E", desc: "Core Language" },
    { name: "HTML5", category: "frontend", icon: <FaHtml5 />, level: 95, color: "#E34F26", desc: "Markup" },
    { name: "CSS3", category: "frontend", icon: <FaCss3Alt />, level: 90, color: "#1572B6", desc: "Styling" },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss />, level: 92, color: "#06B6D4", desc: "Utility CSS" },
    { name: "GSAP", category: "frontend", icon: <SiGreensock />, level: 85, color: "#00C853", desc: "Animations" },
    { name: "Redux", category: "frontend", icon: <SiRedux />, level: 75, color: "#764ABC", desc: "State Management" },
    
    // Backend
    { name: "Node.js", category: "backend", icon: <FaNodeJs />, level: 88, color: "#339933", desc: "Runtime" },
    { name: "Express.js", category: "backend", icon: <SiExpress />, level: 85, color: "#ffffff", desc: "Web Framework" },
    { name: "RESTful APIs", category: "backend", icon: <TbApi />, level: 90, color: "#FF6B6B", desc: "API Design" },
    { name: "JWT Auth", category: "backend", icon: <SiJsonwebtokens />, level: 85, color: "#ffffff", desc: "Security" },
    
    // Mobile
    { name: "React Native", category: "mobile", icon: <TbBrandReactNative />, level: 82, color: "#61DAFB", desc: "Cross-Platform" },
    
    // Database
    { name: "MongoDB", category: "database", icon: <SiMongodb />, level: 88, color: "#47A248", desc: "NoSQL DB" },
    { name: "Mongoose", category: "database", icon: <SiMongoose />, level: 85, color: "#880000", desc: "ODM" },
    
    // Tools & Others
    { name: "Git", category: "tools", icon: <FaGitAlt />, level: 90, color: "#F05032", desc: "Version Control" },
    { name: "GitHub", category: "tools", icon: <FaGithub />, level: 88, color: "#ffffff", desc: "Collaboration" },
    { name: "Postman", category: "tools", icon: <SiPostman />, level: 85, color: "#FF6C37", desc: "API Testing" },
    { name: "DSA", category: "tools", icon: <BiNetworkChart />, level: 80, color: "#4CAF50", desc: "Problem Solving" },
    { name: "LeetCode", category: "tools", icon: <SiLeetcode />, level: 75, color: "#FFA116", desc: "Coding Challenges" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const newCounters = {};
      filteredSkills.forEach(skill => {
        let current = 0;
        const interval = setInterval(() => {
          if (current < skill.level) {
            current += Math.ceil(skill.level / 40);
            newCounters[skill.name] = Math.min(current, skill.level);
            setCounters({ ...newCounters });
          } else {
            clearInterval(interval);
          }
        }, 20);
        return () => clearInterval(interval);
      });
    }
  }, [isVisible, activeCategory]);

  const getCategoryColor = (category) => {
    const colors = {
      frontend: "from-cyan-500 to-blue-500",
      backend: "from-emerald-500 to-teal-500",
      mobile: "from-orange-500 to-red-500",
      database: "from-green-500 to-lime-500",
      tools: "from-pink-500 to-rose-500",
    };
    return colors[category] || "from-indigo-500 to-purple-500";
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      {/* Animated Background - Responsive Sizing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl sm:blur-3xl animate-pulse"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${
                i === 0 ? "rgba(99,102,241,0.08)" : i === 1 ? "rgba(236,72,153,0.06)" : "rgba(6,182,212,0.04)"
              }, transparent)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDuration: `${8 + i * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - Responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 backdrop-blur-sm border border-indigo-500/20">
            <GiStarSwirl className="text-yellow-400 text-[10px] sm:text-sm animate-spin-slow" />
            <span className="text-indigo-400 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wider uppercase">
              My Arsenal
            </span>
            <FaRocket className="text-rose-400 text-[10px] sm:text-sm animate-bounce" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent animate-gradient">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">
            Technologies and tools I master to build exceptional digital experiences
          </p>
        </div>

        {/* Category Filter - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                activeCategory === category.id
                  ? "text-white"
                  : "bg-gray-800/40 text-gray-400 hover:text-gray-200 border border-gray-700/50"
              }`}
            >
              {activeCategory === category.id && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-90`} />
              )}
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg">{category.icon}</span>
                <span className="text-[10px] sm:text-xs md:text-sm">{category.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}00)` }}
              />
              
              <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-700/50 group-hover:border-transparent transition-all duration-500 group-hover:-translate-y-2">
                
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)`,
                        boxShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}30` : "none"
                      }}
                    >
                      <span style={{ color: skill.color }} className="text-base sm:text-xl md:text-2xl">{skill.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-gray-500 text-[10px] sm:text-xs">{skill.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <FaStar className="text-yellow-500/50 text-[8px] sm:text-xs" />
                    <span className="text-gray-400 text-[9px] sm:text-xs">Expert</span>
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between text-[11px] sm:text-sm">
                    <span className="text-gray-400">Mastery</span>
                    <span 
                      className="font-bold transition-all duration-300 text-xs sm:text-sm"
                      style={{ color: hoveredSkill === skill.name ? skill.color : "#a78bfa" }}
                    >
                      {counters[skill.name] || 0}%
                    </span>
                  </div>
                  <div className="h-2 sm:h-2.5 md:h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out relative"
                      style={{
                        width: `${counters[skill.name] || 0}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                        boxShadow: hoveredSkill === skill.name ? `0 0 8px ${skill.color}` : "none"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-700/30 flex gap-1.5 sm:gap-2">
                  <span className={`text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-${skill.category === "frontend" ? "cyan" : skill.category === "backend" ? "emerald" : skill.category === "mobile" ? "orange" : skill.category === "database" ? "green" : "pink"}-500/10 text-${skill.category === "frontend" ? "cyan" : skill.category === "backend" ? "emerald" : skill.category === "mobile" ? "orange" : skill.category === "database" ? "green" : "pink"}-400`}>
                    {skill.category}
                  </span>
                  <span className="text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-gray-700/30 text-gray-400">
                    {skill.level}+%
                  </span>
                </div>

                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                  hoveredSkill === skill.name ? `border-opacity-100 scale-105` : "border-opacity-0 scale-100"
                }`} style={{ borderColor: hoveredSkill === skill.name ? skill.color : "transparent" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Responsive */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-10 sm:mt-12 md:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-800/50"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            { value: `${skills.length}+`, label: "Technologies", icon: <FaCode />, color: "from-cyan-500 to-blue-500" },
            { value: "100+", label: "DSA Problems", icon: <BiNetworkChart />, color: "from-emerald-500 to-teal-500" },
            { value: "5+", label: "Projects", icon: <FaRocket />, color: "from-orange-500 to-red-500" },
            { value: "9.36", label: "CGPA", icon: <FaTrophy />, color: "from-yellow-500 to-amber-500" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group text-center p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-base sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-0.5 sm:mb-1`}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-[10px] sm:text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;