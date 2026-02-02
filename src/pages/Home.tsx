import React from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const Home = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Features />
      <HowItWorksSection />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;