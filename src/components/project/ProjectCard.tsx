
import React from 'react';
import { Github, Star, GitFork } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/types/project';
import { getLanguageColor } from '@/utils/languageColors';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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

export default ProjectCard;
