
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor } from 'lucide-react';

type LiveProject = {
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl?: string;
};

const LiveProjects = () => {
  const projects: LiveProject[] = [
    {
      name: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://mainakmajumder.live",
      repoUrl: "https://github.com/mainakmajumder/portfolio"
    },
    {
      name: "Task Management App",
      description: "A task management application with features like drag-and-drop, filtering, and sorting.",
      technologies: ["React", "Redux", "TypeScript"],
      liveUrl: "https://tasks.example.com"
    }
  ];

  return (
    <section id="live-projects" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Monitor className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
              <h2 className="text-lg font-medium dark:text-white">Live Projects</h2>
            </div>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-medium mb-2 dark:text-white">{project.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      size="sm" 
                      className="bg-portfolio-primary hover:bg-portfolio-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                    
                    {project.repoUrl && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        onClick={() => window.open(project.repoUrl, '_blank')}
                      >
                        Source Code
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LiveProjects;
