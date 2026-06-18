import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const PortfolioCard = () => {
  const [index, setIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change role every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Work", href: "#work", icon: <FaBriefcase /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Navigation Menu Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-black/20 py-2 sm:py-3"
            : "bg-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Pranjal.dev
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-1.5 lg:py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/10 group"
                >
                  <span className="text-indigo-400 text-sm lg:text-base group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="text-xs lg:text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Resume Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="/Pranjal_Soni_Resume.pdf"
                download="Pranjal_Soni_Resume.pdf"
                className="flex items-center gap-2 px-3 lg:px-5 py-1.5 lg:py-2 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full text-white text-xs lg:text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
              >
                <FaDownload className="text-[10px] lg:text-xs" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              {mobileMenuOpen ? <FaTimes size={18} className="sm:w-5 sm:h-5" /> : <FaBars size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-[56px] sm:top-[72px] left-0 w-full bg-gray-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 py-3 sm:py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-1.5 sm:gap-2 px-3 sm:px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-indigo-400 text-sm sm:text-base">{link.icon}</span>
                <span className="font-medium text-sm sm:text-base">{link.name}</span>
              </a>
            ))}
            {/* Resume Button - Mobile */}
            <a
              href="/Pranjal_Soni_Resume.pdf"
              download="Pranjal_Soni_Resume.pdf"
              className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 mt-2 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full text-white text-xs sm:text-sm font-medium justify-center"
            >
              <FaDownload className="text-[10px] sm:text-xs" />
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 pt-16 sm:pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/20 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* LEFT SIDE – Animated Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-white text-center lg:text-left z-10 max-w-2xl px-4 sm:px-0"
        >
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-white/10">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-300 text-[11px] sm:text-sm">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent animate-gradient">
              Pranjal Soni
            </span>
          </h1>

          {/* Animated Role Text with Typing Effect */}
          <div className="h-16 sm:h-20 md:h-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">&lt;</span>
              <span
                key={roles[index]}
                className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text animate-fade-up inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                {roles[index]}
              </span>
              <span className="text-gray-400 animate-pulse text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">/&gt;</span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
            I design and develop optimized web and mobile applications that
            deliver seamless user experiences and real business value. 
            Specializing in <span className="text-indigo-400">MERN Stack</span> and 
            <span className="text-purple-400"> modern web technologies</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8">
            <a
              href="#work"
              className="group relative px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full text-white font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-indigo-500/50"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8">
            <a
              href="https://github.com/Pranjalso"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-rose-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <FaGithub className="text-white text-base sm:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranjalsoni-mernstack"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-rose-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <FaLinkedin className="text-white text-base sm:text-xl" />
            </a>
            <a
              href="https://leetcode.com/u/Pranjalso/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-rose-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <SiLeetcode className="text-white text-base sm:text-xl" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – Portfolio Card */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="relative group px-4 sm:px-0"
        >
          {/* Glow Effect Behind Card */}
          <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-rose-500/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Card */}
          <div className="relative w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[32vw] xl:w-[28vw] backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]">
            
            {/* Decorative Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full" />
            
            {/* Card Header */}
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
                Portfolio<span className="text-white">*</span>
              </h3>
              <div className="flex gap-0.5 sm:gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-3 sm:space-y-4">
              <div className="border-b border-white/20 pb-2 sm:pb-3">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                  Pranjal Soni
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">MERN Stack Developer</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  🚀 <span className="text-indigo-400">5+</span> Projects Completed
                </p>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  💻 <span className="text-purple-400">100+</span> DSA Problems
                </p>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  🎓 <span className="text-rose-400">9.36</span> CGPA
                </p>
              </div>

              {/* Tech Stack Icons */}
              <div className="pt-3 sm:pt-4 border-t border-white/20">
                <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Code Line */}
              <div className="pt-2">
                <p className="text-gray-500 text-[10px] sm:text-xs font-mono">
                  <span className="text-indigo-400">const</span> developer = {"{"}<br />
                  &nbsp;&nbsp;name: <span className="text-green-400">"Pranjal Soni"</span>,<br />
                  &nbsp;&nbsp;passion: <span className="text-yellow-400">"Coding & Creating"</span><br />
                  {"}"};
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          75% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.5s ease-out;
          display: inline-block;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
    </>
  );
};

export default PortfolioCard;