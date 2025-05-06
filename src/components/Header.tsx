import React from 'react';
import { Cat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0F2C59] text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center">
        <Cat className="h-8 w-8 mr-2" />
        <h1 className="text-2xl font-bold tracking-tight">LeadLynx AI</h1>
      </div>
    </header>
  );
};

export default Header;