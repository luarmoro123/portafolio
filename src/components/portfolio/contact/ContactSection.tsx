import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import BackgroundEffects from '../../ui/BackgroundEffects';
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "luarmoro123@gmail.com",
            href: "mailto:luarmoro123@gmail.com"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Ubicacion",
            value: "Mexico",
            href: null
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
            href: "https://github.com/luarmoro123",
            label: "GitHub",
            color: "hover:bg-gray-800"
        },
        {
            icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
            href: "https://www.linkedin.com/in/luis-arturo-morales-robles-938630379/",
            label: "LinkedIn",
            color: "hover:bg-blue-600/20"
        }
    ];

    return (
        <section
            id="contacto"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden"
        >
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
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-balance">
                        {t("contact.subtitle")}
                    </p>
                </div>

                {/* Contact Card */}
                <div
                    className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-cyan-500/40 transition-all duration-300"
                    style={{ animation: 'fadeInUp 0.5s ease-out both' }}
                >
                    {/* Contact Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {contactInfo.map((info, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                                    {info.href ? (
                                        <a 
                                            href={info.href}
                                            className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-white text-sm sm:text-base">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="mailto:luarmoro123@gmail.com"
                        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 mb-8"
                    >
                        <Send className="w-5 h-5" />
                        <span>Enviar un mensaje</span>
                    </a>

                    {/* Divider */}
                    <div className="border-t border-white/10 my-8"></div>

                    {/* Social Links */}
                    <div className="text-center">
                        <p className="text-gray-400 text-sm sm:text-base mb-6">
                            {t("contact.follow")}
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 sm:p-4 text-gray-400 hover:text-white rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        Hecho con <span className="text-cyan-400">React</span> + <span className="text-cyan-400">TypeScript</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
