type GlassContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassContainer = ({ children, className = "" }: GlassContainerProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background blobs */}
      <div className="absolute w-64 h-64 bg-blue-300 rounded-full left-[30%] bottom-[-3rem] blur-2xl -z-10 animate-bounce" />
      <div className="absolute w-32 h-32 bg-pink-300 rounded-full right-[5%] top-[25%] blur-2xl -z-10 animate-pulse" />
      <div className="absolute w-28 h-28 bg-orange-300 rounded-full left-[5rem] top-[5rem] blur-2xl -z-10 animate-out" />

      {/* Gradient overlay at the bottom */}
      <div className="absolute w-full h-16 bg-gradient-to-b from-transparent to-background bottom-0 left-0 blur-xl z-10 pointer-events-none" />

      {/* Backdrop blur container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full backdrop-blur-3xl" />
      </div>

      {/* Foreground content */}
      <div className={`relative z-10 w-full h-auto ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default GlassContainer;
