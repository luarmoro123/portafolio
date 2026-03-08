import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Code2 } from 'lucide-react';
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
                        <Code2 className="w-16 h-16 text-cyan-400/30" />
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
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-sm"
                        >
                            <ExternalLink className="w-4 h-4" />
                            {t('projects.viewDemo')}
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 text-sm font-medium"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    )}
                </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
};

export default ProjectCard;
