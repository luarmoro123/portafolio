import React from "react";
import SkillCard from "./SkillCard";

export type Skill = {
    name: string;
    icon: React.ReactNode;
    color?: string;
};

type SkillsGridProps = {
    skills: Skill[];
};

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
    return (
        <ul
            role="list"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        >
            {skills.map((s) => (
                <SkillCard key={s.name} name={s.name} icon={s.icon} color={s.color} />
            ))}
        </ul>
    );
};

export default SkillsGrid;