import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'CYBER PULSE TEE',
    price: 49,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    category: 'T-Shirts',
    isNew: true,
  },
  {
    id: 2,
    name: 'NEON DREAMS',
    price: 55,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80',
    category: 'T-Shirts',
  },
  {
    id: 3,
    name: 'VOID WALKER',
    price: 45,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    category: 'T-Shirts',
    isSale: true,
  },
  {
    id: 4,
    name: 'DIGITAL SUNSET',
    price: 52,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
    category: 'T-Shirts',
    isNew: true,
  },
];

const ProductsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.product-card',
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute top-1/3 right-0 w-1/4 h-64 bg-accent/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="section-title flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Featured</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide mt-2">
              <span className="text-foreground">TRENDING</span>{' '}
              <span className="gradient-text">T-SHIRTS</span>
            </h2>
          </div>
          <Button variant="ghost" className="group text-primary hover:text-primary/80 self-start md:self-auto">
            View All
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
