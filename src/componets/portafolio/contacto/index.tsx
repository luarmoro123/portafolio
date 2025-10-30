import React from 'react';
import SocialLink from '../../UI/SocialLink/socialLink';
import BackgroundEffects from '../../UI/BackgroundEffects';
import { useTranslation } from "react-i18next";

const ContactSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section
            id="contacto"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden"
        >
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>

            {/* Background */}
            <BackgroundEffects />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                            {t("contact.title")}
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4"></div>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </div>

                {/* Contact Card */}
                <div
                    className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-cyan-500/40 transition-all duration-300"
                    style={{
                        animation: 'fadeInUp 0.5s ease-out both'
                    }}
                >


                    {/* Divider */}
                    <div className="border-t border-white/10 my-8"></div>

                    {/* Social Links */}
                    <div className="text-center">
                        <p className="text-gray-400 text-sm sm:text-base mb-4">
                            {t("contact.follow")}
                        </p>
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
            </div>
        </section>
    );
};

export default ContactSection;