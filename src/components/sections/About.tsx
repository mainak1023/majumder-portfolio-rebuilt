
import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-portfolio-secondary">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-lg text-portfolio-light-text mb-6 leading-relaxed">
              Hello! I'm Mainak, a passionate software engineer with experience in building web applications,
              distributed systems, and cloud infrastructure. I enjoy solving complex problems and creating
              efficient, elegant solutions.
            </p>
            <p className="text-lg text-portfolio-light-text mb-6 leading-relaxed">
              Currently focusing on full-stack development with React, TypeScript, Node.js, and cloud services.
              I'm passionate about learning new technologies and applying best practices to create scalable
              and maintainable applications.
            </p>
            <p className="text-lg text-portfolio-light-text mb-6 leading-relaxed">
              When I'm not coding, I enjoy writing technical articles, contributing to open-source projects,
              and keeping up with the latest industry trends.
            </p>

            <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90 mt-4">
                <FileText size={18} className="mr-2" /> Download Resume
              </Button>
            </a>
          </div>

          <div className="bg-portfolio-background p-8 rounded-lg shadow-card">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-secondary">Connect With Me</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Github size={20} className="text-portfolio-secondary" />
                <a
                  href="https://github.com/mainak1023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-primary ml-4 hover:underline"
                >
                  github.com/mainak1023
                </a>
              </div>

              <div className="flex items-center">
                <Linkedin size={20} className="text-portfolio-secondary" />
                <a
                  href="https://www.linkedin.com/in/mainak-majumder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-primary ml-4 hover:underline"
                >
                  linkedin.com/in/mainak-majumder/
                </a>
              </div>

              <div className="flex items-center">
                <Mail size={20} className="text-portfolio-secondary" />
                <a
                  href="mailto:contact@mainakmajumder.live"
                  className="text-portfolio-primary ml-4 hover:underline"
                >
                  contact@mainakmajumder.live
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-secondary">Location</h3>
              <p className="text-portfolio-light-text">Based in India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
