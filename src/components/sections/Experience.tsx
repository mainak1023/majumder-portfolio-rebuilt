
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

type ExperienceItem = {
  period: string;
  position: string;
  company: string;
  companyUrl?: string;
  description?: string;
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="mb-6 relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400 dark:before:bg-gray-500 last:mb-0">
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.period}</div>
      <div className="font-medium dark:text-white">{item.position}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {item.companyUrl ? (
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-primary dark:text-blue-400 hover:underline"
          >
            {item.company}
          </a>
        ) : (
          item.company
        )}
      </div>
      {item.description && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</div>
      )}
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      period: "August 2026 – Current",
      position: "Guest Lecturer – BBA Department",
      company: "St. Xavier's College (Autonomous), Burdwan",
      description: "Delivering lectures and practical learning sessions in business technology, social media, web analytics, and digital applications."
    },
    {
      period: "June 2025 – Current",
      position: "UI/UX Designer & SEO Expert",
      company: "Clustrix Tech Solutions",
      companyUrl: "https://clustrix.tech",
      description: "Leading UI/UX initiatives across client projects, translating business requirements into responsive, search-optimized digital experiences."
    }
  ];

  return (
    <section id="experience">
      <div>
        <Card className="dark:border-gray-700 dark:bg-gray-800">
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

