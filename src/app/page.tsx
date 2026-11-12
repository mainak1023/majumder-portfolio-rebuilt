"use client";

import React, { Suspense } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import Experience from '../components/sections/Experience';
import ThemeSelector from '../components/layout/ThemeSelector';
import Publications from '../components/sections/Publications';
import LiveProjects from '../components/sections/LiveProjects';
import Education from '../components/sections/Education';
import Resume from '../components/sections/Resume';
import AdSection from '../components/sections/AdSection';
import Contact from '../components/sections/Contact';
import Blog from '../components/sections/Blog';
import PageLoader from '../components/ui/page-loader';
import ScrollToTop from '../components/ui/scroll-to-top';

const Index = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <div className="container mx-auto py-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 space-y-4">
            <ThemeSelector />
            <Hero />
            <TechStack />
            <Experience />
            <Education />
            <Resume />
            <AdSection />
          </div>
          <div className="md:col-span-2 space-y-4">
            <Blog />
            <Publications />
            <LiveProjects />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
    </Suspense>
  );
};

export default Index;

