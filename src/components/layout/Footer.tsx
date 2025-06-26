
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
          &copy; {new Date().getFullYear()} Mainak Majumder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
