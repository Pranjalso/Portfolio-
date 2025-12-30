import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

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

const projects = [
  {
    imgSrc: Restro,
    title: "Grocery MERN stack App",
    description: "Full-stack grocery application using MERN stack.",
    githubLink: "https://github.com/Pranjalso/Grocery-App-MERN",
  },
  {
    imgSrc: Studio,
    title: "Duo Studio",
    description: "Creative studio website clone with premium UI.",
    githubLink: "https://github.com/Pranjalso/Duo-studio-website-clone",
  },
  {
    imgSrc: Ecom,
    title: "E-Commerce",
    description: "Responsive clothing e-commerce website.",
    githubLink: "https://github.com/Pranjalso/Ecommerce-clothes-website",
  },
  {
    imgSrc: Food,
    title: "Restaurant App",
    description: "Food ordering UI with modern design.",
    githubLink: "https://github.com/Pranjalso/Restro-food/tree/master",
  },
  {
    imgSrc: Lazarave,
    title: "Lazarev",
    description: "High-end animated website clone.",
    githubLink: "https://github.com/Pranjalso/Lazarev-Website/tree/master",
  },
  {
    imgSrc: Sidcup,
    title: "Sidcup Family Golf",
    description: "Smooth scrolling animated website.",
    githubLink: "https://github.com/Pranjalso/Sidcup-Website",
  },
  {
    imgSrc: Sundown,
    title: "Sundown Studio",
    description: "Minimal & elegant landing page clone.",
    githubLink: "https://github.com/Pranjalso/Sundown-website-",
  },
  {
    imgSrc: Coca,
    title: "Coca-Cola",
    description: "Product landing page clone.",
    githubLink: "https://github.com/Pranjalso/Coco-cola-Landing-page",
  },
  {
    imgSrc: Interior,
    title: "Interior Design",
    description: "Interior website with clean UI.",
    githubLink: "https://github.com/Pranjalso/Interior-Website-Clone",
  },
  {
    imgSrc: Magma,
    title: "About Day",
    description: "Modern animated landing page with smooth interactions.",
    githubLink: "https://github.com/Pranjalso/Magma-Website-/tree/master",
  },
];

const ProjectSection = () => {
  const scrollRef = useRef(null);

  const hScrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 340;
  };

  const hScrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 340;
  };

  return (
    <div className="mb-20 lg:mb-36 relative">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-8 lg:mb-12 font-bold">
        My Projects
      </h1>

      {/* PROJECTS */}
      <div
        ref={scrollRef}
        className="
          grid grid-cols-1 sm:grid-cols-2 gap-6
          md:flex md:overflow-x-auto md:gap-8
          scroll-smooth px-4 lg:px-0
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      {/* ARROWS */}
      <div className="flex justify-center items-center gap-4 mt-6 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-2xl lg:text-3xl cursor-pointer text-yellow-500 hidden md:block"
        />
        <h2 className="gradient-text font-mono text-lg uppercase">
          Slide for more
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-2xl lg:text-3xl cursor-pointer text-yellow-500 hidden md:block"
        />
      </div>

      {/* INLINE STYLE FOR SCROLLBAR */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectSection;
