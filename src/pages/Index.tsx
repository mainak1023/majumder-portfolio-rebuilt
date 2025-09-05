
import React, { Suspense } from 'react';
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
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';
import PageLoader from '../components/ui/page-loader';

const Index = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <ThemeSelector />
            <Hero />
            <TechStack />
            <Experience />
            <Education />
            <Resume />
            <AdSection />
          </div>
          <div className="md:col-span-2 space-y-6">
            <Publications />
            <LiveProjects />
            <Certifications />
            {/* <Projects /> */}
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Suspense>
  );
};

export default Index;
