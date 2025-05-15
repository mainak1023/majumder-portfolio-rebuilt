
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <p className="text-sm text-gray-500 flex items-center justify-center">
          Made with GitProfile and <span className="text-red-500 mx-1">❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
