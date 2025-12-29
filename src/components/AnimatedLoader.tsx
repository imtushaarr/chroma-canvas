import { useEffect, useState } from 'react';
import gsap from 'gsap';

const AnimatedLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      gsap.to('.loader-container', {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        onComplete,
      });
    }
  }, [progress, onComplete]);

  return (
    <div className="loader-container fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Logo Animation */}
      <div className="relative mb-8">
        <svg viewBox="0 0 80 80" className="w-24 h-24">
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          {/* Outer rotating hexagon */}
          <polygon 
            points="40,4 72,22 72,58 40,76 8,58 8,22" 
            fill="none" 
            stroke="url(#loaderGradient)" 
            strokeWidth="2"
            className="animate-spin-slow"
            style={{ transformOrigin: '40px 40px' }}
          />
          {/* Inner static hexagon */}
          <polygon 
            points="40,16 60,28 60,52 40,64 20,52 20,28" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            opacity="0.5"
          />
          {/* K letter */}
          <path 
            d="M28,20 L28,60 M28,40 L52,20 M28,40 L52,60" 
            fill="none" 
            stroke="url(#loaderGradient)" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse" />
      </div>

      {/* Brand Name */}
      <div className="mb-6">
        <span className="font-display text-3xl tracking-[0.3em]">
          <span className="text-foreground">KRAF</span>
          <span className="gradient-text">COOL</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-4 font-display text-xl text-muted-foreground">{progress}%</div>

      {/* Loading Text */}
      <div className="mt-8 text-sm text-muted-foreground/60 tracking-widest uppercase">
        Loading Experience
      </div>
    </div>
  );
};

export default AnimatedLoader;
