
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import { Card, CardContent } from '@/components/ui/card';

const ThemeSelector = () => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-medium">Theme</h2>
            <p className="text-sm text-gray-500">Default</p>
          </div>
          <button className="flex items-center text-sm text-gray-600 hover:text-portfolio-primary">
            <span className="mr-1">Change Theme</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <ThemeSelector />
            <Hero />
            <TechStack />
          </div>
          <div className="md:col-span-2 space-y-6">
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
