import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonCustom from'../../UI/ButtonCustom/buttonCuston';
import SocialLink from '../../UI/SocialLink/socialLink';

const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const fullText = t("title");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Reinicia la animación cuando cambia el idioma
    useEffect(() => {
        setDisplayedText("");
        setCurrentIndex(0);
    }, [i18n.language]);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black pt-16"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Profile Photo */}
                    <div className="mb-6 sm:mb-8 flex justify-center">
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md md:blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>

                            {/* Photo container */}
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                                <img
                                    src="/profile.jpg"
                                    alt={t("name")}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Greeting */}
                    <div className="mb-4 sm:mb-6">
                        <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
                            👋 {t("heroTitle")}
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 px-2">
                        <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                            {t("name")}
                        </span>
                    </h1>

                    {/* Subtitle with Typing Animation */}
                    <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[4rem] lg:min-h-[5rem] px-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient">
                            {displayedText}
                            <span className="animate-blink">|</span>
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4">
                        {t("heroDesc")}
                    </p>

                   {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                        <ButtonCustom href="#proyectos" variant="primary">
                    {t("nav.projects") || "Ver Proyectos"}
                        </ButtonCustom>
                        <ButtonCustom href="#contacto" variant="secondary">
                    {t("nav.contact") || "Contacto"}
                        </ButtonCustom>
                    </div>
                   {/* Social Links */}
                    <div className="mt-10 sm:mt-12 md:mt-16 flex items-center justify-center gap-4 sm:gap-6">
                    <SocialLink href="https://github.com/luarmoro123" ariaLabel="GitHub">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </SocialLink>
                     <SocialLink href="https://www.linkedin.com/in/luis-arturo-morales-robles-938630379/" ariaLabel="GitHub">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </SocialLink>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#sobre-mi" className="block p-2" aria-label="Scroll down">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
 */}
            <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
        </section>
    );
};

export default Hero;