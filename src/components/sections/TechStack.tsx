
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const frontendTech = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'];
  const backendTech = ['Node.js', 'Express', 'Python', 'Django'];
  const devopsTech = ['Docker', 'AWS', 'CI/CD', 'Git'];
  
  return (
    <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-6">
        <h2 className="text-lg font-medium mb-4 dark:text-white">Tech Stack</h2>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {frontendTech.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {backendTech.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {devopsTech.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStack;
