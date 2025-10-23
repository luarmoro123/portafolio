import React from "react";

type CategoryCardProps = {
    title: string;
    techs: string[];
};

const CategoryCard: React.FC<CategoryCardProps> = ({ title, techs }) => {
    return (
        <section className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-cyan-500/16 rounded-2xl p-4 sm:p-6">
            <header className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded" />
                <h4 className="text-base sm:text-lg font-bold text-white">{title}</h4>
            </header>

            <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                    <span
                        key={t}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-cyan-500/8 border border-cyan-500/20 text-cyan-300 rounded-md"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default CategoryCard;