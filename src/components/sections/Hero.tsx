
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 bg-portfolio-background">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-2/3 mt-10 md:mt-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-secondary mb-4">
              Mainak Majumder
            </h1>
            <h2 className="text-xl md:text-2xl text-portfolio-light-text mb-6">
              Software Engineer | Full-Stack Developer | Cloud Architect
            </h2>
            <p className="text-lg text-portfolio-light-text mb-8 leading-relaxed">
              I build accessible, inclusive products and digital experiences for the web.
              Specialized in building robust, scalable applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90 px-6">
                Contact Me
              </Button>
              <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
                View Projects <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-primary to-blue-600 opacity-10"></div>
              <div className="absolute inset-1 rounded-full bg-white"></div>
              <img 
                src="/placeholder.svg" 
                alt="Mainak Majumder" 
                className="absolute inset-2 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
