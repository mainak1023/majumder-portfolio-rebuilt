
import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

type Project = {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-start mb-2">
          <Github size={18} className="mr-2 mt-1 text-gray-600" />
          <h3 className="text-lg font-medium">{project.name}</h3>
        </div>
        
        <p className="text-sm text-portfolio-light-text mb-4 h-16 overflow-hidden">
          {project.description || "No description available"}
        </p>
        
        <div className="flex items-center text-xs text-gray-500">
          <div className="flex items-center mr-4">
            <Star size={14} className="mr-1" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center mr-4">
            <GitFork size={14} className="mr-1" />
            <span>{project.forks}</span>
          </div>
          {project.language && (
            <div className="flex items-center ml-auto">
              <span 
                className="w-2.5 h-2.5 rounded-full mr-1.5"
                style={{ backgroundColor: getLanguageColor(project.language) }}
              />
              <span>{project.language}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Function to get color based on programming language
const getLanguageColor = (language: string): string => {
  const colors: {[key: string]: string} = {
    "JavaScript": "#f1e05a",
    "TypeScript": "#2b7489",
    "Python": "#3572A5",
    "Java": "#b07531",
    "Go": "#00ADD8",
    "PHP": "#4F5D95",
    "C#": "#178600",
    "Ruby": "#701212",
    "CSS": "#563993",
    "HTML": "#e34c26",
    "Swift": "#ffac45",
    "Kotlin": "#F18250",
  };
  
  return colors[language] || "#e0e0e0";
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // This is a mock function to simulate fetching projects from GitHub API
    const fetchProjects = () => {
      setLoading(true);
      
      // Mock data (you would replace this with actual API call)
      setTimeout(() => {
        const mockProjects = [
          {
            name: "gitprofile",
            description: "Create and publish a dynamic portfolio by just providing your GitHub username.",
            stars: 1010,
            forks: 141,
            language: "TypeScript",
            url: "https://github.com/mainakmajumder/gitprofile"
          },
          {
            name: "ezfolio",
            description: "Open Source Portfolio/Resume CMS built using Laravel, React and Ant Design.",
            stars: 270,
            forks: 84,
            language: "PHP",
            url: "https://github.com/mainakmajumder/ezfolio"
          },
          {
            name: "reactive-button",
            description: "3D animated react button component with progress bar.",
            stars: 136,
            forks: 21,
            language: "JavaScript",
            url: "https://github.com/mainakmajumder/reactive-button"
          },
          {
            name: "OneClick",
            description: "Navigate to your favorite actions on the websites you love with just one click.",
            stars: 80,
            forks: 19,
            language: "JavaScript",
            url: "https://github.com/mainakmajumder/OneClick"
          },
          {
            name: "reforge",
            description: "An out-of-box UI solution for enterprise applications as a React boilerplate.",
            stars: 64,
            forks: 18,
            language: "TypeScript",
            url: "https://github.com/mainakmajumder/reforge"
          },
          {
            name: "react-laravel",
            description: "A simple crud based laravel app to learn how to use react with laravel.",
            stars: 61,
            forks: 28,
            language: "PHP",
            url: "https://github.com/mainakmajumder/react-laravel"
          },
          {
            name: "reddit-image-fetcher",
            description: "A JavaScript package for fetching reddit images, memes, wallpapers and more.",
            stars: 48,
            forks: 9,
            language: "JavaScript",
            url: "https://github.com/mainakmajumder/reddit-image-fetcher"
          },
          {
            name: "blogys",
            description: "JavaScript client to get recent blog posts from your blogging platforms.",
            stars: 42,
            forks: 9,
            language: "JavaScript",
            url: "https://github.com/mainakmajumder/blogys"
          }
        ];
        
        setProjects(mockProjects);
        setLoading(false);
      }, 1000);
    };
    
    fetchProjects();
  }, []);

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
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-portfolio-primary"></div>
          </div>
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
