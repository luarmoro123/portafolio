export interface Project {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
}

export interface ProjectCardProps {
    project: Project;
    index: number;
}

export interface FilterButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}
