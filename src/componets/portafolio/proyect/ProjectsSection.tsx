import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BackgroundEffects from '../../UI/BackgroundEffects';
import ProjectCard from './ProjectCard';
import FilterButton from './FilterButton';
import type { Project } from './types';

const ProjectsSection: React.FC = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const projects: Project[] = [
        {
            title: t('projects.items.calculator.title'),
            description: t('projects.items.calculator.description'),
            image:
                '/calculadoraImgCortada.png',
            technologies: ['React Native', 'TypeScript'],
            category: 'mobile',
            githubUrl: 'https://github.com/luarmoro123/calculator-app',
        },
        {
            title: t('projects.items.multiapp.title'),
            description: t('projects.items.multiapp.description'),
            image:
                '/appMultiusos.jpg',
            technologies: ['Kotlin'],
            category: 'mobile',
            githubUrl: 'https://gitlab.com/2024030352/movilapp',
        },
        {
            title: t('projects.items.navigation.title'),
            description: t('projects.items.navigation.description'),
            image:
                '/navigationApp.png',
            technologies: ['React Native', 'TypeScript'],
            category: 'mobile',
            githubUrl: 'https://github.com/luarmoro123/navigation-app',
        },
    ];

    const filters = [
        { key: 'all', label: t('projects.filters.all') },
        //{ key: 'web', label: t('projects.filters.web') },
        { key: 'mobile', label: t('projects.filters.mobile') },
    ];

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section
            id="proyectos"
            className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden"
        >
            <BackgroundEffects />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                            {t('nav.projects')}
                        </span>
                    </h2>

                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                    {filters.map((filter) => (
                        <FilterButton
                            key={filter.key}
                            label={filter.label}
                            active={activeFilter === filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                        />
                    ))}
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">{t('projects.noProjects')}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
