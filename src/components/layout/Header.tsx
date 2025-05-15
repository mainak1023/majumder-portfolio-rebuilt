
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-30 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="font-bold text-2xl text-portfolio-secondary">
          Mainak
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#about" className="text-portfolio-secondary hover:text-portfolio-primary transition-colors">
            About
          </Link>
          <Link to="#experience" className="text-portfolio-secondary hover:text-portfolio-primary transition-colors">
            Experience
          </Link>
          <Link to="#projects" className="text-portfolio-secondary hover:text-portfolio-primary transition-colors">
            Projects
          </Link>
          <Link to="#contact" className="text-portfolio-secondary hover:text-portfolio-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90">
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;
