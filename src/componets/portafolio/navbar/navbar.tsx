import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Download } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState("es");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar orientación
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setIsLangOpen(!isLangOpen);

  const changeLanguage = (lng: string) => {
    setCurrentLang(lng);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
  ];

  // Traducciones simuladas
  const translations: any = {
    es: {
      name: "Luis Morales",
      nav: {
        label: "Menú",
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        certifications: "Certificaciones",
        contact: "Contacto",
        cv: "Descargar CV",
        language: "Idioma"
      }
    },
    en: {
      name: "Luis Morales",
      nav: {
        label: "Menu",
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
        cv: "Download CV",
        language: "Language"
      }
    },
    fr: {
      name: "Luis Morales",
      nav: {
        label: "Menu",
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        certifications: "Certifications",
        contact: "Contact",
        cv: "Télécharger CV",
        language: "Langue"
      }
    }
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  const selectedLang = languages.find((lang) => lang.code === currentLang) || languages[0];

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#habilidades", label: t("nav.skills") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#certificaciones", label: t("nav.certifications") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-black/95 backdrop-blur-lg shadow-xl border-b border-cyan-500/20"
            : "bg-gradient-to-b from-black/80 via-[#0a0a0a]/60 to-transparent backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo - Más compacto en landscape */}
            <a
              href="#inicio"
              className="relative flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl lg:text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg px-1.5 sm:px-2 py-1 group flex-shrink-0"
            >
              <span className="text-white transition-colors duration-300 group-hover:text-cyan-300">
                {t("name")}
              </span>
              <span className="text-cyan-400 transition-all duration-300 group-hover:text-cyan-300 group-hover:scale-110">
                Dev
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-3/4"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLangMenu}
                  className="flex items-center gap-1.5 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-gray-300 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Globe className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span className="uppercase">{selectedLang.code}</span>
                  <svg
                    className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLangOpen && (
                  <>
                    {/* Overlay para cerrar */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLangOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-36 xl:w-40 bg-[#0a0a0a]/95 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl overflow-hidden z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full px-3 xl:px-4 py-2 xl:py-2.5 text-left text-xs xl:text-sm transition-all duration-200 flex items-center gap-2 ${currentLang === lang.code
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                            }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* CV Button */}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 px-3 xl:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xs xl:text-sm font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span className="hidden xl:inline">{t("nav.cv")}</span>
                  <span className="xl:hidden">CV</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Optimizado para landscape */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed inset-y-0 right-0 w-full sm:w-80 max-w-sm z-50 lg:hidden">
            <nav className="h-full bg-[#0a0a0a]/98 backdrop-blur-lg border-l border-cyan-500/20 shadow-2xl overflow-y-auto">
              {/* Header del menú */}
              <div className="sticky top-0 bg-[#0a0a0a] border-b border-cyan-500/20 px-4 py-3 flex items-center justify-between">
                <span className="text-cyan-400 font-semibold text-sm">
                  {t("nav.label")}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all duration-200"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-3 py-4 space-y-1">
                {/* Navigation Links */}
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                    style={{
                      animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="border-t border-white/10 my-3"></div>

                {/* Mobile Language Selector */}
                <div className="px-2 py-2">
                  <p className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2 px-2">
                    <Globe className="w-3.5 h-3.5" />
                    {t("nav.language")}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-2 py-2 text-xs font-medium rounded-lg transition-all duration-200 flex flex-col items-center gap-1 ${currentLang === lang.code
                            ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                            : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-cyan-400"
                          }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="uppercase">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CV Button */}
                <div className="pt-2">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block mx-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-center text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      {t("nav.cv")}
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Optimización para landscape móvil */
        @media (max-height: 500px) and (orientation: landscape) {
          .h-14 {
            height: 3rem !important;
          }
          .text-lg {
            font-size: 0.95rem !important;
          }
        }
        
        /* Ocultar scrollbar pero mantener funcionalidad */
        nav::-webkit-scrollbar {
          width: 6px;
        }
        nav::-webkit-scrollbar-track {
          background: transparent;
        }
        nav::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 3px;
        }
        nav::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </>
  );
};

export default Navbar;