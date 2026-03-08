interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}

const SocialLink = ({ href, ariaLabel, children, className = '' }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        p-3 sm:p-4 
        text-gray-400 hover:text-cyan-400 
        bg-white/5 hover:bg-cyan-500/10 
        border border-white/10 hover:border-cyan-500/30
        rounded-xl 
        transition-all duration-300 
        hover:scale-105 active:scale-95
        ${className}
      `}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default SocialLink;
