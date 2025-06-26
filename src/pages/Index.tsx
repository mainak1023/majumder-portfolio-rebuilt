
import React from 'react';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import ThemeSelector from '../components/layout/ThemeSelector';
import Publications from '../components/sections/Publications';
import LiveProjects from '../components/sections/LiveProjects';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <ThemeSelector />
            <Hero />
            <TechStack />
            <Experience />
            <Education />
          </div>
          <div className="md:col-span-2 space-y-6">
            <Publications />
            <LiveProjects />
            <Certifications />
            {/* <Projects /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
