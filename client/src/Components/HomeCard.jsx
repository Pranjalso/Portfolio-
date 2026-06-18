import React, { useEffect, useRef, useState } from "react";
import myImg from "../assets/personal.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
  FaReact,
  FaNodeJs,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaCalendarAlt,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const HomeCard = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.animation = "floatImage 6s ease-in-out infinite";
    }
  }, []);

  // Professional Stats
  const stats = [
    { value: "5+", label: "Projects", icon: <FaLaptopCode />, color: "from-blue-500 to-cyan-500" },
    { value: "100+", label: "DSA Solved", icon: <FaCode />, color: "from-emerald-500 to-teal-500" },
    { value: "9.36", label: "CGPA", icon: <FaGraduationCap />, color: "from-amber-500 to-orange-500" },
    { value: "3", label: "Internships", icon: <FaBriefcase />, color: "from-rose-500 to-pink-500" },
  ];

  // Info Cards
  const infoCards = [
    { icon: <FaUserTie />, label: "Role", value: "MERN Stack Developer" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Bhopal, India" },
    { icon: <FaCalendarAlt />, label: "Experience", value: "1+ Year" },
    { icon: <FaEnvelope />, label: "Email", value: "pranjalsoni@email.com" },
  ];

  // Tech Stack List
  const techStack = [
    "React.js", "Node.js", "MongoDB", "Express.js", 
    "Next.js", "TypeScript", "Tailwind CSS", "GSAP", 
    "React Native", "JWT", "REST APIs", "Git"
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-3 sm:px-4 py-1.5 rounded-full mb-4">
            <FaStar className="text-indigo-400 text-[10px] sm:text-xs" />
            <span className="text-indigo-400 text-[10px] sm:text-xs font-medium tracking-wider uppercase">Get to Know Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">About Me</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          
          {/* Left Column - Profile Image with Info Cards Below */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:w-2/5 space-y-4 sm:space-y-5"
          >
            {/* Profile Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/40 to-rose-500/40 blur-xl" />
                <div className="absolute -inset-1 rounded-2xl border border-indigo-500/30 animate-spin-slow" />
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                  <img
                    ref={imgRef}
                    src={myImg}
                    alt="Pranjal Soni"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-2xl mx-auto"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full border border-indigo-500/40 shadow-lg whitespace-nowrap">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-gray-300 text-[10px] sm:text-xs font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Below Image */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {infoCards.map((card, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-sm sm:text-base">{card.icon}</div>
                  </div>
                  <div className="overflow-hidden flex-1">
                    <p className="text-gray-500 text-[8px] sm:text-[10px] uppercase tracking-wide">{card.label}</p>
                    <p className="text-gray-300 text-[10px] sm:text-xs font-medium truncate max-w-[70px] sm:max-w-[90px] md:max-w-[100px]">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  className="text-center p-1.5 sm:p-2 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text text-base sm:text-lg mb-0.5 sm:mb-1 flex justify-center`}>
                    <div className="text-sm sm:text-base md:text-lg">{stat.icon}</div>
                  </div>
                  <div className="text-white text-sm sm:text-base font-bold">{stat.value}</div>
                  <div className="text-gray-500 text-[8px] sm:text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="lg:w-3/5 space-y-4 sm:space-y-5"
          >
            {/* Name & Title */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/30">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Pranjal Soni</h3>
              <p className="text-indigo-400 text-sm sm:text-base mt-1 flex items-center gap-2">
                <FaRocket className="text-[10px] sm:text-xs" />
                MERN Stack Developer
              </p>
            </div>

            {/* Bio Section */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/30 space-y-2 sm:space-y-3">
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                I'm a <span className="text-indigo-400 font-medium">MERN Stack Developer</span> passionate about building 
                scalable web applications that solve real-world problems. I specialize in creating 
                clean, efficient, and user-friendly digital experiences.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Currently pursuing my <span className="text-white">B.Tech in Computer Science</span> with a CGPA of 
                <span className="text-amber-400 font-medium"> 9.36</span>. I've completed internships at Graphura India, 
                AstexAI, and TEN Entrepreneur Network, gaining hands-on experience in full-stack development.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                With <span className="text-emerald-400 font-medium">100+ DSA problems</span> solved on LeetCode and expertise 
                in modern web technologies, I'm ready to contribute to impactful projects and grow as a developer.
              </p>
            </div>

            {/* Tech Stack Section */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/30">
              <p className="text-gray-400 text-[10px] sm:text-xs mb-2 sm:mb-3 uppercase tracking-wide">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={tech}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 30}
                    className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <a
                href="#work"
                className="group relative px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg text-white text-xs sm:text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 text-center"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="mailto:pranjalsoni.engineer@gmail.com"
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-transparent border border-gray-600 rounded-lg text-gray-300 text-xs sm:text-sm font-medium transition-all duration-300 hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-0.5 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatImage {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        /* Extra small devices (phones, 480px and down) */
        @media (max-width: 480px) {
          .xs\:flex-row {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeCard;