
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // This header is minimal since the screenshot doesn't show a prominent header
  return (
    <header className="bg-white py-4 hidden">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-medium">
          Portfolio - Mainak
        </Link>
      </div>
    </header>
  );
};

export default Header;
