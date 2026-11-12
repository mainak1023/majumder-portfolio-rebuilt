
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TechItem {
  name: string;
  icon: string;
  invertDark?: boolean;
}

const TechStack = () => {
  const frontendTech: TechItem[] = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', invertDark: true },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }
  ];
  
  const backendTech: TechItem[] = [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000', invertDark: true },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20', invertDark: true }
  ];
  
  const devopsTech: TechItem[] = [
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Github Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' }
  ];

  const aiTech: TechItem[] = [
    { name: 'Claude', icon: 'https://cdn.simpleicons.org/claude/D97706' },
    { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/000000', invertDark: true },
    { name: 'Google Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
    { name: 'Ollama', icon: 'https://cdn.simpleicons.org/ollama/000000', invertDark: true },
    { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C', invertDark: true },
    { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
    { name: 'v0', icon: 'https://cdn.simpleicons.org/v0/000000', invertDark: true }
  ];
  
  return (
    <Card className="dark:border-gray-700 dark:bg-gray-800">
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
        
        <div className="mb-6">
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

        <div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">AI & Developer Tools</h3>
          <div className="flex flex-wrap gap-3">
            {aiTech.map((tech, index) => (
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

