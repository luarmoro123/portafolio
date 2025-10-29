import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonCustom from '../../UI/ButtonCustom/buttonCuston';
import type { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const { t } = useTranslation();
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="group relative bg-[#0a0a0a]/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
            style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
        >
            {/* Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                {!imageError && project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl opacity-20">💻</div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400 text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    {project.liveUrl && (
                        <ButtonCustom href={project.liveUrl} variant="primary">
                            {t('projects.viewDemo')}
                        </ButtonCustom>
                    )}
                    {project.githubUrl && (
                        <ButtonCustom href={project.githubUrl} variant="secondary">
                            GitHub
                        </ButtonCustom>
                    )}
                </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
};

export default ProjectCard;
