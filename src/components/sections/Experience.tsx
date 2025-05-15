
import React from 'react';

type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  description: string;
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="mb-12 relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-portfolio-primary before:shadow-md before:shadow-portfolio-primary/30">
      <div className="ml-2 relative before:absolute before:left-[-1.3rem] before:top-6 before:bottom-[-3rem] before:w-0.5 before:bg-gray-200 last:before:hidden">
        <span className="text-sm text-portfolio-light-text font-medium">{item.period}</span>
        <h3 className="text-xl font-bold text-portfolio-secondary mt-1">{item.title}</h3>
        <p className="text-portfolio-primary font-medium mb-3">{item.company}</p>
        <p className="text-portfolio-light-text">{item.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      period: "Jan 2023 - Present",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      description: "Leading the development of scalable microservices architecture. Implemented CI/CD pipelines that reduced deployment time by 40%. Mentoring junior developers and conducting code reviews."
    },
    {
      period: "Mar 2021 - Dec 2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed responsive web applications using React and Node.js. Optimized database queries resulting in 30% faster load times. Collaborated with UX team to implement user-friendly interfaces."
    },
    {
      period: "Jun 2019 - Feb 2021",
      title: "Frontend Engineer",
      company: "WebCraft Technologies",
      description: "Built interactive user interfaces with React and TypeScript. Integrated REST APIs and GraphQL endpoints. Implemented state management solutions using Redux and Context API."
    }
  ];

  const educationItems: ExperienceItem[] = [
    {
      period: "2015 - 2019",
      title: "B.Tech in Computer Science",
      company: "Tech University",
      description: "Specialized in Software Engineering and Distributed Systems. Graduated with honors."
    },
    {
      period: "2022",
      title: "AWS Certified Solutions Architect",
      company: "Amazon Web Services",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-portfolio-secondary">Experience & Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-portfolio-secondary">Work Experience</h3>
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} item={exp} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-portfolio-secondary">Education & Certifications</h3>
            <div className="space-y-2">
              {educationItems.map((edu, index) => (
                <ExperienceCard key={index} item={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
