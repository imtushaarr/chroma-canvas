import { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import CategoriesSection from '@/components/CategoriesSection';
import ProductsSection from '@/components/ProductsSection';
import PostersSection from '@/components/PostersSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AnimatedLoader from '@/components/AnimatedLoader';
import VectorDecorations from '@/components/VectorDecorations';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <AnimatedLoader onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative min-h-screen ${isLoading ? 'overflow-hidden' : ''}`}>
        <ParticleBackground />
        <VectorDecorations />
        <Navbar />
        <main>
          <HeroSlider />
          <CategoriesSection />
          <ProductsSection />
          <PostersSection />
          <FeaturesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
