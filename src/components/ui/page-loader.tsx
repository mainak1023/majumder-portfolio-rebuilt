import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 flex items-center justify-center">
      <div className="text-center">
        <div 
          className="radial-progress text-primary mb-4" 
          style={{ "--value": progress } as React.CSSProperties}
          aria-valuenow={progress} 
          role="progressbar"
        >
          {progress}%
        </div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
