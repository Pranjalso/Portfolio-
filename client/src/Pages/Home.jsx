import React, { useEffect } from "react";
import PortfolioCard from "../Components/PortfolioCard";
import HomeCard from "../Components/HomeCard";
import SkillsSection from "../Components/SkillsSection";
import ProjectSection from "../Components/ProjectSection";
import ContactSection from "../Components/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingTechBackground from "../Components/FloatingTechBackground";
import WorkExperience from "../Components/WorkExperience";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FloatingTechBackground />
      <PortfolioCard />
      <HomeCard />
      <SkillsSection />
      <WorkExperience/>
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;