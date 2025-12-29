const VectorDecorations = () => {
  return (
    <>
      {/* Top Left Corner Decoration */}
      <svg 
        className="fixed top-0 left-0 w-48 h-48 opacity-5 pointer-events-none z-0" 
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="cornerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <path
          d="M0 0 L200 0 L200 50 Q100 50 50 100 Q50 200 0 200 Z"
          fill="none"
          stroke="url(#cornerGradient1)"
          strokeWidth="1"
        />
        <circle cx="30" cy="30" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
        <circle cx="60" cy="15" r="2" fill="hsl(var(--accent))" />
      </svg>

      {/* Top Right Corner Decoration */}
      <svg 
        className="fixed top-0 right-0 w-48 h-48 opacity-5 pointer-events-none z-0" 
        viewBox="0 0 200 200"
      >
        <path
          d="M200 0 L0 0 L0 50 Q100 50 150 100 Q150 200 200 200 Z"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
        />
        <line x1="180" y1="20" x2="140" y2="60" stroke="hsl(var(--accent))" strokeWidth="0.5" />
        <line x1="160" y1="20" x2="120" y2="60" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      </svg>

      {/* Floating Geometric Shapes - Left Side */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 hidden lg:block">
        <svg width="40" height="400" viewBox="0 0 40 400">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="20" y1="0" x2="20" y2="400" stroke="url(#lineGradient)" strokeWidth="1" />
          <circle cx="20" cy="100" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
          <circle cx="20" cy="200" r="3" fill="hsl(var(--accent))" />
          <circle cx="20" cy="300" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Floating Geometric Shapes - Right Side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 hidden lg:block">
        <svg width="60" height="300" viewBox="0 0 60 300">
          <polygon 
            points="30,10 50,40 50,70 30,100 10,70 10,40" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            className="animate-spin-slow"
            style={{ transformOrigin: '30px 55px' }}
          />
          <polygon 
            points="30,120 50,150 50,180 30,210 10,180 10,150" 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth="1"
          />
          <rect 
            x="15" 
            y="230" 
            width="30" 
            height="30" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            transform="rotate(45 30 245)"
          />
        </svg>
      </div>

      {/* Bottom Decorative Wave */}
      <svg 
        className="fixed bottom-0 left-0 right-0 w-full h-24 opacity-5 pointer-events-none z-0"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1"
        />
      </svg>

      {/* Scattered Dots */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-primary animate-pulse" />
        <div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 rounded-full bg-accent" />
        <div className="absolute top-[40%] left-[8%] w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[60%] right-[10%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[75%] left-[20%] w-2 h-2 rounded-full bg-primary" />
        <div className="absolute top-[85%] right-[30%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
    </>
  );
};

export default VectorDecorations;
