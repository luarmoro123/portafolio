import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonCustom from '../../UI/ButtonCustom/buttonCuston';

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
            className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black pt-16"
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