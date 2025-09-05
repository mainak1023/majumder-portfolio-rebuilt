
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

interface LiveProjectsProps {
  showAll?: boolean;
}

const LiveProjects = ({ showAll = false }: LiveProjectsProps) => {
  const projects: LiveProject[] = [
    {
      name: "Website for Ramkrishna Ashram Vidyapitha, Panagarh",
      description: "A website for Ramkrishna Ashram Vidyapitha, Panagarh, showcasing the school's information and activities.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Django"],
      liveUrl: "https://rkavpanagarh.in",
      repoUrl: "#"
    },
    {
      name: "Website for Dept. Of Computer Science, Mankar College",
      description: "A website for the Department of Computer Science at Mankar College, providing information about the department.",
      technologies: ["React", "Tailwind", "Django"],
      liveUrl: "https://computersciencemancoll.in/",
      repoUrl: "#"
    },
    {
      name: "Website for A Physiotherapy Center, Benachity",
      description: "A website for A Physiotherapy Center, Benachity, providing information about the center's services and facilities.",
      technologies: ["React", "Tailwind", "Django"],
      liveUrl: "https://appliedphysio.in/",
      repoUrl: "#"
    },
    {
      name: "Qubit AI Chatbot",
      description: "Built an intelligent chatbot using React.js for code-related assistance. Integrated Gemini 2.0 Flash model for developer-friendly prompt responses.",
      technologies: ["React", "Tailwind", "google-ai-studio"],
      liveUrl: "https://qubit-ai.mainakmajumder.live/",
      repoUrl: "#"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

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
              {displayedProjects.map((project, index) => (
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
            
            {!showAll && (
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/projects'}
                  className="w-full sm:w-auto"
                >
                  Show More Projects
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LiveProjects;
