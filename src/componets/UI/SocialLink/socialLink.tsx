interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 sm:p-3 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300 active:scale-95"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default SocialLink;