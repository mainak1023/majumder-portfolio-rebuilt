
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

type EducationItem = {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  description?: string;
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      period: "2019 - 2022",
      degree: "Bachelor of Computer Science",
      institution: "Mankar College, The University of Burdwan",
      location: "Mankar, India"
    },
    {
      period: "2023 - 2025",
      degree: "Master of Computer Applications",
      institution: "Dr B C Roy Engineering College, MAKAUT",
      location: "Durgapur, India"
    }
  ];

  return (
    <section id="education" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
              <h2 className="text-lg font-medium dark:text-white">Education</h2>
            </div>
            <div>
              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-6 relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400 dark:before:bg-gray-500 last:mb-0"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.period}</div>
                  <div className="font-medium dark:text-white">{item.degree}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{item.institution}</div>
                  {item.location && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.location}</div>
                  )}
                  {item.description && (
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
