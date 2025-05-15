
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36 mb-4">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Mainak Majumder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-1">
            Mainak Majumder
          </h1>
          <p className="text-base text-gray-600 text-center mb-3">
            Sr. Software Engineer | Distributed Systems Specialist | Node.js, Microservices Architecture
          </p>
          
          <div className="mb-6">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              Download Resume
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-2 w-full max-w-md">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Based in:</span>
              <span className="text-sm text-gray-600">India</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">GitHub:</span>
              <a href="https://github.com/mainakmajumder" className="text-sm text-gray-600 hover:text-portfolio-primary">
                mainakmajumder
              </a>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">LinkedIn:</span>
              <a href="https://linkedin.com/in/mainakmajumder" className="text-sm text-gray-600 hover:text-portfolio-primary">
                mainakmajumder
              </a>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Email:</span>
              <a href="mailto:contact@mainakmajumder.live" className="text-sm text-gray-600 hover:text-portfolio-primary">
                contact@mainakmajumder.live
              </a>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Website:</span>
              <a href="https://mainakmajumder.live" className="text-sm text-gray-600 hover:text-portfolio-primary">
                mainakmajumder.live
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
