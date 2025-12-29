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
      {/* Logo */}
      <div className="mb-8 animate-pulse">
        <div className="w-20 h-20 rounded-2xl gradient-border bg-background flex items-center justify-center">
          <span className="font-display text-4xl gradient-text">VX</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-4 font-display text-2xl gradient-text">{progress}%</div>
    </div>
  );
};

export default AnimatedLoader;
