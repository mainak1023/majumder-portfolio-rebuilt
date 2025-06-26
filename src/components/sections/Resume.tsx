
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section id="resume" className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <FileText className="mr-2 text-portfolio-primary dark:text-blue-400" size={20} />
              <h2 className="text-lg font-medium dark:text-white">Resume</h2>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Download my complete resume to learn more about my experience and skills.
              </p>
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <a 
                  href="/path-to-your-resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Download className="mr-2" size={16} />
                  Download Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
