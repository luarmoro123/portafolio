import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <header className="bg-linear-to-b from-black/80 via-[#0a0a0a]/80 to-transparent
    backdrop-blur-md
    border-b border-white/10
    shadow-lg" 
    >
  <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
    <a
      href="#inicio"
      className="text-2xl font-bold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
    >
      {t("name")}
      <span className="text-cyan-400">Dev</span>
    </a>

    {/* Desktop nav */}
    <nav
      id="main-navigation"
      role="navigation"
      aria-label={t("nav.label") || "Navegación principal"}
      className="hidden md:flex items-center gap-8"
    >
      <a href="#inicio" className="px-3 py-2 rounded-md hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.home")}
      </a>
      <a href="#sobre-mi" className="px-3 py-2 rounded-md hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.about")}
      </a>
      <a href="#habilidades" className="px-3 py-2 rounded-md hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.skills")}
      </a>
      <a href="#proyectos" className="px-3 py-2 rounded-md hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.projects")}
      </a>
      <a href="#certificaciones" className="px-3 py-2 rounded-md hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.certifications")}
      </a>
      <a href="#contacto" className="px-3 py-2 rounded-md hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.contact")}
      </a>

      <a
        href="/src/assets/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        {t("nav.cv")}
      </a>

      <div className="flex items-center gap-2">
        <button onClick={() => changeLanguage("es")} className="px-2 py-1 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">ES</button>
        <button onClick={() => changeLanguage("en")} className="px-2 py-1 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">EN</button>
        <button onClick={() => changeLanguage("fr")} className="px-2 py-1 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">FR</button>
      </div>
    </nav>

    {/* Mobile menu button */}
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/5"
        title="Abrir menú"
      >
        {/* simple accessible hamburger */}
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile nav */}
  <nav
    id="mobile-navigation"
    aria-hidden={!isOpen}
    className={`md:hidden absolute right-6 top-full mt-2 w-52 bg-[#0f1720]/90 border border-white/5 rounded-lg shadow-lg transform origin-top-right transition-all duration-200 ease-out ${
      isOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
    }`}
  >
    <div className="flex flex-col p-3 gap-2">
      <a href="#inicio" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.home")}
      </a>
      <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.about")}
      </a>
      <a href="#habilidades" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.skills")}
      </a>
      <a href="#proyectos" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.projects")}
      </a>
      <a href="#certificaciones" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.certifications")}
      </a>
      <a href="#contacto" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {t("nav.contact")}
      </a>

      <a
        href="/src/assets/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsOpen(false)}
        className="mt-1 bg-cyan-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-cyan-600 text-center"
      >
        {t("nav.cv")}
      </a>

      <div className="flex justify-center gap-3 mt-2">
        <button onClick={() => changeLanguage("es")} className="px-3 py-1 rounded-md hover:bg-white/5">ES</button>
        <button onClick={() => changeLanguage("en")} className="px-3 py-1 rounded-md hover:bg-white/5">EN</button>
        <button onClick={() => changeLanguage("fr")} className="px-3 py-1 rounded-md hover:bg-white/5">FR</button>
      </div>
    </div>
  </nav>
</header>
  );
};
export default Navbar;