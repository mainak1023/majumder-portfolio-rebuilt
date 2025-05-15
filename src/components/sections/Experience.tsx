
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type ExperienceItem = {
  period: string;
  position: string;
  company: string;
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="mb-6 relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400">
      <div className="text-xs text-gray-500 mb-1">{item.period}</div>
      <div className="font-medium">{item.position}</div>
      <div className="text-sm text-gray-600">{item.company}</div>
    </div>
  );
};

type EducationItem = {
  period: string;
  degree: string;
  institution: string;
};

const EducationCard = ({ item }: { item: EducationItem }) => {
  return (
    <div className="mb-6 relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-gray-400">
      <div className="text-xs text-gray-500 mb-1">{item.period}</div>
      <div className="font-medium">{item.degree}</div>
      <div className="text-sm text-gray-600">{item.institution}</div>
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

  const educationItems: EducationItem[] = [
    {
      period: "2015 - 2019",
      degree: "Bachelor of Technology",
      institution: "Tech University"
    },
    {
      period: "2012 - 2014",
      degree: "Associate Degree",
      institution: "Community College"
    }
  ];

  const certifications = [
    {
      period: "March 2024",
      title: "AWS Certified Solutions Architect",
      description: "Professional certification in cloud architecture"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Experience</h2>
            <div>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} item={exp} />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Education</h2>
            <div>
              {educationItems.map((edu, index) => (
                <EducationCard key={index} item={edu} />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Certification</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <div className="text-xs text-gray-500 mb-1">{cert.period}</div>
                <div className="font-medium">{cert.title}</div>
                <div className="text-sm text-gray-600">{cert.description}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
