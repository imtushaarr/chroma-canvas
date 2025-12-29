import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Shield, Leaf, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50. Worldwide delivery in 5-7 days.',
    color: 'primary',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'SSL encrypted checkout. Your data is always safe.',
    color: 'accent',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable materials. Carbon neutral shipping.',
    color: 'primary',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day hassle-free returns. No questions asked.',
    color: 'accent',
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.features-container',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="features-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card transition-all duration-500 card-hover"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    feature.color === 'primary'
                      ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-blue'
                      : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:glow-red'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
