import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-tag',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          '.hero-title-line',
          { opacity: 0, y: 60, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.15 },
          '-=0.4'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-button',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-stats',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tag */}
          <div className="hero-tag inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border bg-background/50 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">New Collection 2025</span>
          </div>

          {/* Title */}
          <h1 ref={titleRef} className="mb-8">
            <span className="hero-title-line block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wide text-foreground">
              WEAR THE
            </span>
            <span className="hero-title-line block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wide gradient-text">
              FUTURE
            </span>
            <span className="hero-title-line block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wide text-foreground">
              TODAY
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium unisex streetwear and art posters crafted for those who dare to stand out.
            Limited editions. Unlimited expression.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="hero-button group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 text-lg px-8 py-6"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-button gradient-border bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-500 text-lg px-8 py-6"
            >
              View Lookbook
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {[
              { value: '10K+', label: 'Happy Customers' },
              { value: '500+', label: 'Unique Designs' },
              { value: '50+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label} className="hero-stats text-center">
                <div className="text-3xl sm:text-4xl font-display gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle">
        <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
