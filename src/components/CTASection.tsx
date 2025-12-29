import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.cta-content',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="cta-content max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border bg-background/50 backdrop-blur-sm mb-8">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Join 10K+ subscribers</span>
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide mb-6">
            <span className="text-foreground">GET</span>{' '}
            <span className="gradient-text">20% OFF</span>
            <br />
            <span className="text-foreground">YOUR FIRST ORDER</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive drops, limited editions, and insider access to upcoming releases.
          </p>

          {/* Newsletter form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-14 bg-card/50 border-border backdrop-blur-sm pl-4 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>
            <Button
              size="lg"
              className="h-14 px-8 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 group"
            >
              Subscribe
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust text */}
          <p className="text-sm text-muted-foreground mt-6">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
