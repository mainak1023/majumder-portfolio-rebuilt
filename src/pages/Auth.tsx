import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import PageLoader from '@/components/ui/page-loader';
import { supabase } from '@/integrations/supabase/client';
 
 const Auth = () => {
  const [email, setEmail] = useState('mainak1112@gmail.com');
  const [password, setPassword] = useState('Mainak@2369');
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  
  const { signIn, user, loading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || pageLoading) {
    return <PageLoader />;
  }

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const attempt = async () => {
      const { error } = await signIn(email, password);
      return error as any;
    };

    let error = await attempt();

    if (error) {
      const msg = (error?.message || '').toLowerCase();
      const looksLikeMissingUser =
        msg.includes('invalid login') ||
        msg.includes('invalid_grant') ||
        msg.includes('user') ||
        msg.includes('not found');

      if (looksLikeMissingUser) {
        try {
          const { data, error: fnError } = await supabase.functions.invoke('bootstrap-admin', {
            body: { email, password, full_name: 'Mainak' },
          });

          if (!fnError && data?.ok) {
            error = await attempt();
          } else {
            error = fnError || new Error(data?.error || 'Failed to create admin user');
          }
        } catch (err: any) {
          error = err;
        }
      }
    }

    if (error) {
      toast({
        title: 'Error',
        description: error.message || 'Sign in failed',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Success',
        description: 'Signed in successfully!',
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Sign in to access the admin panel</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-muted"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-muted"
                readOnly
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Admin credentials are pre-filled. Click Sign In to access the dashboard.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;