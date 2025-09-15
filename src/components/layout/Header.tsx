
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Settings, LogOut } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Mainak's Portfolio
        </Link>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Link to="/admin">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
