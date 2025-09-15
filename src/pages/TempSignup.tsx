import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Navigate } from 'react-router-dom';

const TempSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const { toast } = useToast();

  const createAdminUser = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email: 'mainak1112@gmail.com',
        password: 'Mainak@2369',
        options: {
          data: {
            full_name: 'Mainak'
          }
        }
      });
      
      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        setCreated(true);
        toast({
          title: 'Success',
          description: 'Admin user created successfully! You can now sign in.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create user',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (created) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Setup Admin User</CardTitle>
          <CardDescription>Create your admin account to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value="mainak1112@gmail.com" readOnly className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" value="Mainak@2369" readOnly className="bg-muted" />
            </div>
            <Button onClick={createAdminUser} className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Admin Account'}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              This will create your admin account with the specified credentials.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TempSignup;