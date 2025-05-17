
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/101183982?v=4"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 border-2 border-gray-100 dark:border-gray-700"
          />
          <h1 className="text-xl font-bold dark:text-white">Mainak Majumder</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
          <div className="flex space-x-3 mt-3">
            <a href="https://github.com/mainak1023" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-blue-400">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/mainak-majumder/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.865 0-2.151 1.455-2.151 2.961v5.704h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.841-1.561 3.037 0 3.6 2.001 3.6 4.604v5.59z" />
              </svg>
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
    </Card >
  );
};

export default Hero;
