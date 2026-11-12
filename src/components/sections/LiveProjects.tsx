
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor } from 'lucide-react';

type LiveProject = {
  name: string;
  description: string;
  technologies: string[];
  liveUrl: string;
};

const LiveProjects = () => {
  const projects: LiveProject[] = [
    {
      name: "Mankar College",
      description: "Official institutional web portal for Mankar College, providing comprehensive academic information, departmental resources, notices, and student portals.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design", "SEO"],
      liveUrl: "https://mankarcollege.ac.in"
    },
    {
      name: "St. Xavier's School, Durgapur",
      description: "Premier academic institution website designed for seamless information delivery, admissions, student notices, and campus activities with responsive design.",
      technologies: ["React", "Tailwind CSS", "UI/UX Design", "Responsive Web"],
      liveUrl: "https://sxsdgp.edu.in"
    },
    {
      name: "Astithya – NGO & Social Initiative",
      description: "Digital web platform for Astithya, highlighting community initiatives, welfare programs, impact stories, and social engagement.",
      technologies: ["React", "Tailwind CSS", "SEO Optimization", "Frontend Dev"],
      liveUrl: "https://astithya.org"
    },
    {
      name: "Ramkrishna Ashram Vidyapitha, Panagarh",
      description: "Official institutional web platform showcasing academic curriculum, admissions, and school activities with search-optimized architecture.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "SEO", "Responsive Design"],
      liveUrl: "https://rkavpanagarh.in"
    }
  ];

  return (
    <section id="live-projects">
      <div>
        <Card className="dark:border-gray-700 dark:bg-gray-800">
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
                      Visit Website
                    </Button>
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

