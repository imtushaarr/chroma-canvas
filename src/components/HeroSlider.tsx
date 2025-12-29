import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const slides = [
  {
    id: 1,
    title: 'URBAN LEGENDS',
    subtitle: 'New Collection 2025',
    description: 'Bold designs for fearless souls. Limited edition streetwear that speaks volumes.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1920&q=80',
    category: 'T-Shirts',
    price: 'From $45',
    rating: 4.9,
  },
  {
    id: 2,
    title: 'NEON DREAMS',
    subtitle: 'Art Poster Series',
    description: 'Transform your space with museum-quality prints. Cyberpunk meets contemporary art.',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80',
    category: 'Posters',
    price: 'From $35',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'VOID COLLECTION',
    subtitle: 'Exclusive Drop',
    description: 'Step into the void. Premium oversized tees with avant-garde designs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    category: 'T-Shirts',
    price: 'From $55',
    rating: 5.0,
  },
  {
    id: 4,
    title: 'COSMIC VOYAGE',
    subtitle: 'Limited Art Prints',
    description: 'Journey through the cosmos. High-resolution prints on archival paper.',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80',
    category: 'Posters',
    price: 'From $40',
    rating: 4.9,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateSlideContent = useCallback(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.slide-category', 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
    )
    .fromTo('.slide-title', 
      { opacity: 0, y: 50, skewY: 3 }, 
      { opacity: 1, y: 0, skewY: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo('.slide-subtitle', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.slide-description', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo('.slide-meta', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo('.slide-buttons', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      '-=0.2'
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    
    gsap.to('.slide-content', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setCurrentSlide(index);
        setTimeout(() => {
          animateSlideContent();
          setIsAnimating(false);
        }, 100);
      }
    });
  }, [currentSlide, isAnimating, animateSlideContent]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    animateSlideContent();
  }, [animateSlideContent]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isAnimating]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover scale-110"
            />
          </div>
        ))}
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Vector Decorations */}
      <svg className="absolute top-20 right-20 w-64 h-64 opacity-10" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      </svg>
      
      <svg className="absolute bottom-40 right-40 w-32 h-32 opacity-20 animate-spin-slow" viewBox="0 0 100 100">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-3xl slide-content">
            {/* Category Badge */}
            <div className="slide-category inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">{slide.category}</span>
            </div>

            {/* Subtitle */}
            <p className="slide-subtitle text-accent font-medium tracking-widest uppercase mb-4">
              {slide.subtitle}
            </p>

            {/* Title */}
            <h1 className="slide-title font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider mb-6">
              <span className="block text-foreground">{slide.title.split(' ')[0]}</span>
              <span className="block gradient-text">{slide.title.split(' ').slice(1).join(' ')}</span>
            </h1>

            {/* Description */}
            <p className="slide-description text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {slide.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="slide-meta flex items-center gap-2">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-foreground font-semibold">{slide.rating}</span>
                <span className="text-muted-foreground">(2.4k reviews)</span>
              </div>
              <div className="slide-meta text-2xl font-display gradient-text">
                {slide.price}
              </div>
            </div>

            {/* Buttons */}
            <div className="slide-buttons flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 text-lg px-8 py-6"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group gradient-border bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-500 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Lookbook
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-1 rounded-full overflow-hidden transition-all duration-500 ${
                    index === currentSlide ? 'w-16 bg-primary/30' : 'w-8 bg-muted/50 hover:bg-muted'
                  }`}
                >
                  {index === currentSlide && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                      style={{
                        animation: 'slideProgress 6s linear forwards',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Progress Animation */}
      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
