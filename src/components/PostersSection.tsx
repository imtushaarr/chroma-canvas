import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const posters = [
  {
    id: 1,
    name: 'COSMIC VOYAGE',
    price: 35,
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80',
    size: 'A2',
  },
  {
    id: 2,
    name: 'URBAN CHAOS',
    price: 40,
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80',
    size: 'A1',
  },
  {
    id: 3,
    name: 'DIGITAL GARDEN',
    price: 38,
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80',
    size: 'A2',
  },
  {
    id: 4,
    name: 'NEON CITY',
    price: 45,
    image: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=600&q=80',
    size: 'A1',
  },
  {
    id: 5,
    name: 'ABSTRACT FLOW',
    price: 42,
    image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&q=80',
    size: 'A3',
  },
  {
    id: 6,
    name: 'RETRO WAVE',
    price: 36,
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&q=80',
    size: 'A2',
  },
];

const PostersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.poster-title',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.poster-title',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.poster-item',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.posters-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="posters" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="poster-title text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Art Collection</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide mt-2">
            <span className="text-foreground">PREMIUM</span>{' '}
            <span className="gradient-text">POSTERS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Museum-quality prints on premium paper. Each piece tells a story.
          </p>
        </div>

        {/* Posters Grid - Masonry-like layout */}
        <div className="posters-grid grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {posters.map((poster, index) => (
            <div
              key={poster.id}
              className={`poster-item group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer card-hover ${
                index === 1 || index === 4 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 1 || index === 4 ? 'aspect-[3/5]' : 'aspect-[4/5]'}`}>
                <img
                  src={poster.image}
                  alt={poster.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="self-end">
                    <button className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">{poster.size}</span>
                    <h3 className="font-display text-xl text-foreground tracking-wide">{poster.name}</h3>
                    <span className="text-lg font-semibold text-foreground">${poster.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/25 transition-all duration-500"
          >
            Explore All Posters
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PostersSection;
