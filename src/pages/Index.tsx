import { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import PostersSection from '@/components/PostersSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AnimatedLoader from '@/components/AnimatedLoader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <AnimatedLoader onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative min-h-screen ${isLoading ? 'overflow-hidden' : ''}`}>
        <ParticleBackground />
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ProductsSection />
          <PostersSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
