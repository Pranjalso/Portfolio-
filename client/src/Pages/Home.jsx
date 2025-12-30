import React, { useEffect } from "react";
import PortfolioCard from "../Components/PortfolioCard";
import HomeCard from "../Components/HomeCard";
import AboutCard from "../Components/AboutCard";
import SkillsSection from "../Components/SkillsSection";
import ProjectSection from "../Components/ProjectSection";
import ContactSection from "../Components/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingTechBackground from "../Components/FloatingTechBackground";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="w-[80vw]  mx-auto">
      <FloatingTechBackground/>
      <PortfolioCard />
      <HomeCard />
      <AboutCard />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;