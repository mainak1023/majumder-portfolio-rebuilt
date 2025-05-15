
import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <div className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-portfolio-secondary">{project.name}</h3>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
        
        <p className="mt-3 text-portfolio-light-text h-24 overflow-hidden">
          {project.description || "No description available"}
        </p>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-1">⭐</span>
              <span className="text-sm text-portfolio-light-text">{project.stars}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">🍴</span>
              <span className="text-sm text-portfolio-light-text">{project.forks}</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <span 
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: getLanguageColor(project.language),
                color: getLabelColor(project.language)
              }}
            >
              {project.language || "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to get color based on programming language
const getLanguageColor = (language: string): string => {
  const colors: {[key: string]: string} = {
    "JavaScript": "#f1e05a20",
    "TypeScript": "#2b748920",
    "Python": "#3572A520",
    "Java": "#b0753120",
    "Go": "#00ADD820",
    "PHP": "#4F5D9520",
    "C#": "#17860020",
    "Ruby": "#70121220",
    "CSS": "#56399320",
    "HTML": "#e34c2620",
    "Swift": "#ffac4520",
    "Kotlin": "#F1825020",
  };
  
  return colors[language] || "#e0e0e0";
};

const getLabelColor = (language: string): string => {
  const colors: {[key: string]: string} = {
    "JavaScript": "#7d741c",
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
  
  return colors[language] || "#333333";
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This is a mock function to simulate fetching projects from GitHub API
    // In a real application, you would fetch data from GitHub API
    const fetchProjects = () => {
      setLoading(true);
      
      // Mock data (you would replace this with actual API call)
      setTimeout(() => {
        const mockProjects = [
          {
            name: "smart-home-dashboard",
            description: "A modern dashboard for smart home devices with real-time monitoring and control features.",
            stars: 124,
            forks: 37,
            language: "TypeScript",
            url: "https://github.com/mainakmajumder/smart-home-dashboard"
          },
          {
            name: "serverless-image-processor",
            description: "Serverless application for processing and optimizing images using cloud functions.",
            stars: 97,
            forks: 23,
            language: "JavaScript",
            url: "https://github.com/mainakmajumder/serverless-image-processor"
          },
          {
            name: "react-data-grid",
            description: "A high-performance React component for rendering and managing large datasets with advanced filtering and sorting.",
            stars: 215,
            forks: 42,
            language: "TypeScript",
            url: "https://github.com/mainakmajumder/react-data-grid"
          },
          {
            name: "microservice-framework",
            description: "A lightweight framework for building scalable microservices with built-in service discovery and load balancing.",
            stars: 183,
            forks: 31,
            language: "Go",
            url: "https://github.com/mainakmajumder/microservice-framework"
          },
          {
            name: "blockchain-explorer",
            description: "A web application for exploring and visualizing blockchain transactions and smart contracts.",
            stars: 76,
            forks: 18,
            language: "JavaScript",
            url: "https://github.com/mainakmajumder/blockchain-explorer"
          },
          {
            name: "ml-recommendation-engine",
            description: "A machine learning-based recommendation engine for personalized content delivery.",
            stars: 132,
            forks: 29,
            language: "Python",
            url: "https://github.com/mainakmajumder/ml-recommendation-engine"
          }
        ];
        
        setProjects(mockProjects);
        setLoading(false);
      }, 1000);
    };
    
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-portfolio-background">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold text-portfolio-secondary">GitHub Projects</h2>
          <a 
            href="https://github.com/mainakmajumder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-primary hover:underline font-medium flex items-center"
          >
            See All <span className="ml-1">→</span>
          </a>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-portfolio-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90">
            <Github size={18} className="mr-2" /> View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
