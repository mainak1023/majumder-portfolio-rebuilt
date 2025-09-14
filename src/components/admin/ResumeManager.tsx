import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Resume } from '@/types/database';
import { Plus, Edit, Trash2, Save, X, Download, Upload } from 'lucide-react';

export function ResumeManager() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingResume, setEditingResume] = useState<Resume | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    is_current: false,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResumes(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to fetch resumes',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setUploading(true);

    try {
      let fileUrl = '';
      let fileName = '';

      if (selectedFile) {
        fileUrl = await uploadFile(selectedFile);
        fileName = selectedFile.name;
      } else if (editingResume) {
        fileUrl = editingResume.file_url;
        fileName = editingResume.file_name;
      } else {
        throw new Error('Please select a file to upload');
      }

      // If making this resume current, set all others to not current
      if (formData.is_current) {
        await supabase
          .from('resumes')
          .update({ is_current: false })
          .neq('id', editingResume?.id || '');
      }

      const resumeData = {
        title: formData.title,
        file_url: fileUrl,
        file_name: fileName,
        is_current: formData.is_current,
      };

      if (editingResume) {
        const { error } = await supabase
          .from('resumes')
          .update(resumeData)
          .eq('id', editingResume.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Resume updated successfully' });
      } else {
        const { error } = await supabase
          .from('resumes')
          .insert([resumeData]);

        if (error) throw error;
        toast({ title: 'Success', description: 'Resume uploaded successfully' });
      }

      setFormData({ title: '', is_current: false });
      setSelectedFile(null);
      setEditingResume(null);
      setShowForm(false);
      fetchResumes();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setUploading(false);
    }
  };

  const handleEdit = (resume: Resume) => {
    setEditingResume(resume);
    setFormData({
      title: resume.title,
      is_current: resume.is_current,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string, fileUrl: string) => {
    if (!confirm('Are you sure you want to delete this resume?')) return;

    try {
      // Extract filename from URL for deletion
      const urlParts = fileUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];

      // Delete from storage
      await supabase.storage
        .from('resumes')
        .remove([fileName]);

      // Delete from database
      const { error } = await supabase
        .from('resumes')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: 'Success', description: 'Resume deleted successfully' });
      fetchResumes();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to delete resume',
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({ title: '', is_current: false });
    setSelectedFile(null);
    setEditingResume(null);
    setShowForm(false);
  };

  if (isLoading && resumes.length === 0) {
    return <div>Loading resumes...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Resume Management</h2>
          <p className="text-muted-foreground">Upload and manage your resume files</p>
        </div>
        <Button onClick={() => setShowForm(true)} disabled={showForm}>
          <Plus className="h-4 w-4 mr-2" />
          Upload Resume
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingResume ? 'Edit Resume' : 'Upload New Resume'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Software Engineer Resume 2024"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="file">PDF File</Label>
                <Input
                  id="file"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  required={!editingResume}
                />
                {editingResume && (
                  <p className="text-sm text-muted-foreground">
                    Current file: {editingResume.file_name}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_current"
                  checked={formData.is_current}
                  onCheckedChange={(is_current) => setFormData({ ...formData, is_current })}
                />
                <Label htmlFor="is_current">Set as current resume</Label>
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading || uploading}>
                  <Save className="h-4 w-4 mr-2" />
                  {uploading ? 'Uploading...' : isLoading ? 'Saving...' : 'Save'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {resumes.map((resume) => (
          <Card key={resume.id}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2 mb-2">
                    {resume.title}
                    {resume.is_current && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Current
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="mb-2">
                    {resume.file_name}
                  </CardDescription>
                  <a
                    href={resume.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <Download className="h-3 w-3" />
                    Download PDF
                  </a>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(resume)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(resume.id, resume.file_url)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {resumes.length === 0 && !isLoading && (
        <Card>
          <CardContent className="text-center py-8">
            <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No resumes found. Upload your first resume!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}