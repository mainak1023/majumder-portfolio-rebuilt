
import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectsLoading from '@/components/project/ProjectsLoading';
import { fetchProjects } from '@/services/projectService';
import { Project } from '@/types/project';

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
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Github Projects</h2>
          <a 
            href="https://github.com/mainakmajumder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-portfolio-primary flex items-center"
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
      </div>
    </section>
  );
};

export default Projects;
