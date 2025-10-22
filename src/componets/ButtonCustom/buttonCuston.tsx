interface ButtonCustomProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ 
  href, 
  variant = 'primary', 
  children,
  className = ''
}) => {
  const baseStyles = "w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base font-semibold rounded-lg";
  
  const variants = {
    primary: `group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black overflow-hidden hover:shadow-lg hover:shadow-cyan-500/50`,
    secondary: `px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400`
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {variant === 'primary' && (
        <>
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
      {variant === 'secondary' && children}
    </a>
  );
};

export default ButtonCustom;