import React from "react";

type SkillCardProps = {
    name: string;
    icon: React.ReactNode;
    color?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, color = "from-cyan-400 to-blue-500" }) => {
    return (
        <li className="group list-none">
            <div
                role="listitem"
                aria-label={name}
                className="relative flex flex-col items-center gap-3 bg-[#0a0a0a]/60 backdrop-blur-sm border border-cyan-500/8 rounded-2xl p-4 sm:p-6 touch-manipulation transition-transform duration-200 active:scale-95 hover:scale-102"
            >
                <div
                    className={`flex items-center justify-center rounded-xl p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${color} text-white transition-transform duration-200 transform group-hover:scale-105`}
                >
                    <div className="w-full h-full flex items-center justify-center text-white">
                        {icon}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm sm:text-base font-semibold text-white leading-tight">
                        {name}
                    </p>
                </div>

                {/* subtle hover glow */}
                <span className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-8 transition-opacity duration-300 -z-10`} />
            </div>
        </li>
    );
};

export default SkillCard;