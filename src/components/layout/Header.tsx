
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Link to="/" className="font-semibold text-lg">
          Mainak's Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;
