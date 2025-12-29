import { Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'T-Shirts', href: '#products' },
      { name: 'Posters', href: '#posters' },
      { name: 'Collections', href: '#categories' },
      { name: 'New Arrivals', href: '#' },
      { name: 'Sale', href: '#' },
    ],
    help: [
      { name: 'FAQ', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Sustainability', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Vector Decoration */}
      <svg className="absolute top-0 left-0 w-full h-40 opacity-5" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path d="M0,0 Q720,160 1440,0 L1440,160 L0,160 Z" fill="hsl(var(--primary))" />
      </svg>
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <svg viewBox="0 0 48 48" className="w-12 h-12">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
                <polygon 
                  points="24,2 44,14 44,34 24,46 4,34 4,14" 
                  fill="none" 
                  stroke="url(#footerLogoGradient)" 
                  strokeWidth="2"
                />
                <path 
                  d="M16,12 L16,36 M16,24 L32,12 M16,24 L32,36" 
                  fill="none" 
                  stroke="url(#footerLogoGradient)" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-[0.15em]">
                  <span className="text-foreground">KRAF</span>
                  <span className="gradient-text">COOL</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Streetwear & Art
                </span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Premium streetwear and art prints for those who dare to stand out. Crafted with passion, designed for expression.
            </p>
            
            {/* Newsletter Mini */}
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-muted/50 border-border/50 h-10"
              />
              <Button size="icon" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 h-10 w-10">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              SHOP
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              HELP
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              CONNECT
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  >
                    <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-sm">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="text-foreground">KRAFCOOL</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
