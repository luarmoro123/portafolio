const BackgroundEffects = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary glow - top left */}
            <div 
                className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/8 rounded-full blur-[100px]"
                style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
            />
            {/* Secondary glow - bottom right */}
            <div 
                className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/8 rounded-full blur-[100px]"
                style={{ animation: 'pulse-glow 8s ease-in-out infinite 4s' }}
            />
            {/* Accent glow - center */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-cyan-400/5 rounded-full blur-[80px]"
                style={{ animation: 'pulse-glow 12s ease-in-out infinite 2s' }}
            />
        </div>
    )
}

export default BackgroundEffects
