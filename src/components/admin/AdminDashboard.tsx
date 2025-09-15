import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { BlogManager } from './BlogManager';
import { ProjectManager } from './ProjectManager';
import { PublicationManager } from './PublicationManager';
import { CertificationManager } from './CertificationManager';
import { ResumeManager } from './ResumeManager';
import { LogOut, User, FileText, Award, Briefcase, Upload, BarChart3, Users, Settings, BookOpen } from 'lucide-react';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to sign out',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-first Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Welcome back, {user?.user_metadata?.full_name || user?.email}
              </p>
            </div>
            <Button onClick={handleSignOut} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          {/* Mobile responsive tabs */}
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-1">
            <TabsTrigger value="overview" className="flex flex-col items-center gap-1 p-2">
              <BarChart3 className="h-4 w-4" />
              <span className="text-xs">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="blogs" className="flex flex-col items-center gap-1 p-2">
              <FileText className="h-4 w-4" />
              <span className="text-xs">Blogs</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex flex-col items-center gap-1 p-2">
              <Briefcase className="h-4 w-4" />
              <span className="text-xs">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex flex-col items-center gap-1 p-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs">Publications</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex flex-col items-center gap-1 p-2">
              <Award className="h-4 w-4" />
              <span className="text-xs">Certs</span>
            </TabsTrigger>
            <TabsTrigger value="resumes" className="flex flex-col items-center gap-1 p-2">
              <Upload className="h-4 w-4" />
              <span className="text-xs">Resume</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Dashboard */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('blogs')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Published articles</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('projects')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Live Projects</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Active projects</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('publications')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Publications</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Research papers</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('certifications')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Certifications</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">Certificates earned</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('blogs')}>
                    <FileText className="mr-2 h-4 w-4" />
                    Create New Blog Post
                  </Button>
                  <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('projects')}>
                    <Briefcase className="mr-2 h-4 w-4" />
                    Add New Project
                  </Button>
                  <Button className="w-full justify-start" variant="outline" onClick={() => setActiveTab('certifications')}>
                    <Award className="mr-2 h-4 w-4" />
                    Add Certification
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm">New blog post published</p>
                      <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-sm">Project updated</p>
                      <span className="text-xs text-muted-foreground ml-auto">1d ago</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <p className="text-sm">New certification added</p>
                      <span className="text-xs text-muted-foreground ml-auto">3d ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blogs">
            <BlogManager />
          </TabsContent>
          
          <TabsContent value="projects">
            <ProjectManager />
          </TabsContent>
          
          <TabsContent value="publications">
            <PublicationManager />
          </TabsContent>
          
          <TabsContent value="certifications">
            <CertificationManager />
          </TabsContent>
          
          <TabsContent value="resumes">
            <ResumeManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}