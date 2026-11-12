
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
      period: "August 2023 – July 2025",
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. B. C. Roy Engineering College, MAKAUT",
      location: "SGPA: 7.16"
    },
    {
      period: "July 2019 – July 2022",
      degree: "B.Sc. (Honours) in Computer Science",
      institution: "Mankar College, University of Burdwan",
      location: "CGPA: 9.06"
    },
    {
      period: "2019",
      degree: "Higher Secondary Education (10+2)",
      institution: "Budbud Mahakali High School, WBCHSE",
      location: "Percentage: 79%"
    },
    {
      period: "2017",
      degree: "Secondary Education (10th)",
      institution: "Ramkrishna Ashrama Vidya Pitha, WBBSE",
      location: "Percentage: 86%"
    }
  ];

  return (
    <section id="education">
      <div>
        <Card className="dark:border-gray-700 dark:bg-gray-800">
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

