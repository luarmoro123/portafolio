import React, { useState } from "react";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

// ======== TYPES ========
export interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    skills: string[];
    logo?: string;
}

interface CertificationCardProps {
    cert: Certification;
    index: number;
}

// ======== COMPONENT ========
const CertificationCard: React.FC<CertificationCardProps> = ({ cert, index }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="group relative bg-[#0a0a0a]/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
            style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
        >
            {/* Header con logo o icono */}
            <div className="relative h-32 sm:h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
                {!imageError && cert.logo ? (
                    <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-500 group-hover:scale-110"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <Award className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400/50 transition-transform duration-500 group-hover:scale-110" />
                )}

                {/* Badge de verificación */}
                <div className="absolute top-3 right-3 bg-green-500/20 border border-green-500/50 rounded-full p-1.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <p className="text-cyan-400 text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wider">
                    {cert.issuer}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                </div>

                {cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400 text-xs font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}

                {cert.credentialId && (
                    <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-xs text-gray-400 mb-1">ID de Credencial</p>
                        <p className="text-xs text-white font-mono break-all">
                            {cert.credentialId}
                        </p>
                    </div>
                )}

                {cert.credentialUrl && (
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 text-sm"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver Certificado</span>
                    </a>
                )}
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
};

export default CertificationCard;
