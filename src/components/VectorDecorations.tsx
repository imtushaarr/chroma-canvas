const VectorDecorations = () => {
  return (
    <>
      {/* Top Left Corner Decoration */}
      <svg 
        className="fixed top-0 left-0 w-64 h-64 opacity-10 pointer-events-none z-0" 
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
          strokeWidth="1.5"
        />
        <path
          d="M0 0 L150 0 L150 30 Q80 30 30 80 Q30 150 0 150 Z"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <circle cx="30" cy="30" r="5" fill="hsl(var(--primary))" className="animate-pulse" />
        <circle cx="60" cy="15" r="3" fill="hsl(var(--accent))" />
        <circle cx="15" cy="60" r="2" fill="hsl(var(--primary))" opacity="0.7" />
      </svg>

      {/* Top Right Corner Decoration */}
      <svg 
        className="fixed top-0 right-0 w-64 h-64 opacity-10 pointer-events-none z-0" 
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="cornerGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        <path
          d="M200 0 L0 0 L0 50 Q100 50 150 100 Q150 200 200 200 Z"
          fill="none"
          stroke="url(#cornerGradient2)"
          strokeWidth="1.5"
        />
        <line x1="180" y1="20" x2="140" y2="60" stroke="hsl(var(--accent))" strokeWidth="0.8" />
        <line x1="160" y1="20" x2="120" y2="60" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <line x1="200" y1="40" x2="160" y2="80" stroke="hsl(var(--accent))" strokeWidth="0.3" />
        <circle cx="170" cy="30" r="3" fill="hsl(var(--accent))" className="animate-pulse" />
      </svg>

      {/* Floating Geometric Shapes - Left Side */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none z-0 hidden lg:block">
        <svg width="60" height="500" viewBox="0 0 60 500">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="30" y1="0" x2="30" y2="500" stroke="url(#lineGradient)" strokeWidth="1" />
          <circle cx="30" cy="80" r="6" fill="hsl(var(--primary))" className="animate-pulse" />
          <circle cx="30" cy="170" r="4" fill="hsl(var(--accent))" />
          <circle cx="30" cy="250" r="6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="30" cy="330" r="4" fill="hsl(var(--accent))" />
          <circle cx="30" cy="420" r="6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Connecting lines */}
          <line x1="30" y1="80" x2="50" y2="120" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
          <line x1="30" y1="250" x2="50" y2="210" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.5" />
          <line x1="30" y1="330" x2="10" y2="370" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Floating Geometric Shapes - Right Side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none z-0 hidden lg:block">
        <svg width="80" height="400" viewBox="0 0 80 400">
          {/* Hexagons */}
          <polygon 
            points="40,10 60,25 60,55 40,70 20,55 20,25" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            className="animate-spin-slow"
            style={{ transformOrigin: '40px 40px' }}
          />
          <polygon 
            points="40,100 55,112 55,138 40,150 25,138 25,112" 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth="1"
          />
          
          {/* Diamond */}
          <rect 
            x="25" 
            y="180" 
            width="30" 
            height="30" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            transform="rotate(45 40 195)"
          />
          
          {/* Triangles */}
          <polygon 
            points="40,250 55,280 25,280" 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth="1"
          />
          <polygon 
            points="40,320 55,290 25,290" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="0.5"
            opacity="0.5"
          />
          
          {/* Circle */}
          <circle cx="40" cy="360" r="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5 3" />
        </svg>
      </div>

      {/* Bottom Decorative Wave */}
      <svg 
        className="fixed bottom-0 left-0 right-0 w-full h-32 opacity-10 pointer-events-none z-0"
        viewBox="0 0 1440 120"
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
          d="M0,60 Q360,120 720,60 T1440,60 L1440,120 L0,120 Z"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M0,80 Q360,40 720,80 T1440,80"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          opacity="0.5"
        />
      </svg>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Scattered Dots with Animation */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[8%] left-[12%] w-2 h-2 rounded-full bg-primary animate-pulse" />
        <div className="absolute top-[15%] right-[20%] w-1.5 h-1.5 rounded-full bg-accent" />
        <div className="absolute top-[22%] left-[45%] w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-[35%] left-[6%] w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[45%] right-[8%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-[55%] left-[25%] w-2 h-2 rounded-full bg-primary" />
        <div className="absolute top-[65%] right-[15%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[75%] left-[18%] w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[80%] right-[35%] w-1.5 h-1.5 rounded-full bg-accent" />
        <div className="absolute top-[90%] left-[40%] w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Cross Pattern Elements */}
      <div className="fixed top-[30%] left-[5%] opacity-10 pointer-events-none z-0 hidden md:block">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <line x1="15" y1="0" x2="15" y2="30" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="0" y1="15" x2="30" y2="15" stroke="hsl(var(--primary))" strokeWidth="1" />
        </svg>
      </div>
      <div className="fixed top-[60%] right-[5%] opacity-10 pointer-events-none z-0 hidden md:block">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <line x1="15" y1="0" x2="15" y2="30" stroke="hsl(var(--accent))" strokeWidth="1" />
          <line x1="0" y1="15" x2="30" y2="15" stroke="hsl(var(--accent))" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
};

export default VectorDecorations;