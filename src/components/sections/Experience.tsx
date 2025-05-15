
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

type ExperienceItem = {
  period: string;
  position: string;
  company: string;
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="mb-6 relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400 dark:before:bg-gray-500 last:mb-0">
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.period}</div>
      <div className="font-medium dark:text-white">{item.position}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{item.company}</div>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      period: "September 2023 - Present",
      position: "Senior Software Engineer",
      company: "Tech Innovations Inc."
    },
    {
      period: "July 2019 - August 2023",
      position: "Full-Stack Developer",
      company: "Digital Solutions Ltd."
    }
  ];

  return (
    <section id="experience" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
              <h2 className="text-lg font-medium dark:text-white">Experience</h2>
            </div>
            <div>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} item={exp} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
