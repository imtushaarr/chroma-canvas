import { Instagram, Twitter, Youtube, Send, MapPin, Phone, Mail, CreditCard, Truck, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'T-Shirts', href: '/products' },
      { name: 'Posters', href: '/products' },
      { name: 'Collections', href: '/#categories' },
      { name: 'New Arrivals', href: '/products' },
      { name: 'Sale', href: '/products' },
    ],
    help: [
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'Track Order', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Classic Vector Decorations */}
      <svg className="absolute top-0 left-0 w-full h-1 opacity-100" viewBox="0 0 1440 4" preserveAspectRatio="none">
        <defs>
          <linearGradient id="footerLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="80%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect width="1440" height="4" fill="url(#footerLineGradient)" />
      </svg>

      {/* Corner Decorative Elements */}
      <svg className="absolute top-8 left-8 w-24 h-24 opacity-10" viewBox="0 0 100 100">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
        <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" />
      </svg>
      <svg className="absolute top-8 right-8 w-24 h-24 opacity-10" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="8 4" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" />
      </svg>

      {/* Trust Badges Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground tracking-wide">FREE SHIPPING</h4>
                <p className="text-sm text-muted-foreground">On orders above ₹2,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground tracking-wide">SECURE PAYMENT</h4>
                <p className="text-sm text-muted-foreground">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground tracking-wide">EASY RETURNS</h4>
                <p className="text-sm text-muted-foreground">15 days return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              {/* Logo */}
              <svg viewBox="0 0 48 48" className="w-14 h-14">
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
                <span className="font-display text-3xl tracking-[0.15em]">
                  <span className="text-foreground">KRAF</span>
                  <span className="gradient-text">COOL</span>
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  STREETWEAR & ART
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Premium streetwear and art prints for those who dare to stand out. Crafted with passion, designed for expression. Born in India, made for the world.
            </p>
            
            {/* Newsletter */}
            <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
              <h4 className="font-display text-xl text-foreground tracking-wide mb-2">JOIN THE CREW</h4>
              <p className="text-sm text-muted-foreground mb-4">Get 10% off your first order + exclusive drops</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email address" 
                  className="bg-background border-border h-11"
                />
                <Button size="icon" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 h-11 w-11">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xl tracking-wider text-foreground mb-6 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              SHOP
            </h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-xl tracking-wider text-foreground mb-6 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12,6 L12,12 L16,14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              HELP
            </h4>
            <ul className="space-y-4">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-xl tracking-wider text-foreground mb-6 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </svg>
              COMPANY
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xl tracking-wider text-foreground mb-6 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent">
                <path d="M12,2 L12,6 M12,18 L12,22 M2,12 L6,12 M18,12 L22,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              CONNECT
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <a href="mailto:hello@krafcool.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@krafcool.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">Mumbai, Maharashtra<br />India - 400001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-full border border-border bg-card/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              {/* Payment Icons */}
              <span className="text-sm text-muted-foreground">We accept:</span>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'UPI', 'PayTM'].map((payment) => (
                  <span key={payment} className="px-3 py-1 text-xs bg-muted rounded text-muted-foreground">
                    {payment}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2025 <span className="text-foreground font-medium">KRAFCOOL</span>. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;