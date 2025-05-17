
import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectsLoading from '@/components/project/ProjectsLoading';
import { fetchProjects } from '@/services/projectService';
import { Project } from '@/types/project';
import { Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch projects. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, [toast]);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <Github className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
                <h2 className="text-lg font-medium dark:text-white">Github Projects</h2>
              </div>
              <a
                href="https://github.com/mainak1023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-blue-400 flex items-center"
              >
                See All
              </a>
            </div>

            {loading ? (
              <ProjectsLoading />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
