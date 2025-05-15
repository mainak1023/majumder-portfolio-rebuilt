
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const technologies = [
    { name: 'PHP', category: 'language' },
    { name: 'Laravel', category: 'framework' },
    { name: 'JavaScript', category: 'language' },
    { name: 'React.js', category: 'framework' },
    { name: 'Node.js', category: 'runtime' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Express.js', category: 'framework' },
    { name: 'Git', category: 'tool' },
    { name: 'Docker', category: 'tool' },
    { name: 'MySQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Redis', category: 'database' },
    { name: 'GraphQL', category: 'api' },
    { name: 'REST', category: 'api' },
    { name: 'Tailwind', category: 'css' }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className={`text-xs font-medium px-2 py-1 rounded-full ${getTagStyle(tech.category)}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const getTagStyle = (category: string): string => {
  const styles: {[key: string]: string} = {
    'language': 'bg-blue-100 text-blue-800',
    'framework': 'bg-green-100 text-green-800',
    'runtime': 'bg-yellow-100 text-yellow-800',
    'tool': 'bg-purple-100 text-purple-800',
    'database': 'bg-red-100 text-red-800',
    'api': 'bg-indigo-100 text-indigo-800',
    'css': 'bg-pink-100 text-pink-800',
  };
  
  return styles[category] || 'bg-gray-100 text-gray-800';
};

export default TechStack;
