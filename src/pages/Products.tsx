import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Filter, Grid, LayoutGrid, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import VectorDecorations from '@/components/VectorDecorations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const allProducts = [
  { id: 1, name: 'CYBER PULSE TEE', price: 1499, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', category: 'T-Shirts', isNew: true },
  { id: 2, name: 'NEON DREAMS', price: 1799, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80', category: 'T-Shirts' },
  { id: 3, name: 'VOID WALKER', price: 1299, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80', category: 'T-Shirts', isSale: true },
  { id: 4, name: 'DIGITAL SUNSET', price: 1599, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80', category: 'T-Shirts', isNew: true },
  { id: 5, name: 'URBAN LEGEND', price: 1899, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80', category: 'T-Shirts' },
  { id: 6, name: 'MIDNIGHT RUNNER', price: 1699, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80', category: 'T-Shirts', isSale: true },
  { id: 7, name: 'COSMIC VIBES', price: 2099, image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80', category: 'T-Shirts', isNew: true },
  { id: 8, name: 'RETRO FUTURE', price: 1999, image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&q=80', category: 'T-Shirts' },
  { id: 9, name: 'CYBERPUNK DREAMS', price: 499, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80', category: 'Posters', isNew: true },
  { id: 10, name: 'NEON CITY', price: 599, image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80', category: 'Posters' },
  { id: 11, name: 'ABSTRACT FLOW', price: 449, image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80', category: 'Posters', isSale: true },
  { id: 12, name: 'SPACE ODYSSEY', price: 699, image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80', category: 'Posters' },
];

const categories = ['All', 'T-Shirts', 'Posters'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState(4);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProducts = allProducts
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-item', 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background relative">
      <VectorDecorations />
      <Navbar />
      
      <main className="pt-24 pb-16" ref={sectionRef}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground">Products</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider">
              <span className="text-foreground">ALL</span>{' '}
              <span className="gradient-text">PRODUCTS</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Discover our complete collection of premium streetwear and art prints designed for those who dare to stand out.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8 pb-6 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'bg-gradient-to-r from-primary to-accent' : ''}
                >
                  {cat}
                  {cat !== 'All' && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {allProducts.filter(p => p.category === cat).length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Sort: {sortBy}
                  <ChevronDown className="w-4 h-4" />
                </Button>
                
                {showFilters && (
                  <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl p-2 z-50 min-w-48">
                    {sortOptions.map(option => (
                      <button
                        key={option}
                        className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-muted transition-colors ${sortBy === option ? 'text-primary' : 'text-foreground'}`}
                        onClick={() => { setSortBy(option); setShowFilters(false); }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden md:flex items-center gap-1 border border-border rounded-lg p-1">
                <button 
                  onClick={() => setGridCols(3)}
                  className={`p-2 rounded ${gridCols === 3 ? 'bg-muted' : ''}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setGridCols(4)}
                  className={`p-2 rounded ${gridCols === 4 ? 'bg-muted' : ''}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
          </p>

          {/* Products Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridCols} gap-6`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-16">
            <Button size="lg" variant="outline" className="gradient-border">
              Load More Products
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;