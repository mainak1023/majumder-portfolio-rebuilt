
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://github.com/mainakmajumder.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 border-2 border-gray-100 dark:border-gray-700"
          />
          <h1 className="text-xl font-bold dark:text-white">Mainak Majumder</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
          <div className="flex space-x-3 mt-3">
            <a href="https://github.com/mainakmajumder" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-blue-400">
              <Github size={18} />
            </a>
            <a href="https://twitter.com/mainakmajumder" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-blue-400">
              <Twitter size={18} />
            </a>
            <a href="mailto:contact@mainakmajumder.live" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-blue-400">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Hello! I'm Mainak, a software engineer passionate about building elegant solutions.
          </p>
          <div className="flex justify-center gap-2">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md dark:text-gray-300">React</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md dark:text-gray-300">TypeScript</span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md dark:text-gray-300">Node.js</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Hero;
