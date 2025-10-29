import React from "react";
import Navbar from "./navbar/navbar"
import Hero from "./hero/hero";
import AboutMe from "./aboutMe";
import Skills from "./skills/Skills";
import ProjectsSection from "./proyect/ProjectsSection";



const PortaFolio: React.FC = () => {

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectsSection />
    </div>

  );
};

export default PortaFolio;
