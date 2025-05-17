
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

type Certification = {
  period: string;
  title: string;
  issuer: string;
  description?: string;
  url?: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      period: "May 2025",
      title: "Privacy and Security in Online Social Media",
      issuer: "National Programme on Technology Enhanced Learning",
      description: "Certification in privacy and security practices in online social media",
      url: "https://drive.google.com/file/d/18LNaxtNb_S9-qT6plDmuOdkyDoNYvkJw/view"
    },
    {
      period: "March 2025",
      title: "Simple React App from Scratch",
      issuer: "UDEMY",
      description: "Certification in building a simple React application from scratch",
      url: "https://www.udemy.com/certificate/UC-bfbe9d26-3717-4841-b689-ed0f0357cf8d/"
    },
    {
      period: "January 2025",
      title: "Professional Diploma in Project Management",
      issuer: "UDEMY",
      description: "Certification in project management principles and practices",
      url: "https://drive.google.com/file/d/1miAUYJpPK4TKx6HevAhGlil7uJ_KUUx5/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Award className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
              <h2 className="text-lg font-medium dark:text-white">Certifications</h2>
            </div>
            <div>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="mb-6 relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400 dark:before:bg-gray-500 last:mb-0"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{cert.period}</div>
                  <div className="font-medium dark:text-white">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-primary dark:text-blue-400 hover:underline"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      cert.title
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</div>
                  {cert.description && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.description}</div>
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

export default Certifications;
