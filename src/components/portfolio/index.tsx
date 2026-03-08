import Navbar from "./navbar/Navbar"
import Hero from "./hero/Hero";
import AboutMe from "./about/AboutMe";
import Skills from "./skills/Skills";
import ProjectsSection from "./projects/ProjectsSection";
import CertificationsSection from "./certifications/CertificationsSection";
import ContactSection from "./contact/ContactSection";



const Portfolio = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>

  );
};

export default Portfolio;
