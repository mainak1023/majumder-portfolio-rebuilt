
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const frontendTech = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', invertDark: true },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }
  ];
  
  const backendTech = [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000', invertDark: true },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20', invertDark: true }
  ];
  
  const devopsTech = [
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invertDark: true },
    { name: 'Github Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' }
  ];
  
  return (
    <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-6">
        <h2 className="text-lg font-medium mb-4 dark:text-white">Tech Stack</h2>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            {frontendTech.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={tech.name}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${tech.invertDark ? 'dark:invert' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {backendTech.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={tech.name}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${tech.invertDark ? 'dark:invert' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">DevOps</h3>
          <div className="flex flex-wrap gap-3">
            {devopsTech.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                title={tech.name}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${tech.invertDark ? 'dark:invert' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStack;

