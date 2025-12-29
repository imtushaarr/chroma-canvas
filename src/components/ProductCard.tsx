import { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ name, price, image, category, isNew, isSale }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="group relative card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                NEW
              </span>
            )}
            {isSale && (
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                SALE
              </span>
            )}
          </div>

          {/* Like button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked ? 'bg-accent text-accent-foreground' : 'bg-background/50 text-foreground hover:bg-accent/20'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>

          {/* Action buttons */}
          <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="gradient-border bg-background/80 backdrop-blur-sm">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <span className="text-xs text-primary font-medium tracking-wider uppercase">{category}</span>
          <h3 className="font-display text-xl text-foreground mt-1 tracking-wide group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-semibold text-foreground">${price}</span>
            {isSale && (
              <span className="text-sm text-muted-foreground line-through">${(price * 1.3).toFixed(0)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
