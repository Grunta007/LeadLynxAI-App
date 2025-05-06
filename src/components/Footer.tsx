import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2C59] text-white py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm opacity-80">© {new Date().getFullYear()} LeadLynx AI. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto:contact.leadlynx@gmail.com" className="text-sm hover:underline transition">
              contact.leadlynx@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;