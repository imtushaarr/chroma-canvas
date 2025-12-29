import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'T-Shirts', href: '#products' },
    { name: 'Posters', href: '#posters' },
    { name: 'Collections', href: '#categories' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/5'
          : 'bg-gradient-to-b from-background/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="nav-item">
            <a href="#" className="flex items-center gap-3 group">
              {/* Logo Mark */}
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                  {/* Outer hexagon */}
                  <polygon 
                    points="24,2 44,14 44,34 24,46 4,34 4,14" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2"
                    className="transition-all duration-500 group-hover:stroke-[3]"
                  />
                  {/* Inner K shape */}
                  <path 
                    d="M16,12 L16,36 M16,24 L32,12 M16,24 L32,36" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:flex flex-col">
                <span className="font-display text-2xl tracking-[0.2em] leading-none">
                  <span className="text-foreground">KRAF</span>
                  <span className="gradient-text">COOL</span>
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Streetwear & Art
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-item relative px-4 py-2 text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="nav-item hidden sm:flex hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="nav-item hidden sm:flex hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="nav-item hidden sm:flex hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="nav-item relative hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-accent to-primary text-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-pulse">
                  {cartCount}
                </span>
              )}
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-primary/10 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[400px] pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300 text-lg font-medium flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300" />
              </a>
            ))}
            <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-border/50">
              <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </nav>
  );
};

export default Navbar;
