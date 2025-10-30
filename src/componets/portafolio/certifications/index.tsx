import React from "react";
import { Award } from "lucide-react";
import CertificationCard, { type Certification } from "./certificationCard";
import BackgroundEffects from "../../UI/BackgroundEffects";
import { useTranslation } from "react-i18next";

const CertificationsSection: React.FC = () => {
    const { t } = useTranslation();
    const certifications: Certification[] = [
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco",
            date: "12/7/2024",
            credentialId: "c6a3c2a2-0a31-4e2b-a4ae-525e9bc2fe5b",
            credentialUrl: "https://www.credly.com/earner/earned/badge/c6a3c2a2-0a31-4e2b-a4ae-525e9bc2fe5b",
            skills: ["React Native", "Mobile Development", "JavaScript"],
            logo: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
        },
        {
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            issuer: "Cisco",
            date: "Diciembre 2023",
            credentialId: "65309e3f-3b6d-4865-ba17-f13a4ddc09fa",
            credentialUrl: "https://www.credly.com/earner/earned/badge/65309e3f-3b6d-4865-ba17-f13a4ddc09fa",
            skills: ["Kotlin", "Android", "Mobile Apps"],
            logo: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
        },
        {
            title: "Network Technician Career Path",
            issuer: "Cisco",
            date: "4/27/2025",
            credentialId: "4207f171-28b8-4639-bcd1-8ef1993cf337",
            credentialUrl: "https://www.credly.com/earner/earned/badge/4207f171-28b8-4639-bcd1-8ef1993cf337",
            skills: ["React", "Node.js", "MongoDB"],
            logo: "https://images.credly.com/images/978f88dc-c247-4093-9d39-6efac3651297/image.png",
        },
    ];

    return (
        <section
            id="certificaciones"
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
      `}</style>

            <BackgroundEffects />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <Award className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                            {t("certifications.title")}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        {t("certifications.subtitle")}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {certifications.map((cert, index) => (
                        <CertificationCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
