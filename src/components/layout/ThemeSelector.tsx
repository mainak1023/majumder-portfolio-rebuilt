
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '@/hooks/useTheme';

const ThemeSelector = () => {
  const { theme } = useTheme();
  
  return (
    <Card className="mb-6 dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-medium dark:text-white">Theme</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{theme}</p>
          </div>
          <ThemeToggle />
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeSelector;
