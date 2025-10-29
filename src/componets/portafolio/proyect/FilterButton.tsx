import React from 'react';
import type { FilterButtonProps } from './types';

const FilterButton: React.FC<FilterButtonProps> = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${active
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
            : 'bg-white/5 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50'
            }`}
    >
        {label}
    </button>
);

export default FilterButton;
