// ProjectSection.jsx
import React, { useRef, useState, useEffect } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { FaProjectDiagram, FaGripfire } from "react-icons/fa";

// Import Images - FIXED CASING to match your actual files
import Food from "../assets/Food.jpeg";
import Magma from "../assets/Magma.jpeg";
import Ecom from "../assets/Ecom.jpeg";
import Restro from "../assets/Restro.jpeg";
import Lazarave from "../assets/Lazarave.jpeg";
import Sidcup from "../assets/Sidcup.jpeg";
import Studio from "../assets/Studio.jpeg";
import Sundown from "../assets/Sundown.jpeg";
import Coca from "../assets/Coca.jpeg";
import Interior from "../assets/Interior.jpeg";
import smartDini from "../assets/smartDini.png";
import shivGanga from "../assets/shivGanga.png";
import kaumudi from "../assets/Kaumudi.png";
import SnakeLadder from "../assets/SnakeLadder.png";
import TicTacToe from "../assets/TicTacToe.png";

import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    imgSrc: Restro,
    title: "Grocery MERN App",
    description: "Full-stack grocery application with cart management, order processing, and admin panel using MERN stack.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    githubLink: "https://github.com/Pranjalso/Grocery-App-MERN",
    liveLink: "https://grocery-app-mern-frontend.vercel.app/",
  },
  {
    imgSrc: smartDini,
    title: "Smart Dini App",
    description: "Multi-restaurant platform with role-based access control (Super Admin & Admin).",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Express", "JWT"],
    githubLink: "https://github.com/Pranjalso/SmartDini-Backend",
    liveLink: "https://smart-dini-backend.vercel.app/",
  },
  {
    imgSrc: shivGanga,
    title: "Shiv Ganga Hotel Website",
    description: "Responsive hotel website with modern design, smooth scrolling, and interactive UI elements.",
    techStack: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
    githubLink: "https://github.com/Pranjalso/Shiv-Ganga-Graphura",
    liveLink: "https://www.hotelshivganga.in/",
  },
  {
    imgSrc: kaumudi,
    title: "Kaumudi Sanskrit Academy Website",
    description: "Educational website for Sanskrit academy with course listings, enrollment system, and admin dashboard.",
    techStack: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
    githubLink: "https://github.com/Pranjalso/Kaumudi-Sankrit-Academy-Website",
    liveLink: "https://kaumudi-academy.vercel.app/",
  },
  {
    imgSrc: SnakeLadder,
    title: "Snake & Ladder Game",
    description: "Classic board game with modern UI and smooth animations.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/Pranjalso/Snake-Ladder-Game-with-MultiPlayer",
    liveLink: "https://snake-ladder-game-with-multi-player.vercel.app/",
  },
  {
    imgSrc: TicTacToe,
    title: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game with modern UI and smooth animations.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/Pranjalso/Tic-Tac-Toe-with-framer-motion",
    liveLink: "https://tic-tac-toe-game-7laq.onrender.com/",
  },
  {
    imgSrc: Ecom,
    title: "E-Commerce",
    description: "Responsive clothing e-commerce website with product filtering and cart functionality.",
    techStack: ["React", "Tailwind CSS", "Redux"],
    githubLink: "https://github.com/Pranjalso/Ecommerce-clothes-website",
    liveLink: "https://ecommerce-clothes-website.onrender.com/",
  },
  {
    imgSrc: Studio,
    title: "Duo Studio",
    description: "Creative studio website clone with premium UI animations and smooth scrolling effects.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubLink: "https://github.com/Pranjalso/Duo-studio-website-clone",
    liveLink: null,
  },
  {
    imgSrc: Food,
    title: "Restaurant App",
    description: "Food ordering UI with modern design and interactive menu browsing.",
    techStack: ["React", "CSS3", "Framer Motion"],
    githubLink: "https://github.com/Pranjalso/Restro-food/tree/master",
    liveLink: null,
  },
  {
    imgSrc: Lazarave,
    title: "Lazarev",
    description: "High-end animated website clone with smooth cursor effects and parallax scrolling.",
    techStack: ["HTML5", "CSS3", "GSAP", "Locomotive Scroll"],
    githubLink: "https://github.com/Pranjalso/Lazarev-Website/tree/master",
    liveLink: null,
  },
  {
    imgSrc: Sidcup,
    title: "Sidcup Family Golf",
    description: "Smooth scrolling animated website with engaging UI interactions.",
    techStack: ["JavaScript", "GSAP", "ScrollTrigger"],
    githubLink: "https://github.com/Pranjalso/Sidcup-Website",
    liveLink: null,
  },
  {
    imgSrc: Sundown,
    title: "Sundown Studio",
    description: "Minimal & elegant landing page clone with premium typography.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Pranjalso/Sundown-website-",
    liveLink: null,
  },
  {
    imgSrc: Coca,
    title: "Coca-Cola",
    description: "Product landing page clone with brand-centric design.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/Pranjalso/Coco-cola-Landing-page",
    liveLink: null,
  },
  {
    imgSrc: Interior,
    title: "Interior Design",
    description: "Interior design website with clean UI and responsive layout.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/Pranjalso/Interior-Website-Clone",
    liveLink: null,
  },
  {
    imgSrc: Magma,
    title: "About Day",
    description: "Modern animated landing page with smooth interactions and visual storytelling.",
    techStack: ["HTML", "CSS", "GSAP", "JavaScript"],
    githubLink: "https://github.com/Pranjalso/Magma-Website-/tree/master",
    liveLink: null,
  },
];

const ProjectSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => scrollElement.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-rose-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Responsive */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
            <FaProjectDiagram className="text-indigo-400 text-[11px] sm:text-sm" />
            <span className="text-indigo-400 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wider uppercase">My Portfolio</span>
            <FaGripfire className="text-rose-400 text-[11px] sm:text-sm" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm">
            A collection of my best work — from full-stack applications to creative websites
          </p>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full mx-auto mt-3 sm:mt-4" />
        </div>

        {/* Projects Container */}
        <div className="relative">
          {/* Left Arrow - Responsive */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-indigo-500 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <HiArrowSmLeft className="text-lg sm:text-xl md:text-2xl" />
            </button>
          )}

          {/* Projects Scroll Container - Responsive Gap */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-5 md:gap-6 pb-4 sm:pb-5 md:pb-6 scroll-smooth px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, idx) => (
              <div key={idx} className="flex-shrink-0" data-aos="fade-up" data-aos-delay={idx * 50}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Right Arrow - Responsive */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-indigo-500 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <HiArrowSmRight className="text-lg sm:text-xl md:text-2xl" />
            </button>
          )}
        </div>

        {/* Scroll Indicator - Responsive */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
          <div className="flex gap-1 sm:gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600"
              />
            ))}
          </div>
          <span className="text-gray-500 text-[10px] sm:text-xs">← Scroll to explore →</span>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
        
        @media (max-width: 640px) {
          .scroll-smooth {
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;