import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    name: 'GRAPHIC TEES',
    count: 48,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    gradient: 'from-primary/80 to-primary/20',
  },
  {
    id: 2,
    name: 'OVERSIZED',
    count: 36,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80',
    gradient: 'from-accent/80 to-accent/20',
  },
  {
    id: 3,
    name: 'ART PRINTS',
    count: 52,
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80',
    gradient: 'from-primary/80 to-accent/20',
  },
  {
    id: 4,
    name: 'MINIMALIST',
    count: 24,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
    gradient: 'from-accent/80 to-primary/20',
  },
  {
    id: 5,
    name: 'VINTAGE',
    count: 32,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    gradient: 'from-primary/60 to-accent/40',
  },
  {
    id: 6,
    name: 'ABSTRACT',
    count: 28,
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80',
    gradient: 'from-accent/60 to-primary/40',
  },
];

const CategoriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.category-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.category-title',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.category-card',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.categories-scroll',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => scrollEl?.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background Vector */}
      <svg className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 opacity-10" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" transform="rotate(45 50 50)" />
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" transform="rotate(45 50 50)" />
      </svg>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="category-title flex items-end justify-between mb-8">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Browse</span>
            <h2 className="font-display text-4xl sm:text-5xl tracking-wide mt-1">
              <span className="text-foreground">SHOP BY</span>{' '}
              <span className="gradient-text">CATEGORY</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border transition-all duration-300 ${
                canScrollLeft 
                  ? 'border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary' 
                  : 'border-border/50 text-muted-foreground/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border transition-all duration-300 ${
                canScrollRight 
                  ? 'border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary' 
                  : 'border-border/50 text-muted-foreground/30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories Scroll */}
        <div
          ref={scrollRef}
          className="categories-scroll flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card flex-shrink-0 w-72 group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-sm text-foreground/70 font-medium">{category.count} items</span>
                    <h3 className="font-display text-2xl text-foreground tracking-wide mt-1">{category.name}</h3>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center gap-2 text-primary font-medium">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CategoriesSection;
