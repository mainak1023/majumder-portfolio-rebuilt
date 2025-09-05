import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/layout/Footer';
import ThemeSelector from '../components/layout/ThemeSelector';
import Projects from '../components/sections/Projects';
import LiveProjects from '../components/sections/LiveProjects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageLoader from '../components/ui/page-loader';

const ProjectsPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto py-6 px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/">
              <Button variant="ghost" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <ThemeSelector />
          </div>
          
          <Card className="border-0 shadow-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                My Projects
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                A comprehensive showcase of my development work and contributions
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* Projects Content */}
        <div className="space-y-6">
          <LiveProjects showAll={true} />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
    </Suspense>
  );
};

export default ProjectsPage;