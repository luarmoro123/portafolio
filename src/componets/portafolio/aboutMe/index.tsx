import React from "react";
import { useTranslation } from "react-i18next";
import BackgroundEffects from "../../UI/BackgroundEffects"

const AboutMe: React.FC = () => {
    const { t } = useTranslation();

    const stats = [
        /* { value: "3+", label: t("about.stats.experience") || "Años de Experiencia" }, */
        { value: "5+", label: t("about.stats.projects") || "Proyectos Completados" },
        { value: "5+", label: t("about.stats.technologies") || "Tecnologías" }
    ];

    const highlights = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: t("about.highlights.mobile.title") || "Desarrollo Móvil",
            description: t("about.highlights.mobile.desc") || "Aplicaciones híbridas con React Native"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: t("about.highlights.innovation.title") || "Innovación",
            description: t("about.highlights.innovation.desc") || "Soluciones creativas y eficientes"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: t("about.highlights.performance.title") || "Rendimiento",
            description: t("about.highlights.performance.desc") || "Apps rápidas y optimizadas"
        }
    ];

    return (
        <section
            id="sobre-mi"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden"
        >
            {/* Background Effects */}
            <BackgroundEffects />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                            {t("nav.about") || "Sobre mí"}
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="relative overflow-hidden rounded-2xl">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>

                            {/* Image container */}
                            <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-1 rounded-2xl border border-cyan-500/20">
                                <img
                                    src="/profile.jpg"
                                    alt={t("name")}
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 ">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-3 sm:p-4 text-center hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                        {/* Main Description */}
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                                {t("aboutIntro") || "Soy un estudiante de ingeniería de la información e innovación digital enfocado en el desarrollo de aplicaciones móviles híbridas con React Native"}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                                {t("about.description") || "Mi pasión es crear experiencias de usuario excepcionales y soluciones tecnológicas innovadoras que marquen la diferencia. Me especializo en transformar ideas en aplicaciones funcionales y atractivas."}
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-4 sm:p-5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 group"
                                >
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="p-2 sm:p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                                            {highlight.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-400">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;