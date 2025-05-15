
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-secondary font-medium">© {currentYear} Mainak Majumder. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/mainakmajumder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mainakmajumder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@mainakmajumder.live" 
              className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
