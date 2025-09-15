import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  FolderOpen, 
  BookOpen, 
  Award, 
  FileUser,
  Plus,
  BarChart3,
  Users,
  Eye,
  Edit,
  Trash2,
  Menu,
  X
} from 'lucide-react';
import { BlogManager } from './BlogManager';
import { ProjectManager } from './ProjectManager';
import { PublicationManager } from './PublicationManager';
import { CertificationManager } from './CertificationManager';
import { ResumeManager } from './ResumeManager';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileAdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: 'Total Blogs', value: '12', icon: FileText, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Live Projects', value: '8', icon: FolderOpen, color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Publications', value: '5', icon: BookOpen, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Certifications', value: '15', icon: Award, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'resumes', label: 'Resumes', icon: FileUser },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { action: 'Published new blog', item: 'Getting Started with React', time: '2 hours ago', type: 'blog' },
                    { action: 'Updated project', item: 'Portfolio Website', time: '1 day ago', type: 'project' },
                    { action: 'Added certification', item: 'AWS Solutions Architect', time: '3 days ago', type: 'cert' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.item}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {activity.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-900">Quick Actions</h3>
                      <p className="text-sm text-blue-700">Manage your content efficiently</p>
                    </div>
                    <Plus className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => setActiveTab('blogs')}
                      className="bg-white/50 hover:bg-white/80"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      New Blog
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => setActiveTab('projects')}
                      className="bg-white/50 hover:bg-white/80"
                    >
                      <FolderOpen className="h-4 w-4 mr-1" />
                      New Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'blogs':
        return <BlogManager />;
      case 'projects':
        return <ProjectManager />;
      case 'publications':
        return <PublicationManager />;
      case 'certifications':
        return <CertificationManager />;
      case 'resumes':
        return <ResumeManager />;
      default:
        return null;
    }
  };

  const Sidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'h-full' : 'sticky top-4'} space-y-2`}>
      <div className="space-y-1">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className={`w-full justify-start gap-3 ${
              activeTab === item.id 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
            onClick={() => {
              setActiveTab(item.id);
              if (mobile) setSidebarOpen(false);
            }}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Navigation</h2>
            </div>
            <div className="p-4">
              <Sidebar mobile />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 p-6 border-r bg-muted/30">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your portfolio content</p>
          </div>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold capitalize">{activeTab}</h2>
                  <p className="text-muted-foreground mt-1">
                    {activeTab === 'overview' 
                      ? 'Welcome back! Here\'s what\'s happening with your portfolio.' 
                      : `Manage your ${activeTab} content`
                    }
                  </p>
                </div>
                {activeTab !== 'overview' && (
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add New
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden mb-6">
              <h2 className="text-2xl font-bold capitalize">{activeTab}</h2>
              <p className="text-muted-foreground text-sm mt-1">
                {activeTab === 'overview' 
                  ? 'Portfolio overview and quick actions' 
                  : `Manage ${activeTab}`
                }
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}