
import React from 'react';

const SkillPill = ({ skill }: { skill: string }) => {
  return (
    <div className="bg-portfolio-background text-portfolio-secondary px-4 py-2 rounded-full text-sm font-medium">
      {skill}
    </div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-portfolio-secondary">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillPill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'];
  const backendSkills = ['Node.js', 'Express', 'NestJS', 'GraphQL', 'RESTful APIs', 'MongoDB', 'PostgreSQL'];
  const devOpsSkills = ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'GitHub Actions', 'Terraform'];
  const otherSkills = ['System Design', 'Microservices', 'Testing', 'Agile', 'Performance Optimization'];

  return (
    <section id="skills" className="py-20 bg-portfolio-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-portfolio-secondary">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="DevOps & Cloud" skills={devOpsSkills} />
          <SkillCategory title="Others" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
