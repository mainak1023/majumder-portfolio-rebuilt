
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

type Publication = {
  title: string;
  journal: string;
  date: string;
  link: string;
};

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Building Scalable Web Applications with React",
      journal: "Journal of Web Development",
      date: "March 2024",
      link: "https://example.com/publication1"
    },
    {
      title: "Modern Frontend Architecture Patterns",
      journal: "Tech Insights Magazine",
      date: "January 2024",
      link: "https://example.com/publication2"
    }
  ];

  return (
    <section id="publications" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
              <h2 className="text-lg font-medium dark:text-white">Publications</h2>
            </div>
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <div key={index} className="pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{publication.date}</div>
                  <a 
                    href={publication.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-portfolio-primary dark:text-blue-400 hover:underline"
                  >
                    {publication.title}
                  </a>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{publication.journal}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Publications;
