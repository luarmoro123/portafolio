import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, Download } from "lucide-react";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setIsLangOpen(!isLangOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
  ];

  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#habilidades", label: t("nav.skills") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#certificaciones", label: t("nav.certifications") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-black/95 backdrop-blur-lg shadow-xl border-b border-cyan-500/20"
          : "bg-gradient-to-b from-black/80 via-[#0a0a0a]/60 to-transparent backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            className="relative flex items-center gap-2 text-xl sm:text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg px-2 py-1 group"
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
          <nav className="hidden lg:flex items-center gap-2 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-3/4"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-wrap">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{currentLang.code}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#0a0a0a]/95 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-all duration-200 ${i18n.language === lang.code
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CV Button */}
            <a
              href="/src/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                {t("nav.cv")}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <nav className="mx-2 sm:mx-4 mt-2 bg-[#0a0a0a]/95 backdrop-blur-lg border border-cyan-500/20 rounded-lg shadow-2xl overflow-hidden">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}

            <div className="border-t border-white/10 my-3"></div>

            {/* Mobile Language Selector */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {t("nav.language") || "Idioma"}
              </p>
              <div className="flex gap-2 flex-wrap">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex-1 min-w-[70px] px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${i18n.language === lang.code
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-cyan-400"
                      }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CV Button */}
            <a
              href="/src/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block mx-2 sm:mx-4 mb-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-center font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                {t("nav.cv")}
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
